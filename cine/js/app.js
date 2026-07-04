const catalogContainer = document.getElementById('catalogContainer');
const mainLoader = document.getElementById('mainLoader');

const heroBg = document.getElementById('heroBg');
const heroImg = document.getElementById('heroImg');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroPlayBtn = document.getElementById('heroPlayBtn');
const heroInfoBtn = document.getElementById('heroInfoBtn');

const playerModal = document.getElementById('playerModal');
const mainPlayer = document.getElementById('mainPlayer');
const detailsModal = document.getElementById('detailsModal');

let hls = null;
let vodCategories = [];
let heroItem = null;

const PLUTO_VOD_API = 'vod.json';

async function initCine() {
  try {
    const res = await fetch(PLUTO_VOD_API);
    const data = await res.json();
    
    // Filtra para mostrar apenas categorias que tem filmes ou séries
    vodCategories = data.categories.filter(cat => 
      cat.items && cat.items.length > 0 && cat.name !== 'Em Destaque'
    );
    
    // Pega a categoria "Em Destaque" (ou a primeira) para o Hero
    const featuredCat = data.categories.find(c => c.name === 'Em Destaque') || vodCategories[0];
    if (featuredCat && featuredCat.items && featuredCat.items.length > 0) {
      // Pega um item (filme) para ser o destaque principal
      heroItem = featuredCat.items.find(i => i.type === 'movie' || i.type === 'series') || featuredCat.items[0];
      
      heroTitle.textContent = heroItem.name;
      heroDesc.textContent = heroItem.summary || heroItem.description;
      
      const heroImageObj = heroItem.featuredImage || heroItem.poster16_9 || (heroItem.covers && heroItem.covers.find(c => c.aspectRatio === '16:9'));
      if (heroImageObj && (heroImageObj.path || heroImageObj.url)) {
        let imgUrl = heroImageObj.path || heroImageObj.url;
        heroImg.src = imgUrl.split('?')[0] + '?w=1200&q=75';
      }
      
      heroPlayBtn.style.display = 'flex';
      heroInfoBtn.style.display = 'flex';
      heroPlayBtn.onclick = () => openPlayer(heroItem);
      heroInfoBtn.onclick = () => openDetails(heroItem);
    }
    
    mainLoader.style.display = 'none';
    
    // Renderiza as fileiras (rows)
    for (const cat of vodCategories) {
      if (cat.items.length < 3) continue; // Ignora categorias muito pequenas
      
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `<h3>${cat.name}</h3><div class="row-inner"></div>`;
      const inner = row.querySelector('.row-inner');
      
      for (const item of cat.items) {
        // Encontra a capa em proporção retrato (2:3 / 347:500)
        let posterUrl = '';
        const posterObj = item.covers && item.covers.find(c => c.aspectRatio === '347:500' || c.aspectRatio === '2:3');
        if (posterObj && posterObj.url) {
          posterUrl = posterObj.url;
        } else if (item.poster && item.poster.path) {
          posterUrl = item.poster.path;
        } else {
          continue; // Pula itens sem capa vertical
        }

        const div = document.createElement('div');
        div.className = 'item poster';
        div.innerHTML = `<img loading="lazy" src="${posterUrl.split('?')[0] + '?w=300&q=75'}" alt="${item.name}">`;
        
        if (item.type === 'series') {
           div.innerHTML += `<div class="item-badge">Série</div>`;
        }

        div.onclick = () => openDetails(item);
        inner.appendChild(div);
      }
      if (inner.children.length > 0) {
        catalogContainer.appendChild(row);
      }
    }

  } catch (error) {
    console.error('Erro ao carregar PlutoTV VOD:', error);
    heroTitle.textContent = 'Erro de Conexão';
    heroDesc.textContent = 'Detalhe: ' + error.message;
    mainLoader.style.display = 'none';
  }
}

