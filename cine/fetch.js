const fs = require('fs');
const https = require('https');

https.get('https://api.pluto.tv/v2/channels', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const channels = JSON.parse(data);
      // Clean up the JSON to make it smaller
      const clean = channels.filter(c => c.stitched && c.stitched.urls && c.stitched.urls.length > 0).map(c => ({
        id: c._id,
        name: c.name,
        summary: c.summary,
        number: c.number,
        category: c.category,
        poster: c.featuredImage ? c.featuredImage.path : (c.tile ? c.tile.path : (c.thumbnail ? c.thumbnail.path : '')),
        url: c.stitched.urls[0].url
      }));
      fs.writeFileSync('/Users/adriancantero/.gemini/antigravity/scratch/livreplay/cine/channels.json', JSON.stringify(clean));
      console.log('Channels saved! Count:', clean.length);
    } catch (e) {
      console.error('Error parsing:', e);
    }
  });
}).on('error', e => console.error(e));
