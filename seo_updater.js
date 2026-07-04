const fs = require('fs');
const path = require('path');

const modules = [
  {
    path: 'cine/index.html',
    title: 'LivrePlay Cine - O Melhor do Cinema Sem Anúncios',
    desc: 'Assista filmes e séries incríveis com o LivrePlay Cine. Catálogo completo, alta qualidade e zero anúncios. O seu novo cinema em casa 100% gratuito.',
    keywords: 'filmes gratis, series gratis, cinema em casa, livreplay cine, assistir filmes sem anuncios, streaming gratuito'
  },
  {
    path: 'flow/index.html',
    title: 'LivrePlay Flow - O Tinder do Conhecimento',
    desc: 'Aprenda algo novo a cada deslizada. O LivrePlay Flow traz pílulas de conhecimento narradas por vozes neurais e música relaxante. Experimente grátis!',
    keywords: 'livreplay flow, tinder do conhecimento, aprender rapido, curiosidades em audio, microlearning, tiktok de conhecimento, audio neural'
  },
  {
    path: 'music/index.html',
    title: 'LivrePlay Music - Suas Músicas Sem Interrupções',
    desc: 'Ouça suas músicas favoritas sem anúncios, com reprodução em segundo plano nativa e qualidade premium. Totalmente gratuito.',
    keywords: 'musica gratis, ouvir musica sem anuncios, youtube music sem anuncio, livreplay music, player de musica, background play'
  },
  {
    path: 'vibe/index.html',
    title: 'LivrePlay Vibe - Curadoria Musical com IA',
    desc: 'Descreva como você está se sentindo e a Inteligência Artificial do LivrePlay Vibe criará a playlist perfeita para o seu momento.',
    keywords: 'playlist com ia, inteligencia artificial musica, livreplay vibe, descobrir musicas, recomendacao musical ia, playlists personalizadas'
  },
  {
    path: 'video/index.html',
    title: 'LivrePlay Video - Vídeos Sem Anúncios e Em Segundo Plano',
    desc: 'Assista seus vídeos favoritos sem anúncios, faça download em alta qualidade e use a reprodução em segundo plano nativa.',
    keywords: 'assistir youtube sem anuncios, youtube vanced web, livreplay video, baixar videos, ouvir videos com tela apagada'
  }
];

const basePath = '/Users/adriancantero/.gemini/antigravity/scratch/livreplay';

for (const mod of modules) {
  const filePath = path.join(basePath, mod.path);
  if (!fs.existsSync(filePath)) {
    console.log('Not found:', filePath);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Remove existing meta tags if any (to avoid duplicates)
  html = html.replace(/<meta name="description"[\s\S]*?>/g, '');
  html = html.replace(/<meta name="keywords"[\s\S]*?>/g, '');
  html = html.replace(/<meta property="og:[\s\S]*?>/g, '');
  html = html.replace(/<meta name="twitter:[\s\S]*?>/g, '');
  html = html.replace(/<meta name="robots"[\s\S]*?>/g, '');
  html = html.replace(/<link rel="canonical"[\s\S]*?>/g, '');

  const seoBlock = `
  <!-- SEO Otimização Profissional -->
  <meta name="description" content="${mod.desc}">
  <meta name="keywords" content="${mod.keywords}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://livreplay.com/${mod.path.split('/')[0]}/">
  
  <!-- Open Graph / Redes Sociais -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="LivrePlay Ecosystem">
  <meta property="og:url" content="https://livreplay.com/${mod.path.split('/')[0]}/">
  <meta property="og:title" content="${mod.title}">
  <meta property="og:description" content="${mod.desc}">
  <meta property="og:image" content="https://livreplay.com/logo-${mod.path.split('/')[0]}.png">
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${mod.title}">
  <meta name="twitter:description" content="${mod.desc}">
  <meta name="twitter:image" content="https://livreplay.com/logo-${mod.path.split('/')[0]}.png">
  </head>`;

  // Insert before </head>
  html = html.replace('</head>', seoBlock);
  fs.writeFileSync(filePath, html);
  console.log('Updated SEO for:', mod.path);
}