// Player em Tela Cheia Nativo via HLS.js
function openPlayer(item) {
  closeDetails();
  playerModal.classList.add('active');
  
  const streamUrlObj = item.stitched && item.stitched.urls && item.stitched.urls.find(u => u.type === 'hls');
  if (!streamUrlObj || !streamUrlObj.url) {
    alert('Desculpe, o link de vídeo não está disponível para este título.');
    closePlayer();
    return;
  }
  
  const streamUrl = streamUrlObj.url;
  
  if (Hls.isSupported()) {
    if (hls) hls.destroy();
    hls = new Hls({
      capLevelToPlayerSize: true
    });
    hls.loadSource(streamUrl);
    hls.attachMedia(mainPlayer);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      mainPlayer.play().catch(e => console.log('Autoplay blocked:', e));
    });
  } else if (mainPlayer.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari nativo
    mainPlayer.src = streamUrl;
    mainPlayer.play().catch(e => console.log('Autoplay blocked:', e));
  }
}

function closePlayer() {
  playerModal.classList.remove('active');
  mainPlayer.pause();
  mainPlayer.removeAttribute('src');
  mainPlayer.load();
  if (hls) {
    hls.destroy();
    hls = null;
  }
}

// Modal de Detalhes
function openDetails(item) {
  // Capa Hero do Modal
  const heroImageObj = item.featuredImage || item.poster16_9 || (item.covers && item.covers.find(c => c.aspectRatio === '16:9'));
  if (heroImageObj && (heroImageObj.path || heroImageObj.url)) {
    let imgUrl = heroImageObj.path || heroImageObj.url;
    document.getElementById('detailImg').src = imgUrl.split('?')[0] + '?w=800&q=75';
  }

  document.getElementById('detailTitle').textContent = item.name;
  document.getElementById('detailDesc').textContent = item.summary || item.description;
  
  // Metadados
  if (item.clip && item.clip.originalReleaseDate) {
    document.getElementById('detailYear').textContent = item.clip.originalReleaseDate.substring(0, 4);
    document.getElementById('detailYear').style.display = 'inline-block';
  } else {
    document.getElementById('detailYear').style.display = 'none';
  }

  document.getElementById('detailRating').textContent = item.rating || 'Livre';
  
  if (item.duration) {
    const mins = Math.floor(item.duration / 60000);
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    document.getElementById('detailDuration').textContent = hrs > 0 ? `${hrs}h ${remMins}m` : `${mins}m`;
    document.getElementById('detailDuration').style.display = 'inline-block';
  } else if (item.type === 'series') {
    document.getElementById('detailDuration').textContent = 'Série';
    document.getElementById('detailDuration').style.display = 'inline-block';
  } else {
    document.getElementById('detailDuration').style.display = 'none';
  }

  if (item.genre) {
    document.getElementById('detailGenre').textContent = item.genre;
    document.getElementById('detailGenre').style.display = 'inline-block';
  } else {
    document.getElementById('detailGenre').style.display = 'none';
  }

  // Elenco / Diretor
  const castEl = document.getElementById('detailCast');
  const dirEl = document.getElementById('detailDirector');
  
  if (item.clip && item.clip.actors && item.clip.actors.length > 0) {
    castEl.innerHTML = `<strong>Elenco:</strong> ${item.clip.actors.join(', ')}`;
    castEl.style.display = 'block';
  } else {
    castEl.style.display = 'none';
  }

  if (item.clip && item.clip.directors && item.clip.directors.length > 0) {
    dirEl.innerHTML = `<strong>Direção:</strong> ${item.clip.directors.join(', ')}`;
    dirEl.style.display = 'block';
  } else {
    dirEl.style.display = 'none';
  }
  
  document.getElementById('detailPlayBtn').onclick = () => openPlayer(item);
  
  detailsModal.classList.add('active');
}

function closeDetails() {
  detailsModal.classList.remove('active');
}

// Efeito na navbar ao rolar
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

initCine();
