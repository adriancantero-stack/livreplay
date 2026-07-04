const fs = require('fs');

async function fetchVodCatalog() {
  console.log('Buscando catálogo VOD da Pluto TV...');
  try {
    const res = await fetch('https://api.pluto.tv/v3/vod/categories?includeItems=true&deviceType=web');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    
    fs.writeFileSync('./vod.json', JSON.stringify(data, null, 2));
    console.log(`Catálogo salvo em vod.json com sucesso! (${data.categories.length} categorias)`);
  } catch (error) {
    console.error('Erro ao buscar o catálogo:', error);
  }
}

fetchVodCatalog();
