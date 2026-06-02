const KNOWLEDGE_CARDS = [
  {
    topic: "Inteligência Artificial",
    quote: "O algoritmo não prevê o futuro. Ele cria o <strong>comportamento necessário</strong> para que o futuro previsto aconteça.",
    author: "Ciência de Dados",
    searchQuery: "como algoritmos moldam comportamento inteligencia artificial",
    audioId: "4d9ba51e61fdab80674643f797fe1323.wav"
  },
  {
    topic: "Física Quântica",
    quote: "Na escala quântica, a observação altera a realidade. O universo é um mar de <strong>infinitas possibilidades</strong> até que você decida olhar.",
    author: "Mecânica Quântica",
    searchQuery: "física quântica dupla fenda explicação",
    audioId: "19eae3bb7d1c6b1dc6ee694f2accdd51.wav"
  },
  {
    topic: "Minimalismo",
    quote: "O minimalismo não é sobre ter menos coisas. É sobre ter <strong>espaço</strong> para as coisas que realmente importam.",
    author: "Essencialismo",
    searchQuery: "minimalismo como começar vida essencialista",
    audioId: "b8a90c61b7f682dbcd3721db1aca6fc9.wav"
  },
  {
    topic: "Finanças",
    quote: "Juros compostos são a 8ª maravilha do mundo. Quem entende, <strong>ganha</strong>. Quem não entende, <strong>paga</strong>.",
    author: "Albert Einstein (Atribuído)",
    searchQuery: "como funcionam juros compostos investimentos",
    audioId: "a24bb678f2ff6177cfcb5fa315a08126.wav"
  },
  {
    topic: "Biohacking",
    quote: "Seu cérebro é neuroplástico. Cada hábito repetido constrói literalmente uma <strong>nova rodovia física</strong> na sua mente.",
    author: "Neurociência Prática",
    searchQuery: "neuroplasticidade como mudar habitos biohacking",
    audioId: "8a3e69be0f2bca021ce90c9e34a262e7.wav"
  },
  {
    topic: "Produtividade",
    quote: "Estar ocupado não é o mesmo que ser produtivo. A maioria das pessoas passa o dia <strong>correndo em uma esteira</strong> sem sair do lugar.",
    author: "Gestão do Tempo",
    searchQuery: "produtividade vs ocupação essencialismo",
    audioId: "b60064045ef3d4a619b59d26db7a378e.wav"
  },
  {
    topic: "Saúde & Longevidade",
    quote: "O sono não é um luxo, é o seu <strong>sistema de suporte vital</strong>. É o maior biohack que existe.",
    author: "Medicina do Sono",
    searchQuery: "importância do sono profundo saude matthew walker",
    audioId: "f549c8bcd3ba6adc10984d2cf00ee104.wav"
  },
  {
    topic: "Psicologia",
    quote: "Você não é os seus pensamentos. Você é a <strong>consciência</strong> que observa eles passarem.",
    author: "Atenção Plena",
    searchQuery: "mindfulness meditação atenção plena",
    audioId: "ac5556324972c714941e5e64a870a844.wav"
  },
  {
    topic: "Aprendizado",
    quote: "Você não aprende lendo passivamente. Você aprende quando tenta <strong>explicar o conceito</strong> de forma simples para alguém.",
    author: "Técnica Feynman",
    searchQuery: "técnica de feynman aprendizado acelerado",
    audioId: "bd7307ab0c4429376d1fd54837717a92.wav"
  },
  {
    topic: "Criptomoedas",
    quote: "O Bitcoin não é apenas uma moeda. É o primeiro <strong>banco central matemático</strong> e incorruptível da história humana.",
    author: "Economia Descentralizada",
    searchQuery: "o que é bitcoin descentralização blockchain",
    audioId: "64e57dc74591f711d68c57043c7e4ec9.wav"
  },
  {
    topic: "Estoicismo",
    quote: "Nós sofremos mais na imaginação do que na <strong>realidade</strong>.",
    author: "Sêneca",
    searchQuery: "filosofia estoica como lidar com ansiedade seneca",
    audioId: "bf7727db03f536fd6b3e438a98bac387.wav"
  },
  {
    topic: "Astronomia",
    quote: "Você é feito de poeira estelar. O ferro no seu sangue foi forjado no <strong>coração de estrelas</strong> que explodiram bilhões de anos atrás.",
    author: "Cosmologia",
    searchQuery: "origem dos elementos quimicos poeira estelar carl sagan",
    audioId: "36a3438ba58a460242e2a9f86d52314e.wav"
  },
  {
    topic: "Tecnologia",
    quote: "A tecnologia avança de forma exponencial, mas o cérebro humano ainda opera com um sistema operacional da <strong>Idade da Pedra</strong>.",
    author: "Psicologia Evolutiva",
    searchQuery: "evolução humana vs avanço tecnológico",
    audioId: "eddd940731472dc52d2c83a777926669.wav"
  },
  {
    topic: "Evolução",
    quote: "A evolução não cria seres perfeitos. Ela cria seres que são <strong>apenas bons o suficiente</strong> para sobreviver até a reprodução.",
    author: "Biologia Evolutiva",
    searchQuery: "como funciona a seleção natural biologia",
    audioId: "03949a13e3d55360fddd5437bd407ad6.wav"
  },
  {
    topic: "Negócios",
    quote: "As melhores empresas não vendem produtos. Elas vendem <strong>versões melhores</strong> das próprias pessoas que compram.",
    author: "Marketing Estratégico",
    searchQuery: "psicologia do consumidor marketing de valor",
    audioId: "4320035af74d7c8b74c1ff55674ef9e4.wav"
  },
  {
    topic: "Foco",
    quote: "Sua atenção é a moeda mais valiosa do século 21. Onde você coloca seu foco, a <strong>sua realidade se expande</strong>.",
    author: "Neurofisiologia",
    searchQuery: "economia da atenção e hiperfoco",
    audioId: "8a60ee1c44fc16cecc61d61d8b818aec.wav"
  },
  {
    topic: "Liderança",
    quote: "Um verdadeiro líder não cria seguidores. Ele cria <strong>novos líderes</strong> que não precisam dele para prosperar.",
    author: "Gestão de Pessoas",
    searchQuery: "liderança transformacional e delegação",
    audioId: "84f1e0cf098ebf05a9e1319968028610.wav"
  },
  {
    topic: "Filosofia",
    quote: "A vida só tem o significado que você dá a ela. O vazio não é um castigo, é uma <strong>tela em branco</strong>.",
    author: "Existencialismo",
    searchQuery: "niilismo existencialismo sartre camus",
    audioId: "b36dbc333398d1a9eb2ae255650dab85.wav"
  },
  {
    topic: "Hábitos",
    quote: "Você não se eleva ao nível dos seus objetivos. Você <strong>cai ao nível</strong> dos seus sistemas.",
    author: "James Clear",
    searchQuery: "hábitos atômicos criação de rotinas james clear",
    audioId: "37f2f2fbcbd7b2f86859374f609fb6b1.wav"
  },
  {
    topic: "Economia",
    quote: "O dinheiro não tem valor intrínseco. Ele é apenas uma ilusão coletiva sustentada pela <strong>confiança mútua</strong>.",
    author: "História do Dinheiro",
    searchQuery: "o que é dinheiro padrão ouro confiança",
    audioId: "feffe55254b168372fac5ff15deff457.wav"
  },
  {
    topic: "Cibernética",
    quote: "No futuro, a diferença entre o biológico e o artificial será apenas uma questão de <strong>definição semântica</strong>.",
    author: "Transumanismo",
    searchQuery: "transumanismo ciborgues singularidade tecnológica",
    audioId: "a4d2f74a6855527b914dbf52dc4ae3b7.wav"
  },
  {
    topic: "Resiliência",
    quote: "O bambu não é mais forte que o carvalho porque é duro. É mais forte porque sabe <strong>dobrar na tempestade</strong> sem quebrar.",
    author: "Sabedoria Oriental",
    searchQuery: "resiliência psicológica como ser forte",
    audioId: "c86249e60d9922c4ee2d5813d619160d.wav"
  },
  {
    topic: "Arte",
    quote: "A arte não deve apenas decorar ambientes. A arte deve <strong>confortar os perturbados</strong> e perturbar os confortados.",
    author: "Crítica de Arte",
    searchQuery: "o verdadeiro propósito da arte na sociedade",
    audioId: "9133a0e5b259fe7c48700f54515bc3d5.wav"
  },
  {
    topic: "Matemática",
    quote: "A matemática não foi inventada pelos humanos. Ela foi <strong>descoberta</strong>. É a linguagem nativa com a qual o Universo foi escrito.",
    author: "Filosofia da Ciência",
    searchQuery: "matemática linguagem do universo platão",
    audioId: "67130a4156fca5946ab5a476d67b6c56.wav"
  },
  {
    topic: "Comunicação",
    quote: "O maior problema da comunicação é a ilusão de que ela <strong>já ocorreu</strong>.",
    author: "George Bernard Shaw",
    searchQuery: "falhas de comunicação relacionamentos",
    audioId: "a3472030c7a7eb27c55b0dc9eec29f9d.wav"
  },
  {
    topic: "Metaverso",
    quote: "O mundo físico está lentamente se tornando um periférico para o nosso <strong>mundo digital primário</strong>.",
    author: "Realidade Virtual",
    searchQuery: "metaverso impacto psicológico da vida digital",
    audioId: "1317f7c4244c44b0e90b65b8a475aec4.wav"
  },
  {
    topic: "Cultura",
    quote: "A cultura engole a estratégia no café da manhã. Nenhum plano genial sobrevive a um ambiente <strong>tóxico</strong>.",
    author: "Peter Drucker",
    searchQuery: "cultura organizacional peter drucker estratégia",
    audioId: "82551fcdb6f1031267bcf0eef40c1be8.wav"
  },
  {
    topic: "Genética",
    quote: "Seu DNA não é um destino fechado. Ele é um roteiro, mas o estilo de vida que você leva é o <strong>diretor do filme</strong>.",
    author: "Epigenética",
    searchQuery: "o que é epigenética controle genético",
    audioId: "6ea0d82e988082d75ce492c13fb3e8d4.wav"
  },
  {
    topic: "Criatividade",
    quote: "A criatividade não é sobre pensar fora da caixa. É sobre perceber que a caixa <strong>nunca existiu</strong>.",
    author: "Inovação",
    searchQuery: "bloqueio criativo como ter ideias inovadoras",
    audioId: "dbbd7a5a98cf9e91875e9aa244f33b39.wav"
  },
  {
    topic: "Tempo",
    quote: "O passado não existe mais, o futuro ainda não chegou. O agora é a <strong>única fração da eternidade</strong> que você realmente possui.",
    author: "Consciência Temporal",
    searchQuery: "o poder do agora eckhart tolle presença",
    audioId: "eacd7671d5d172296544db9f23d85de6.wav"
  },
  {
    topic: "Design",
    quote: "Bom design é óbvio. Ótimo design é <strong>transparente</strong>.",
    author: "Joe Sparano",
    searchQuery: "design de experiência do usuário ui ux",
    audioId: "2b50059167768c07f592bdc4b76d9d83.wav"
  },
  {
    topic: "Decisões",
    quote: "A fadiga de decisão é real. Cada pequena escolha que você faz de manhã drena a energia para as <strong>grandes escolhas</strong> da tarde.",
    author: "Neuroeconomia",
    searchQuery: "fadiga de decisão força de vontade willpower",
    audioId: "ad6b4cad164828b66ce40e01a8ca9af3.wav"
  },
  {
    topic: "Energia",
    quote: "As estrelas são motores nucleares gigantes que transformam hidrogênio em hélio. Toda luz que vemos é o grito de <strong>fusões colossais</strong>.",
    author: "Astrofísica",
    searchQuery: "fusão nuclear estrelas origem da luz",
    audioId: "5b37971d30a8d0789c5746bf8455cea1.wav"
  },
  {
    topic: "Poder",
    quote: "O poder verdadeiro não precisa ser imposto. Quando você tem controle de si mesmo, o universo se <strong>alonga ao seu redor</strong>.",
    author: "Autodomínio",
    searchQuery: "autodomínio inteligência emocional poder pessoal",
    audioId: "08b5b9162861626d9e120324d0c95657.wav"
  },
  {
    topic: "Complexidade",
    quote: "Sistemas complexos sempre operam no limite do fracasso. A segurança é apenas uma <strong>ilusão de controle</strong> temporária.",
    author: "Teoria do Caos",
    searchQuery: "teoria do caos sistemas complexos risco",
    audioId: "123307c0407798c6b6203ba838ef56be.wav"
  },
  {
    topic: "História",
    quote: "Aqueles que não conseguem lembrar o passado estão condenados a <strong>repeti-lo</strong>.",
    author: "George Santayana",
    searchQuery: "ciclos históricos repetição de crises santayana",
    audioId: "ca71432ca8bd33f5bb5c238c563285af.wav"
  },
  {
    topic: "Natureza",
    quote: "A floresta não é feita de árvores isoladas. Ela é uma rede gigante onde cada planta se comunica e <strong>compartilha recursos</strong> pelo subsolo.",
    author: "Ecologia Profunda",
    searchQuery: "rede micelial comunicação das plantas fungos",
    audioId: "f22b3887e54afd99f7f7cd2b2436bc37.wav"
  },
  {
    topic: "Motivação",
    quote: "A motivação é passageira. A disciplina é o que te mantém de pé quando a vontade <strong>vai embora</strong>.",
    author: "Filosofia de Alta Performance",
    searchQuery: "disciplina vs motivação como não desistir",
    audioId: "bc00b545dc5f7e14e26701c44032b0d3.wav"
  },
  {
    topic: "Sociedade",
    quote: "As redes sociais não nos uniram. Elas nos dividiram em pequenas bolhas onde apenas o eco das <strong>nossas próprias opiniões</strong> sobrevive.",
    author: "Sociologia Digital",
    searchQuery: "câmara de eco redes sociais polarização",
    audioId: "ae500741bd98b9b5de3c31179b258658.wav"
  },
  {
    topic: "Risco",
    quote: "O maior risco no mundo moderno não é tomar uma decisão errada. É não tomar <strong>decisão nenhuma</strong> por medo do erro.",
    author: "Empreendedorismo",
    searchQuery: "paralisia por análise como assumir riscos",
    audioId: "88c96ade63440ba5f30c1b1a20261fb9.wav"
  },
  {
    topic: "Educação",
    quote: "A escola ensina você a lembrar. O mundo real exige que você saiba <strong>como esquecer o que não funciona mais</strong> e reaprender rápido.",
    author: "Lifelong Learning",
    searchQuery: "reaprendizagem desaprender lifelong learning",
    audioId: "a1a39c444430d1fc3c71a57e58c0d6e2.wav"
  },
  {
    topic: "Conflito",
    quote: "A raiva não é sua inimiga. Ela é uma bússola que aponta diretamente para <strong>onde os seus limites</strong> foram violados.",
    author: "Inteligência Emocional",
    searchQuery: "como usar a raiva gestão emocional limites",
    audioId: "e69a5338b1ebc8a846f65878e356d4b0.wav"
  },
  {
    topic: "Felicidade",
    quote: "A felicidade não é um destino. Ela é um <strong>subproduto</strong> que aparece quando você foca em viver uma vida cheia de significado.",
    author: "Psicologia Positiva",
    searchQuery: "viktor frankl sentido da vida psicologia",
    audioId: "e27287077a4868bf6396620f84ef9076.wav"
  },
  {
    topic: "Privacidade",
    quote: "Na era da informação, se você não está pagando pelo produto, então <strong>você é o produto</strong> que está sendo vendido.",
    author: "Ética Digital",
    searchQuery: "economia dos dados privacidade na internet",
    audioId: "dd982a177b04711d97ed31c378ddd259.wav"
  },
  {
    topic: "Neurociência",
    quote: "Seu cérebro gasta 20% da sua energia apenas para prever o próximo milissegundo. Vivemos em um <strong>estado de simulação perpétua</strong>.",
    author: "Processamento Preditivo",
    searchQuery: "cérebro preditivo como prevemos o futuro",
    audioId: "afacefacca831f1ccef5b98114b122a4.wav"
  },
  {
    topic: "Física Clássica",
    quote: "Para cada ação, há uma reação igual e oposta. A vida, no fundo, é um <strong>eterno balanço de forças</strong>.",
    author: "Isaac Newton",
    searchQuery: "terceira lei de newton equilibrio da vida",
    audioId: "75c13c620a747be73196c4b679cff2f8.wav"
  },
  {
    topic: "Trabalho",
    quote: "Seu trabalho preencherá grande parte da sua vida. A única maneira de estar verdadeiramente satisfeito é fazer o que você acredita ser <strong>um ótimo trabalho</strong>.",
    author: "Steve Jobs",
    searchQuery: "ikigai propósito de carreira amor ao trabalho",
    audioId: "65bc4762fb3dbf27895c973094330148.wav"
  },
  {
    topic: "Inovação",
    quote: "O primeiro carro não era mais rápido que um cavalo. A verdadeira inovação raramente parece <strong>útil no primeiro dia</strong>.",
    author: "História da Tecnologia",
    searchQuery: "curva de adoção da inovação disruptiva",
    audioId: "10aa617b9879120ca73129b52f857dee.wav"
  },
  {
    topic: "Persuasão",
    quote: "As pessoas não compram o que você faz. Elas compram o <strong>porquê</strong> você faz.",
    author: "Simon Sinek",
    searchQuery: "simon sinek golden circle propósito liderança",
    audioId: "b2e6769da14528109d033a6d015d4422.wav"
  },
];
