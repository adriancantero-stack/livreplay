<div align="center">
  <img src="apple-touch-icon.jpg" alt="LivrePlay Logo" width="150" style="border-radius: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
  <br/>
  <h1>🎬 LivrePlay Ecosystem</h1>
  <p><strong>Simples. Rápido. Sem anúncios. O seu hub definitivo de entretenimento.</strong></p>
</div>

<br/>

**LivrePlay** é um ecossistema de Web Apps Progressivos (PWAs) ultra-minimalista projetado com uma interface dark elegante (estilo *glassmorphism*). Ele proporciona streaming de vídeo, música e curadoria por Inteligência Artificial em altíssima velocidade, focado na privacidade e totalmente livre de anúncios e interrupções.

---

## 🌟 O Ecossistema

O LivrePlay é dividido em três módulos principais, acessíveis através de um Hub Central:

### 📺 1. LivrePlay Video
Um cliente robusto para o YouTube, projetado para oferecer a experiência mais fluida e limpa possível.
- **🛡️ Bloqueio Nativo de Anúncios:** Reprodução em tempo real através do player seguro e sem cookies do YouTube (ou via Invidious).
- **💊 Filtros Personalizáveis (Pills):** Adicione suas próprias categorias de busca na tela inicial e salve-as no navegador.
- **🔍 Busca Dinâmica Spotlight:** Mecanismo client-side inteligente que consulta as melhores instâncias de alto desempenho.
- **📥 Download Integrado:** Baixe vídeos e áudios diretamente via Cobalt API em alta qualidade.
- **📱 Picture-in-Picture (PiP) & Background Play:** Assista em uma janela flutuante ou apenas ouça o áudio com a tela bloqueada.

### 🎵 2. LivrePlay Music
Uma interface dedicada para os amantes de música, transformando a web no seu player nativo.
- **✨ Interface Limpa:** Traz o YouTube Music com uma roupagem focada no essencial, removendo elementos visuais desnecessários.
- **🎧 Reprodução em Segundo Plano:** Otimizações para que o áudio continue tocando perfeitamente enquanto você usa outros aplicativos ou bloqueia o celular.

### 🔮 3. LivrePlay Vibe
O coração inteligente do LivrePlay. Um assistente de IA focado em descobrir o que você quer ouvir agora.
- **🤖 Inteligência Artificial Local:** Gera recomendações de playlists dinâmicas com base no seu humor, atividades ou ideias soltas (ex: "Músicas para focar no trabalho").
- **🌍 Camaleão Global:** Adapta as top hits e recomendações automaticamente para o país em que você está.
- **🎲 Surpreenda-me:** Botão mágico para quando você não sabe o que ouvir e quer uma curadoria surpresa de altíssima qualidade.
- **🔗 Compartilhamento:** Envie "Vibes" personalizadas via links para seus amigos.

---

## ✨ Funcionalidades Premium (Em Todo o App)

* **📱 Instalação PWA Perfeita:** Adicione à Tela de Início do iOS ou Android. O aplicativo se comporta 100% como nativo (Ícone perfeito, tela cheia, sem barras de navegação).
* **🔒 100% Privado:** O histórico de buscas, as categorias personalizadas (Pills) e os vídeos assistidos são salvos apenas no seu `localStorage`. **Zero rastreamento, zero login, zero contas necessárias.**
* **🎨 Design Glassmorphism:** Interface dark premium com desfoques, transições suaves e responsividade perfeita (Desktop, Mobile e Smart TVs).
* **👆 Zero "Pinch-to-Zoom":** Prevenção rigorosa de gestos de zoom indesejados no mobile para manter a experiência tátil fiel a um app nativo.

---

## 🛠️ Tecnologias Utilizadas

A mágica acontece sem pesados frameworks front-end, garantindo velocidade brutal de carregamento:

*   **HTML5** (Estruturação semântica de alta performance)
*   **Vanilla CSS3** (Efeitos de vidro fosco, variáveis CSS e animações nativas)
*   **Vanilla JavaScript (ES6+)** (Lógica assíncrona, integração de localStorage, Web Share API e barramento de eventos)
*   **Service Workers** (Suporte a PWA, cache agressivo, rotas offline e manipulação de assets)
*   **Integração de APIs Abertas:** Invidious API, Cobalt API, YouTube iFrame API, YouTube Music.

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/adriancantero-stack/livreplay.git
   ```
2. Abra o diretório no seu terminal e inicie um servidor web local simples:
   ```bash
   # Com Python 3
   python3 -m http.server 8000
   
   # Com Node.js (via npx)
   npx serve
   ```
3. Acesse `http://localhost:8000` no seu navegador.

---

## ☕ Apoie o Projeto

O LivrePlay é 100% gratuito e mantido pela comunidade. Se este projeto ajuda o seu dia a dia, considere fazer uma doação via PIX para nos ajudar a manter os servidores proxy/Invidious no ar e garantir atualizações contínuas!

**Chave PIX Aleatória:**
```text
072cf5fd-e9f3-4a17-b077-35d83578c9c9
```

---

<div align="center">
  <p>Feito com paixão e código limpo. 🚀</p>
</div>
