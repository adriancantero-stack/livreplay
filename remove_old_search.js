const fs = require('fs');
const file = '/Users/adriancantero/.gemini/antigravity/scratch/livreplay/video/index.html';
let content = fs.readFileSync(file, 'utf8');

const target = `      let instancesToTry = dynamicInvidiousInstances.length > 0 ? dynamicInvidiousInstances : [...FALLBACK_INSTANCES];
      
      console.log('Tentando buscar em instâncias Invidious:', instancesToTry);
      
      let lastError = null;
      for (const instance of instancesToTry) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);
          
          let searchUrl = \`\${instance}/api/v1/search?q=\${encodeURIComponent(query)}&type=video\`;
          if (sortBy !== 'relevance') {
            searchUrl += \`&sort_by=\${sortBy}\`;
          }
          
          const res = await fetch(searchUrl, { signal: controller.signal });
          clearTimeout(timeoutId);
          
          if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data) && data.length > 0) {
              console.log(\`Busca bem-sucedida usando a instância Invidious: \${instance}\`);
              currentInvidiousInstance = instance;
              return { instance, data };
            }
          } else {
            console.warn(\`Instância Invidious \${instance} retornou erro HTTP: \${res.status}\`);
          }
        } catch (e) {
          console.warn(\`Instância Invidious falhou (\${instance}):\`, e);
          lastError = e;
        }
      }
      
      console.warn('Busca via Invidious falhou. Tentando via Piped API...');
      for (const instance of PIPED_API_INSTANCES) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000);
          
          let searchUrl = \`\${instance}/search?q=\${encodeURIComponent(query)}&filter=all\`;
          
          const res = await fetch(searchUrl, { signal: controller.signal });
          clearTimeout(timeoutId);
          
          if (res.ok) {
            const result = await res.json();
            if (result && result.items && result.items.length > 0) {
              console.log(\`Busca bem-sucedida usando a instância Piped: \${instance}\`);
              
              const data = result.items
                .filter(i => i.type === 'stream' || i.type === 'video')
                .map(v => ({
                  type: 'video',
                  videoId: v.url.replace('/watch?v=', '').split('&')[0],
                  title: v.title,
                  author: v.uploaderName,
                  lengthSeconds: v.duration,
                  videoThumbnails: [{ quality: 'medium', url: v.thumbnail }],
                  viewCountText: (v.views || 0) + ' visualizações',
                  publishedText: v.uploadedDate || ''
                }));
                
              if (data.length > 0) {
                return { instance, data };
              }
            }
          } else {
            console.warn(\`Instância Piped \${instance} retornou erro HTTP: \${res.status}\`);
          }
        } catch (e) {
          console.warn(\`Instância Piped falhou (\${instance}):\`, e);
          lastError = e;
        }
      }
      
      console.warn('Busca via Piped falhou. Tentando scraping direto via CORS Proxies...');`;

if(content.includes(target)) {
  content = content.replace(target, `      console.log('Iniciando busca ultrarrápida via Scraping Direto (CORS Proxies)...');`);
  fs.writeFileSync(file, content);
  console.log('Substituição realizada com sucesso.');
} else {
  console.log('Alvo não encontrado.');
}
