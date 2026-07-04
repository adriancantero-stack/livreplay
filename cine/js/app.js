const catalogContainer = document.getElementById('catalogContainer');
const mainLoader = document.getElementById('mainLoader');

const heroBg = document.getElementById('heroBg');
const heroImg = document.getElementById('heroImg');
const heroVideo = document.getElementById('heroVideo');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const heroPlayBtn = document.getElementById('heroPlayBtn');

const playerModal = document.getElementById('playerModal');
const mainPlayer = document.getElementById('mainPlayer');
const detailsModal = document.getElementById('detailsModal');

let hls = null;
let currentChannels = [];
let heroChannel = null;

async function initCine() {
  try {
    const res = await fetch('https://api.pluto.tv/v2/channels');
    const channels = await res.json();
    currentChannels = channels.filter(c => c.stitched && c.stitched.urls && c.stitched.urls.length > 0);
    
    // Configura o Hero com um canal de destaque (o primeiro de filmes, por exemplo)
    const featured = currentChannels.find(c => c.category === 'Filmes') || currentChannels[0];
    if (featured) {
      heroChannel = featured;
      heroTitle.textContent = featured.name;
      heroDesc.textContent = featured.summary;
      
      const poster = featured.featuredImage ? featured.featuredImage.path : (featured.tile ? featured.tile.path : '');
      if (poster) {
        heroImg.src = poster.split('?')[0] + '?w=1200&q=75';
      }
      
      heroPlayBtn.onclick = () => openPlayer(featured);
      document.getElementById('heroInfoBtn').onclick = () => openDetails(featured);
    }
    
    // Agrupa canais por categoria
    const categories = {};
    for (const c of currentChannels) {
      if (!categories[c.category]) categories[c.category] = [];
      categories[c.category].push(c);
    }
    
    mainLoader.style.display = 'none';
    
    // Renderiza as fileiras (rows)
    for (const [catName, catChannels] of Object.entries(categories)) {
      if (catChannels.length < 2) continue; // Ignora categorias vazias ou muito pequenas
      
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `<h3>Canais Ao Vivo: ${catName}</h3><div class="row-inner"></div>`;
      const inner = row.querySelector('.row-inner');
      
      for (const ch of catChannels) {
        const item = document.createElement('div');
        item.className = 'item';
        
        const posterUrl = ch.tile ? ch.tile.path : (ch.thumbnail ? ch.thumbnail.path : '');
        item.innerHTML = `
          <img loading="lazy" src="${posterUrl.split('?')[0] + '?w=400&q=75'}" alt="${ch.name}">
          <div class="item-badge">Ao Vivo</div>
        `;
        item.onclick = () => openDetails(ch);
        inner.appendChild(item);
      }
      catalogContainer.appendChild(row);
    }

  } catch (error) {
    console.error('Erro ao carregar PlutoTV:', error);
    heroTitle.textContent = 'Erro de Conexão';
    heroDesc.textContent = 'Não foi possível se conectar à rede de cinema gratuita. Verifique sua internet.';
    mainLoader.style.display = 'none';
  }
}

// Player em Tela Cheia
function openPlayer(channel) {
  closeDetails();
  playerModal.classList.add('active');
  const streamUrl = channel.stitched.urls[0].url.replace('http://', 'https://');
  
  if (Hls.isSupported()) {
    if (hls) hls.destroy();
    hls = new Hls({ maxMaxBufferLength: 30 });
    hls.loadSource(streamUrl);
    hls.attachMedia(mainPlayer);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      mainPlayer.play().catch(e => console.log('Autoplay bloqueado', e));
    });
  } else if (mainPlayer.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari
    mainPlayer.src = streamUrl;
    mainPlayer.play().catch(e => console.log('Autoplay bloqueado', e));
  }
}

function closePlayer() {
  playerModal.classList.remove('active');
  mainPlayer.pause();
  mainPlayer.src = '';
  if (hls) {
    hls.destroy();
    hls = null;
  }
}

// Modal de Detalhes
function openDetails(channel) {
  const posterUrl = channel.featuredImage ? channel.featuredImage.path : (channel.tile ? channel.tile.path : '');
  document.getElementById('detailImg').src = posterUrl.split('?')[0] + '?w=800&q=75';
  document.getElementById('detailTitle').textContent = channel.name;
  document.getElementById('detailDesc').textContent = channel.summary;
  document.getElementById('detailDuration').textContent = `Canal ${channel.number}`;
  
  document.getElementById('detailPlayBtn').onclick = () => openPlayer(channel);
  
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
