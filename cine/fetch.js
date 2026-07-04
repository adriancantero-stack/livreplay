const fs = require('fs');

async function fetchVodCatalog() {
  console.log('Buscando catálogo VOD da Pluto TV...');
  try {
    const res = await fetch('https://api.pluto.tv/v3/vod/categories?includeItems=true&deviceType=web');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    
    const minifiedCategories = data.categories.map(cat => ({
      name: cat.name,
      items: (cat.items || []).map(item => ({
        _id: item._id,
        type: item.type,
        slug: item.slug,
        name: item.name,
        summary: item.summary,
        description: item.description,
        duration: item.duration,
        rating: item.rating,
        genre: item.genre,
        featuredImage: item.featuredImage ? { path: item.featuredImage.path, url: item.featuredImage.url } : null,
        poster16_9: item.poster16_9 ? { path: item.poster16_9.path, url: item.poster16_9.url } : null,
        poster: item.poster ? { path: item.poster.path, url: item.poster.url } : null,
        covers: (item.covers || []).map(c => ({ aspectRatio: c.aspectRatio, url: c.url })),
        stitched: item.stitched ? { urls: (item.stitched.urls || []).filter(u => u.type === 'hls').map(u => ({ type: 'hls', url: u.url })) } : null,
        clip: item.clip ? {
          originalReleaseDate: item.clip.originalReleaseDate,
          actors: item.clip.actors,
          directors: item.clip.directors
        } : null
      }))
    })).filter(cat => cat.items.length > 0);
    
    fs.writeFileSync('./vod.json', JSON.stringify({ categories: minifiedCategories }));
    console.log(`Catálogo salvo em vod.json com sucesso! (${minifiedCategories.length} categorias)`);
  } catch (error) {
    console.error('Erro ao buscar o catálogo:', error);
  }
}

fetchVodCatalog();
