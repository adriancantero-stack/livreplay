const fs = require('fs');
const file = '/Users/adriancantero/.gemini/antigravity/scratch/livreplay/video/index.html';
let content = fs.readFileSync(file, 'utf8');

const target1 = `        let thumb = item.videoThumbnails && item.videoThumbnails.find(t => t.quality === 'medium' || t.quality === 'default')?.url 
          || \`https://i.ytimg.com/vi/\${item.videoId}/mqdefault.jpg\`;
        if (thumb) thumb = thumb.replace(/^\\/\\//, 'https://');`;
content = content.replace(target1, '        let thumb = item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`;');

const target2 = `          let thumbnail = item.videoThumbnails && item.videoThumbnails.find(t => t.quality === 'medium' || t.quality === 'default')?.url 
          if (thumbnail) thumbnail = thumbnail.replace(/^http:\\/\\//i, 'https://').replace(/^\\/\\//, 'https://');
          if (!thumbnail) thumbnail = \`https://i.ytimg.com/vi/\${item.videoId}/hqdefault.jpg\`; // Fallback absoluto`;
content = content.replace(target2, '          let thumbnail = item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`;');

const target3 = `          let thumb = item.videoThumbnails && item.videoThumbnails.find(t => t.quality === 'medium' || t.quality === 'default')?.url 
            || \`https://i.ytimg.com/vi/\${item.videoId}/mqdefault.jpg\`;
          if (thumb) thumb = thumb.replace(/^\\/\\//, 'https://');`;
// target3 appears multiple times, so we use split.join
content = content.split(target3).join('          let thumb = item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`;');

const target4 = `        let thumb = item.videoThumbnails && item.videoThumbnails.find(t => t.quality === 'medium' || t.quality === 'default')?.url 
          || item.thumbnail || \`https://i.ytimg.com/vi/\${item.videoId}/hqdefault.jpg\`;
        if (thumb) thumb = thumb.replace(/^\\/\\//, 'https://');`;
content = content.split(target4).join('        let thumb = item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`;');

const target5 = `            let thumb = item.videoThumbnails && item.videoThumbnails.find(t => t.quality === 'medium' || t.quality === 'default')?.url 
              || \`https://i.ytimg.com/vi/\${item.videoId}/hqdefault.jpg\`;
            if (thumb) thumb = thumb.replace(/^\\/\\//, 'https://');`;
content = content.split(target5).join('            let thumb = item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`;');

const target6 = `        let thumb = item.videoThumbnails && item.videoThumbnails.find(t => t.quality === 'medium' || t.quality === 'default')?.url 
          || \`https://i.ytimg.com/vi/\${item.videoId}/hqdefault.jpg\`;
        if (thumb) thumb = thumb.replace(/^\\/\\//, 'https://');`;
content = content.split(target6).join('        let thumb = item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`;');

fs.writeFileSync(file, content);
console.log('Fixed thumbnails');
