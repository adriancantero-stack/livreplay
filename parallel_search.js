const fs = require('fs');
const file = '/Users/adriancantero/.gemini/antigravity/scratch/livreplay/video/index.html';
let content = fs.readFileSync(file, 'utf8');

const regex = /\/\/ Executa busca sequencial automática com auto-recuperação dinâmica e CORS direto[\s\S]*?async function fetchSearch\(query, sortBy = 'upload_date'\) \{[\s\S]*?throw new Error\('Servidores de busca estão congestionados ou bloqueados no momento\. Tente novamente em alguns segundos\.'\);\s*\}/;

const replacement = `    // Executa busca paralela ultrarrápida usando Invidious, Piped e Scraping simultaneamente
    async function fetchSearch(query, sortBy = 'upload_date') {
      console.log('Iniciando busca paralela (Shotgun Search)...');
      
      const promises = [];
      const controller = new AbortController();
      // Timeout global de 8 segundos para a corrida
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      // 1. Scraping Direto (Alta prioridade, mas às vezes bloqueado por CORS)
      const proxies = [
        { url: 'https://api.allorigins.win/get?url=', encode: true },
        { url: 'https://corsproxy.io/?', encode: false }
      ];
      const targetUrl = \`https://m.youtube.com/results?search_query=\${encodeURIComponent(query)}\`;
      
      for (const proxy of proxies) {
        const proxyUrl = proxy.url + (proxy.encode ? encodeURIComponent(targetUrl) : targetUrl);
        promises.push(
          fetch(proxyUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1' },
            signal: controller.signal
          })
          .then(res => {
            if (!res.ok) throw new Error('Proxy HTTP error');
            return res.text();
          })
          .then(html => {
            // allorigins wraps in JSON { contents: "<html>..." }
            if (proxy.url.includes('allorigins') && html.startsWith('{')) {
              try { html = JSON.parse(html).contents; } catch(e) {}
            }
            
            let match = html.match(/ytInitialData\\s*=\\s*'(.+?)';/);
            let jsonData = null;
            if (match) {
              const decoded = match[1].replace(/\\\\x([0-9A-Fa-f]{2})/g, (m, p1) => String.fromCharCode(parseInt(p1, 16)));
              jsonData = JSON.parse(decoded);
            } else {
              match = html.match(/ytInitialData\\s*=\\s*({.+?});/);
              if (match) jsonData = JSON.parse(match[1]);
            }
            if (jsonData) {
              let contents = [];
              try {
                contents = jsonData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
              } catch(e) {
                try {
                  contents = jsonData.contents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
                } catch(e2) {}
              }
              const results = [];
              for (const item of contents) {
                const renderer = item.videoRenderer || item.compactVideoRenderer;
                if (renderer && renderer.videoId) {
                  let duration = '0:00';
                  if (renderer.lengthText) duration = renderer.lengthText.runs ? renderer.lengthText.runs[0].text : renderer.lengthText.simpleText;
                  let lengthSeconds = 0;
                  const parts = duration.split(':').map(Number);
                  if (parts.length === 3) lengthSeconds = parts[0]*3600 + parts[1]*60 + parts[2];
                  else if (parts.length === 2) lengthSeconds = parts[0]*60 + parts[1];
                  else lengthSeconds = parts[0] || 0;
                  
                  let thumbUrl = \`https://i.ytimg.com/vi/\${renderer.videoId}/hqdefault.jpg\`;
                  results.push({
                    type: 'video', videoId: renderer.videoId, title: renderer.title.runs[0].text,
                    author: renderer.longBylineText ? renderer.longBylineText.runs[0].text : (renderer.shortBylineText ? renderer.shortBylineText.runs[0].text : 'YouTube'),
                    lengthSeconds: lengthSeconds, videoThumbnails: [{ quality: 'medium', url: thumbUrl }],
                    viewCountText: renderer.viewCountText ? renderer.viewCountText.simpleText : '', publishedText: renderer.publishedTimeText ? renderer.publishedTimeText.simpleText : ''
                  });
                }
              }
              if (results.length > 0) return { instance: 'Scraping ' + proxy.url, data: results };
            }
            throw new Error('Scraping falhou');
          })
        );
      }

      // 2. Invidious Instances em paralelo
      let instancesToTry = dynamicInvidiousInstances.length > 0 ? dynamicInvidiousInstances : [...FALLBACK_INSTANCES];
      for (const instance of instancesToTry) {
        let searchUrl = \`\${instance}/api/v1/search?q=\${encodeURIComponent(query)}&type=video\`;
        if (sortBy !== 'relevance') searchUrl += \`&sort_by=\${sortBy}\`;
        promises.push(
          fetch(searchUrl, { signal: controller.signal })
            .then(res => {
              if (!res.ok) throw new Error('Invidious erro');
              return res.json();
            })
            .then(data => {
              if (data && Array.isArray(data) && data.length > 0) {
                currentInvidiousInstance = instance;
                return { instance, data };
              }
              throw new Error('Invidious vazio');
            })
        );
      }

      // 3. Piped Instances em paralelo
      for (const instance of PIPED_API_INSTANCES) {
        let searchUrl = \`\${instance}/search?q=\${encodeURIComponent(query)}&filter=all\`;
        promises.push(
          fetch(searchUrl, { signal: controller.signal })
            .then(res => {
              if (!res.ok) throw new Error('Piped erro');
              return res.json();
            })
            .then(result => {
              if (result && result.items && result.items.length > 0) {
                const data = result.items
                  .filter(i => i.type === 'stream' || i.type === 'video')
                  .map(v => ({
                    type: 'video',
                    videoId: v.url.replace('/watch?v=', '').split('&')[0],
                    title: v.title,
                    author: v.uploaderName,
                    lengthSeconds: typeof v.duration === 'number' ? v.duration : 0,
                    videoThumbnails: [{ quality: 'medium', url: \`https://i.ytimg.com/vi/\${v.url.replace('/watch?v=', '').split('&')[0]}/hqdefault.jpg\` }],
                    viewCountText: (v.views || 0) + ' visualizações',
                    publishedText: v.uploadedDate || ''
                  }));
                if (data.length > 0) return { instance, data };
              }
              throw new Error('Piped vazio');
            })
        );
      }

      try {
        // Retorna a primeira promessa que resolver com sucesso!
        const result = await Promise.any(promises);
        clearTimeout(timeoutId);
        console.log(\`Busca vencedora e mais rápida: \${result.instance}\`);
        return result;
      } catch (err) {
        clearTimeout(timeoutId);
        console.error('Todas as instâncias e proxies falharam:', err);
        throw new Error('Servidores de busca estão congestionados ou bloqueados no momento. Tente novamente em alguns segundos.');
      }
    }`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(file, content);
  console.log('Substituição realizada com sucesso!');
} else {
  console.log('Alvo não encontrado.');
}
