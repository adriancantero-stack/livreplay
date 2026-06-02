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
  {
    topic: "Estratégia",
    quote: "A verdadeira estratégia não é decidir o que fazer. É decidir <strong>o que não fazer</strong>.",
    author: "Planejamento Estratégico",
    searchQuery: "importancia do foco o que nao fazer estrategia",
    audioId: "a3163b30867186f9fb7dbcf890c00926.wav"
  },
  {
    topic: "Neurociência",
    quote: "A força de vontade é como um músculo. Ela se <strong>cansa ao longo do dia</strong>. Use a sua para as coisas mais difíceis logo de manhã.",
    author: "Gestão de Energia",
    searchQuery: "fadiga de decisao forca de vontade neurociencia",
    audioId: "1e6c9cf65266d66bc324560f5126d165.wav"
  },
  {
    topic: "Evolução",
    quote: "O medo de falar em público é um resquício da pré-história. Para o cérebro antigo, ser julgado pela tribo significava <strong>morte certa</strong>.",
    author: "Psicologia Evolutiva",
    searchQuery: "medo de falar em publico origem evolutiva psicologica",
    audioId: "4f4d7fd68208a50901a510d5cbd5f394.wav"
  },
  {
    topic: "Física",
    quote: "A entropia dita que o universo tende à desordem. O único jeito de criar ordem e vida é <strong>queimar energia</strong>.",
    author: "Termodinâmica",
    searchQuery: "segunda lei da termodinamica entropia e vida",
    audioId: "185b5d2e5fd1b50114d705f4f366c6ef.wav"
  },
  {
    topic: "Filosofia",
    quote: "Não é a morte que o homem deve temer, mas sim nunca começar a <strong>viver de verdade</strong>.",
    author: "Marco Aurélio",
    searchQuery: "estoicismo marco aurelio sobre a morte viver de verdade",
    audioId: "cb262f1f01f990a6690a5734b1e85f8e.wav"
  },
  {
    topic: "Aprendizado",
    quote: "O cérebro não aprende repetindo, ele aprende <strong>esquecendo e resgatando</strong> a informação com esforço.",
    author: "Neurociência do Aprendizado",
    searchQuery: "como estudar melhor active recall repetição espaçada",
    audioId: "5b4b655b33c2db2fa52581595a043460.wav"
  },
  {
    topic: "Futurismo",
    quote: "As IAs não vão substituir os humanos. Humanos que sabem usar IA vão substituir <strong>humanos que não sabem</strong>.",
    author: "Futuro do Trabalho",
    searchQuery: "inteligencia artificial vai roubar meu emprego",
    audioId: "e67201bc4c6e7baa3cc849f8db0d914b.wav"
  },
  {
    topic: "Minimalismo",
    quote: "Simplifique sua vida. A desordem física ao seu redor reflete a <strong>desordem mental</strong> dentro da sua cabeça.",
    author: "Psicologia do Ambiente",
    searchQuery: "como o ambiente afeta a mente minimalismo",
    audioId: "37eef645f85bb1e7703b8e95e9da46e3.wav"
  },
  {
    topic: "Finanças",
    quote: "Riqueza é o que você não vê. São os carros não comprados e as roupas de grife ignoradas que formam o <strong>verdadeiro patrimônio</strong>.",
    author: "Psicologia Financeira",
    searchQuery: "psicologia financeira morgan housel verdadeira riqueza",
    audioId: "1fa88b4d89e09d2e5fb83d86fc8698f2.wav"
  },
  {
    topic: "Tecnologia",
    quote: "A internet não nos deu mais verdade. Ela nos deu a capacidade infinita de <strong>encontrar mentiras que confirmam</strong> nossos viéses.",
    author: "Viés de Confirmação",
    searchQuery: "bolhas sociais internet viés de confirmação algoritmo",
    audioId: "e303ecc7cb9a48902fe71191284b07aa.wav"
  },
  {
    topic: "Astronomia",
    quote: "O sol que você vê agora é um fantasma do passado. A luz dele viajou por <strong>8 minutos</strong> antes de beijar o seu rosto.",
    author: "Velocidade da Luz",
    searchQuery: "tempo da luz do sol ate a terra astrofisica",
    audioId: "a1b57d58c688709621a8d74bdfe40778.wav"
  },
  {
    topic: "Cultura",
    quote: "As grandes inovações nunca nascem no centro. Elas sempre surgem nas <strong>margens e bordas</strong> do pensamento humano.",
    author: "Inovação Radical",
    searchQuery: "de onde vem a inovaçao criatividade fora da bolha",
    audioId: "32820628c5553fff5b613cd2cab1b7e6.wav"
  },
  {
    topic: "Motivação",
    quote: "Se você precisa de motivação para fazer algo importante, talvez o problema não seja a sua energia, mas a sua <strong>falta de clareza</strong>.",
    author: "Design de Rotinas",
    searchQuery: "clareza mental vs motivacao produtividade",
    audioId: "828bdfbb440842c5129e9f401b18825c.wav"
  },
  {
    topic: "Arte",
    quote: "O pintor não pinta o que ele vê. Ele pinta o que ele quer que <strong>você veja</strong>.",
    author: "Percepção Visual",
    searchQuery: "como a arte afeta a neurociencia da percepcao",
    audioId: "67c56ef6ae9a9d9ee3f19841c8aa8cce.wav"
  },
  {
    topic: "Comportamento",
    quote: "Nós somos a média das cinco pessoas com quem mais convivemos. A influência social é uma <strong>força gravitacional invisível</strong>.",
    author: "Dinâmica Social",
    searchQuery: "a media das 5 pessoas influencia ambiente social",
    audioId: "0593ce4b2a639eaaabb158ce2945ec55.wav"
  },
  {
    topic: "Foco",
    quote: "Fazer duas coisas ao mesmo tempo não é ser produtivo. É apenas <strong>dividir sua atenção e multiplicar a mediocridade</strong>.",
    author: "Mito da Multitarefa",
    searchQuery: "multitarefa funciona neurociencia da atencao dividida",
    audioId: "0a7d10d4d6e22b5e180de3dd400f848a.wav"
  },
  {
    topic: "Biólogia",
    quote: "O nosso estômago é o nosso segundo cérebro. A microbiota intestinal tem poder de controlar até as suas <strong>mudanças de humor</strong>.",
    author: "Microbioma Humano",
    searchQuery: "eixo intestino cerebro bacterias e humor",
    audioId: "0a413194d5da1cbbc1cae31dff6f3c47.wav"
  },
  {
    topic: "Economia",
    quote: "O valor não está na escassez do recurso, mas na <strong>narrativa coletiva</strong> que as pessoas constroem sobre ele.",
    author: "Teoria do Valor",
    searchQuery: "o que da valor ao dinheiro narrativa economica",
    audioId: "367ef94c736a49bdcd24a93d22aebb07.wav"
  },
  {
    topic: "Hábitos",
    quote: "A melhor forma de quebrar um mau hábito não é usando a força bruta. É tornando o gatilho <strong>invisível ou difícil de acessar</strong>.",
    author: "James Clear",
    searchQuery: "como quebrar maus habitos james clear facilidade",
    audioId: "2e6d5c62ba721c12675ceee88b3d4752.wav"
  },
  {
    topic: "Psicologia",
    quote: "A inveja não nasce de pessoas que estão no topo. Ela nasce daqueles que estão no mesmo nível que você, mas deram <strong>um passo à frente</strong>.",
    author: "Psicologia Social",
    searchQuery: "origem da inveja comparacao social psicanalise",
    audioId: "92dfec739ba6bcaa3b6b3f6cb4b8079c.wav"
  },
  {
    topic: "Física Quântica",
    quote: "Toda matéria é feita de vibrações de energia. Se você der um zoom infinito em sua mão, encontrará apenas <strong>vazio e movimento</strong>.",
    author: "Teoria das Cordas",
    searchQuery: "tudo e energia vibracao materia vazia fisica",
    audioId: "3b51efb8b21a689941ce0375da5841af.wav"
  },
  {
    topic: "Design",
    quote: "A melhor interface de usuário é aquela que o cérebro decodifica tão rápido que a pessoa acha que a ideia foi <strong>dela mesma</strong>.",
    author: "UX e Psicologia",
    searchQuery: "psicologia no design de interfaces experiencia do usuario",
    audioId: "2009d0ac7c1cd41c293182d2d4f0ff86.wav"
  },
  {
    topic: "Estratégia",
    quote: "Em um mundo de mudanças extremas, o único risco fatal é <strong>ficar parado abraçado às certezas antigas</strong>.",
    author: "Adaptabilidade",
    searchQuery: "gestao de mudancas mundo vuca adaptabilidade",
    audioId: "afb3f3343a82031f5f489d30b2414fac.wav"
  },
  {
    topic: "Saúde",
    quote: "Sentar é o novo cigarro. O corpo humano foi forjado para o movimento e adoece rapidamente quando <strong>colocado em repouso forçado</strong>.",
    author: "Medicina Preventiva",
    searchQuery: "maleficios de ficar sentado muito tempo sedentarismo",
    audioId: "b2d4b9340489be292614b6532699f1c7.wav"
  },
  {
    topic: "Criptomoedas",
    quote: "A blockchain não é apenas sobre moedas virtuais. É sobre a criação de <strong>confiança matemática</strong> entre completos estranhos.",
    author: "Criptografia",
    searchQuery: "como a blockchain cria confianca sem bancos",
    audioId: "a791c7eee903c2c3f281cb2a741e81a0.wav"
  },
  {
    topic: "Estoicismo",
    quote: "Você não tem poder sobre o que acontece com você. O seu único poder real é decidir <strong>como vai reagir</strong>.",
    author: "Epicteto",
    searchQuery: "epicteto reacao aos problemas dicotomia do controle",
    audioId: "f1b25af2dbe7ead34e88c79170379679.wav"
  },
  {
    topic: "Inovação",
    quote: "O maior assassino de uma boa ideia não é uma crítica destrutiva. É um elogio vazio de pessoas que <strong>nunca usariam o produto</strong>.",
    author: "Validação de Ideias",
    searchQuery: "como testar uma ideia de negocio validacao lean",
    audioId: "0fac8f4a92373dff336fb3a4ac609eee.wav"
  },
  {
    topic: "Relacionamentos",
    quote: "A comunicação não é o que você fala. Comunicação é apenas aquilo que o <strong>outro lado conseguiu entender</strong>.",
    author: "Comunicação Eficaz",
    searchQuery: "ruidos na comunicacao como ser claro empatia",
    audioId: "3a1f58b1a0b994c6c3da3df7fd3f8cc1.wav"
  },
  {
    topic: "Metaverso",
    quote: "Para a nova geração, o avatar digital já tem mais valor social do que a própria <strong>aparência física</strong> no mundo real.",
    author: "Sociologia Digital",
    searchQuery: "identidade digital nas redes e jogos sociedade futura",
    audioId: "7e66e26097f1f026aa3bfbd676446e49.wav"
  },
  {
    topic: "Produtividade",
    quote: "Se você tem dois minutos para fazer uma tarefa, não a anote na sua lista. <strong>Faça imediatamente</strong> e libere sua carga mental.",
    author: "Regra dos Dois Minutos",
    searchQuery: "regra dos dois minutos getting things done gtd",
    audioId: "a259849ee90d927e292c806f33934b10.wav"
  },
  {
    topic: "Cosmologia",
    quote: "O universo não está apenas em expansão, ele está acelerando. Eventualmente, o céu noturno do futuro será <strong>completamente escuro e vazio</strong>.",
    author: "Energia Escura",
    searchQuery: "expansao acelerada do universo energia escura",
    audioId: "0072ce19f1c862cf332db2684780be46.wav"
  },
  {
    topic: "Neurociência",
    quote: "A dopamina não é o hormônio da felicidade. É o hormônio da <strong>busca e da antecipação</strong> da recompensa.",
    author: "Química Cerebral",
    searchQuery: "como a dopamina funciona vicio antecipacao",
    audioId: "6665beb86a9a31aea7299b52c0a2d040.wav"
  },
  {
    topic: "Minimalismo",
    quote: "Não confunda a ausência de objetos com paz de espírito. Minimalismo físico sem <strong>clareza mental</strong> é apenas uma sala vazia.",
    author: "Filosofia Zen",
    searchQuery: "minimalismo mental paz de espirito desapego",
    audioId: "cc68622506d716689af28f354adfd010.wav"
  },
  {
    topic: "Biohacking",
    quote: "A exposição ao frio extremo por curtos períodos pode treinar o seu sistema cardiovascular e forjar uma <strong>imunidade inabalável</strong>.",
    author: "Terapia da Água Fria",
    searchQuery: "banho gelado beneficios imunidade wim hof",
    audioId: "5d951f8b85ad933a617b3866455488cf.wav"
  },
  {
    topic: "Filosofia",
    quote: "O ser humano é a única criatura do universo que precisa inventar um motivo para <strong>justificar a própria existência</strong>.",
    author: "Albert Camus",
    searchQuery: "mito de sisifo albert camus sentido da vida",
    audioId: "2a9d81325e5f9158f0a807ce02ad4713.wav"
  },
  {
    topic: "Economia",
    quote: "Os juros não são apenas o preço do dinheiro. São a prova tangível de que o <strong>tempo tem um valor financeiro</strong> exato.",
    author: "Matemática Financeira",
    searchQuery: "o tempo e dinheiro valor do dinheiro no tempo",
    audioId: "36177eef7f469d1f5b35db0020befb39.wav"
  },
  {
    topic: "Liderança",
    quote: "Líderes fracos exigem obediência através do medo. Líderes fortes conquistam lealdade servindo e <strong>protegendo as suas equipes</strong>.",
    author: "Liderança Servidora",
    searchQuery: "lideranca servidora como inspirar pessoas simon sinek",
    audioId: "bc3942a247c44a9bc6ce4883ba6048b6.wav"
  },
  {
    topic: "Psicologia",
    quote: "A depressão muitas vezes não é apenas uma tristeza profunda. É uma falha aguda do cérebro em imaginar um <strong>futuro diferente do presente</strong>.",
    author: "Psiquiatria Clínica",
    searchQuery: "neurobiologia da esperanca depressao e visao de futuro",
    audioId: "e6eac32a6b89349590d8deef07699e48.wav"
  },
  {
    topic: "Genética",
    quote: "Não somos os mestres da evolução. Somos apenas veículos temporários que os nossos genes usam para <strong>garantir a própria imortalidade</strong>.",
    author: "O Gene Egoísta",
    searchQuery: "richard dawkins gene egoista proposito da evolucao",
    audioId: "8960b49d6ccdc19c10b8d6aa13d6fe29.wav"
  },
  {
    topic: "Hábitos",
    quote: "Cada vez que você faz uma escolha difícil e correta, você deposita um voto na urna da <strong>nova identidade</strong> que deseja construir.",
    author: "Construção de Caráter",
    searchQuery: "identidade e habitos pequenas vitorias james clear",
    audioId: "869b0f60e7b8a2f22f8a5caf8ebc2ba5.wav"
  },
  {
    topic: "Tecnologia",
    quote: "A verdadeira inteligência artificial não vai tentar nos destruir, ela simplesmente vai operar em uma escala onde a nossa existência <strong>seja irrelevante</strong>.",
    author: "Riscos Existenciais",
    searchQuery: "riscos da inteligencia artificial superinteligencia",
    audioId: "dd980836c5e2e24f173dc2ea844721b3.wav"
  },
  {
    topic: "Criatividade",
    quote: "Escrever é o único jeito humano de extrair um pensamento bagunçado da mente e <strong>ancorá-lo na realidade física</strong>.",
    author: "Psicologia da Escrita",
    searchQuery: "escrever para pensar melhor externalizacao cognitiva",
    audioId: "0a6331d3f54499320b3e9e514a3d308e.wav"
  },
  {
    topic: "Tempo",
    quote: "Nós gastamos a vida toda tentando ganhar dinheiro, apenas para descobrir na velhice que o dinheiro só serve para tentar <strong>comprar mais tempo</strong>.",
    author: "Reflexão sobre a Vida",
    searchQuery: "dinheiro e tempo arrependimentos da vida",
    audioId: "329373694c4e1a561a3ca5ea89735fc3.wav"
  },
  {
    topic: "Biologia",
    quote: "As árvores de uma mesma floresta dividem a luz do sol de forma inteligente para que <strong>toda a comunidade sobreviva</strong>.",
    author: "Inteligência da Natureza",
    searchQuery: "crown shyness timidez das copas inteligencia das arvores",
    audioId: "75d6672867cae20a190d2bc31fb02123.wav"
  },
  {
    topic: "Marketing",
    quote: "A atenção humana é mais volátil do que qualquer mercado de ações. Quem controla a atenção das massas, detém o <strong>monopólio do mundo moderno</strong>.",
    author: "Economia da Atenção",
    searchQuery: "economia da atencao como prender publico midias",
    audioId: "086136e5cc792b21003a7ca6ca0970fc.wav"
  },
  {
    topic: "Aprendizado",
    quote: "O maior inimigo da maestria não é o fracasso. É o tédio avassalador que surge quando as coisas começam a <strong>ficar fáceis demais</strong>.",
    author: "Psicologia da Performance",
    searchQuery: "estado de flow superando o tedio maestria",
    audioId: "2eed66532eee970ee8a5f9fcad708310.wav"
  },
  {
    topic: "Sociedade",
    quote: "As leis de trânsito só funcionam porque todos nós compartilhamos uma <strong>ficção mútua</strong> de que elas são reais.",
    author: "Antropologia",
    searchQuery: "harari sapiens realidades imaginadas ordem social",
    audioId: "e1ed0a16ee64b672de1a8ea8cfa45219.wav"
  },
  {
    topic: "Matemática",
    quote: "A beleza dos fractais reside no fato de que a complexidade do universo pode nascer a partir de uma <strong>equação simples repetida infinitamente</strong>.",
    author: "Geometria Fractal",
    searchQuery: "fractais na natureza matematica mandelbrot complexidade",
    audioId: "32cb7bc83c836a348d84a973a235e720.wav"
  },
  {
    topic: "Foco",
    quote: "Quando você diz 'sim' para um pedido qualquer, está dizendo 'não' automaticamente para <strong>algo que realmente importa</strong>.",
    author: "Gestão do Tempo",
    searchQuery: "o poder do nao essencialismo greg mckeown foco",
    audioId: "7eef7d8467d69888aa81312c86831488.wav"
  },
];
