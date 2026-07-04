<div align="center">
  <img src="apple-touch-icon.jpg" alt="LivrePlay Logo" width="150" style="border-radius: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
  <br/>
  <h1>🎬 LivrePlay Ecosystem</h1>
  <p><strong>Simples. Rápido. Sem anúncios. O seu hub definitivo de entretenimento, cinema e conhecimento.</strong></p>
</div>

<br/>

**LivrePlay** é um ecossistema de Web Apps Progressivos (PWAs) ultra-minimalista, projetado com uma interface dark premium e elegante (estilo *glassmorphism*). Ele proporciona streaming de filmes, séries, vídeos, músicas, curadoria inteligente com Inteligência Artificial e pílulas de conhecimento em altíssima velocidade. 100% focado na privacidade e totalmente livre de anúncios intrusivos e interrupções.

---

## 🌟 O Ecossistema

O LivrePlay evoluiu para um Super App dividido em **cinco** módulos independentes, todos integrados através de um Hub Central incrivelmente veloz:

### 🍿 1. LivrePlay Cine (Novo!)
*O seu cinema premium gratuito e sem complicações.*
- **🎬 Catálogo Imenso:** Integração nativa e oficial com os servidores da Pluto TV, trazendo milhares de filmes on-demand e séries dubladas em HD.
- **⚡ Performance Absurda:** Carrega todo o catálogo de forma assíncrona, proporcionando uma experiência de busca instantânea (sem *loading* ao digitar).
- **🚫 Anti-Bloqueio de Iframe:** Engenharia reversa no player da Pluto TV para funcionar fluidamente no navegador sem bloqueios de segurança (CORS/X-Frame-Options), via HLS puro.
- **🎨 Design Estilo Netflix:** Hero banners gigantes dinâmicos, carrosséis horizontais fluidos e capas de filmes com texturas ricas.

### 🧠 2. LivrePlay Flow
*O "Tinder do Conhecimento". Aprenda algo novo a cada deslizada.*
- **📱 Experiência Imersiva (TikTok-style):** Feed infinito de cards de conhecimento em formato vertical com auto-scroll inteligente.
- **🎙️ Voz Neural Profissional:** Áudio de altíssima qualidade narrando curiosidades e conceitos profundos, suportado por uma trilha musical relaxante.
- **🎧 Totalmente Hands-free:** Dê "Play" e deixe o Flow guiar você, lendo e passando os cards automaticamente (perfeito para ouvir no trânsito ou no trabalho).

### 📺 3. LivrePlay Video
*O cliente definitivo para o YouTube, limpo e direto ao ponto.*
- **🛡️ Zero Anúncios:** Reprodução em tempo real através do player nativo ultraleve, sem interrupções e sem rastreadores abusivos.
- **💊 Filtros Personalizados:** Crie, salve e gerencie suas próprias categorias de busca (salvas localmente).
- **📥 Download Integrado:** Baixe vídeos (MP4) e áudios (MP3) em alta resolução com um clique via integração nativa (*Cobalt API*).
- **📱 Picture-in-Picture (PiP) & Background Play:** Assista em janela flutuante nativa ou ouça vídeos com a tela bloqueada.

### 🎵 4. LivrePlay Music
*O seu player nativo de música.*
- **✨ Interface Minimalista:** A biblioteca do YouTube Music entregue em uma roupagem focada unicamente na arte da capa e na música.
- **🎧 Background Play Nativo:** Arquitetura desenhada para manter sua música tocando sem engasgos ao trocar de aba ou apagar a tela do celular (contornando os limites rígidos do iOS e Android).

### 🔮 5. LivrePlay Vibe
*O coração inteligente do LivrePlay.*
- **🤖 Playlists Dinâmicas por IA:** Digite como você está se sentindo e receba uma curadoria perfeita criada por Inteligência Artificial generativa.
- **🎲 Surpreenda-me:** Botão mágico de descoberta para furar a "bolha algorítmica".
- **🔗 Compartilhamento:** Exporte suas "Vibes" e compartilhe a curadoria com os amigos em um clique.

---

## ✨ Experiência Premium

* **📱 Instalação PWA Nativa:** Instale no iOS (via Safari) ou Android (via Chrome). O ecossistema se comporta como um app nativo (sem barra de endereço, fullscreen, ícone em alta definição e suporte offline).
* **🔒 100% Privado & Seguro:** Todo o seu histórico e filtros ficam salvos **somente no seu aparelho** (via `localStorage`). Zero necessidade de criar contas e senhas.
* **📊 Analytics Otimizado:** Rastreamento inteligente via PostHog para mapas de calor e monitoramento de estabilidade do app em tempo real.
* **🎨 Glassmorphism & UI Design:** Design dark com transparências, desfoques translúcidos e animações de estado (micro-interações) focadas em retenção.
* **👆 Otimização Mobile Extrema:** Bloqueio de zoom acidental, física de *scroll* aperfeiçoada e manipulação avançada de *Touch Events*.

---

## 🛠️ Stack Tecnológica (A Arte do Vanilla)

Desenvolvido para ser um míssil de velocidade, abandonando o peso de grandes frameworks JavaScript:
- **Core:** HTML5 Semântico, Vanilla CSS3 e Vanilla JavaScript (ES6+).
- **Performance:** Service Workers, Web App Manifests, e Lazy Loading de alto nível (Intersection Observers).
- **Mídia:** HLS.js (HTTP Live Streaming) para decodificação de vídeos em altíssima velocidade e Web Audio API.
- **APIs & Backends:** Integrações com Pluto TV VOD API, YouTube APIs, Cobalt API, Modelos de IA Generativa e PostHog (Tracking).

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/adriancantero-stack/livreplay.git
   ```
2. Inicie um servidor local na pasta raiz (sem necessidade de Node/NPM ou Build steps complexes):
   ```bash
   python3 -m http.server 8000
   # ou usando PHP: php -S localhost:8000
   ```
3. Acesse `http://localhost:8000` no navegador.

---

## ☕ Apoie o Projeto

O LivrePlay é mantido com extrema paixão e focado no usuário. Se este app facilita sua vida, economiza sua bateria e blinda seu estresse contra anúncios, considere apoiar para mantermos as integrações de IA e APIs 100% no ar!

**Chave PIX Aleatória:**
\`\`\`text
072cf5fd-e9f3-4a17-b077-35d83578c9c9
\`\`\`

<div align="center">
  <p>Construído com obsessão por velocidade e código limpo. 🚀</p>
</div>
