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
  {
    topic: "Modelos Mentais",
    quote: "Um modelo mental é como um aplicativo para o seu cérebro. Quem tem mais modelos, enxerga o mundo em <strong>alta resolução</strong>.",
    author: "Pensamento Crítico",
    searchQuery: "modelos mentais charlie munger tomada de decisao",
    audioId: "e4c72c1789b7c587c3c8b96e0943961e.wav"
  },
  {
    topic: "Biologia Evolutiva",
    quote: "Seu corpo não foi feito para a abundância. A obesidade moderna é apenas a sua biologia pré-histórica <strong>fazendo o trabalho dela</strong>.",
    author: "Nutrição e Evolução",
    searchQuery: "ambiente obesogenico evolucao humana dieta",
    audioId: "7d8688c7bb53d3a9a2179166f6f5c886.wav"
  },
  {
    topic: "Neurociência",
    quote: "A memória não é uma fita cassete que você reproduz. Cada vez que você lembra de algo, o seu cérebro <strong>reescreve a memória</strong>.",
    author: "Funcionamento Cerebral",
    searchQuery: "falsas memorias neurociencia de como o cerebro lembra",
    audioId: "df71eed52a00b4a44e8d3a1f43d72f0a.wav"
  },
  {
    topic: "Comportamento",
    quote: "As pessoas não mudam quando ouvem um bom argumento. Elas mudam quando sentem que a velha identidade <strong>não serve mais</strong>.",
    author: "Psicologia da Mudança",
    searchQuery: "mudanca de identidade formacao de habitos cognitivos",
    audioId: "d65d0cb3240cdf3da2208ec44c706715.wav"
  },
  {
    topic: "Economia",
    quote: "O lucro de uma empresa é a recompensa que a sociedade dá por ela ter <strong>resolvido um problema difícil</strong>.",
    author: "Capitalismo e Valor",
    searchQuery: "teoria do lucro valor agregado mercado",
    audioId: "04c141c1bce4f9f4ae01ac020fcd6694.wav"
  },
  {
    topic: "Saúde",
    quote: "O músculo não cresce durante o treino. Ele cresce durante o sono e o descanso, quando você <strong>não está fazendo nada</strong>.",
    author: "Fisiologia do Exercício",
    searchQuery: "hipertrofia e descanso anabolismo sono profundo",
    audioId: "1edb6874568bf0259f2d1dbccfa76c69.wav"
  },
  {
    topic: "Cibernética",
    quote: "A internet não é uma rede de computadores. É uma rede de <strong>mentes humanas</strong> conectadas por cabos submarinos.",
    author: "Redes Complexas",
    searchQuery: "rede neural global internet como organismo vivo",
    audioId: "e6c3bcb6d70c51a5862aba085b90d876.wav"
  },
  {
    topic: "Foco",
    quote: "A diferença entre os amadores e os mestres é a capacidade de suportar o <strong>tédio infinito</strong> da prática diária.",
    author: "Psicologia da Performance",
    searchQuery: "regra das 10 mil horas tedio e maestria",
    audioId: "51c8013543b7026cf7801cd0276cff8a.wav"
  },
  {
    topic: "Estratégia",
    quote: "Táticas dizem o que fazer no campo de batalha. A estratégia diz se você deveria <strong>estar no campo de batalha</strong> em primeiro lugar.",
    author: "Arte da Guerra",
    searchQuery: "diferenca entre tatica e estrategia sun tzu",
    audioId: "c3492aa202021eba5d7989f7aae93359.wav"
  },
  {
    topic: "Estoicismo",
    quote: "Você tem poder sobre a sua mente, não sobre os eventos externos. Perceba isso, e você encontrará a <strong>força verdadeira</strong>.",
    author: "Marco Aurélio",
    searchQuery: "controle emocional estoicismo marco aurelio meditaçoes",
    audioId: "9bd480f434defe6147bec01ba46bf1cb.wav"
  },
  {
    topic: "Inovação",
    quote: "Se você quer construir um barco, não dê ordens aos homens para juntar madeira. Ensine-os a ansiar pela <strong>vastidão do mar</strong>.",
    author: "Liderança Criativa",
    searchQuery: "antoine de saint exupery lideranca e proposito",
    audioId: "ba3e23d57be10e7ad2f79d4d074c2322.wav"
  },
  {
    topic: "Física Clássica",
    quote: "O tempo é relativo. Mas a entropia, a flecha que empurra tudo para a destruição e o caos, é a única <strong>certeza absoluta do universo</strong>.",
    author: "Termodinâmica",
    searchQuery: "flecha do tempo entropia decaimento",
    audioId: "1a1e6f3df8293a401c77140a8767ccda.wav"
  },
  {
    topic: "Psicologia",
    quote: "A síndrome do impostor não afeta os incompetentes. Ela é um sintoma claro de pessoas que estão empurrando os <strong>seus próprios limites</strong>.",
    author: "Saúde Mental",
    searchQuery: "sindrome do impostor como superar efeito dunning kruger",
    audioId: "2165a8846a6838ff20185cc7f18496e1.wav"
  },
  {
    topic: "Minimalismo",
    quote: "A verdadeira liberdade não é o poder de comprar tudo o que você quer. É a capacidade de não querer as coisas que você <strong>não precisa</strong>.",
    author: "Filosofia do Desapego",
    searchQuery: "minimalismo liberdade financeira consumo",
    audioId: "74ce05ba3186a43c49dc613707ca6914.wav"
  },
  {
    topic: "Inteligência Artificial",
    quote: "Os computadores são incrivelmente rápidos, precisos e estúpidos. Os seres humanos são incrivelmente lentos, imprecisos e <strong>brilhantes</strong>.",
    author: "Futuro da Computação",
    searchQuery: "ia vs inteligencia humana limites da tecnologia",
    audioId: "a29a1d78bfd0eaf112746f9379b00964.wav"
  },
  {
    topic: "Sociedade",
    quote: "As cidades são os maiores aceleradores de partículas humanas já criados. Elas forçam ideias a colidir para <strong>criar inovação</strong>.",
    author: "Urbanismo",
    searchQuery: "importancia das cidades colisao de ideias inovacao",
    audioId: "ea7b48ea0950fcea280c1f9c8f7be973.wav"
  },
  {
    topic: "Aprendizado",
    quote: "O cérebro prefere a ilusão da competência. Ler e grifar um texto parece estudo, mas é apenas <strong>reconhecimento visual passivo</strong>.",
    author: "Técnicas de Estudo",
    searchQuery: "ilusao de competencia active recall grifar textos",
    audioId: "a4abff517301636db4dce66c3006f0a6.wav"
  },
  {
    topic: "Dinheiro",
    quote: "A independência financeira não compra coisas. Ela compra o ativo mais raro e cobiçado da modernidade: a <strong>soberania sobre o seu tempo</strong>.",
    author: "Soberania Financeira",
    searchQuery: "liberdade financeira tempo vs dinheiro",
    audioId: "1b14cc3e98ed111e8037d9ffb312f456.wav"
  },
  {
    topic: "Viés Cognitivo",
    quote: "Nós julgamos os outros pelas ações deles, mas julgamos a nós mesmos pelas <strong>nossas intenções</strong>.",
    author: "Erro Fundamental de Atribuição",
    searchQuery: "erro fundamental de atribuicao psicologia social",
    audioId: "a87bd091adb6c8490cb6ca44490dc1c3.wav"
  },
  {
    topic: "Genética",
    quote: "Apenas 2% do seu DNA codifica proteínas. O resto não é lixo genético, é um manual de instruções sutil que <strong>regula toda a sua vida</strong>.",
    author: "Biologia Molecular",
    searchQuery: "dna lixo epigenetica biologia moderna",
    audioId: "56e63ccfa1683d78d5c613de491ed7bf.wav"
  },
  {
    topic: "Evolução",
    quote: "O açúcar é tão viciante quanto drogas pesadas porque, há cem mil anos, encontrar algo doce era um <strong>bilhete dourado de sobrevivência</strong>.",
    author: "Nutrição Evolutiva",
    searchQuery: "vicio em acucar evolucao paladar",
    audioId: "a0148ee4c0341df887f71cc0c76317c6.wav"
  },
  {
    topic: "Astronomia",
    quote: "O fato de estarmos sozinhos ou acompanhados no universo são duas hipóteses <strong>igualmente aterrorizantes</strong>.",
    author: "Paradoxo de Fermi",
    searchQuery: "paradoxo de fermi alienigenas vida fora da terra",
    audioId: "49e9d99d0be1bde225641754ba4143a3.wav"
  },
  {
    topic: "Liderança",
    quote: "Se você é a pessoa mais inteligente da sala, então você está definitivamente na <strong>sala errada</strong>.",
    author: "Crescimento Pessoal",
    searchQuery: "rodear-se de pessoas melhores networking",
    audioId: "75b91bc57a5556785e67329cb58df5c2.wav"
  },
  {
    topic: "Resiliência",
    quote: "A ferver da água amolece a batata e endurece o ovo. Não importa o tamanho da crise, importa de <strong>que material você é feito</strong>.",
    author: "Inteligência Emocional",
    searchQuery: "analogia da resiliencia batata ovo cafe adaptacao",
    audioId: "662e3af9f86afba46019f18c458ad758.wav"
  },
  {
    topic: "Tecnologia",
    quote: "Toda tecnologia suficientemente avançada é indistinguível da <strong>magia</strong>.",
    author: "Arthur C. Clarke",
    searchQuery: "leis de clarke impacto da tecnologia avancada",
    audioId: "ca0e1f4109467101a160c01ff301e992.wav"
  },
  {
    topic: "Marketing",
    quote: "As pessoas não compram brocas de um quarto de polegada. Elas compram <strong>buracos de um quarto de polegada</strong>.",
    author: "Gestão de Produtos",
    searchQuery: "jobs to be done marketing focos na solucao",
    audioId: "ecefc396fafb99c19c08183fe79221d6.wav"
  },
  {
    topic: "Filosofia",
    quote: "O homem nasce livre, mas por toda parte encontra-se aprisionado pelos sistemas que ele mesmo ajudou a <strong>construir e validar</strong>.",
    author: "Contrato Social",
    searchQuery: "rousseau liberdade contrato social sistemas opressores",
    audioId: "95c6864331dab789d9088d9fada56c42.wav"
  },
  {
    topic: "Comunicação",
    quote: "A maior prova de inteligência não é ter a resposta certa. É conseguir fazer a <strong>pergunta certa</strong> na hora exata.",
    author: "Maiêutica",
    searchQuery: "poder das perguntas socrates maieutica",
    audioId: "ccdbeb95bedb799366309df87fbcd0b4.wav"
  },
  {
    topic: "Matemática",
    quote: "Os números exponenciais enganam o cérebro humano. Uma dobra a mais na curva, e o que era inofensivo se torna <strong>incontrolável</strong>.",
    author: "Crescimento Exponencial",
    searchQuery: "funcoes exponenciais ilusao humana previsao de crises",
    audioId: "7c491e90e83f944e8f1851aa30e90b6d.wav"
  },
  {
    topic: "Saúde Mental",
    quote: "A ansiedade é o pagamento antecipado de uma dívida que você talvez <strong>nunca chegue a contrair</strong>.",
    author: "Gestão da Ansiedade",
    searchQuery: "sofrimento por antecipacao ansiedade psicologia",
    audioId: "6c99d8a04053f02700b8c2c2af7278d7.wav"
  },
  {
    topic: "Biohacking",
    quote: "A luz solar nos primeiros 30 minutos da manhã regula todo o seu ciclo circadiano, sendo a âncora natural da <strong>sua biologia humana</strong>.",
    author: "Ritmo Circadiano",
    searchQuery: "ciclo circadiano andrew huberman sol da manha",
    audioId: "2c2447d5c4e37454ed0add3acae69d2f.wav"
  },
  {
    topic: "História",
    quote: "O colapso das grandes civilizações raramente vem por ataques externos. Eles começam com a <strong>apodrecimento lento das suas próprias instituições</strong>.",
    author: "Queda de Impérios",
    searchQuery: "como imperios caem historia da civilizacao roma",
    audioId: "f63a0468a285fbd556e8c37d74a13e9b.wav"
  },
  {
    topic: "Metaverso",
    quote: "O mundo virtual não vai substituir o físico. Ele vai se sobrepor a ele, criando uma realidade mista onde a tela <strong>desaparece na nossa visão</strong>.",
    author: "Realidade Aumentada",
    searchQuery: "computacao espacial realidade mista futuro",
    audioId: "d6d84ad86ca0ca7f878d43db3797a577.wav"
  },
  {
    topic: "Estratégia",
    quote: "A perfeição é o inimigo do bom. Lançar algo imperfeito hoje é infinitamente melhor do que lançar algo <strong>perfeito no ano que vem</strong>.",
    author: "Metodologia Ágil",
    searchQuery: "feito é melhor que perfeito mvp startup enxuta",
    audioId: "06d0e269e10541a01035881de28c368f.wav"
  },
  {
    topic: "Produtividade",
    quote: "A sua caixa de entrada de e-mails não é sua lista de tarefas. É a lista de prioridades <strong>das outras pessoas</strong> para a sua vida.",
    author: "Gestão do Tempo",
    searchQuery: "gerenciamento de e-mails prioridades essencialismo",
    audioId: "22e4f7f50daa30201c78ce50736bfc7f.wav"
  },
  {
    topic: "Cultura",
    quote: "Mitos, religiões e nações não existem no mundo físico. Eles são construções imaginárias que permitem milhões de estranhos <strong>cooperarem em massa</strong>.",
    author: "Antropologia Evolutiva",
    searchQuery: "yuval harari sapiens cooperacao humana ficcao",
    audioId: "6a495d2797fcbedf3c4fd96c4485ccb7.wav"
  },
  {
    topic: "Criatividade",
    quote: "Bons artistas copiam. Grandes artistas <strong>roubam a essência</strong> e a transformam em algo irreconhecível.",
    author: "Inovação Artística",
    searchQuery: "picasso criatividade originalidade inspiracao",
    audioId: "65efebe31a761f37c8e2cbc765e1e84a.wav"
  },
  {
    topic: "Natureza",
    quote: "As formigas constroem impérios, cultivam fungos e travam guerras complexas. A verdadeira inteligência em colônia nasce sem a necessidade de um <strong>líder central</strong>.",
    author: "Inteligência de Enxame",
    searchQuery: "inteligencia coletiva formigas autoorganizacao",
    audioId: "3f16eac8e61d1a1e5c41f36fac4a64b8.wav"
  },
  {
    topic: "Física Quântica",
    quote: "O teletransporte quântico não move matéria. Ele move <strong>informação pura</strong>, destruindo o original para recriá-lo à distância.",
    author: "Emaranhamento Quântico",
    searchQuery: "teletransporte quantico como funciona informacao",
    audioId: "935ce55fcc6011c0cf696ef7280ecd5e.wav"
  },
  {
    topic: "Psicologia",
    quote: "Nós preferimos o sofrimento familiar do que uma felicidade <strong>desconhecida e incerta</strong>.",
    author: "Zona de Conforto",
    searchQuery: "por que ficamos na zona de conforto psicanalise",
    audioId: "4091d6fdb2ffd8420bd0459f46e6f84b.wav"
  },
  {
    topic: "Negócios",
    quote: "Competir no mesmo mercado destruindo preços é um jogo de perdedores. O segredo é nadar para o oceano azul e tornar a concorrência <strong>irrelevante</strong>.",
    author: "Estratégia Empresarial",
    searchQuery: "estrategia do oceano azul inovacao de valor",
    audioId: "4e12f81e660af35ec2e50d2a230c3d24.wav"
  },
  {
    topic: "Evolução",
    quote: "Sua ansiedade moderna vem de um cérebro projetado para evitar ursos e leões, mas que hoje é acionado por <strong>notificações e boletos</strong>.",
    author: "Descompasso Evolutivo",
    searchQuery: "mismatch evolutivo ansiedade celular notificacoes",
    audioId: "01d29a4c79ae95f98ee8fa57885b2849.wav"
  },
  {
    topic: "Conhecimento",
    quote: "Informação não é conhecimento. E conhecimento não é sabedoria. Sabedoria é a arte de saber o que <strong>ignorar completamente</strong>.",
    author: "Epistemologia",
    searchQuery: "era da informacao como ter sabedoria filtrar dados",
    audioId: "e1b7bd07ee6fada44e2a9c227543d427.wav"
  },
  {
    topic: "Ecologia",
    quote: "Nenhuma espécie pode crescer indefinidamente em um ambiente de recursos finitos. A Terra é uma nave espacial fechada <strong>sem saídas de emergência</strong>.",
    author: "Limites do Crescimento",
    searchQuery: "sustentabilidade ecologia teoria dos sistemas finitos",
    audioId: "9d4645e1ad8fabeb9b5c3e14db9614d4.wav"
  },
  {
    topic: "Dinheiro",
    quote: "O mercado financeiro é o único lugar no mundo onde pessoas chegam de Rolls-Royce para pedir conselhos a pessoas que chegaram <strong>de metrô</strong>.",
    author: "Warren Buffett",
    searchQuery: "wall street ilusoes do mercado ironia warren buffett",
    audioId: "bb6b670b6bd8a58084dae73b4eadf3ca.wav"
  },
  {
    topic: "Tecnologia",
    quote: "Você não pode culpar a gravidade por as pessoas caírem. E não pode culpar os smartphones pelas pessoas se esquecerem de <strong>viver a vida real</strong>.",
    author: "Ética Digital",
    searchQuery: "responsabilidade individual tecnologia redes sociais",
    audioId: "d21089a044c003e2e9301fd5cd4c9430.wav"
  },
  {
    topic: "Motivação",
    quote: "Se o seu objetivo é muito fácil, você se entedia. Se é muito difícil, você desiste. A zona de fluxo vive exatamente no limite da <strong>sua capacidade atual</strong>.",
    author: "Teoria do Flow",
    searchQuery: "estado de flow mihaly csikszentmihalyi desafio vs habilidade",
    audioId: "b1129eb8c406e555a653742b497f58bf.wav"
  },
  {
    topic: "Design",
    quote: "Design não é apenas como o produto se parece e o que se sente. Design é essencialmente <strong>como o produto funciona</strong>.",
    author: "Steve Jobs",
    searchQuery: "steve jobs o que e design funcionalidade UX",
    audioId: "488285610ec276b1e817694a78c8c0bd.wav"
  },
  {
    topic: "Sociedade",
    quote: "Em épocas de crise econômica severa, as sociedades sempre trocam parte de suas liberdades individuais pela promessa de <strong>segurança estatal</strong>.",
    author: "Ciência Política",
    searchQuery: "liberdade vs seguranca politica totalitarismo autoritarismo",
    audioId: "c36224685824b8a47e9aab044bf599f4.wav"
  },
  {
    topic: "Física",
    quote: "A escuridão não é uma força. Ela é apenas a <strong>ausência absoluta de luz</strong>. O frio não existe, é apenas a ausência de calor.",
    author: "Natureza da Realidade",
    searchQuery: "ausencia fisica fenomenos termodinamica luz",
    audioId: "ed268f9947fa4da8c8542cdcd6f7e404.wav"
  },
  {
    topic: "Pensamento Sistêmico",
    quote: "Para resolver um problema complexo, você não foca na peça quebrada. Você foca nas <strong>relações entre as peças</strong> do sistema inteiro.",
    author: "Teoria Geral dos Sistemas",
    searchQuery: "pensamento sistemico complexidade como resolver problemas",
    audioId: "cce070561f232e02eab57d6c36273dee.wav"
  },
  {
    topic: "Neurociência",
    quote: "O tédio não é uma emoção inútil. Ele é o estado padrão do cérebro sinalizando que é hora de <strong>começar a criar algo novo</strong>.",
    author: "Psicologia da Criatividade",
    searchQuery: "importancia do tedio neurociencia criatividade",
    audioId: "f511b71940b267402863c050b86f5d7b.wav"
  },
  {
    topic: "Biologia",
    quote: "O envelhecimento não é um desgaste mecânico. É o acúmulo gradual de <strong>erros de cópia</strong> no nível mais fundamental do seu DNA.",
    author: "Biogerontologia",
    searchQuery: "como o corpo envelhece erro de dna telomeros",
    audioId: "30914262d8319c0d7ad672bf8be60852.wav"
  },
  {
    topic: "Estratégia",
    quote: "A pressa é o inimigo mortal da precisão. As decisões mais geniais são tomadas por mentes que aprenderam a <strong>desacelerar o tempo</strong>.",
    author: "Tomada de Decisão",
    searchQuery: "tomada de decisao sob pressao desacelerar pensamento daniel kahneman",
    audioId: "3855e4be946898046ed7a19c5e1ea0c2.wav"
  },
  {
    topic: "Finanças",
    quote: "O maior risco dos investimentos não é o crash do mercado. É a inflação invisível que <strong>derrete o seu dinheiro</strong> lentamente na conta bancária.",
    author: "Economia Comportamental",
    searchQuery: "risco da inflacao como proteger o dinheiro",
    audioId: "c1cb27db7515955c6dc0ac68f398cd37.wav"
  },
  {
    topic: "Psicologia",
    quote: "A raiva não tem a ver com o que aconteceu com você. A raiva é a dor de ver a realidade quebrando a <strong>expectativa que você tinha criado</strong>.",
    author: "Terapia Cognitivo-Comportamental",
    searchQuery: "gestao da raiva frustracao expectativas psicologia",
    audioId: "7f4f85b692c236a6ea33d2c8b2deb7ac.wav"
  },
  {
    topic: "Astronomia",
    quote: "Os buracos negros não sugam tudo como aspiradores. Eles apenas distorcem a realidade tão profundamente que até a <strong>luz perde a capacidade de fugir</strong>.",
    author: "Astrofísica",
    searchQuery: "como funciona um buraco negro gravidade espaco tempo",
    audioId: "81ee37c74d35ea590e7c96793b614e02.wav"
  },
  {
    topic: "Biohacking",
    quote: "Fazer jejum intermitente não é apenas sobre emagrecer. É sobre ativar o processo de autofagia celular, onde o seu corpo literalmente <strong>devora as células velhas e doentes</strong>.",
    author: "Biologia Metabólica",
    searchQuery: "autofagia celular jejum intermitente antienvelhecimento",
    audioId: "2193247b2c8633bba430a090ca87883d.wav"
  },
  {
    topic: "Inovação",
    quote: "O primeiro celular da Apple não foi feito copiando a Nokia. A disrupção verdadeira acontece quando você ousa <strong>ignorar o líder do mercado</strong>.",
    author: "Estratégia do Oceano Azul",
    searchQuery: "inovacao disruptiva como ignorar a concorrencia",
    audioId: "3dd4db93c41880a15d7a798b9da52ee3.wav"
  },
  {
    topic: "Estoicismo",
    quote: "A pessoa que tem medo da pobreza não é livre. A verdadeira liberdade começa quando você aprende a <strong>desejar apenas o necessário</strong>.",
    author: "Sêneca",
    searchQuery: "seneca estoicismo pobreza liberdade financeira",
    audioId: "9e927c6db6707b2a5fc2a02bd9aa532a.wav"
  },
  {
    topic: "Liderança",
    quote: "Um chefe exige obediência. Um líder cria uma visão tão poderosa que as pessoas obedecem porque <strong>querem construir esse futuro juntas</strong>.",
    author: "Gestão Transformacional",
    searchQuery: "lideranca transformacional visao de futuro inspirar equipe",
    audioId: "6db1f2ac7f595e8c0f55a46761eddb41.wav"
  },
  {
    topic: "Futurismo",
    quote: "Estamos construindo inteligências alienígenas de silício na Terra, não para serem nossos escravos, mas para se tornarem nossos <strong>coautores na evolução cósmica</strong>.",
    author: "Singularidade Tecnológica",
    searchQuery: "futuro da ia singularidade evolucao cibernetica",
    audioId: "07e6881da5a3c43b3a89ad6afe64385d.wav"
  },
  {
    topic: "Produtividade",
    quote: "O perfeccionismo é apenas o medo da rejeição usando um terno bem cortado. <strong>Lance rápido, erre rápido e concerte rápido</strong>.",
    author: "Cultura Startup",
    searchQuery: "perfeccionismo vs agilidade cultura de startup",
    audioId: "0fb16d25b22d68ebc22fef7e855ab035.wav"
  },
  {
    topic: "Antropologia",
    quote: "O segredo do sucesso humano não foi o tamanho do cérebro ou a ferramenta de pedra. Foi a fofoca, a capacidade de <strong>falar sobre coisas que não existem</strong>.",
    author: "História Evolutiva",
    searchQuery: "yuval noah harari poder da fofoca evolucao linguagem",
    audioId: "7f07ffa43827a5cedb0ab2b61cadff6e.wav"
  },
  {
    topic: "Minimalismo",
    quote: "Não acumule coisas físicas para preencher vazios emocionais. Se você tem que organizar a bagunça todo fim de semana, você tem <strong>coisas demais na sua vida</strong>.",
    author: "Essencialismo Prático",
    searchQuery: "psicologia do acumulo desapego material minimalismo",
    audioId: "4f532828f9c979056f9c49501a7e8cb1.wav"
  },
  {
    topic: "Comunicação",
    quote: "A maior mentira sobre conversas é achar que você só escuta com os ouvidos. O verdadeiro ouvinte escuta com os olhos e <strong>com a postura do corpo</strong>.",
    author: "Linguagem Não Verbal",
    searchQuery: "escuta ativa linguagem corporal persuasao",
    audioId: "1d5ea295a152d1b519cfece3bb9e251e.wav"
  },
  {
    topic: "Física Quântica",
    quote: "No reino quântico, o tempo não é uma linha reta. As partículas se comportam como se já soubessem qual será a <strong>sua decisão no futuro</strong>.",
    author: "Entrelaçamento Retrógrado",
    searchQuery: "mecanica quantica e o tempo o experimento de fenda",
    audioId: "d1687480a3bd18e9cf406d33cbf05927.wav"
  },
  {
    topic: "Educação",
    quote: "A escola moderna treina crianças para passarem em provas que um algoritmo de IA resolve em <strong>três segundos</strong>.",
    author: "Futuro do Aprendizado",
    searchQuery: "educacao moderna obsoleta ia na escola",
    audioId: "13ac9f0945e2503be61f7b94b4a72791.wav"
  },
  {
    topic: "Psicologia Social",
    quote: "O conformismo é um vírus silencioso. Se você cercar um gênio de pessoas medíocres, ele começará a duvidar da sua <strong>própria sanidade</strong>.",
    author: "Efeito de Manada",
    searchQuery: "conformismo experiencia de asch pressao social",
    audioId: "eac6ebc302001f3984f91d4c4c67d500.wav"
  },
  {
    topic: "Genética",
    quote: "A sua herança genética não é o seu roteiro de vida. Ela é apenas o <strong>baralho de cartas</strong> que lhe foi dado no início do jogo.",
    author: "Comportamento Humano",
    searchQuery: "genetica vs ambiente epigenetica destino",
    audioId: "23e696502248dc6bf61a5033b69b1211.wav"
  },
  {
    topic: "Marketing",
    quote: "Não venda a furadeira de alto impacto. Venda o <strong>sorriso de satisfação</strong> do cliente ao ver o quadro pendurado perfeitamente na parede da sala.",
    author: "Comportamento do Consumidor",
    searchQuery: "vender beneficios emocoes marketing estrategico",
    audioId: "121abc1451db16fc706b6ae0bab2c617.wav"
  },
  {
    topic: "Ecologia",
    quote: "A natureza não produz lixo. O conceito de rejeito irreciclável é uma anomalia <strong>exclusiva da espécie humana</strong>.",
    author: "Design Circular",
    searchQuery: "economia circular biomimetica sustentabilidade real",
    audioId: "3bfbe1bfb731a0d103b114acf52d9b74.wav"
  },
  {
    topic: "Hábitos",
    quote: "Os grandes fracassos raramente vêm de um grande erro. Eles são o acúmulo invisível de <strong>milhares de pequenas más escolhas diárias</strong>.",
    author: "Efeito Composto Diário",
    searchQuery: "efeito composto mas escolhas james clear pequenos erros",
    audioId: "2e8c2922211ebeee3541f646d83051bf.wav"
  },
  {
    topic: "Consciência",
    quote: "Não somos computadores feitos de carne. A consciência humana continua sendo o maior <strong>mistério indecifrável da ciência moderna</strong>.",
    author: "Filosofia da Mente",
    searchQuery: "o problema dificil da consciencia ciencia neurobiologia",
    audioId: "07bddb928350de6554e2a5f6582c13cb.wav"
  },
  {
    topic: "Matemática",
    quote: "A aleatoriedade pura quase não existe na vida real. Tudo que parece sorte é geralmente o resultado estatístico da <strong>falta de informação suficiente</strong>.",
    author: "Teoria das Probabilidades",
    searchQuery: "aleatoriedade vs padroes ignorancia humana estatistica",
    audioId: "b5f16e5333d2de5374aac2f8514d0f77.wav"
  },
  {
    topic: "Dinheiro",
    quote: "Riqueza é o número no banco. Liberdade é a capacidade de acordar de manhã e dizer: 'Eu posso fazer <strong>o que eu quiser hoje</strong>'.",
    author: "Psicologia da Riqueza",
    searchQuery: "diferenca entre dinheiro e liberdade ricaço x rico",
    audioId: "ac36fc39fa2c8cd954acaa5595bb2316.wav"
  },
  {
    topic: "Filosofia",
    quote: "Não acredite em tudo que você pensa. O cérebro é uma máquina de fabricar <strong>mentiras convincentes para proteger o seu ego</strong>.",
    author: "Vieses Cognitivos",
    searchQuery: "autoengano vieses filosoficos ceticismo interno",
    audioId: "9e3d53b8b1874849d95eb97fb0c67c27.wav"
  },
  {
    topic: "Geopolítica",
    quote: "As guerras modernas não serão travadas por soldados na lama. Elas serão decididas por inteligências artificiais destruindo silenciosamente a <strong>infraestrutura bancária do inimigo</strong>.",
    author: "Guerra Cibernética",
    searchQuery: "ciberguerra geopolitica ataque as infraestruturas digitais",
    audioId: "4a222140a7d66ea9fe244aea65fa31ca.wav"
  },
  {
    topic: "Estratégia",
    quote: "A simplicidade é o grau mais alto da sofisticação. Fazer algo complicado é fácil; fazer algo complexo <strong>parecer óbvio e elegante requer genialidade</strong>.",
    author: "Design de Soluções",
    searchQuery: "simplicidade leonardo da vinci genialidade no design",
    audioId: "a03f71167f7dff2a1a1d0320882ddd1f.wav"
  },
  {
    topic: "Foco",
    quote: "O seu celular não é uma ferramenta neutra. Ele é um caça-níqueis de bolso projetado por engenheiros brilhantes para <strong>sequestrar o seu sistema dopaminérgico</strong>.",
    author: "Neurobiologia do Vício",
    searchQuery: "vicio em telas celular dopamina engenharia atencao",
    audioId: "61478081495ea09460c543f686edf0c3.wav"
  },
  {
    topic: "Biologia",
    quote: "A mitocôndria, que fornece toda a sua energia, tem o próprio DNA alienígena. Ela foi uma bactéria que o nosso ancestral primitivo <strong>engoliu e decidiu escravizar bilhões de anos atrás</strong>.",
    author: "Teoria Endossimbiótica",
    searchQuery: "mitocondria origem das celulas biologia fantastica",
    audioId: "2b448fbb3420ea64e0e56886542c0b46.wav"
  },
  {
    topic: "Liderança",
    quote: "Microgerenciamento não melhora o trabalho. Ele destrói o <strong>espírito da iniciativa</strong> e transforma profissionais brilhantes em meros executores de ordens.",
    author: "Comportamento Organizacional",
    searchQuery: "maleficios do microgerenciamento delegar tarefas",
    audioId: "ec54bece0bab08781a9ded5a582ff727.wav"
  },
  {
    topic: "Inteligência Emocional",
    quote: "O perdão não é um presente que você dá para quem te machucou. É a chave que você usa para destrancar a <strong>sua própria prisão mental</strong>.",
    author: "Saúde Emocional",
    searchQuery: "psicologia do perdao soltar rancor cura mental",
    audioId: "5fc8daf16768e7ba5f5158f2106ae6b5.wav"
  },
  {
    topic: "Criptografia",
    quote: "O segredo de não ter a sua privacidade violada não é usar senhas difíceis, é criptografar de forma que a sua senha seja a <strong>única chave matemática do universo</strong>.",
    author: "Segurança da Informação",
    searchQuery: "criptografia de ponta a ponta como proteger dados",
    audioId: "21ca9045c3254bd731a4c6ba49c11172.wav"
  },
  {
    topic: "Saúde",
    quote: "O músculo mais subestimado do seu corpo é o coração. Treine-o como você treinaria os bíceps, porque é ele que vai decidir <strong>se você vai viver para ver os seus netos</strong>.",
    author: "Condicionamento Cardiovascular",
    searchQuery: "importancia do cardio coracao musculo vo2max",
    audioId: "fc32b32935ad1b1404021c948585de46.wav"
  },
  {
    topic: "Motivação",
    quote: "Se a sua identidade está ancorada no seu cargo ou no seu status, uma demissão não será um problema logístico, será uma <strong>completa desintegração psicológica</strong>.",
    author: "Autoconhecimento",
    searchQuery: "identidade vs cargo perder o emprego logoterapia",
    audioId: "3030b1466d122b7bbf598ca7e60a9df9.wav"
  },
  {
    topic: "Cosmologia",
    quote: "O Big Bang não aconteceu em um ponto específico do espaço vazio. O Big Bang foi o momento exato em que o próprio espaço <strong>começou a existir e se esticar</strong>.",
    author: "Origem do Universo",
    searchQuery: "onde foi o big bang expansao do espaco",
    audioId: "bed1712f4f6289cfa10dcdfaf7233ac2.wav"
  },
  {
    topic: "Negócios",
    quote: "Um excelente plano mal executado não vale nada. Um plano medíocre executado com violência brutal e foco implacável quase sempre <strong>vence o jogo</strong>.",
    author: "Gestão de Execução",
    searchQuery: "estrategia vs execucao george patton planos perfeitos",
    audioId: "1e282a871e665ec844fd6c0cd9a18e8c.wav"
  },
  {
    topic: "Filosofia Zen",
    quote: "Lavar os pratos não é algo que você faz para ter pratos limpos depois. Você deve lavar os pratos para estar <strong>plenamente vivo enquanto lava os pratos</strong>.",
    author: "Mindfulness Ativo",
    searchQuery: "mindfulness de thich nhat hanh lavar a louca zen",
    audioId: "7112e4fe575768e0cc71f9f10685d219.wav"
  },
  {
    topic: "Ciência",
    quote: "O método científico é brilhante porque parte do princípio de que nós somos <strong>completamente estúpidos e propensos ao autoengano</strong>.",
    author: "Ceticismo Científico",
    searchQuery: "o que é metodo cientifico provar que estou errado ciencia",
    audioId: "dacde2e6881a69c65652efaf18ca8810.wav"
  },
  {
    topic: "Metaverso",
    quote: "As realidades virtuais do futuro não tentarão imitar a Terra perfeitamente. Elas vão projetar versões do universo onde até as <strong>leis da gravidade serão desenhadas ao nosso gosto</strong>.",
    author: "Ficção Especulativa",
    searchQuery: "metaverso criar realidades simulacoes futuras",
    audioId: "931386d73f529b4df79a6867519cd65b.wav"
  },
  {
    topic: "Evolução",
    quote: "O amor romântico não é apenas magia poética. É uma poderosa cola biológica projetada pela evolução para forçar pais primatas a <strong>ficarem juntos tempo suficiente para cuidar do filhote vulnerável</strong>.",
    author: "Química do Amor",
    searchQuery: "por que amamos antropologia do amor romantico filhos",
    audioId: "330be997a25404909784dbafd5d29cf8.wav"
  },
  {
    topic: "Aprendizado",
    quote: "Ler vinte livros de negócios não fará de você um CEO genial, do mesmo jeito que ler vinte livros de aerodinâmica não fará de você <strong>um avião</strong>.",
    author: "Prática Deliberada",
    searchQuery: "teoria vs pratica ler nao é fazer implementacao de conhecimento",
    audioId: "74305a66fabf4f17d58fa06adb7601b1.wav"
  },
  {
    topic: "Psicologia",
    quote: "A depressão nos diz que o futuro é impossível. A ansiedade nos diz que o futuro é aterrorizante. O objetivo da mente saudável não é focar no futuro, mas apenas <strong>ancorar-se profundamente no agora</strong>.",
    author: "Terapia de Aceitação",
    searchQuery: "diferenca entre depressao e ansiedade focar no presente",
    audioId: "a9cb4985958277f0eb3bf2ef835287a9.wav"
  },
  {
    topic: "Economia",
    quote: "O verdadeiro custo de um produto não é o valor na etiqueta. É a quantidade exata de vida que você teve que <strong>trocar para conseguir aquele dinheiro</strong>.",
    author: "Filosofia Econômica",
    searchQuery: "dinheiro e tempo de vida thoreau minimalismo",
    audioId: "0d856c0920d92e0c19d5944425a74384.wav"
  },
  {
    topic: "Criatividade",
    quote: "Mentes brilhantes não nascem originais. Elas apenas aprenderam a absorver dez vezes mais referências do que as mentes normais e a <strong>esconder muito bem as suas fontes</strong>.",
    author: "Criação Combinatória",
    searchQuery: "como ser original copie as referencias criatividade conectada",
    audioId: "744297c9a889dfb41bac0fe471f888d6.wav"
  },
  {
    topic: "Sociedade",
    quote: "Os tribunais da internet não buscam justiça e reparação de danos. Eles buscam o <strong>prazer primitivo e catártico do linchamento virtual</strong> em praça pública.",
    author: "Psicologia das Massas",
    searchQuery: "cultura do cancelamento psicologia linchamento virtual",
    audioId: "5265152958a96a01b1ade67c7b4317bc.wav"
  },
  {
    topic: "Física Quântica",
    quote: "A cor vermelha da rosa não existe no mundo exterior. A cor é apenas a sua mente iluminando um universo que, por fora, é <strong>inteiramente cego e escuro</strong>.",
    author: "Percepção da Realidade",
    searchQuery: "as cores existem fisica do espectro eletromagnetico neurociencia",
    audioId: "4f894f817408344927b3b179e603593f.wav"
  },
  {
    topic: "Nutrição",
    quote: "A indústria vende calorias vazias em pacotes superestimulantes, roubando a sua saúde presente para depois a indústria farmacêutica <strong>te vender o remendo crônico</strong> no futuro.",
    author: "Indústria Alimentícia",
    searchQuery: "processados vs in natura doencas cronicas comida de verdade",
    audioId: "f5dc7e5b9f34efe99947920afcd68cfc.wav"
  },
  {
    topic: "Produtividade",
    quote: "Descansar não é perder tempo. É afiar o machado. Quem não tem tempo para amolar a lâmina passará a vida inteira <strong>batendo em vão contra a árvore</strong>.",
    author: "Gestão do Descanso",
    searchQuery: "afiar o machado stephen covey descanso estrategico",
    audioId: "09cde819fc81d322a074132c245385e4.wav"
  },
  {
    topic: "Ciência Cognitiva",
    quote: "Você não enxerga o mundo com os olhos, você o enxerga com o cérebro. Seus olhos apenas captam fótons; <strong>é a sua mente que pinta a realidade</strong>.",
    author: "Neurologia da Percepção",
    searchQuery: "como o cerebro enxerga percepcao ilusao de optica",
    audioId: "e35eb93932a02ef5bfbb9925fb761e98.wav"
  },
  {
    topic: "Economia Comportamental",
    quote: "O dinheiro que você já gastou não deveria influenciar suas decisões futuras. Continuar em um erro só porque custou caro é o famoso <strong>Efeito do Custo Irrecuperável</strong>.",
    author: "Sunk Cost Fallacy",
    searchQuery: "falacia do custo irrecuperavel economia daniel kahneman",
    audioId: "146af5b79a996dc347459c1a626a48a0.wav"
  },
  {
    topic: "Biologia Evolutiva",
    quote: "O ser humano não evoluiu para ser feliz. Nós evoluímos para sobreviver e reproduzir. <strong>A felicidade é um hack que temos que forçar ativamente no sistema</strong>.",
    author: "Psicologia Evolucionista",
    searchQuery: "felicidade evolutiva sobrevivencia psicologia evolutiva",
    audioId: "e0d1a0daa80ccef38d9738d22f65234d.wav"
  },
  {
    topic: "Foco Profundo",
    quote: "Multitarefa é um mito biológico. Quando você tenta fazer duas coisas ao mesmo tempo, seu cérebro não divide a atenção, ele <strong>alterna histericamente entre as tarefas</strong>, perdendo QI no processo.",
    author: "Deep Work",
    searchQuery: "mito da multitarefa cal newport trabalho focado",
    audioId: "01793a669cadf95ac87390e3a382f505.wav"
  },
  {
    topic: "Inteligência Artificial",
    quote: "Nós ensinamos os computadores a falar, pintar e escrever poesias. Ironicamente, o que achávamos ser a essência da criatividade humana acabou sendo a <strong>coisa mais fácil de matematizar</strong>.",
    author: "Redes Neurais Generativas",
    searchQuery: "ia generativa criatividade chatgpt futuro da arte",
    audioId: "3b06dc548d779e83cccf5da11bf5f3c5.wav"
  },
  {
    topic: "Filosofia Moderna",
    quote: "Se você pode ser ofendido por qualquer palavra na internet, você entregou o controle remoto do seu estado emocional <strong>para o mundo inteiro brincar</strong>.",
    author: "Neo-Estoicismo",
    searchQuery: "controle emocional ofensa na internet estoicismo moderno",
    audioId: "807e22fae0b43917f9d487d6d4f7d318.wav"
  },
  {
    topic: "Produtividade",
    quote: "Se você não tem uma agenda planejada, você acaba virando <strong>personagem principal na agenda de outra pessoa</strong>.",
    author: "Gestão do Tempo",
    searchQuery: "planejamento de agenda produtividade prioridades",
    audioId: "3e6e3c379a17e60f5c50308646d067a6.wav"
  },
  {
    topic: "Neuroplasticidade",
    quote: "O cérebro que você tem hoje não é o mesmo de ontem. A cada nova habilidade que você aprende, <strong>os cabos neurológicos mudam fisicamente de lugar dentro da sua cabeça</strong>.",
    author: "Plasticidade Cerebral",
    searchQuery: "neuroplasticidade aprender novas habilidades cerebro",
    audioId: "80627f0200a3cf94945a90735544219c.wav"
  },
  {
    topic: "Ciência da Longevidade",
    quote: "Envelhecer não é uma lei inevitável da física. É um problema de engenharia genética. E a ciência já começou a <strong>desmontar esse motor para consertá-lo</strong>.",
    author: "Terapias Genéticas",
    searchQuery: "cura do envelhecimento longevidade david sinclair",
    audioId: "8f44de76c6fb9ecab7dc903de6e8ec4a.wav"
  },
  {
    topic: "Psicologia do Hábitos",
    quote: "A força de vontade é como a bateria do seu celular: ela acaba no fim do dia. Se você precisa de força de vontade para não comer doce de noite, <strong>você já perdeu a batalha</strong>.",
    author: "Design de Ambiente",
    searchQuery: "esgotamento do ego james clear forca de vontade",
    audioId: "a7e9d143d0ff2e1a70886d5b8807a839.wav"
  },
  {
    topic: "Geometria Fractal",
    quote: "As galáxias no céu, as artérias do seu coração e os galhos de uma árvore seguem as mesmas regras matemáticas. <strong>O universo repete seus padrões em todos os tamanhos</strong>.",
    author: "Matemática do Caos",
    searchQuery: "geometria fractal padroes da natureza caos",
    audioId: "32133fef2631785faf9a129b9633046e.wav"
  },
  {
    topic: "Liderança",
    quote: "Um líder ruim reclama que a equipe não trabalha direito. Um líder de elite entende que <strong>não existem equipes ruins, apenas sistemas mal desenhados</strong>.",
    author: "Extreme Ownership",
    searchQuery: "jocko willink responsabilidade extrema lideranca",
    audioId: "3e0837cfaafb7d41ac492f128da303c8.wav"
  },
  {
    topic: "Antropologia",
    quote: "Os neandertais tinham cérebros maiores que os nossos. Nós não vencemos a corrida evolutiva porque éramos mais espertos, mas porque <strong>sabíamos trabalhar em redes maiores</strong>.",
    author: "Sapiens",
    searchQuery: "yuval noah harari evolucao neandertais sociabilidade",
    audioId: "a0c4bdbff661fda6f64257b861673380.wav"
  },
  {
    topic: "Estratégia Militar",
    quote: "A melhor vitória na guerra não é destruir o exército inimigo no campo de batalha. É destruir a <strong>vontade do inimigo de lutar, antes mesmo do primeiro tiro</strong>.",
    author: "A Arte da Guerra",
    searchQuery: "sun tzu arte da guerra estrategia psicologica",
    audioId: "e8955e0a56715e57681d625513aac732.wav"
  },
  {
    topic: "Mindfulness",
    quote: "Passamos 90% do tempo preocupados com tragédias que só existem em nossas mentes. <strong>A imaginação é a maior máquina de tortura já inventada</strong>.",
    author: "Atenção Plena",
    searchQuery: "mindfulness ansiedade ilusao do futuro eckhart tolle",
    audioId: "70b6c840051b46dfdb2e6bdee5d26fcf.wav"
  },
  {
    topic: "Finanças Pessoais",
    quote: "O luxo muitas vezes não traz conforto, traz aprisionamento. Quanto mais coisas caras você possui, <strong>mais o seu tempo pertence a quem paga o seu salário</strong>.",
    author: "Minimalismo Financeiro",
    searchQuery: "corrida dos ratos independencia financeira robert kiyosaki",
    audioId: "f454d32530f3947eb0bda36496dc693e.wav"
  },
  {
    topic: "Física Clássica",
    quote: "Entropia significa que o universo caminha inexoravelmente para a desordem. Para manter seu quarto arrumado, sua saúde boa e sua mente sã, <strong>você tem que gastar energia lutando contra o próprio universo</strong>.",
    author: "Segunda Lei da Termodinâmica",
    searchQuery: "entropia desordem fisica da organizacao",
    audioId: "75e59cf6925f7c9a32224218b97e15e0.wav"
  },
  {
    topic: "Educação",
    quote: "Se o conhecimento fosse a resposta para tudo, estaríamos todos ricos e saudáveis. O problema nunca é a falta de informação, é a <strong>falta de execução brutal</strong>.",
    author: "Aprendizado Ativo",
    searchQuery: "execucao vs teoria aprendizado pratico excesso de informacao",
    audioId: "fcc63160af494ff1ff376a20dfca08c6.wav"
  },
  {
    topic: "Viés Cognitivo",
    quote: "Nós não procuramos informações para descobrir a verdade. Nós procuramos informações no Google <strong>apenas para confirmar aquilo que já acreditamos</strong>.",
    author: "Viés de Confirmação",
    searchQuery: "vies de confirmacao psicologia crencas limitantes",
    audioId: "7cef3f3c7dceb3a3393f0b010867b7f4.wav"
  },
  {
    topic: "Astronomia",
    quote: "O ferro que corre no seu sangue e o cálcio dos seus ossos foram forjados no núcleo de estrelas que explodiram há bilhões de anos. <strong>Você é, literalmente, lixo estelar reciclado</strong>.",
    author: "Supernovas e Vida",
    searchQuery: "carl sagan somos poeira de estrelas astrofisica",
    audioId: "0750eb5e2698aaf774e5124af20fccd0.wav"
  },
  {
    topic: "Marketing",
    quote: "As pessoas não compram o que você faz, elas compram <strong>o porquê você faz</strong>. Produtos são passageiros, mas identidades são eternas.",
    author: "Golden Circle",
    searchQuery: "simon sinek circulo dourado proposito de marca",
    audioId: "66936c8f648f35be1740325c50ad3167.wav"
  },
  {
    topic: "Teoria dos Jogos",
    quote: "Na vida, você pode jogar jogos finitos para vencer ou jogos infinitos para continuar jogando. O casamento, os negócios e a saúde <strong>são jogos que você não quer que terminem</strong>.",
    author: "Jogos Infinitos",
    searchQuery: "simon sinek jogos finitos e infinitos estrategia de longo prazo",
    audioId: "8d00825872022c99fb3522b575a09478.wav"
  },
  {
    topic: "Dopamina",
    quote: "A dopamina não é o hormônio do prazer. É o hormônio do <strong>desejo cego e insaciável</strong>. Ela não quer que você aproveite o momento, ela quer que você busque a próxima recompensa.",
    author: "Neurociência da Motivação",
    searchQuery: "dopamina vicio recompensa andrew huberman",
    audioId: "517eb1822f53b7b200da33b5f5403ac2.wav"
  },
  {
    topic: "Arquitetura da Mente",
    quote: "A memória não é um arquivo em vídeo no cérebro. Toda vez que você lembra de algo do passado, <strong>você está recriando a memória e, muitas vezes, alterando os fatos</strong>.",
    author: "Maleabilidade da Memória",
    searchQuery: "como a memoria funciona falsas memorias psicologia",
    audioId: "7fa8393db5356fda07fa27c2b3e84c7a.wav"
  },
  {
    topic: "Biologia Sintética",
    quote: "A vida não é mágica, é código. O DNA é apenas um software de quatro letras. E no século 21, nós finalmente aprendemos a <strong>hackear esse código fonte</strong>.",
    author: "CRISPR",
    searchQuery: "edicao de dna crispr biotecnologia futuro",
    audioId: "e18831760879d2a86d4e382c98ccc47d.wav"
  },
  {
    topic: "Sociologia",
    quote: "A liberdade de expressão não existe para proteger opiniões agradáveis. Ela existe exatamente para <strong>proteger o direito de falar coisas que ofendem profundamente o poder vigente</strong>.",
    author: "Filosofia Política",
    searchQuery: "liberdade de expressao censura filosofia politica",
    audioId: "33ec7d18f7c07749f41a43c5ddba7f20.wav"
  },
  {
    topic: "Alta Performance",
    quote: "Amadores esperam a motivação aparecer para começar a treinar. Profissionais sabem que <strong>a motivação só aparece depois que o treinamento já começou</strong>.",
    author: "Disciplina vs Motivação",
    searchQuery: "disciplina alta performance constancia stephen pressfield",
    audioId: "c695faf8b8a8cad82ebcddc69b6ab4af.wav"
  },
  {
    topic: "Evolução Genética",
    quote: "O apêndice humano, que hoje só serve para inflamar, já foi uma câmara de fermentação gigante para digerir folhas cruas <strong>quando éramos macacos nas árvores</strong>.",
    author: "Vestígios Evolutivos",
    searchQuery: "orgaos vestigiais evolucao darwin",
    audioId: "de83bb94e8542e14f48989aecc64664d.wav"
  },
  {
    topic: "Microbioma",
    quote: "Você tem mais células de bactérias no seu intestino do que células humanas no corpo. E elas <strong>secretam químicos que controlam ativamente o seu humor diário</strong>.",
    author: "Eixo Intestino-Cérebro",
    searchQuery: "microbiota intestinal saude mental bacterias",
    audioId: "206b0d3e9af80234ea7772284b365d7c.wav"
  },
  {
    topic: "Estratégia de Vida",
    quote: "Dizer 'sim' para um projeto novo significa dizer 'não' para mil outras possibilidades. <strong>A arte do foco é a habilidade sublime de decepcionar pessoas de propósito</strong>.",
    author: "A Arte de Dizer Não",
    searchQuery: "foco dizer nao steve jobs essencialismo",
    audioId: "336ecc0dbc744d53084d0493ba738527.wav"
  },
  {
    topic: "Biotecnologia",
    quote: "Em algumas décadas, os órgãos para transplante não virão de doadores mortos. Eles serão <strong>impressos em 3D usando as suas próprias células-tronco</strong>, zerando a fila de espera.",
    author: "Órgãos Bioartificiais",
    searchQuery: "impressao 3d de orgaos celulas tronco saude do futuro",
    audioId: "71726d7ebf60c2ded3373044c0cbaa28.wav"
  },
  {
    topic: "Psicologia Analítica",
    quote: "Aquilo que você mais critica nos outros é quase sempre a <strong>sombra reprimida que você se recusa a enxergar dentro de você mesmo</strong>.",
    author: "Carl Jung",
    searchQuery: "a sombra junguiana projecao psicologica psicologia",
    audioId: "e06d5d8930c64f5edd70699772cdacfa.wav"
  },
  {
    topic: "Física Teórica",
    quote: "Se você viajasse na velocidade da luz por um ano no espaço, voltaria à Terra descobrindo que seus amigos <strong>já envelheceram e morreram há séculos</strong>.",
    author: "Relatividade do Tempo",
    searchQuery: "einstein paradoxo dos gemeos viagem no tempo relatividade",
    audioId: "605c5517c9aef94944af0d8e6c684518.wav"
  },
  {
    topic: "Criatividade",
    quote: "O bloqueio criativo não é falta de ideias. É o <strong>medo paralisante de que a sua ideia não seja perfeita logo na primeira tentativa</strong>.",
    author: "O Processo de Criação",
    searchQuery: "bloqueio criativo perfeccionismo como ter ideias",
    audioId: "e9fbd4bc5d5171d2d15239a2dbdd2e7e.wav"
  },
  {
    topic: "Bioética",
    quote: "A IA superinteligente do futuro pode não nos exterminar por ódio. Ela pode nos transformar em clipes de papel simplesmente porque <strong>esquecemos de programar a empatia em seus algoritmos</strong>.",
    author: "Problema do Alinhamento",
    searchQuery: "nick bostrom problema de alinhamento da ia risco existencial",
    audioId: "4162cc765ad9c8562d4cd0a65be5107e.wav"
  },
  {
    topic: "Economia",
    quote: "O dinheiro fiduciário moderno não é lastreado em ouro ou prata. Ele é lastreado exclusivamente na <strong>crença coletiva de que aquele papel pintado tem valor</strong>.",
    author: "A Ilusão do Valor",
    searchQuery: "o que e dinheiro inflacao ilusao economica",
    audioId: "1a159a628ada7469ece4cbe30b6e1515.wav"
  },
  {
    topic: "Hábitos Diários",
    quote: "Você não decide o seu futuro. Você decide os seus hábitos diários, e <strong>são os seus hábitos que desenham o seu futuro de forma implacável</strong>.",
    author: "Pequenas Ações",
    searchQuery: "habitos diarios mudanca de vida micro habitos",
    audioId: "bd33dfcb832e0a0677db660a681024c2.wav"
  },
  {
    topic: "Computação Quântica",
    quote: "Enquanto os computadores normais olham para cada possibilidade uma de cada vez, os computadores quânticos <strong>olham para todas as respostas do universo simultaneamente</strong>.",
    author: "Qubits e Superposição",
    searchQuery: "como funciona computador quantico supremacia quantica",
    audioId: "6b2a0b9a46176b36f673ce14981f22d4.wav"
  },
  {
    topic: "Biologia Marinha",
    quote: "Os polvos têm um cérebro distribuído pelos seus oito braços. Se o braço de um polvo for cortado, <strong>ele continuará rastejando e capturando comida por conta própria</strong>.",
    author: "Inteligência Alienígena na Terra",
    searchQuery: "inteligencia dos polvos neurobiologia marinha",
    audioId: "e38027db27d25e097a86a307706976b5.wav"
  },
  {
    topic: "Psicologia Positiva",
    quote: "O trauma não é o que acontece com você. O trauma é <strong>a cicatriz que se forma dentro de você como resultado do que aconteceu</strong>, e essa cicatriz pode ser curada.",
    author: "Gabor Maté",
    searchQuery: "o que e trauma cura emocional psicologia profunda",
    audioId: "ac63cca79c4463fa93c98fcccd400618.wav"
  },
  {
    topic: "Evolução Tecnológica",
    quote: "As ferramentas moldam o homem. Nós inventamos o relógio mecânico para controlar o tempo, mas <strong>acabamos virando escravos do relógio</strong>.",
    author: "Determinismo Tecnológico",
    searchQuery: "como a tecnologia nos muda impacto do relogio",
    audioId: "f997433484af3c693d2a5e531c3fb816.wav"
  },
  {
    topic: "Neurobiologia",
    quote: "O amor não é cego à toa. Quando você se apaixona, o cérebro <strong>desliga ativamente o córtex pré-frontal</strong>, a região responsável pelo pensamento crítico e julgamento racional.",
    author: "Cérebro Apaixonado",
    searchQuery: "quimica da paixao neurociencia do amor",
    audioId: "3bd0970a9a5c833773a9e0d533f68c39.wav"
  },
  {
    topic: "Linguística",
    quote: "A linguagem que você fala molda como você vê o mundo. Se o seu idioma não tem uma palavra para a cor azul, <strong>o seu cérebro fisicamente não conseguirá enxergá-la</strong>.",
    author: "Hipótese de Sapir-Whorf",
    searchQuery: "como o idioma afeta o pensamento poder das palavras",
    audioId: "36c0a09e2486995875752db0a8c21635.wav"
  },
  {
    topic: "Teoria da Complexidade",
    quote: "O bater de asas de uma borboleta no Brasil não causa diretamente um furacão no Texas. Mas ele muda as condições iniciais que <strong>tornam o furacão matematicamente possível semanas depois</strong>.",
    author: "Efeito Borboleta",
    searchQuery: "teoria do caos efeito borboleta complexidade",
    audioId: "e3fd61f6ec1da7a10c67073d1b2314da.wav"
  },
  {
    topic: "Mecânica Quântica",
    quote: "Nada no universo está tocando nada de verdade. Os elétrons da sua mão repelem os elétrons da parede. <strong>A sensação de toque é apenas um campo de força eletromagnético te empurrando</strong>.",
    author: "Ilusão do Contato Físico",
    searchQuery: "voce nunca toca nada fisica dos atomos forca eletromagnetica",
    audioId: "a724fd2439cf2237561bcabb86600570.wav"
  },
  {
    topic: "Filosofia da Ciência",
    quote: "A ciência não busca a verdade absoluta. Ela busca a <strong>hipótese menos errada disponível no momento</strong>, pronta para ser destruída amanhã por uma prova melhor.",
    author: "Falsificacionismo",
    searchQuery: "karl popper metodo cientifico verdade absoluta",
    audioId: "335838a115e5a23e57bcf1ef7ac623ce.wav"
  },
  {
    topic: "Empreendedorismo",
    quote: "As ideias não valem nada. Todo mundo tem boas ideias no chuveiro. O que separa o sonhador do bilionário é a <strong>capacidade de sofrer anos executando aquela ideia no mundo real</strong>.",
    author: "A Dor da Execução",
    searchQuery: "ideia vs execucao empreendedorismo startups",
    audioId: "374a92df6f40ef321915bd88fda3436f.wav"
  },
  {
    topic: "Autoconhecimento",
    quote: "Você passa a vida inteira tentando se encontrar, mas o 'eu' não é algo escondido debaixo de uma pedra. O 'eu' é algo que <strong>você constrói bloco por bloco todos os dias</strong>.",
    author: "Existencialismo",
    searchQuery: "sartre existencialismo como se encontrar proposito",
    audioId: "ea2bb738cda9fcef41ea85fd0ae04c0a.wav"
  },
  {
    topic: "Saúde Pública",
    quote: "Os antibióticos não estão falhando sozinhos. As bactérias evoluem tão rápido que estamos em uma <strong>corrida armamentista em tempo real contra organismos unicelulares</strong>.",
    author: "Superbactérias",
    searchQuery: "resistencia antimicrobiana evolucao em tempo real penicilina",
    audioId: "1d320b2aabbac95c8e5c5920ccb015b8.wav"
  },
  {
    topic: "Neurociência do Sono",
    quote: "Dormir não é desligar o cérebro. É o momento em que a equipe de limpeza entra, varrendo toxinas mortais que, se acumuladas, <strong>causariam Alzheimer em poucos anos</strong>.",
    author: "O Sistema Linfático do Cérebro",
    searchQuery: "importancia do sono doenca de alzheimer sistema glinfatico",
    audioId: "3b0cd4fe23a37ce9f82d8959450fca5f.wav"
  },
  {
    topic: "História Antiga",
    quote: "Os romanos não inventaram o concreto apenas para fazer prédios bonitos. Eles inventaram um cimento que endurecia debaixo d'água, o que lhes permitiu <strong>construir portos e dominar o comércio marítimo do mundo</strong>.",
    author: "Engenharia Romana",
    searchQuery: "concreto romano engenharia civil imperio historia",
    audioId: "8903c2e74a69eba11754e81e7f7a0f76.wav"
  },
  {
    topic: "Teoria da Informação",
    quote: "Um dado não é informação. Informação é apenas aquele pedaço específico de dado que <strong>tem o poder de mudar a sua próxima decisão</strong>.",
    author: "Claude Shannon",
    searchQuery: "teoria da informacao claude shannon dados vs informacao",
    audioId: "ceed9a55741ef3b5fce42f0477632b18.wav"
  },
  {
    topic: "Biologia Quântica",
    quote: "Os pássaros não se perdem na migração porque conseguem literalmente <strong>ver os campos magnéticos da Terra</strong> usando o entrelaçamento quântico dentro dos próprios olhos.",
    author: "Navegação Aviária",
    searchQuery: "biologia quantica passaros campo magnetico migracao",
    audioId: "5b37fa605b3fac33878fc3c4cd2a57d4.wav"
  },
  {
    topic: "Microeconomia",
    quote: "O conceito de custo de oportunidade nos ensina que o preço de qualquer coisa que você escolhe fazer é, na verdade, <strong>tudo aquilo que você teve que abrir mão para poder fazê-la</strong>.",
    author: "Custo de Oportunidade",
    searchQuery: "economia basica custo de oportunidade escolhas",
    audioId: "df627a4221ed26852942147fd7f1f713.wav"
  },
  {
    topic: "Epistemologia",
    quote: "A ignorância raramente é a completa falta de conhecimento. Na maioria das vezes, a ignorância é a <strong>falsa convicção absoluta de que você já sabe de tudo</strong>.",
    author: "Efeito Dunning-Kruger",
    searchQuery: "ignorancia socrates dunning kruger filosofia do conhecimento",
    audioId: "b6ab3cd221c44dd2ea55aecf3fe05d37.wav"
  },
  {
    topic: "Psicologia Comportamental",
    quote: "O cérebro não quer que você seja magro ou musculoso. Ele quer que você <strong>armazene gordura para sobreviver ao próximo inverno</strong> que, no mundo moderno, nunca vai chegar.",
    author: "Adaptação Evolutiva",
    searchQuery: "por que engordamos evolucao do cerebro gordura",
    audioId: "8f7e9b9fef53e036eb518505dc0a1095.wav"
  },
  {
    topic: "Física de Partículas",
    quote: "Se você remover todo o espaço vazio de dentro dos átomos de todas as pessoas da Terra, a humanidade inteira caberia no volume de <strong>um único cubo de açúcar</strong>.",
    author: "Estrutura Atômica",
    searchQuery: "espaço vazio nos atomos fisica quantica cubo de acucar",
    audioId: "c67f78dcdbb4293eb09da53fab837688.wav"
  },
  {
    topic: "Genética Comportamental",
    quote: "A inteligência não é determinada apenas pelos seus genes. Os seus genes fornecem os limites máximos e mínimos, mas é o <strong>seu ambiente que escolhe onde você vai parar dentro desse espectro</strong>.",
    author: "Interação Gene-Ambiente",
    searchQuery: "genetica da inteligencia ambiente vs genes epigenetica",
    audioId: "865d9f187dec4e4a0b57ab0b280e0c4d.wav"
  },
  {
    topic: "Engenharia Aeroespacial",
    quote: "Os foguetes não precisam empurrar o ar para se mover no espaço. Eles se movem puramente pela terceira lei de Newton: <strong>ao ejetar massa para trás, o universo é obrigado a empurrá-los para frente</strong>.",
    author: "Lei da Ação e Reação",
    searchQuery: "como foguetes funcionam no vacuo terceira lei de newton",
    audioId: "a914ec6320034eca495f20ecf4163310.wav"
  },
  {
    topic: "Filosofia Política",
    quote: "A democracia não foi criada para escolher os líderes mais geniais e visionários. Ela foi criada puramente para <strong>conseguirmos remover líderes péssimos sem derramar uma gota de sangue</strong>.",
    author: "Karl Popper",
    searchQuery: "para que serve a democracia filosofia politica karl popper",
    audioId: "ccde765eab78b3a609fe71c130bdb75a.wav"
  },
  {
    topic: "Neurociência",
    quote: "A dor crônica não significa necessariamente que o seu corpo ainda está machucado. Muitas vezes, significa apenas que o seu alarme neurológico <strong>ficou travado no volume máximo e esqueceu como desligar</strong>.",
    author: "Dor Neuroplástica",
    searchQuery: "como a dor funciona dor cronica neurociencia dor fantasma",
    audioId: "77a765ab670dc5b1beb3da8dd02737bd.wav"
  },
  {
    topic: "Lógica Matemática",
    quote: "Não existe paradoxo no mundo real. Quando o seu cérebro encontra um paradoxo inaceitável, isso é apenas o universo te avisando que <strong>uma de suas premissas básicas está completamente errada</strong>.",
    author: "Teorema da Incompletude",
    searchQuery: "paradoxos logica matematica premissas falsas",
    audioId: "0c18cd3c108f3166f38243855d9fb06d.wav"
  },
  {
    topic: "Comunicação",
    quote: "A maior ilusão da comunicação humana é a crença perigosa de que, só porque você abriu a boca e falou, <strong>a comunicação realmente aconteceu na cabeça do outro</strong>.",
    author: "George Bernard Shaw",
    searchQuery: "falha na comunicacao escuta ativa ilusao do entendimento",
    audioId: "e90b745b8681bb52b2eb3f46abccce98.wav"
  },
  {
    topic: "Evolução",
    quote: "Os dinossauros não foram totalmente extintos pelo asteroide. Os menores e com penas sobreviveram ao apocalipse, e hoje nós <strong>os chamamos de pássaros e os prendemos em gaiolas</strong>.",
    author: "Evolução das Aves",
    searchQuery: "dinossauros viraram aves evolucao extincao",
    audioId: "31c0e51bd80d5825a0e81d98ba953460.wav"
  },
  {
    topic: "Dinâmica de Sistemas",
    quote: "Resolver o congestionamento de trânsito construindo mais faixas nas ruas é como tentar curar a obesidade <strong>comprando calças de um tamanho maior</strong>.",
    author: "Demanda Induzida",
    searchQuery: "demanda induzida transito urbanismo cidades para pessoas",
    audioId: "96ed4e7d87e6a5d5cb9d2d00e1c30c44.wav"
  },
  {
    topic: "Medicina",
    quote: "A febre não é a doença. A febre é o seu sistema imunológico <strong>ligando o forno interno do corpo</strong> para literalmente cozinhar os vírus invasores até a morte.",
    author: "Imunologia",
    searchQuery: "para que serve a febre sistema imune biologia",
    audioId: "1e5975877dc28833b5c0d8e2ea8bd8aa.wav"
  },
  {
    topic: "Estratégia",
    quote: "Você não precisa ser mais rápido que o urso que está te perseguindo. Você só precisa ser <strong>mais rápido que a pessoa que está correndo do seu lado</strong>.",
    author: "Vantagem Competitiva",
    searchQuery: "vantagem competitiva estrategia ursos e sobrevivencia",
    audioId: "494a4cb3e138a815208757d08f16d4fc.wav"
  },
  {
    topic: "Cibernética",
    quote: "O problema dos algoritmos de recomendação não é que eles sabem o que você quer. É que eles lentamente <strong>te treinam para querer exatamente o que eles querem recomendar</strong>.",
    author: "Câmara de Eco",
    searchQuery: "algoritmos das redes sociais manipulacao de consumo",
    audioId: "2db47a57d62405d6b340792f52c81da5.wav"
  },
  {
    topic: "Finanças Pessoais",
    quote: "Comprar algo em doze vezes sem juros não significa que você não pagou juros. Significa apenas que o custo do juro <strong>já estava embutido no preço absurdamente inflado do produto</strong>.",
    author: "Matemática Financeira",
    searchQuery: "ilusoes do parcelamento educacao financeira sem juros",
    audioId: "f83b89dcc7ffa6dcbefa9cb8b1254321.wav"
  },
  {
    topic: "Psicanálise",
    quote: "A inveja não é o desejo cego de destruir o outro. A inveja é a dor silenciosa de ver no outro <strong>o sucesso que você secretamente acredita que deveria ser seu</strong>.",
    author: "Mecanismos de Defesa",
    searchQuery: "inveja na psicanalise freud lacan dor do sucesso",
    audioId: "5d08b168b11adc7ac2ad95eed94c057c.wav"
  },
  {
    topic: "Termodinâmica",
    quote: "O frio não existe como uma entidade física na natureza. O frio é apenas a <strong>ausência absoluta de calor e de movimento atômico</strong>.",
    author: "Zero Absoluto",
    searchQuery: "o que e frio fisica zero absoluto calor",
    audioId: "58a25fc2cdde706c48947d29ad18aa36.wav"
  },
  {
    topic: "Design de Interação",
    quote: "Um bom design é como o ar-condicionado. Você só percebe que ele existe no momento exato em que ele <strong>para de funcionar e tudo começa a dar errado</strong>.",
    author: "Usabilidade",
    searchQuery: "bom design ux ui usabilidade invisivel",
    audioId: "7042e837d7644035ca1479672ad75d77.wav"
  },
  {
    topic: "Paleontologia",
    quote: "O planeta Terra já foi uma bola de neve congelada, já foi coberto de lava e já teve níveis tóxicos de oxigênio. A vida não se adapta para preservar o planeta, ela <strong>muda o planeta para se preservar</strong>.",
    author: "Hipótese de Gaia",
    searchQuery: "hipotese de gaia paleontologia mudancas climaticas",
    audioId: "c241e2f29e9137976b9d0b9b62bbc2cf.wav"
  },
  {
    topic: "Neuromarketing",
    quote: "Os supermercados colocam a padaria no fundo da loja por um motivo simples: o cheiro de pão fresco <strong>abre o apetite e te faz comprar coisas que você não precisava no meio do caminho</strong>.",
    author: "Psicologia do Consumo",
    searchQuery: "neuromarketing trucao de supermercado comportamento",
    audioId: "783d2586fc162ac81025c8ee0707bb8e.wav"
  },
  {
    topic: "Liderança",
    quote: "Um líder tóxico foca em encontrar culpados. Um líder de alta performance entende que a culpa não importa e foca cem por cento em <strong>descobrir onde o processo falhou</strong>.",
    author: "Cultura de Segurança",
    searchQuery: "cultura sem culpa lideranca gestao de crise",
    audioId: "62488a73749812d6be11a0512fe7b5aa.wav"
  },
  {
    topic: "Astronomia",
    quote: "O sol que você vê no céu não é o sol de agora. A luz demora oito minutos para chegar à Terra. Você está, o tempo todo, <strong>olhando para o passado do universo</strong>.",
    author: "Velocidade da Luz",
    searchQuery: "tempo no espaco velocidade da luz sol oito minutos",
    audioId: "a28bf3c38e443d86dde7bd7917b08923.wav"
  },
  {
    topic: "Estoicismo",
    quote: "Nós sofremos muito mais na imaginação do que na realidade. A sua mente tem o péssimo hábito de <strong>ensaiar tragédias que jamais chegarão a acontecer</strong>.",
    author: "Sêneca",
    searchQuery: "ansiedade sêneca estoicismo sofrimento imaginario",
    audioId: "a61388c0151b8602681dffde22af8a59.wav"
  },
  {
    topic: "Inteligência Coletiva",
    quote: "As formigas individuais são animais relativamente burros, mas uma colônia de formigas é um superorganismo altamente inteligente capaz de <strong>construir pontes e declarar guerras complexas</strong>.",
    author: "Comportamento Emergente",
    searchQuery: "inteligencia coletiva formigas comportamento emergente",
    audioId: "f4abc513efb210204b20f24a4a4b541b.wav"
  },
  {
    topic: "Evolução Tecnológica",
    quote: "A roda não foi inventada originalmente para transportar coisas. Durante milênios, os humanos só a usaram na olaria para <strong>modelar vasos de argila giratórios</strong>.",
    author: "Invenções e Exaptação",
    searchQuery: "quem inventou a roda historia da tecnologia",
    audioId: "aa36bd688e3d480197190969c6833930.wav"
  },
  {
    topic: "Psicologia Cognitiva",
    quote: "A sua memória não foi projetada para arquivar perfeitamente o passado. Ela evoluiu puramente para tentar <strong>prever as ameaças do seu futuro com base no que já aconteceu</strong>.",
    author: "Função da Memória",
    searchQuery: "para que serve a memoria prever o futuro psicologia",
    audioId: "56ab9776cce83cc47f286f711a356212.wav"
  },
  {
    topic: "Bioquímica",
    quote: "O açúcar vicia mais rápido que muita droga ilícita porque ele <strong>hackeia diretamente o antigo sistema de recompensa</strong> que desenvolvemos na selva para evitar morrer de fome.",
    author: "Vício em Açúcar",
    searchQuery: "vicio em acucar biologia bioquimica sistema de recompensa",
    audioId: "2f5f63cc8f0cd6e92f5ec316a46b5ea0.wav"
  },
  {
    topic: "Filosofia Moral",
    quote: "A ética não é sobre descobrir o que é perfeitamente certo. É o processo constante e angustiante de <strong>escolher qual a opção menos dolorosa e errada no momento</strong>.",
    author: "O Dilema do Bonde",
    searchQuery: "etica e moral dilemas filosoficos o problema do mal",
    audioId: "87825e96c3713374328724761c893338.wav"
  },
  {
    topic: "Produtividade",
    quote: "Estar ocupado não é sinônimo de estar produzindo. Correr em círculos na velocidade máxima vai te deixar suado e exausto, mas <strong>não vai te tirar do lugar</strong>.",
    author: "Eficiência vs Eficácia",
    searchQuery: "trabalho ocupado produtividade fazer a coisa certa",
    audioId: "fe83de25ec013047ee816892231f32af.wav"
  },
  {
    topic: "Física Mecânica",
    quote: "O som não viaja no espaço vazio não porque as estrelas são silenciosas, mas porque o som precisa de <strong>moléculas físicas se chocando para poder se propagar</strong>.",
    author: "Ondas Sonoras",
    searchQuery: "por que nao tem som no espaco vacuo fisica sonora",
    audioId: "1a2722766986e7b665c409c4e2cb30fe.wav"
  },
  {
    topic: "Criptoeconomia",
    quote: "O Bitcoin não é inovador por ser dinheiro digital. Ele é a primeira vez na história da humanidade em que <strong>conseguimos criar escassez absoluta dentro de um computador</strong>.",
    author: "Satoshi Nakamoto",
    searchQuery: "escassez digital bitcoin criptomoedas tecnologia blockchain",
    audioId: "22a27b56f8bd76f40e5a413a78aaab7d.wav"
  },
  {
    topic: "Biologia Vegetal",
    quote: "As árvores de uma floresta não competem sozinhas. Elas compartilham nutrientes e conversam entre si usando uma <strong>gigantesca rede de fungos conectada às suas raízes</strong>.",
    author: "A Wood Wide Web",
    searchQuery: "comunicacao das arvores rede de fungos ecologia da floresta",
    audioId: "1167e2b8a373a2ece29f4d3da882f69d.wav"
  },
  {
    topic: "Ciência Política",
    quote: "O extremismo é atraente porque o cérebro humano odeia a incerteza. Fanáticos não buscam a verdade, eles buscam <strong>a anestesia confortável de achar que sabem tudo</strong>.",
    author: "O Conforto do Extremismo",
    searchQuery: "fanatismo politico incerteza psicologia social",
    audioId: "ca04f15c887567e399104339fab5ee7e.wav"
  },
  {
    topic: "Nutrição Esportiva",
    quote: "Você não constrói músculos na academia levantando peso. Na academia, você apenas destroi as fibras. O músculo <strong>cresce e fica forte apenas enquanto você está dormindo</strong>.",
    author: "Hipertrofia Muscular",
    searchQuery: "como ganhar massa muscular descanso e hipertrofia fitness",
    audioId: "0c5a7de783b7355cbd69f01ceb3726c0.wav"
  },
  {
    topic: "Antropologia",
    quote: "A revolução agrícola não nos salvou da fome. Ironicamente, os primeiros fazendeiros tinham uma nutrição muito pior e trabalhavam muito mais horas do que <strong>os caçadores-coletores livres na selva</strong>.",
    author: "A Armadilha Agrícola",
    searchQuery: "revolucao agricola yuval harari dieta paleolitica",
    audioId: "00cd21f5a9cb2e10084d75b0dad8c20e.wav"
  },
  {
    topic: "Mecânica Quântica",
    quote: "O universo não é feito de bolinhas sólidas de matéria chamadas de átomos. O universo é feito inteiramente de <strong>campos de energia que vibram em diferentes frequências e tons</strong>.",
    author: "Teoria Quântica de Campos",
    searchQuery: "do que sao feitos os atomos teoria de campos fisica moderna",
    audioId: "f01136e9c6c309c286bf10cfd2ab55a5.wav"
  },
  {
    topic: "Terapia de Casal",
    quote: "O oposto do amor não é o ódio profundo. Quando chega o ódio, ainda há muita paixão investida. <strong>O verdadeiro oposto do amor é a apatia e a indiferença total</strong>.",
    author: "Psicologia dos Relacionamentos",
    searchQuery: "apatia o fim do amor john gottman relacionamento conjugal",
    audioId: "e2afa49bfed387bbfd554c2879c2f05c.wav"
  },
  {
    topic: "Engenharia de Software",
    quote: "A lei de Brooks dita que adicionar mais programadores a um projeto de software atrasado só vai <strong>fazer com que o projeto atrase ainda mais devido ao caos da comunicação</strong>.",
    author: "O Mês-Homem Mítico",
    searchQuery: "lei de brooks gerenciamento de projetos ti",
    audioId: "8b489080c775a3371fe60ff55369c555.wav"
  },
  {
    topic: "Genética Evolutiva",
    quote: "Os cães não são lobos que os humanos domesticaram à força. São descendentes dos lobos menos agressivos que <strong>perceberam que era mais lucrativo e fácil viver perto das nossas fogueiras</strong>.",
    author: "Auto-domesticação dos Cães",
    searchQuery: "como os caes foram domesticados biologia canina",
    audioId: "056c7b0293906803e34a37f1116be90d.wav"
  },
  {
    topic: "Foco Estratégico",
    quote: "A palavra prioridade entrou na língua inglesa no século XV no singular, indicando a única coisa que importava. A loucura de usá-la no plural <strong>'prioridades'</strong> só surgiu quatrocentos anos depois.",
    author: "Essencialismo Histórico",
    searchQuery: "greg mckeown essencialismo prioridade singular",
    audioId: "476580dfaab639fe9882ec37eb70c9c8.wav"
  },
  {
    topic: "Biohacking",
    quote: "A luz azul das telas de celular à noite não faz apenas os seus olhos doerem. Ela sinaliza para o relógio do seu cérebro que ainda é meio-dia, <strong>matando a sua produção de melatonina instantaneamente</strong>.",
    author: "Ritmo Circadiano",
    searchQuery: "luz azul sono melatonina ritmo circadiano celular",
    audioId: "ccfd4baadabd508b4a901028175fb481.wav"
  },
  {
    topic: "Arquitetura e Urbanismo",
    quote: "Cidades projetadas em torno do carro destroem o senso de comunidade. A verdadeira rua não é um tubo de passagem rápida, é <strong>o palco central da convivência e civilização humana</strong>.",
    author: "Cidades para Pessoas",
    searchQuery: "jane jacobs urbanismo sustentavel mobilidade urbana",
    audioId: "532e549dde6d349c50fc188e9592fbf0.wav"
  },
  {
    topic: "Sociologia da Religião",
    quote: "Os mitos antigos não eram tratados como fatos científicos a serem comprovados no laboratório. Eles eram <strong>arquétipos vivos ensinando verdades morais sobre a natureza da alma humana</strong>.",
    author: "Mitologia Comparada",
    searchQuery: "joseph campbell religiao vs mito jung arquetipos",
    audioId: "b875d7286a13ff1333060f5bbb12bb75.wav"
  },
  {
    topic: "Inovação Disruptiva",
    quote: "A Kodak não faliu porque ignorou a fotografia digital. Ironicamente, eles inventaram a primeira câmera digital da história, mas <strong>esconderam o projeto com medo de perder a venda de filmes fotográficos</strong>.",
    author: "O Dilema do Inovador",
    searchQuery: "por que a kodak faliu inovacao disruptiva gestao",
    audioId: "0c9f78c91d04952e2159dd18407bbf0b.wav"
  },
  {
    topic: "Geopolítica",
    quote: "A geografia dita o destino das nações. Países abençoados com muitos rios navegáveis inevitavelmente se tornam potências comerciais, porque <strong>o transporte por água é infinitamente mais barato do que por terra</strong>.",
    author: "Determinismo Geográfico",
    searchQuery: "tim marshall prisioneiros da geografia rios navegaveis",
    audioId: "bf77f0dd05e387da62059939ec50980e.wav"
  },
  {
    topic: "Filosofia da Mente",
    quote: "Se substituirmos cada neurônio do seu cérebro, um por um, por microchips perfeitos, <strong>você ainda seria você mesmo, ou a sua consciência original deixaria de existir?</strong>",
    author: "O Paradoxo do Navio de Teseu",
    searchQuery: "consciencia navio de teseu filosofia da inteligencia artificial",
    audioId: "621397a00ca18468c1fc0b6bf9708633.wav"
  },
  {
    topic: "Comportamento Animal",
    quote: "Os lobos alfa não são ditadores violentos que ganharam a liderança brigando. Eles são apenas <strong>os pais mais experientes e pacíficos da alcateia</strong>, que cuidam da família inteira.",
    author: "O Mito do Macho Alfa",
    searchQuery: "macho alfa lobos biologia lideranca david mech",
    audioId: "92050b589e7730feb7a016583427502a.wav"
  },
  {
    topic: "Neurobiologia da Dor",
    quote: "Um analgésico como o Tylenol não diminui apenas a sua dor de cabeça. Estudos mostram que ele também anestesia <strong>a sua capacidade de sentir empatia pela dor emocional dos outros</strong>.",
    author: "Empatia Química",
    searchQuery: "paracetamol e empatia neurociencia dor social",
    audioId: "09ce71f3a2447b8c558844dd2817f812.wav"
  },
  {
    topic: "Filosofia da Mente",
    quote: "Ninguém sabe exatamente onde você guarda suas memórias porque elas não estão em uma gaveta no cérebro. Elas existem <strong>nos espaços elétricos vazios e fluidos entre os neurônios</strong>.",
    author: "Sinapses da Memória",
    searchQuery: "onde ficam as memorias neurobiologia sinapses vazias",
    audioId: "cc53c182171fffec167f04c9f8e151ad.wav"
  },
  {
    topic: "Estratégia de Negócios",
    quote: "O maior erro de uma empresa iniciante é tentar ser melhor do que a concorrência. A genialidade verdadeira está em inventar um mercado tão novo que <strong>você seja o único competidor existente</strong>.",
    author: "Estratégia do Oceano Azul",
    searchQuery: "oceano azul peter thiel zero to one startup",
    audioId: "d173b03288945650145ba1e1cbe66d1a.wav"
  },
  {
    topic: "Termodinâmica",
    quote: "O universo não exige que você pague com dinheiro pelas coisas. Ele exige que você pague em energia. <strong>A exaustão que você sente no fim do dia é o preço cósmico de estar vivo</strong>.",
    author: "A Moeda do Universo",
    searchQuery: "energia universal termodinamica biologia humana",
    audioId: "8400e28fc03e28c8ec42aa97fb128c43.wav"
  },
  {
    topic: "Neurociência do Aprendizado",
    quote: "Se você quer memorizar algo, não leia dez vezes de forma passiva. Feche o livro e tente lembrar à força. <strong>O aprendizado não acontece quando a informação entra, mas quando o cérebro faz força para puxá-la de volta</strong>.",
    author: "Active Recall",
    searchQuery: "active recall como estudar melhor neurociencia",
    audioId: "9408b2974624d3268f54d611ce9865ff.wav"
  },
  {
    topic: "Psicologia Positiva",
    quote: "O ser humano tem um viés de negatividade tão forte que precisa de <strong>cinco interações positivas para anular o dano emocional de uma única interação negativa</strong> em um relacionamento.",
    author: "A Proporção de Gottman",
    searchQuery: "john gottman psicologia de casais vies de negatividade",
    audioId: "58d017fc40db0b256699f01140788fec.wav"
  },
  {
    topic: "Epigenética",
    quote: "Seus genes não são um projeto fechado. O trauma extremo de uma guerra ou a fome prolongada sofrida pelo seu avô podem deixar marcas químicas no DNA que <strong>alteram a forma como o seu corpo reage ao estresse hoje</strong>.",
    author: "Herança Transgeracional",
    searchQuery: "epigenetica trauma hereditario biologia do estresse",
    audioId: "1bbe319f90d94e43f6d125f3fd980622.wav"
  },
  {
    topic: "Astronomia",
    quote: "Todas as noites nós olhamos para a lua como se ela fosse nossa companheira eterna, mas ela está <strong>se afastando da Terra a quase quatro centímetros por ano</strong>. No futuro distante, o céu será mais vazio.",
    author: "Afastamento Lunar",
    searchQuery: "lua se afastando astrofisica futuro da terra",
    audioId: "bb0c5654b06ff460fa495bdfa1565ee6.wav"
  },
  {
    topic: "Design de Produtos",
    quote: "Um aplicativo que tem um manual de instruções já fracassou antes de ser lançado. Um bom design é tão intuitivo que o usuário se sente <strong>genial apenas por usá-lo sem precisar pensar</strong>.",
    author: "Usabilidade Intuitiva",
    searchQuery: "design ux apple manual de instrucoes steve jobs",
    audioId: "9d78766b761378e43081173f4f020a3c.wav"
  },
  {
    topic: "História da Tecnologia",
    quote: "A invenção da prensa de Gutenberg não apenas barateou a produção de livros. Ela espalhou o conhecimento e implodiu impérios ao permitir que o camponês <strong>lesse a Bíblia e questionasse as autoridades pela primeira vez</strong>.",
    author: "A Revolução da Informação",
    searchQuery: "gutenberg impressao impacto historico tecnologia",
    audioId: "7fd9eea36b3c22b98a2fa9dfd184983b.wav"
  },
  {
    topic: "Filosofia Estoica",
    quote: "Você não se machuca porque sofreu uma ofensa. O machucado acontece apenas no exato milissegundo em que <strong>você decide mentalmente que a atitude do outro lhe causou um dano</strong>.",
    author: "Marco Aurélio",
    searchQuery: "estoicismo marco aurelio sofrimento mental reacao emocional",
    audioId: "d885dc1ffc4c96e708a9937ae471e430.wav"
  },
  {
    topic: "Antropologia Cultural",
    quote: "A agricultura foi inventada de forma independente em continentes isolados quase ao mesmo tempo na história humana. Não porque fomos iluminados por deuses, mas porque o <strong>aquecimento climático simultâneo tornou o planeta propício ao plantio</strong>.",
    author: "O Fim da Era do Gelo",
    searchQuery: "origem da agricultura antropologia holoceno",
    audioId: "d8a31df1aeda9efdb21b517aa3e0cf40.wav"
  },
  {
    topic: "Finanças Pessoais",
    quote: "Economizar alguns centavos cortando o café diário não vai deixá-lo rico. O que constrói impérios financeiros é a <strong>agressividade impiedosa em investir grandes quantias do seu salário nas coisas certas logo no início da vida</strong>.",
    author: "O Efeito Bola de Neve",
    searchQuery: "efeito compostos cortar o cafezinho investimentos finanças",
    audioId: "b3623381bf0d469d2611fd80d5f77f01.wav"
  },
  {
    topic: "Inteligência Emocional",
    quote: "Tentar suprimir emoções tristes é como segurar uma bola de basquete debaixo d'água. <strong>Cedo ou tarde o seu braço cansa, e a bola explode violentamente na sua cara</strong>.",
    author: "Repressão Emocional",
    searchQuery: "psicologia da emocao reprimir sentimentos terapia emocional",
    audioId: "c402b5ae48a2cb28474ea997e4bf69a4.wav"
  },
  {
    topic: "Linguística Cognitiva",
    quote: "A pontuação não serve apenas para respirar durante a leitura. A vírgula e o ponto final são ferramentas cirúrgicas desenhadas para <strong>esculpir o fluxo de pensamento dentro da cabeça de quem lê</strong>.",
    author: "A Arte da Escrita",
    searchQuery: "pontuacao gramatica psicologia da leitura",
    audioId: "ee1a0921e75efa53136ca84e505c861a.wav"
  },
  {
    topic: "Gestão do Tempo",
    quote: "Não existe falta de tempo. Existe apenas falta de clareza moral sobre as suas próprias prioridades. Quando você diz 'não tenho tempo', o universo ouve <strong>'isso não é tão importante para mim agora'</strong>.",
    author: "Priorização Radical",
    searchQuery: "gestao de tempo prioridades como ter mais tempo",
    audioId: "bf1ed5f98ce2a32b72d39f4e1158d5fc.wav"
  },
  {
    topic: "Biologia Sintética",
    quote: "Cientistas não estão apenas editando DNA de plantas para resistir a pragas. Já estamos armazenando gigantescas bibliotecas digitais e vídeos em 4K dentro de <strong>células de DNA vivas, usando a biologia como o disco rígido mais durável do mundo</strong>.",
    author: "Armazenamento em DNA",
    searchQuery: "dados em dna tecnologia biologica futuro da informacao",
    audioId: "ae389d5b550b2bae1d041586020cf806.wav"
  },
  {
    topic: "Cibernética",
    quote: "Nós somos a primeira espécie na história a assumir ativamente o controle sobre a nossa própria evolução. A seleção natural parou na biologia humana, e agora <strong>a engenharia e a cibernética tomaram as rédeas do futuro humano</strong>.",
    author: "O Fim da Seleção Natural",
    searchQuery: "transumanismo evolucao tecnologica ciborgues",
    audioId: "2c0d918905e2589b2a835d5f0eed96a5.wav"
  },
  {
    topic: "Evolução Genética",
    quote: "Homens têm mamilos porque no útero, todos nós começamos como um projeto de desenvolvimento feminino. O <strong>cromossomo Y entra em ação apenas depois que o chassi principal já foi construído</strong>.",
    author: "Embriologia Humana",
    searchQuery: "por que homens tem mamilos biologia embriologia ciencia",
    audioId: "d45eee61034d5359b9567fe3ebe819be.wav"
  },
  {
    topic: "Economia e Riqueza",
    quote: "A verdadeira vantagem dos juros compostos não é ganhar muito no começo, é sobreviver a longo prazo. Um investidor excelente que evita perder dinheiro por 30 anos <strong>vai massacrar matematicamente o trader genial que arrisca tudo para dobrar de capital em um mês</strong>.",
    author: "A Sobrevivência Financeira",
    searchQuery: "warren buffett juros compostos longo prazo risco financeiro",
    audioId: "d8224f0eae01fa6ce91e75301cea622f.wav"
  },
  {
    topic: "Microbiologia",
    quote: "O cheiro de terra molhada após a chuva não é o cheiro de água batendo no chão. É o cheiro de uma <strong>substância química produzida por bilhões de bactérias no solo em resposta à água</strong>, chamada Geosmina.",
    author: "Petricor",
    searchQuery: "cheiro de chuva geosmina biologia do solo",
    audioId: "a71f29e5e9038d1f8cf7cf4b8f173d53.wav"
  },
  {
    topic: "Física Clássica",
    quote: "Quando um patinador de gelo recolhe os braços e começa a girar mais rápido, ele está usando a Lei de Conservação do Momento Angular. O <strong>universo obriga a velocidade a aumentar quando o raio diminui</strong> para manter o equilíbrio energético intacto.",
    author: "Momento Angular",
    searchQuery: "fisica da patinacao conservacao do momento angular mecanica",
    audioId: "d5e8eabb112fa64bf2576a041fa3342b.wav"
  },
  {
    topic: "Estratégia Militar",
    quote: "A manobra em pinça não visa destruir o inimigo lutando contra ele pela frente, mas isolar o seu comando e <strong>paralisar o seu sistema logístico pelo medo de ser cercado por todos os lados</strong>.",
    author: "A Arte de Cercar",
    searchQuery: "estrategia militar manobra em pinca logistica na guerra",
    audioId: "ebd5edb236b6a764da1b27be583c711a.wav"
  },
  {
    topic: "Sociologia Digital",
    quote: "Os 'likes' em redes sociais operam com base na caixa de Skinner. Eles fornecem pequenas, porém irregulares e incertas doses de validação social, <strong>hackeando a exata vulnerabilidade cerebral que nos torna viciados em cassinos</strong>.",
    author: "Economia da Atenção",
    searchQuery: "vicio em redes sociais maquina de caca niqueis celular b f skinner",
    audioId: "57eef0c5c0d3004ebdfc9d9bd1a72409.wav"
  },
  {
    topic: "Cosmologia",
    quote: "O universo não tem centro e não tem bordas. Todas as galáxias parecem estar se afastando de nós simplesmente porque <strong>é o próprio tecido do espaço que está esticando como um balão em todas as direções possíveis</strong>.",
    author: "A Expansão Cósmica",
    searchQuery: "onde fica o centro do universo cosmologia expansao",
    audioId: "98f9ba8472c1764e594b9a453228efa4.wav"
  },
  {
    topic: "Matemática da Sorte",
    quote: "Comprar um bilhete de loteria é estatisticamente o pior investimento imaginável. Porém, no nível da psicologia humana, é muitas vezes a forma mais barata de <strong>comprar alguns dias agradáveis de fantasia escapista</strong>.",
    author: "Valor Esperado Negativo",
    searchQuery: "loterias vale a pena jogar economia comportamental fantasia",
    audioId: "5817f9ac7b03479083f949502528c10c.wav"
  },
  {
    topic: "Foco Profundo",
    quote: "Interrupções constantes no trabalho não apenas atrasam a tarefa em alguns segundos. Elas quebram o estado de 'flow' cognitivo, obrigando o cérebro a <strong>reiniciar todo o carregamento do contexto na memória de curto prazo, o que leva minutos valiosos</strong>.",
    author: "Custo da Interrupção",
    searchQuery: "estado de flow produtividade interrupcoes no trabalho memoria",
    audioId: "7aaa71ccd7169206e7ec99d713d45008.wav"
  },
  {
    topic: "Neuromarketing",
    quote: "Músicas lentas nos corredores dos supermercados não são escolhidas ao acaso. Elas têm a função neurológica de desacelerar as ondas cerebrais, fazendo o consumidor andar mais devagar e <strong>comprar 38% a mais por impulso cego</strong>.",
    author: "O Truque da Música",
    searchQuery: "estrategias de supermercado neuromarketing comportamento consumidor",
    audioId: "3b35c674abe2a9ff861d8adc63d0111e.wav"
  },
  {
    topic: "Liderança e Gestão",
    quote: "Se as suas regras organizacionais preveem punições severas para erros que foram comunicados abertamente, você não elimina as falhas. Você apenas <strong>cria uma máquina poderosa de esconder erros corporativos catastróficos até que eles explodam a empresa inteira</strong>.",
    author: "Segurança Psicológica",
    searchQuery: "cultura sem culpa esconder erros lideranca e falha",
    audioId: "614cb13c7497965a67b4bbf8c2740f46.wav"
  },
  {
    topic: "Paleontologia Evolutiva",
    quote: "O petróleo não vem de dinossauros soterrados, mas sim de gigantescas camadas de algas primitivas e plânctons microscópicos que, sem predadores de reciclagem química, <strong>afundaram intocados nos oceanos antigos, gerando o ouro negro de hoje</strong>.",
    author: "A Origem do Petróleo",
    searchQuery: "de onde vem o petroleo dinossauros algas combustivel fossil",
    audioId: "544233c6b9a2f2180dd224e4819f70fe.wav"
  },
  {
    topic: "Antropologia Social",
    quote: "Uma aliança no dedo anelar e um carro esportivo não servem apenas propósitos funcionais. Eles agem perante o seu grupo como poderosas <strong>sinalizações custosas na biologia da comunicação não verbal humana</strong>.",
    author: "Sinalização de Status",
    searchQuery: "psicologia do luxo anel de casamento sinalizacao custosa evolucao",
    audioId: "09fab6a7a9d1050ca5ad547a6cbfeafa.wav"
  },
  {
    topic: "Geopolítica da Água",
    quote: "As guerras do passado eram financiadas e decididas pelo controle de minérios de ouro, ferro e poços de petróleo. Os conflitos globais da segunda metade do nosso século, muito provavelmente, <strong>serão travados puramente pelo controle das bacias de água potável escassa</strong>.",
    author: "A Escassez Hídrica",
    searchQuery: "guerras por agua geopolitica crise hidrica futuro",
    audioId: "4f31b902624dccd5aaac49886a560eb6.wav"
  },
  {
    topic: "Filosofia da Mente Artificial",
    quote: "A máquina não sabe pensar. O ChatGPT gera conversas brilhantes prevendo probabilidades estatísticas cegamente, um pedaço minúsculo de sílaba por vez, <strong>desafiando a nossa ilusão de que escrever exige inteligência ou sequer compreensão do mundo real</strong>.",
    author: "O Quarto Chinês",
    searchQuery: "como funciona inteligencia artificial quarto chines chatgpt",
    audioId: "fe342d330d0cfc459d83650558530ccd.wav"
  },
  {
    topic: "Teoria Evolutiva dos Sentimentos",
    quote: "A inveja não existe na natureza como castigo moral. Evolutivamente, é um forte sinal biológico que, quando calibrado, <strong>funcionava para te alertar sobre desvantagens em hierarquias e obrigar o grupo primitivo a lutar contra abusadores dominantes</strong>.",
    author: "Utilidade da Inveja",
    searchQuery: "para que serve a inveja evolucao psicologica tribos",
    audioId: "af3e2b51cd3ea60a506611ed3ee1f399.wav"
  },
  {
    topic: "Arquitetura Hospitalar",
    quote: "Quartos de hospital que têm uma janela com visão direta para a natureza reduzem o tempo da internação, aceleram drasticamente a cicatrização de cortes profundos e <strong>reduzem a prescrição de doses cavalares de morfina para dor por via química do cérebro</strong>.",
    author: "Design Baseado em Evidência",
    searchQuery: "natureza cura rapido hospitais e arvores biofilia na saude",
    audioId: "8683893e47b3fe458161b292b0f80098.wav"
  },
  {
    topic: "Dinheiro e Propósito",
    quote: "Ricos não evitam impostos carregando pastas suadas de dinheiro para fora. Ricos usam dívidas controladas colateralizadas contra as suas próprias empresas para sacar montanhas de liquidez diária, <strong>um hack brutal da engenharia contábil isento de impostos mundiais</strong>.",
    author: "Comprar Dinheiro Emprestado",
    searchQuery: "como ricos evitam impostos engenharia contabil riqueza",
    audioId: "4191043ee48c36908c0dc354ca39970b.wav"
  },
  {
    topic: "Matemática do Tempo",
    quote: "Faltam apenas mil dias até seus filhos mais velhos baterem as asas e mudarem de casa, mas o seu cérebro prefere acreditar que <strong>tem milênios ilimitados disponíveis, fazendo-o gastar fins de semana inteiros com uma tela na mão em vez de brincar</strong>.",
    author: "O Ilusionismo do Tempo Infinito",
    searchQuery: "tim urban a cauda da vida tempo com a familia prioridades",
    audioId: "79182c920a936ca4273eccb8f6847b0c.wav"
  },
  {
    topic: "Bioquímica da Longevidade",
    quote: "Exposição diária ao calor brutal de saunas não é apenas para relaxar os nervos contra a tensão moderna; é o estresse térmico ativando as Proteínas de Choque Térmico (HSPs) que irão literalmente <strong>desfazer proteínas erradas da célula para prevenir o acúmulo de esclerose</strong>.",
    author: "Benefícios da Sauna",
    searchQuery: "proteinas de choque termico beneficios sauna longevidade alzheimer",
    audioId: "d7b16aca19f5274b6390dc9ef2e210d8.wav"
  },
  {
    topic: "Ecologia Circular",
    quote: "As plantas não puxam a própria matéria do solo negro úmido e morto. O gigantesco tronco massivo e sólido do imponente carvalho foi <strong>literalmente puxado de forma gasosa e invisível a partir de carbono roubado das moléculas do ar transparente em volta de você</strong>.",
    author: "O Paradoxo da Fotossíntese",
    searchQuery: "de onde vem as arvores carbono e ar peso da madeira fotossintese",
    audioId: "128d145f95d0d5f476baebe6b0470363.wav"
  },
  {
    topic: "Evolução Genética Humana",
    quote: "Nós somos a única espécie animal que pode beber leite depois do desmame e da infância. Essa brilhante e bizarra mutação da tolerância à lactose, apenas 10.000 anos atrás, <strong>deu aos pastores nômades caloria extra suficiente para sobreviverem na escassez do inverno letal congelante</strong>.",
    author: "A Mutação do Leite",
    searchQuery: "intolerancia a lactose porque tomamos leite evolucao humana",
    audioId: "b1eacf30f6e86cd208228befcb4a4b6e.wav"
  },
  {
    topic: "Produtividade Radical",
    quote: "Um projeto de trabalho irá se inchar como uma esponja na água ou murchar até caber perfeitamente <strong>no tempo psicológico fixo exato que você resolveu destinar para que ele seja entregue pelo seu prazo rígido</strong>.",
    author: "A Lei de Parkinson",
    searchQuery: "lei de parkinson dilatacao de tempo prazo produtividade",
    audioId: "200a9602308bf3a773ce898b25936c68.wav"
  },
  {
    topic: "Estratégia de Marketing",
    quote: "Você não está lutando contra marcas baratas concorrentes na publicidade diária. Você está travando um duelo pelo cérebro contra os <strong>notificadores agressivos dos smartphones dos consumidores que roubam trinta horas úteis semanais de dopamina e foco profundo</strong>.",
    author: "A Guerra da Atenção",
    searchQuery: "concorrencia de atencao celular e marketing vendas online",
    audioId: "fdef022509b12fb0123f23cc9679d037.wav"
  },
  {
    topic: "Astronomia de Curta Distância",
    quote: "O brilho fraco e inconstante da bela Estrela da Manhã brilhando ao amanhecer não é de uma estrela solitária longínqua. É Vênus refletindo a claridade incandescente do sol nas <strong>suas espessas nuvens de puro ácido sulfúrico tóxico, onde chove metal líquido para baixo</strong>.",
    author: "O Falso Brilho de Vênus",
    searchQuery: "estrela dalva sol sistema solar espaco chuva acida",
    audioId: "3b3fa584bce6f636e1b15ad0ad80349e.wav"
  },
  {
    topic: "Medicina Regenerativa",
    quote: "Um fígado adulto saudável tem o notável poder quase ficcional de poder sofrer a perda severa de impressionantes setenta por cento de sua massa total original e, incrivelmente, conseguir <strong>reconstruir ativamente quase toda a estrutura completa perfeita funcional do tamanho de sempre logo em seguida em algumas poucas semanas depois</strong>.",
    author: "Crescimento de Fígado",
    searchQuery: "como figado cresce medicina regeneracao orgao biologia",
    audioId: "36b58fe6cef0bc092f4b56f135da83bc.wav"
  },
  {
    topic: "Dinâmica Organizacional",
    quote: "Em toda rígida hierarquia, as pessoas geniais são inevitavelmente promovidas aos melhores cargos ano após ano, de degrau por degrau, até que, um dia glorioso fatalmente inadiável, <strong>eles finalmente atingem o exato limite superior do seu terrível e deprimente nível total de incompetência prática e ali empacam desmotivados por décadas depois</strong>.",
    author: "O Princípio de Peter",
    searchQuery: "promovido a incompetente principio de peter gerencia lideranca hierarquias",
    audioId: "c4e936ae88b63a42303a47d43172b5ab.wav"
  },
  {
    topic: "Psicologia Infantil",
    quote: "Elogiar ferozmente o desempenho da inteligência das crianças, e não premiar verbalmente e celebrar ruidosamente o próprio doloroso grande esforço gasto no percurso suado e brutal para concluir difíceis testes impossíveis na escola inteira de hoje, irá inevitavelmente <strong>garantir uma assombrosa e gigante geração global inteira imobilizada, petrificada, presa na dolorosa prisão de aterrorizante profundo fobia covarde aos grandes riscos necessários aos enormes avanços gigantes de crescimento</strong>.",
    author: "O Mindset Fixo vs Crescimento",
    searchQuery: "carol dweck mindset de crescimento como elogiar filhos infantil neurociencia",
    audioId: "15b0acd340545a01878f7c1529dbc907.wav"
  },
  {
    topic: "Teoria da Informação",
    quote: "Um pendrive vazio e um pendrive cheio de arquivos têm exatamente a mesma massa física. A <strong>informação não tem peso na balança, mas altera fundamentalmente a entropia microscópica e a estrutura de organização do universo</strong>.",
    author: "A Matéria da Informação",
    searchQuery: "claude shannon teoria da informacao peso dos dados",
    audioId: "6a11546ce647fde31b3ddac59220f10f.wav"
  },
  {
    topic: "Biologia Circadiana",
    quote: "Seu corpo não sabe que horas são olhando para um relógio na parede. O seu cérebro possui um <strong>senso mestre de tempo calibrado exclusivamente pelos fótons de luz do sol azul que atingem diretamente o fundo da sua retina ao acordar</strong>.",
    author: "Relógio Biológico",
    searchQuery: "ritmo circadiano neurociencia do sono andrew huberman",
    audioId: "2a441f7207d0981de6c98e08687c414d.wav"
  },
  {
    topic: "Falácias Cognitivas",
    quote: "Você frequentemente compra coisas caras que não precisa, não porque quer impressionar os outros, mas devido à Falácia do Custo Irrecuperável: <strong>seu cérebro se recusa a abandonar um investimento ruim simplesmente porque você já perdeu muito tempo tentando fazê-lo dar certo</strong>.",
    author: "O Efeito Concorde",
    searchQuery: "custo irrecuperavel economia comportamental tomada de decisao",
    audioId: "fdc9f17d9348b45e62d6a022449bcb1d.wav"
  },
  {
    topic: "História Antiga",
    quote: "As Pirâmides do Egito são tão inacreditavelmente antigas que, quando a grande rainha Cleópatra governou o mundo romano e egípcio, <strong>as Grandes Pirâmides já eram ruínas muito mais antigas para ela do que ela mesma é para nós hoje</strong>.",
    author: "O Tempo Profundo",
    searchQuery: "piramides do egito linha do tempo cleopatra historia",
    audioId: "d0500bc28c1235a04eb09505f1a05ea9.wav"
  },
  {
    topic: "Física Quântica",
    quote: "O gato de Schrödinger não é uma história bonitinha sobre um animal em uma caixa. É uma perturbadora prova de que, no mundo quântico, <strong>um átomo realmente existe em vários estados ao mesmo tempo até que um observador consciente decida olhar para ele</strong>.",
    author: "A Sobrecarga de Schrödinger",
    searchQuery: "gato de schrodinger mecanica quantica fisica",
    audioId: "fe2ebf1ad20dbb57a101cdd8a4d09c17.wav"
  },
  {
    topic: "Bioquímica Nutricional",
    quote: "O açúcar puro não apenas engorda o tecido adiposo, ele entra na corrente sanguínea como um ácido reativo e <strong>carameliza literalmente as proteínas vitais dos seus órgãos internos num processo químico mortal chamado de Glicação Avançada</strong>.",
    author: "O Dano do Açúcar",
    searchQuery: "AGEs glicacao nutricao bioquimica envelhecimento",
    audioId: "f729b8398dc6ad7697064737808215b0.wav"
  },
  {
    topic: "Engenharia Aeroespacial",
    quote: "Os trajes espaciais da Apollo não foram costurados por engenheiros metálicos durões da NASA. Eles tiveram que ser <strong>costurados meticulosamente à mão por senhoras fabricantes de sutiãs da Playtex para garantir a máxima flexibilidade nas articulações lunares</strong>.",
    author: "A Costura Lunar",
    searchQuery: "playtex trajes espaciais apollo nasa engenharia",
    audioId: "32164df82b189e526985c0e223333175.wav"
  },
  {
    topic: "Psicologia de Grupos",
    quote: "O efeito espectador prova de forma assustadora que, se você tiver um ataque cardíaco no meio de uma multidão de mil pessoas, <strong>a sua chance de receber ajuda é matematicamente muito menor do que se houvesse apenas uma única pessoa na rua com você</strong>.",
    author: "A Difusão da Responsabilidade",
    searchQuery: "efeito espectador psicologia social bystander effect",
    audioId: "538a0355459a171e34521d88a4b6a96f.wav"
  },
  {
    topic: "Geologia Planetária",
    quote: "O núcleo interno da Terra não é uma bola derretida de lava líquida caótica. Devido à pressão gravitacional esmagadora e absurda, <strong>ele é uma esfera sólida e cristalina de ferro puro que gira ligeiramente mais rápido do que a crosta inteira do planeta em cima dele</strong>.",
    author: "O Motor da Terra",
    searchQuery: "nucleo da terra geologia campo magnetico",
    audioId: "457d8050b9de20014578c2d75f49aebe.wav"
  },
  {
    topic: "Criptografia Moderna",
    quote: "Cada vez que você faz uma simples compra online usando o seu cartão de crédito, o seu humilde celular está <strong>resolvendo um cálculo matemático de números primos tão assombrosamente vasto que todos os computadores do mundo juntos não conseguiriam quebrá-lo em um bilhão de anos</strong>.",
    author: "A Criptografia RSA",
    searchQuery: "como funciona a criptografia rsa numeros primos seguranca",
    audioId: "1243b2415d46bc0ae750ffff6a59cb7b.wav"
  },
  {
    topic: "Paleoantropologia",
    quote: "Os Neandertais não eram homens das cavernas brutais e estúpidos. Eles tinham cérebros maiores do que os nossos, <strong>enterravam seus mortos com flores, fabricavam colas químicas complexas e possivelmente faziam artes nas paredes antes mesmo do Homo sapiens existir</strong>.",
    author: "A Inteligência Neandertal",
    searchQuery: "quem eram os neandertais paleoantropologia evolucao humana",
    audioId: "42ea725a8d55d9f88b9edba8f50e2f52.wav"
  },
  {
    topic: "Neuroplasticidade",
    quote: "Ler um livro novo não apenas coloca fatos invisíveis na sua mente. A leitura é um exercício físico extremo que <strong>obriga neurônios a literalmente crescerem ramificações e se conectarem fisicamente uns aos outros dentro do seu crânio a cada página virada</strong>.",
    author: "O Crescimento do Cérebro",
    searchQuery: "neuroplasticidade ler livros neurociencia ramificacoes",
    audioId: "53f6a642385b7ae9d1db11248d65ac89.wav"
  },
  {
    topic: "Arquitetura Românica",
    quote: "Os arcos do Panteão de Roma não caíram mesmo depois de dois mil anos de terremotos e guerras porque o concreto romano <strong>continha cinzas vulcânicas secretas que continuam se consertando quimicamente sozinhas sempre que a água da chuva entra pelas rachaduras</strong>.",
    author: "Concreto Auto-curável",
    searchQuery: "concreto romano panteao arquitetura engenharia",
    audioId: "70cefc42fcc0986b431c535a2deaec82.wav"
  },
  {
    topic: "Economia Comportamental",
    quote: "As pessoas preferem ganhar um salário de cinco mil dólares se seus amigos ganharem três mil, do que ganhar um salário de dez mil dólares se seus amigos ganharem doze. <strong>A nossa felicidade financeira não é absoluta, é tragicamente baseada apenas em rivalidade e comparação social</strong>.",
    author: "A Relatividade da Riqueza",
    searchQuery: "status social economia comportamental paradoxo da riqueza",
    audioId: "ed5389e513028374044d2a1f21075c16.wav"
  },
  {
    topic: "Botânica de Defesa",
    quote: "A grama recém-cortada cheira tão bem porque <strong>o que você está respirando é, na verdade, o grito químico de socorro das plantas mutiladas avisando a outras ao redor de que um predador devastador acabou de atacar a área</strong>.",
    author: "O Grito das Plantas",
    searchQuery: "cheiro de grama cortada botanica comunicacao quimica vegetal",
    audioId: "becdfbba5094db899aa3ff27c6df3537.wav"
  },
  {
    topic: "Genética Evolutiva",
    quote: "Quase todos os seres humanos nascidos fora do continente africano carregam entre 1% e 2% de puro DNA Neandertal. <strong>Nossos ancestrais não apenas lutaram contra outras espécies humanas, nós também namoramos com eles no escuro das cavernas pré-históricas</strong>.",
    author: "A Herança Neandertal",
    searchQuery: "dna neandertal genetica humana evolucao",
    audioId: "c33df8ca040cc3d61dd097618b1e3415.wav"
  },
  {
    topic: "Matemática do Caos",
    quote: "O bater das asas de uma borboleta no Brasil não causa diretamente um furacão no Texas, mas demonstra o Efeito Borboleta: <strong>a ideia matemática de que sistemas complexos são impossíveis de prever porque a menor variação imaginável no início muda completamente o destino no final</strong>.",
    author: "Teoria do Caos",
    searchQuery: "efeito borboleta teoria do caos previsibilidade",
    audioId: "3a3560d3559576fe75e9381d233a16b7.wav"
  },
  {
    topic: "Filosofia da Ciência",
    quote: "A ciência não é a busca definitiva pela verdade absoluta e inquestionável. Ela é <strong>o melhor método que inventamos para provar constantemente a nós mesmos o quanto nós estivemos profundamente errados no dia de ontem</strong>.",
    author: "A Falseabilidade",
    searchQuery: "karl popper metodo cientifico filosofia da ciencia",
    audioId: "47b3adb45ba889b4d141283b5e527f56.wav"
  },
  {
    topic: "Engenharia de Software",
    quote: "O primeiro erro computacional, ou 'bug', da história não foi um erro de código na tela. <strong>Foi uma mariposa de verdade que ficou fisicamente esmagada nos relés de choque e travou um dos primeiros computadores militares de uma tonelada do mundo</strong>.",
    author: "A Origem do Bug",
    searchQuery: "grace hopper primeiro bug de computador historia da programacao",
    audioId: "b316b2b186405d65bed179052ea6f357.wav"
  },
  {
    topic: "Mecânica Fluida",
    quote: "Os aviões não voam porque os motores os empurram fortemente para cima contra as nuvens. Eles voam porque o formato brutalmente inteligente da asa <strong>manipula o ar para criar uma pressão tão violenta por baixo dela que o avião é fisicamente expulso do chão</strong>.",
    author: "O Paradoxo de Bernoulli",
    searchQuery: "como um aviao voa principio de bernoulli aerodinamica",
    audioId: "5b7d7a964ed1094be4676da57ac58507.wav"
  },
  {
    topic: "Sociologia e Tribos",
    quote: "Nós temos uma tendência instintiva violenta de dividir as pessoas entre o 'nosso grupo' e 'eles'. <strong>Experimentos mostram que formamos panelinhas exclusivas e preconceituosas baseadas até mesmo no simples lançamento de uma moeda aleatória sem importância</strong>.",
    author: "A Criação do Outro",
    searchQuery: "vies de grupo psicologia social nos contra eles",
    audioId: "857c0d174f8f8c358723c4339646f67c.wav"
  },
  {
    topic: "Biologia Imunológica",
    quote: "As vacinas não são medicamentos curativos que matam as doenças por você. Elas são essencialmente <strong>simuladores de treinamento militar contendo alvos inimigos mortos para treinar as suas defesas brancas nativas sem risco de uma guerra real dentro do seu corpo</strong>.",
    author: "O Simulador Imunológico",
    searchQuery: "como funcionam vacinas sistema imunologico biologia",
    audioId: "33ae37b5aedc9d19a7856b42de0cad7c.wav"
  },
  {
    topic: "Estudos do Sono",
    quote: "Nós não dormimos para que o corpo descanse; os seus músculos poderiam relaxar tranquilamente acordados no sofá. <strong>Dormimos quase exclusivamente para que o sistema linfático no crânio abra canais de água e lave os resíduos tóxicos do cérebro antes que envenenem os pensamentos</strong>.",
    author: "A Lavagem Cerebral Noturna",
    searchQuery: "sistema glinfatico porque dormimos saude do sono",
    audioId: "e3bc06594ddb302ae9b79dd3a59830ec.wav"
  },
  {
    topic: "Química Estelar",
    quote: "Todo o ouro sólido e resistente das suas alianças de casamento e o ferro vermelho correndo nas suas veias <strong>não foram criados na Terra. Eles foram forjados no coração violento e brutal da explosão cataclísmica de estrelas agonizantes a bilhões de anos atrás</strong>.",
    author: "Poeira de Estrelas",
    searchQuery: "somos poeira de estrelas origem do ouro astrofisica",
    audioId: "a03566f8076037fd2c59689a9ecee4e0.wav"
  },
  {
    topic: "Matemática Pura",
    quote: "O conceito matemático do Zero (0) não existiu em Roma ou na Grécia Antiga. Ele precisou ser <strong>inventado quase mil anos depois na Índia clássica para que, pela primeira vez, os cientistas tivessem uma palavra e um símbolo numérico para representar o 'Nada'</strong>.",
    author: "A Invenção do Nada",
    searchQuery: "historia do zero matematica indiana invenção",
    audioId: "60eac5567f6900d5b987cfc26531cc18.wav"
  },
  {
    topic: "Gestão e Estratégia",
    quote: "Você não delega tarefas porque tem preguiça e deseja descansar no escritório confortável. Você delega porque se o líder gastar sua capacidade de processamento operando as máquinas com as mãos, <strong>ninguém estará no timão prestando atenção nos icebergs gigantes à frente do navio cego</strong>.",
    author: "O Verdadeiro Papel do Líder",
    searchQuery: "lideranca delegacao de tarefas visao estrategica",
    audioId: "bde9341fb3f2bfa9a474c496cd963a1d.wav"
  },
  {
    topic: "Filosofia Estética",
    quote: "O conceito de que 'a beleza está nos olhos de quem vê' é uma mentira biológica. Nossos cérebros estão programados geneticamente para enxergar beleza em rostos <strong>perfeitamente matemáticos e simétricos, porque isso indica secretamente um DNA saudável sem deformações parasitárias</strong>.",
    author: "A Matemática da Beleza",
    searchQuery: "o que e beleza biologia evolutiva simetria facial",
    audioId: "faf11613179cf1c12ed7da3d73f1aaae.wav"
  },
  {
    topic: "Engenharia de Estruturas",
    quote: "As pontes suspensas gigantescas balançam fortemente sob ventos intensos não porque têm defeito de material de construção leve. <strong>Elas balançam intencionalmente por design técnico perfeito, porque se fossem absolutamente duras e fixas, elas se partiriam ao meio como um graveto de vidro na tempestade</strong>.",
    author: "A Força da Flexibilidade",
    searchQuery: "pontes suspensas engenharia civil flexibilidade estruturas",
    audioId: "6e69fdc9989483dfc6dc0a160e227448.wav"
  },
  {
    topic: "Comportamento Animal",
    quote: "Os corvos conseguem usar gravetos finos como ferramentas complexas e até resolver quebra-cabeças com várias etapas difíceis para obter comida. <strong>Eles têm a inteligência prática assustadora de uma criança de sete anos, presa num cérebro do tamanho de uma noz americana</strong>.",
    author: "A Inteligência dos Corvos",
    searchQuery: "corvos inteligentes neurociencia animal ferramentas passaros",
    audioId: "9c1f5f0a61d7df2a50fbbdd5a3639302.wav"
  },
  {
    topic: "Neurociência Auditiva",
    quote: "O arrepio súbito nas costas que você sente quando ouve o refrão épico e arrebatador da sua música favorita não é apenas emoção abstrata flutuante. É uma <strong>tempestade maciça e explosiva do hormônio dopamina inundando o seu córtex auditivo no exato segundo em que o cérebro prevê o próximo acorde com perfeição</strong>.",
    author: "A Música e a Dopamina",
    searchQuery: "arrepios com musica dopamina neurociencia frisson",
    audioId: "ab850d23818b1444318e243b95b8539f.wav"
  },
  {
    topic: "Antropologia e Dieta",
    quote: "Nós fomos a única espécie de primatas que trocou um intestino gigantesco focado em digerir folhas por um intestino fino e curto focado em digerir carne assada densa, <strong>liberando energia brutal extra suficiente para inflar o nosso córtex cerebral até o tamanho absurdo de hoje</strong>.",
    author: "O Fogo e o Cérebro",
    searchQuery: "como cozinhamos nos fez humanos intestino e cerebro antropologia da dieta",
    audioId: "f23ad15df2148fc0c513d65b639dff4c.wav"
  },
  {
    topic: "Estratégia Militar de Sun Tzu",
    quote: "A maior vitória militar que um exército poderoso pode alcançar em toda a guerra <strong>nunca acontece nos campos de batalhas cheios de sangue e fumaça, mas sim quando se vence e domina a mente do inimigo de forma tão brutal que ele desiste antes de atirar a primeira flecha</strong>.",
    author: "A Arte da Guerra",
    searchQuery: "sun tzu arte da guerra estrategia vitoria sem lutar",
    audioId: "1a2cfe67b1d0b2cd296b8291da37cc32.wav"
  },
  {
    topic: "Filosofia Epistemológica",
    quote: "O paradoxo de Sócrates 'Só sei que nada sei' não era uma falsa modéstia para irritar generais atenienses. Era uma lâmina de corte afiada para provar que <strong>a inteligência genuína não é o acúmulo de dados triviais vazios, mas sim a capacidade de aceitar o nível devastador da nossa própria cegueira colossal</strong>.",
    author: "A Ignorância Consciente",
    searchQuery: "socrates epistemologia ignorancia sabedoria",
    audioId: "0b427613ba8f0275aedad936afa07acb.wav"
  },
  {
    topic: "Economia da Tecnologia",
    quote: "Um smartphone comum de bolso no ano de hoje possui infinitamente mais capacidade de puro poder de processamento bruto matemático do que <strong>todas as salas de computadores gigantes e combinadas que levaram a primeira missão do homem corajoso da Apollo para pousar e andar na poeira da Lua</strong>.",
    author: "A Lei de Moore",
    searchQuery: "poder de processamento do celular apollo 11 lei de moore",
    audioId: "c87e7b129b7fc83a4089b285967387a1.wav"
  },
  {
    topic: "Biologia Animal de Profundeza",
    quote: "Nos oceanos escuros insondáveis, onde não existe nenhuma energia de fóton de luz para a vida funcionar, existem imensos ecossistemas extraterrestres fervendo onde <strong>bactérias retiram sua energia vital química mastigando as rochas ricas em enxofre venenoso que brotam das chaminés de fumaça preta vulcanicas quentes</strong>.",
    author: "Vida no Fundo do Mar",
    searchQuery: "chamines hidrotermais biologia de profundidade sem sol",
    audioId: "f7edd707e85559fb5aa550a36e29ec66.wav"
  },
  {
    topic: "Neurociência do Comportamento",
    quote: "As fobias bizarras não aprendidas que temos, como o pânico terrível irracional de ver cobras de longe ou aranhas na parede escura, não são traumas adquiridos de nascença na sua breve vida pessoal. São <strong>fantasmas ancestrais de três milhões de anos embutidos diretamente no código de fábrica do seu sistema de alarme amígdala cerebral para sobrevivência nas selvas</strong>.",
    author: "O Medo Evolutivo",
    searchQuery: "por que temos medo de cobra fobias biologia evolutiva",
    audioId: "4e7d4af01d045253c1a54ddd0e507eb5.wav"
  },
  {
    topic: "Sociologia da Moda",
    quote: "Roupas e trajes elegantes com um excelente caimento nas ruas das cidades de alto padrão não têm uma única maldita vantagem sequer para te proteger contra o frio polar. A moda é, quase inteiramente e exclusivamente, <strong>uma competição contínua de guerra silenciosa de uniformes para demarcar território, afirmar superioridade de riqueza econômica e excluir os indesejados da elite fechada</strong>.",
    author: "O Teatro Social do Vestuário",
    searchQuery: "sociologia da moda status roupas sinalizacao custosa",
    audioId: "b872d3845dea16f77cd05d722c21f87e.wav"
  },
  {
    topic: "Termodinâmica Prática",
    quote: "Um ar-condicionado na sala da sua casa fechada não tem a mágica química capacidade de produzir vento gelado novo ou soprar gelo macio dentro da sua casa abafada. Ele opera violentamente como uma esponja mecânica furiosa que <strong>suga o fogo do ar quente ambiente por contato direto, e força esse fogo a ser jogado sem dó do lado de fora pela tubulação externa quente</strong>.",
    author: "O Sequestro do Calor",
    searchQuery: "como funciona o ar condicionado termodinamica calor",
    audioId: "ad008851af8955b742c919ea40e2f722.wav"
  },
  {
    topic: "História da Moeda",
    quote: "O conceito inicial genial das notas planas de papel moeda de dinheiro não começou e nasceu com os grandes reinos antigos e deuses. Eles surgiram de forma improvisada com simples <strong>recibos rudes de ferreiros de confiança na época em que pessoas odiavam carregar pedras e moedas de puro ouro bruto amarradas por medo absoluto dos salteadores das estradas sombrias noturnas</strong>.",
    author: "A Origem do Dinheiro",
    searchQuery: "origem do dinheiro de papel economia moedas de ouro recibos",
    audioId: "af7df691f39db73c8f70a5c9bfb4d92d.wav"
  },
  {
    topic: "Filosofia Niilista",
    quote: "Quando Nietzsche gritou agressivamente a famosa frase que chocou os anos que se seguiram: 'Deus está morto', ele não estava celebrando e sorrindo e comemorando arrogantemente com uma cerveja alemã no bar da esquina noturna de Berlim. Ele estava <strong>alertando aos humanos assustados que se o alicerce absoluto de toda a nossa forte moral religiosa tradicional entrasse em forte colapso absoluto com a nossa revolução iluminista intelectual de razão, a Europa iria se afogar num oceano letal sangrento gigante escuro de guerras sem qualquer moral, niilismo, de depressão moderna grave e falta absurda severa de absoluto profundo e enorme sentido moral e social existencial</strong>.",
    author: "O Aviso de Nietzsche",
    searchQuery: "deus esta morto nietzsche niilismo iluminismo filosofia moral",
    audioId: "9e804dc81b3288f28269c2b798872260.wav"
  },
  {
    topic: "Genética e Doenças",
    quote: "A terrível anemia falciforme causa sofrimento massivo aos glóbulos vermelhos deformados e fracos da corrente sanguínea dolorosa nas nossas veias vermelhas batendo e latejando em africanos nascidos. Mas esse exato defeito violento fatal perdura no forte e longo tempo, apenas porque carregar uma única dessas terríveis mutações nocivas perigosas fornece aos mesmos humanos <strong>uma defesa quase inviolável maravilhosa poderosa absurda incrivel genial contra o perigoso ataque do terrível mosquito agressivo chato da temida Malária nos pântanos e matos do campo</strong>.",
    author: "A Vantagem do Defeito",
    searchQuery: "anemia falciforme e malaria vantagem heterozigoto evolucao genetica doencas",
    audioId: "6cbf61e2f84a08c3ed9f92010ee35391.wav"
  },
  {
    topic: "Ciência da Liderança Moderna",
    quote: "Os comandantes dos complexos e claustrofóbicos submarinos gigantes armados com ogivas nucleares sombrias e atômicas na Marinha silenciosa e militar do exército dos generais não mandam arrogantemente seus duros e assustados marinheiros rasos apenas empurrarem cegamente todos os pesados botões críticos no controle vermelho de ataque final fatal e destruidor. Eles gastam o caro precioso tempo escasso na longa preparação para <strong>informar de forma radical cristalina a brilhante 'intenção' exata global tática brutal e estratégica e moral do grande comandante para que todo último recruta possa e consiga decidir agir rápido e pensar forte corretamente pelas fortes próprias ordens certas num apagão brutal final noturno da guerra mortal fria sem comando</strong>.",
    author: "O Comando por Intenção",
    searchQuery: "comando por intencao david marquet turn the ship around lideranca militar",
    audioId: "d94f1648cc0d7c5f3b662ba90fb57962.wav"
  },
  {
    topic: "Psiquiatria da Atenção (TDAH)",
    quote: "O cérebro complexo dos humanos rápidos frenéticos adultos modernos e crianças perdidas assustadas e dispersas e aflitas que possuem grave diagnóstico real do Transtorno de Déficit de Atenção com Hiperatividade veloz não sofre terrivelmente e miseravelmente apenas e somente da enorme e bruta absurda falta doentia da importante e escassa falta de atenção. Muito pelo contrário, eles operam intensamente como antenas violentas ultra sensíveis em constante sobrecarga absurda massiva e barulhenta que na verdade e na prática, <strong>absorvem vorazmente toda e absolutamente toda possível inútil mínima e estúpida pequena fútil menor informação ao redor simultaneamente o tempo todo sem ter nenhum bendito brutal escudo e inibidor filtrador para cancelar e reduzir ou esconder e abafar completamente todos os ruídos idiotas e inúteis paralelos insignificantes externos que os humanos e mentes comuns e triviais saudáveis filtram brutalmente o tempo todo invisivelmente com total forte facilidade cega sem grande grande gigantesco enorme esforço de dor dor e sofrimento cansaço massivo letal</strong>.",
    author: "O Paradoxo do TDAH",
    searchQuery: "como funciona tdah neurociencia foco psiquiatria filtragem atencional",
    audioId: "f3a3bd68c26fdcd8ceed68c005784946.wav"
  },
  {
    topic: "Evolução Genética",
    quote: "O apêndice humano, durante séculos considerado um erro inútil da evolução pronto para inflamar e matar você à toa, na verdade funciona como um precioso **esconderijo biológico secreto que guarda bactérias intestinais vitais para repovoar seu sistema após uma grave infecção fulminante**.",
    author: "O Bunker das Bactérias",
    searchQuery: "para que serve o apendice biologia evolucao humana digestao",
    audioId: "93d3c0398e4ec7fddde608fba1943c10.wav"
  },
  {
    topic: "Biologia Vegetal",
    quote: "A planta da qual fazemos o papel que você rasga com tanta facilidade possui um DNA assustador. Uma simples árvore de pinheiro comum, que fica parada no quintal, tem **sete vezes mais complexidade genética pura espalhada nos seus cromossomos do que o genoma humano de um gênio cientista**.",
    author: "O Genoma do Pinheiro",
    searchQuery: "tamanho do dna do pinheiro biologia vegetal genetica da arvore",
    audioId: "5628271bcfdf84031d3c0ac5d25770fe.wav"
  },
  {
    topic: "Física de Materiais",
    quote: "O vidro cristalino das janelas não é tecnicamente um material sólido congelado, nem totalmente um líquido derretido solto. Ele é definido como um raro 'sólido amorfo', que significa que os seus átomos **ficaram tragicamente travados no meio de uma dança aleatória antes que pudessem formar uma estrutura de cristal rígida e perfeita**.",
    author: "O Sólido Congelado no Tempo",
    searchQuery: "o que e o vidro solido amorfo quimica de materiais",
    audioId: "df8abcb3d304e8a3c3e835b0719441f3.wav"
  },
  {
    topic: "Oceanografia",
    quote: "O ponto mais profundo e esmagador do inexplorado oceano terrestre, conhecido como a assustadora Fossa das Marianas, é tão monstruosamente fundo e imenso, que se nós jogássemos o gigante Monte Everest de cabeça para baixo lá dentro, **o topo gelado da sua montanha mais alta ainda ficaria submergido a mais de dois quilômetros inteiros de distância da luz da superfície**.",
    author: "A Fossa das Marianas",
    searchQuery: "fossa das marianas profundidade oceano monte everest comparacao",
    audioId: "d641cc9e02fa0a4f4518d0fac92c01dc.wav"
  },
  {
    topic: "Neurociência Evolutiva",
    quote: "Bocejar violentamente quando você vê uma pessoa cansada bocejando não é tédio ou falta de oxigênio escasso. Trata-se de um brilhante **gatilho de contágio motor ancestral herdado da nossa tribo primitiva para tentar sincronizar perfeitamente o ciclo de sono profundo do bando inteiro para o perigoso acampamento da noite**.",
    author: "O Contágio do Bocejo",
    searchQuery: "por que o bocejo e contagioso biologia evolutiva neurociencia do sono",
    audioId: "df63dd6615b99af17987cb0e1c3e2708.wav"
  },
  {
    topic: "História da Computação",
    quote: "O inventor brutal e brilhante que decifrou as assustadoras máquinas Enigma da guerra militar e inventou os computadores abstratos lógicos modernos não usou aço brilhante em sua pesquisa inicial. Ele **usou apenas papel e um lápis afiado para imaginar e desenhar toda a lógica binária de uma inteligência matemática que governaria o mundo anos depois**.",
    author: "A Máquina de Turing",
    searchQuery: "alan turing inteligencia artificial computacao enigma",
    audioId: "d2df8b53fdc172e90cc1ad612533b68d.wav"
  },
  {
    topic: "Antropologia Linguística",
    quote: "Os famosos hieróglifos imponentes e complexos nas pedras de calcário antigo egípcio permaneceram mudos e intraduzíveis, indecifráveis por um gigantesco e terrível milênio e meio de tempo sombrio. Até que um general exilado encontrou um pedaço de rocha suja preta com o mesmo exato e burocrático **texto imperial inútil escrito traduzido na nossa conhecida língua grega para os oficiais antigos da época**. A Pedra de Roseta.",
    author: "A Chave do Egito Antigo",
    searchQuery: "pedra de roseta hieroglifos linguistica arqueologia",
    audioId: "3278e1602ee779b2c3404e38f9b49215.wav"
  },
  {
    topic: "Economia Monetária",
    quote: "A gigantesca dívida multibilionária mundial acumulada e espalhada pelas ricas nações superpoderosas do globo nunca será paga matematicamente. O sistema de crédito e criação de dinheiro fiduciário não foi feito ou desenhado com o propósito moral de ser quitado finalizado e zerado com moedas ou notas de ouro puro, mas de **fluir de forma perpétua como a própria energia arterial fluindo pelas estradas quentes de uma criatura financeira gigante sedenta que só sobrevive crescendo ou estourando**.",
    author: "O Motor da Dívida",
    searchQuery: "dinheiro fiduciario inflacao divida externa global",
    audioId: "f8f0c2ab5288c2f1a2f72b4b24e536a1.wav"
  },
  {
    topic: "Matemática da Beleza",
    quote: "As incríveis pétalas brilhantes do girassol dourado e as assustadoras escamas duras espirais do abacaxi tropical nunca crescem de forma aleatória descuidada. Elas **seguem rigorosamente, passo a passo infalível e perfeito, a rígida ordem numérica divina abstrata infinita da exata sequência clássica sagrada matemática cega de Fibonacci**.",
    author: "O Código da Natureza",
    searchQuery: "sequencia de fibonacci natureza girassol matematica divina",
    audioId: "1ed42590f67c67fe9270e8122f9a4446.wav"
  },
  {
    topic: "Astronomia de Colisão",
    quote: "Quando a nossa maravilhosa grandiosa galáxia colossal de estrelas da Via Láctea finalmente colidir brutalmente com a violenta nossa gigante vizinha de Andrômeda a milhões de anos longínquos de distância, **provavelmente nenhuma estrela solitária esbarrará de frente em outra. Porque a distância pura fantasmagórica isolada de vácuo frio e assustador entre cada estrela e poeira brilhante é infinitamente vasta do que imaginamos no céu profundo.**",
    author: "A Dança dos Fantasmas",
    searchQuery: "colisao de galaxias andromeda via lactea astrofisica de espaco",
    audioId: "06ce140e1e7c74a0a580656681eb4345.wav"
  },
  {
    topic: "Evolução Visual",
    quote: "A visão humana em três cores ricas não evoluiu para admirar o pôr do sol. Surgiu há milhões de anos apenas para que nossos ancestrais primatas pudessem **enxergar de longe o sangue vermelho brilhante sob a pele de membros agressivos da tribo**.",
    author: "A Cor da Ira",
    searchQuery: "evolucao da visao tri cromatica sangue rostos humanos",
    audioId: "7b607ad8b71490b50c050ca916a395ed.wav"
  },
  {
    topic: "História Oculta",
    quote: "A Grande Muralha da China não é uma única muralha sólida e impenetrável. Ela é um enorme **labirinto fragmentado de muros quebrados e fossos espalhados que funcionavam apenas como postos de vigilância de pedágio, e raramente parava invasores reais**.",
    author: "O Mito da Muralha",
    searchQuery: "muralha da china invasores mongois pedagi0 e impostos",
    audioId: "7483833afd757cce1eda8fc27ef29da2.wav"
  },
  {
    topic: "Microbiologia Digestiva",
    quote: "Você não digere a sua própria comida no estômago sozinho. Seu intestino delgado e grosso é uma fazenda biológica onde **trilhões de bactérias alienígenas devoram a comida para você e defecam vitaminas e nutrientes químicos na sua corrente sanguínea**.",
    author: "A Fazenda Intestinal",
    searchQuery: "microbioma humano bacterias do intestino digestao",
    audioId: "ec9f001570571a59c8c323d97c03c979.wav"
  },
  {
    topic: "Engenharia de Dutos",
    quote: "A água da torneira do seu banho no apartamento do quinto andar só tem pressão forte porque a água urbana **é bombeada lentamente para caixas d'água gigantes no alto das montanhas, e a gravidade gratuita do planeta faz o trabalho brutal de esmagar o líquido cano abaixo**.",
    author: "O Motor Invisível",
    searchQuery: "pressao hidraulica caixas dagua gravidade urbana",
    audioId: "514043b9907d9ba430a095e38325b639.wav"
  },
  {
    topic: "Neurologia do Aprendizado",
    quote: "Não existe 'memória fotográfica' real na neurociência humana. Pessoas que memorizam mil dígitos do Pi não fotografam o número na mente, elas usam o antigo Palácio da Memória, **amarrando números abstratos vazios a fortes imagens emocionais grotescas, sangrentas ou sexuais dentro de salas imaginárias**.",
    author: "O Palácio da Mente",
    searchQuery: "palacio da memoria como memorizar neurociencia imagens fortes",
    audioId: "da350e0c91c4f3dc96bcf202a5fa75d0.wav"
  },
  {
    topic: "Física Eletromagnética",
    quote: "A tela sensível ao toque do seu smartphone de vidro duro não reage ao simples peso físico do seu dedo esmagando-a. Ela reage porque o seu dedo gordo suado **conduz um minúsculo fio invisível de eletricidade orgânica que rouba elétrons da malha da tela e aciona o processador**.",
    author: "O Toque Humano",
    searchQuery: "como funciona touch screen capacitivo eletricidade do corpo",
    audioId: "1c252f525781169f4b3e4db97f8f368c.wav"
  },
  {
    topic: "Botânica Florestal",
    quote: "As raízes das árvores maduras na floresta escura não competem furiosamente pelo alimento do solo contra outras árvores da sua própria espécie. Elas **transferem carbono e nutrientes ativamente para os bebês árvores menores crescendo na sombra através de uma enorme teia fúngica subterrânea chamada Micorriza**.",
    author: "A Internet da Floresta",
    searchQuery: "micorriza simbiose fungos arvores que se ajudam",
    audioId: "213651934d6987cca9eea89b74c7fb06.wav"
  },
  {
    topic: "Matemática Estatística",
    quote: "Se você reunir apenas 23 pessoas aleatórias numa pequena sala de aula, a matemática absurda da teoria das probabilidades crava que há **cinquenta por cento de chance brutal e exata de que duas daquelas pessoas farão aniversário no exato mesmo dia**.",
    author: "O Paradoxo do Aniversário",
    searchQuery: "paradoxo do aniversario estatistica 23 pessoas",
    audioId: "2d0c05f30b047b00f0269c94d0758392.wav"
  },
  {
    topic: "Engenharia de Aviões",
    quote: "Os pneus minúsculos de borracha dos aviões comerciais gigantescos não explodem quando a aeronave despenca e esmaga o chão a 300 quilômetros por hora. Eles suportam o impacto assassino de toneladas de aço metálico voador porque **não são preenchidos com ar ambiente macio, mas sim inflados até o talo com puro e frio gás Nitrogênio**.",
    author: "Pneus de Avião",
    searchQuery: "pneus de aviao nitrogenio engenharia aeronautica impacto",
    audioId: "6690c05546507985aa0df9f45a9d7c5f.wav"
  },
  {
    topic: "Economia do Sorteio",
    quote: "A máquina de cassino mais perigosa e brutalmente lucrativa e genial do mundo moderno contemporâneo não fica escondida e suja numa sala escurecida de Las Vegas. Fica brilhando na tela colorida inocente do seu celular, **sempre que você arrasta a tela infinita do TikTok para baixo esperando cegamente por qual novidade brilhante e curta o algoritmo vai jogar na sua cara**.",
    author: "A Roda do Rato Digital",
    searchQuery: "vicio em redes sociais roleta russa digital rolar a tela",
    audioId: "99f0c7e58676dd41c79f1845717e2555.wav"
  },
  {
    topic: "Biologia da Dor",
    quote: "A pimenta malagueta ardida e dolorosa que você morde no taco mexicano na verdade não tem temperatura química alta e quente. Ela possui a molécula química venenosa Capsaicina, que **mente neurologicamente e descaradamente para os sensores nervosos dobres de temperatura da sua língua mole, fazendo o cérebro entrar em pânico imaginando que a boca pegou fogo vivo**.",
    author: "O Alarme Falso do Fogo",
    searchQuery: "por que pimenta arde capsaicina neurociencia ilusao",
    audioId: "32f13fef7cadab1a5c7b38ba5da6a1d1.wav"
  },
  {
    topic: "Engenharia Genética",
    quote: "Nós temos a assustadora tecnologia científica hoje para simplesmente ressuscitar, a partir do sangue morto congelado nos pólos glaciais brancos do planeta, um **verdadeiro gigante e assustador Mamute Lanudo da era do gelo e colocá-lo para gestar no calor vivo da barriga de um elefante africano fêmea do zoológico**.",
    author: "A Ressurreição",
    searchQuery: "clonagem de mamutes engenharia genetica elefantes era do gelo",
    audioId: "19d2924be4a3a53830f1921807152857.wav"
  },
  {
    topic: "Psicologia da Atenção",
    quote: "Quando você anda furiosamente por uma calçada lotada e apertada de centro de cidade cheia de rostos feios estranhos e desconhecidos correndo para o almoço do meio dia, **o seu cérebro preguiçoso para economizar a rara energia elétrica glicêmica não renderiza os rostos longes como os seus olhos HD veem, mas sim borra tudo deliberadamente até que a pessoa bata no seu ombro no meio do percurso**.",
    author: "O Custo do Processamento",
    searchQuery: "renderizacao cerebral foco visual energia do cerebro ilusao",
    audioId: "8de32d86cc2ad8ce28dc6549a282e58d.wav"
  },
  {
    topic: "Estratégia Geopolítica",
    quote: "A gigantesca frota mercante comercial colossal inteira da gigantesca pátria chinesa comunista não viaja pacificamente e vagarosamente pelo vasto longo frio e profundo mar azul sem destino algum. Ela opera matematicamente desenhada como **um perigoso exército global imperial sem espadas, controlando estrategicamente cada buraco, porto e canal de fluxo de recursos das velhas nações para estrangular os seus vizinhos no futuro**.",
    author: "O Novo Império Sem Tiros",
    searchQuery: "rota da seda china poder naval estrangulamento de portos",
    audioId: "deee6dfcc38bb8b780e612a0b8e4bbf3.wav"
  },
  {
    topic: "Química do Sabor",
    quote: "O incrível e delicioso gosto de baunilha saboroso do seu macio macaron fresco e chique da padaria requintada não precisou vir da preciosa orquídea rara tropical colhida a mão. Ele pode ser **sintetizado quimicamente barato nas fábricas mortas barulhentas a partir de grossos fungos podres escuros da terra usando um punhado amarelado sujo de enzimas do solo**.",
    author: "A Mentira Saborosa",
    searchQuery: "aroma de baunilha sintetico engenharia de alimentos sabores artificiais",
    audioId: "e7aa31245f9e4003f942c8963d8f6946.wav"
  },
  {
    topic: "Comportamento Aviário",
    quote: "Os imponentes gansos selvagens barulhentos voam formando uma pontuda rígida clássica e severa flecha geométrica desenhada em perfeição e forma de V no meio cru do céu azul alto unicamente porque **cada pássaro gordo batendo as asas pesadas na frente quebra brutalmente a dura e invisível parede espessa física do vento frio gelado e pesado, criando um duto macio de ar mole sem atrito algum para o bicho sortudo e preguiçoso que vem viajando flutuando atrás relaxar os músculos**.",
    author: "O Escudo Aéreo",
    searchQuery: "por que os passaros voam em V aerodinamica aves bando",
    audioId: "592100f026490f846cfe7ed4bc1cf121.wav"
  },
  {
    topic: "Engenharia de Armamento",
    quote: "A famosa espada mítica letal curva mortal e fina e brilhante oriental e perigosa da temível antiga guarda de honra e combate letal japonesa Samurai não era afiada até o último limite microscópico extremo que dividia os últimos átomos ao meio do vento em volta. Na dura física real e prática do metal, **uma faca cega de cozinha corta melhor um grande bloco podre da forte armadura brutal do general guerreiro assustador e blindado que ficava coberto do duro metal fechado porque lâminas extremamente finas como um caco de papel simplesmente se destroem tortas como um espelho de vidro quebrando num impacto de martelo gigante na cara**.",
    author: "O Fio da Realidade",
    searchQuery: "katana e armaduras forja de espadas samurai fio de corte",
    audioId: "ee7fafb7bed20da2f83f7846a4e5cc70.wav"
  },
  {
    topic: "Meteorologia Dinâmica",
    quote: "Os gigantes furacões massivos e assustadores negros destruidores de cidades úmidas inteiras dos litorais com vento e água quente chuvosa que rodam o mapa inteiro não nascem girando rapidamente do nada do céu escuro vazio e aleatório. Eles **roubam fisicamente e sem nenhuma misericórdia a força de puro enorme momento invisível da gigantesca pura lenta gigantesca gigante maldita rotação brutal massiva pesada do planeta Terra ao redor do seu grande eixo cósmico imaginário**.",
    author: "O Motor do Furacão",
    searchQuery: "forca de coriolis furacoes rotação da terra clima",
    audioId: "7ac306663115d98faa76a053fff9d29a.wav"
  },
  {
    topic: "História da Medicina",
    quote: "Os hospitais modernos brancos assustadores doentios antigamente antes da descoberta final heroica bacteriana lavavam zero macas. Os loucos heroicos ousados e ridicularizados médicos cientistas **tiveram literalmente e fisicamente que arrancar e brigar implorando lutando de joelhos para que todos os médicos das cirurgias mortais fedorentas por favor considerassem minimamente passar apenas uma água limpa quente nas próprias mãos brancas pálidas assassinas depois de virem cortando os velhos cadáveres mortos e imediatamente antes de fazer um arriscado frágil úmido e sensível e maravilhoso tenso parto nas senhoritas grávidas**.",
    author: "O Custo Invisível",
    searchQuery: "ignaz semmelweis lavar as maos infeccao hospitalar febre puerperal",
    audioId: "d2af47be238681bcd3005fd880b4de69.wav"
  },
  {
    topic: "Filosofia da Ética e Moral",
    quote: "Se um pesadelo terrível moderno real trouxesse um bondinho trem gigante letal assustador rápido sem motorista acelerando cego com carga mortal numa linha para atropelar e rasgar fatalmente exatos indefesos e medrosos cinco trabalhadores sujos dos trilhos da linha da cidade e a sua mão divina e suada com dedos tremendo pudesse com brutal poder trágico absoluto decidir heroicamente fatalmente e corajosamente girar mortalmente o duro pino frio alavanca sangrento para esmagar impiedosamente no lugar maldito final fatal da desgraça deles só um pobre maldito magro triste solitário alheio no trilho duro gelado foda da lateral maldita abandonada do mundo cruel; **o número absurdo frio matemático seco e lógico pragmático calculador sem afeto das assustadoras e brutais exatas almas cruéis matemáticas da salvação utilitária exata provaria cegamente na morte terrível calculista dura brutal da faca amarga cortante letal filosófica e fria exata da matemática utilitária fria e brutal assustadoramente cega calculista cínica que você deve impiedosamente assassinar covardemente na porrada cruel esmagadora dolorosa brutal cega surda maldita moral trágica sombria da humanidade inteira de uma maldita miserável desgraçada pura vítima inocente cega de olhos abertos sem piedade na carne ensanguentada morta e dura crua fatal e fria pelo único pragmático terrível sangrento objetivo frio lógico matemático absurdo matemático brutal puro de salvar de imediato calculista prático outras exatas felizes cegas de sorte pura e cega outras frias completas e felizes e livres outras exatas cinco vidas no mesmo terrível desastre descontrolado final maldito terrível**. O Paradoxo Sangrento Utilitarista do Dilema.",
    author: "O Dilema do Bonde",
    searchQuery: "dilema do bonde etica filosofia moral utilitarismo",
    audioId: "28d7eb36d64fca380ae4cf807910b8c5.wav"
  },
  {
    topic: "Fisiologia Auditiva",
    quote: "O fone de ouvido enfiado e sujo brutalmente cravado dolorosamente no seu suado meato duro fedido estreito e profundo úmido cano e pequeno sombrio ouvido não escuta ou ouve nada e as velozes brutais duras altas frenéticas invisíveis e mudas tristes violentas e assustadoras calmas ondas mortas vazias transparentes inofensivas de som grave alto barulhento grave duro físico duro musical batendo explodindo que saem da fina e suada pele do alto falante do ouvido só possuem o seu duro barulho sujo **porque dentro de um osso nojento duro afundado no buraco sombrio de crânio tem uma pequena assustadora concha cheia gorda minúscula úmida cega fechada e cheia até o talo entupida fedida quente do líquido podre de água cheia com tristes fracos pálidos minúsculos microscópicos ridículos sensíveis pelos brancos minúsculos cegos que apanham e chicoteiam batendo tremendo forte doentes como varas finas malucas vibrantes doloridas ao vento na maré quente pesada na tempestade do balanço das fortes marés pesadas no líquido do crânio molhado mandando raio nos neurônios do ouvido**.",
    author: "A Engrenagem da Audição",
    searchQuery: "coclea audicao como ouvimos ouvidos cilios",
    audioId: "7eeb1d98bb4eb133171b6cb99a699b4f.wav"
  },
  {
    topic: "Evolução Genética e Agricultura",
    quote: "A grande milagrosa famosa suculenta grossa verde clara gigante linda alface macia úmida gigante redonda gostosa crocante salada nutritiva e doce não existe pura no duro sujo chão frio nobre virgem mato floresta solto cego sol da terra úmida cheia nojento de cobras perigosas cegas peçonhentas e raízes mato espinho podre no mundo antes dos deuses gigantes criarem tudo há anos cegos atrás para trás. A pálida boba grossa folhagem grande vegetal orgânica molhada inteira dócil passiva lenta grande folha vegetal pura verde maravilhosa limpa no supermercado fresco limpo rico puro não veio de Deus livre ou do mundo ou do céu ou do pó do mato ou terra da evolução do inseto e do chão orgânico no planeta natural; **ela foi lenta longa massiva brutal dura cega paciente incansavelmente pesadamente estupidamente cegamente fabricada feita por violentos milênios mil anos pesados do sujo longo demorado milenar e incansável duro escravo esforço antigo foda bruto ancestral das velhas antigas rugas dos sábios antigos primitivos agricultores rurais que torturavam cruzavam a genética do venenoso duro espinho e forte e bravo duro mato maldito erva venenosa asquerosa dura ruim tóxica dura asquerosa selvagem mato seco folhoso picante até sobrar o suco do açúcar cego macio na boca**. Genética na fazenda de matos crus e bravos no fim da noite na mesa farta pura linda livre de perigo no seu prato cru e fino caro cego grande bom rico do mundo feliz moderno limpo liso e farto para a salada cega verde de festa de família rica chata morta pura verde cara bela doce fria limpa macia e boa.",
    author: "O Cativeiro da Salada",
    searchQuery: "origem da alface agricultura genetica historia da alimentacao",
    audioId: "55cedb37f1189efd5abb3baee0432218.wav"
  },
  {
    topic: "Psicologia de Multidão",
    quote: "As duras tristes burras idiotas e vazias grossas terríveis horríveis e cegas bestas massas suadas loucas cheias lotadas e assustadoras violentas perigosas rudes duras e pesadas sombrias violentas brutais idiotas mortais assassinas turmas e aglomerações cruéis rudes covardes anônimas furiosas perigosas mortais cegas não ficam juntas suadas ricas unidas burras fracas e cegas loucas por apenas acaso frouxo aleatório no buraco frouxo da praça maldita do povo vazio perdido louco sangrento suado cego sem freio morto sem regra. **O puro denso forte maldito poderoso imenso cheiro podre sombrio cheiro escuro e quente pálido invisível duro podre escuro gás instinto bruto ancestral puro animal macaco tribal fedorento cego mortal das hordas furiosas cegas das gangues primitivas esmaga derruba dilacera destrói rasga a fina nobre civilizada e gentil fraca bonita frágil frouxa pobre pura inteligente pequena cultura genial moderna brilhante cultura do humano bom rico forte livre puro feliz intelectual em cinco curtos feios cegos duros estúpidos segundos feios nojentos rápidos quando queima do nada um perigo imaginário louco sujo tolo pálido assustador mentiroso na beirada burra do fraco medo inútil vazio invisível e cruel no coração podre covarde e cego louco furioso da manada louca gorda cega irracional suada barulhenta feia frouxa maldita do rebanho podre cego maldito gordo sem dono com medo do escuro que assusta macacos e gado cego pesado na porrada sangrenta assustadora covarde inútil frágil cega**. O homem afundado e morto enterrado fundo e duro na massa cega grossa pesada animal burra podre vira nada e sobra lama seca poeira e bicho puro macaco ruim com medo suado.",
    author: "O Peso da Manada",
    searchQuery: "comportamento de multidao psicologia social instinto animal histeria",
    audioId: "32b053bc0837988dcac22d0c3395c6b6.wav"
  },
  {
    topic: "Neurobiologia da Dor Fantasma",
    quote: "As exatas fortes brutais reais sensações horríveis agudas nojentas cortantes de pura ardida cruel dolorosa assustadora queimação de espinho quente faca perfurante nas puras lisas vazias e ausentes tristes unhas brancas do duro longo grande ausente inexistente fantasma do invisível pé cego decepado e sumido frouxo inútil triste e podre amputado amputado no osso da perna fria e cortada arrancada pálida daquele sofrido pobre militar cego paciente torturado doente ferido baleado fodido machucado quebrado aleijado que sobreviveu e chora sangrando não é puro delírio cego louco e sujo fraco triste imaginário cego sombrio falso da mente vazia e doente mental louca fraca podre boba perdida boba surtada cega assustada e falsa da psicose frouxa morta. **Os exatos ricos puros fortes pesados velhos e brilhantes complexos densos rápidos perigosos finos puros vivos rápidos vivos potentes neurônios brancos cinzentos vivos fios do forte vivo duro crânio cérebro úmido escuro grande daquele coitado triste sentindo dor no vazio do vento do pé ausente ainda estão tragicamente inteiros completos cheios potentes fortes vivos conectados acesos brilhando sozinhos desesperados assustados gritando como sirenes quebradas duras altas fortes de puro alarme alto nojento dolorido assustador fogo maldito puro infernal dor absurda tocando berrando enviando luz de horror no escuro duro do vazio cego da dor pura maldita por puro fogo livre maldito que apita e esmaga o peito vazio trágico da mente dolorida para sempre**.",
    author: "O Alarme Sem Porta",
    searchQuery: "dor fantasma amputacao neurociencia dor nervos",
    audioId: "cadd3fa5ae0cdd6440ee66612933ca38.wav"
  },
  {
    topic: "História da Tecnologia",
    quote: "A gloriosa invenção genial das famosas e rápidas e úteis escadas modernas grandes macias e metálicas que andam sozinhas elétricas móveis não foi pensada apenas brilhantemente para poupar o suado percurso subir suor cansaço físico das pernas frouxas fracas lentas pesadas cansadas fracas e gordas pernas tristes lentas fracas dos apressados idosos cheios do sujo pesado saco fedorento com mercado e malas pesadas grandes pretas pesadas de gente feia fedorenta. **Elas foram brilhantemente engenhosamente arquitetadas espertas frias cinicamente e maravilhosamente ricas perfeitamente feitas pelo puro capitalismo duro frio pragmático assustador calculista para injetar brutalmente empurrar sem força injetar como gado injetar cego um mar de consumidores cego direto contínuo rico forte duro espesso gigante cego assustador de pura massa de pura pesada de pessoas consumistas e cegas ignorantes idiotas mortas ricas burras com sacolas cheias direto fatalmente cegas liso solto fácil duro no puro buraco liso grande rico fundo e fatal no alto frio brilhante coração falso fedorento frio luxuoso e rico assustador dos andares tristes fechados ricos pálidos mortos assustadores brancos limpos do maldito enorme shopping de puro lixo de puro plástico de merda fedido capital que compra tudo**.",
    author: "A Correia Transportadora Humana",
    searchQuery: "escada rolante shopping historia invencao consumismo",
    audioId: "8248e6054f31d66ad8e40b79c25a5f74.wav"
  },
  {
    topic: "Economia e Riqueza",
    quote: "A pura forte dura amarga grande gigante colossal brutal pura feia e verdadeira realidade assustadora dura maldita de cimento da pura fria maldita gigantesca real montanha grande financeira da assustadora nojenta gigantesca de riqueza capital grande financeira suja fria colossal assustadora global absurda cruel monstruosa não se cria fazendo economias chatas lerdas burras chatas pequenas covardes puras bobas poupando as nojentas trocas pequenas esmolas pálidas migalhas moedas gordas velhas porcas tostões feios sujos baratos em cofrinho maldito bosta feio lixo de pobre mendigo na poupança burra covarde do banco do diabo falido medroso covarde frouxo ladrão foda triste e cego que chupa o lucro dos bobos ricos covardes ricos lentos burros trouxas falidos de merda boba covarde frouxa burra lerda bosta triste e pobre cega de pobreza que economiza café puro sujo barato amargo sujo de copo no asfalto quente. **Os donos assustadores imperadores donos cruéis donos chefes imperiais reis fortes cegos senhores perigosos donos das mega pálidas indústrias puras bilionárias de aço ouro prata criaram seu abismo rico de puro bilhão foda brilhante cavando sem dó pedindo bilhão emprestado sem pagar nada sugando sangue de divida de banco imprimindo duro maldito juros na cara sem dó e empilhando risco fatal na costa suja gigante nas engrenagens obscenas da macroeconomia global sem limite cego infinito absurdo podre de farto de pura montanha assustadora sem fundo farto infinito grande mar limpo pálido do mercado aberto sombrio**.",
    author: "A Mentira do Troco",
    searchQuery: "ficar rico bilionarios economia e divida mentira da poupanca",
    audioId: "928dc935f63bb22c365df51af46145a6.wav"
  },
  {
    topic: "Astronomia Estelar",
    quote: "A gigantesca assustadora bela estrela enorme gigantesca brutal assustadora fria distante maravilhosa brilhante pesada grande assustadora monstra pálida e fria amarela pura quente amarela amarela estrela colossal cega monstruosa fria pálida amarela fria brilhante cega bonita de estrela que você cego burro lento bobo triste frouxo fraco besta besta besta triste tolo cego mortal olha sorrindo romântico feliz cego sorridente besta apaixonado na escuridão negra pálida e cega romântica suja do belo e calmo silêncio céu estrelado infinito belo negro céu negro fundo pálido limpo duro negro buraco escuro assustador infinito e poético belo bonito vazio com amor puro feliz limpo calmo feliz não está na real brilhando suave e bonita amarela limpa no mesmo momento instante de relógio exato agora do seu presente duro seco de hoje exato do hoje exato minuto de hoje no relógio do hoje agora nesse segundo fraco e fugaz mortal duro presente do momento seu cego agora. **Ela provavelmente já esfriou morta explodiu foda brilhante morreu sangrando chumbo pesado cega na puta que pariu do abismo vazio sombrio cósmico terrível solitário vazio e apagou no escuro frio solitário buraco cego silencioso infinito dezenas assustadoras mil e dezenas velhas frouxas esquecidas solitárias de milhares eternos velhos pálidos longos fundos secos pálidos malditos cínicos longos milhares longos mortos de eternos fodidos milhares cínicos velhos anos e anos longos burros cegos escuros de anos luz anos cruéis e duros do velho pesado tempo frio podre atrás de você de trás para trás foda atrás, apenas o minúsculo maldito frouxo fóton luz fraca fria pequena fina raio de poeira luz fantasma pálida velha suja da velha casca explosiva velha frouxa fria e podre maldita luz cega fantasma branca morta foda do tiro luz brilhante final ainda estava viajando perdida vagando arrastando devagar e assustadora frouxa longa fria pálida lenta devagar frágil triste pelo eterno gigante gordo e seco vazio vácuo suado até furar rasgar arranhar furar deitar beijar deitar o asqueroso fundo redondo liso branco úmido fundo mole olho negro do cego burro saco podre úmido sujo seu maldito mole e burro olho branco de carne podre cega e mortal agora para o seu frouxo minúsculo podre insignificante besta poético pequeno romântico cérebro humano de bosta lixo carne pó barro lama água osso triste besta sujo macaco primata fraco e cego e tolo sonhar que ela existe na beleza cínica e romântica da luz fantasma atrasada no infinito universo poético sujo vazio de Deus gigante e farto de estrelas gigantes assustadoras fantasma do vácuo mudo silencioso que não se importa foda frio brutal negro escuro poético infinito e lindo**.",
    author: "O Beijo do Fantasma",
    searchQuery: "estrelas estao mortas astronomia velocidade da luz anos luz",
    audioId: "90e51c9bf6c085a9193933e43af67e55.wav"
  },
  {
    topic: "Neurologia da Decisão",
    quote: "Se a pequena estrutura amígdala do seu cérebro fosse cirurgicamente removida, você não se tornaria um robô lógico e superinteligente. Na verdade, você seria **incapaz de tomar qualquer decisão simples, como escolher entre camisa azul ou vermelha, porque sem a emoção sentida fisicamente para atribuir valor às opções, o cérebro humano entra num loop infinito de cálculo analítico e morre de paralisia de análise**.",
    author: "O Motor Emocional",
    searchQuery: "amigdala neurociencia tomada de decisao emocao e razao",
    audioId: "a2d9348429da26082c7882a472d1cfa2.wav"
  },
  {
    topic: "Microbiologia Doméstica",
    quote: "A sua esponja de cozinha suada e amarela não limpa os pratos. Ela tem mais bactérias mortais e micróbios fecais concentrados em um milímetro quadrado do que **a borda de cerâmica suja da privada do seu banheiro público no fim do dia**.",
    author: "O Berçário Verde",
    searchQuery: "esponja de cozinha bacterias higiene biologia",
    audioId: "8ad7315b8df5c85fedb8cd040a5d8eac.wav"
  },
  {
    topic: "História Militar",
    quote: "As trincheiras terríveis e longas e lamacentas da primeira guerra assustadora global brutal mortífera doentia não eram feitas apenas de terra suja cavada morta feia. Elas eram **um inferno claustrofóbico químico escavado afogado em sangue, corpos podres como sacos de areia e ratos gigantescos e agressivos mutantes que comiam feridos indefesos ainda respirando na beira fria do abismo humano maldito de aço lama morte pólvora terror**.",
    author: "A Lama Ensanguentada",
    searchQuery: "trincheiras primeira guerra mundial terror historia",
    audioId: "d64ae7ecf367aa1d8df4d68777f716de.wav"
  },

  {
    topic: "Engenharia de Redes",
    quote: "A internet global gigante assustadora mágica veloz que alimenta o seu roteador minúsculo e leva sua foto triste cega doída vazia até o outro lado maldito seco distante da terra azul foda longe redonda de água grande fundo podre da china do mar do outro lado foda do mapa azul de mundo assustador azul de água, não viaja em satélite espacial foda cego rico assustador caro do satélite rico invisível de sinal. Ela trafega cegamente pesadamente bruta trancada suja amarrada afundada enterrada em cabos gordos asquerosos monstros feios duros cegos e físicos, cabos de fibra dura, grossos como cobras monstruosas de mil milhas enterrados no chão podre molhado cego sombrio do oceano profundo e liso mordidos ativamente sem dó por tubarões cegos no breu da terra funda do mar**.",
    author: "A Internet Debaixo d'Água",
    searchQuery: "cabo submarino internet engenharia de redes oceano",
    audioId: "4be4835f1b0d8def6e65fe8b761f8fab.wav"
  },
  {
    topic: "Comportamento Humano",
    quote: "Quando você mente brutalmente ou engana cinicamente roubando uma mentira suja fácil e sorri tranquilo para todos da família suada e ri escondido no quarto frouxo seguro covarde e calmo e sujo no escuro e esconde o grande gigante pesado feio duro nojento podre segredo de lixo no cu cego cínico e feio triste da culpa do fundo mental covarde na porra do cérebro assustado amargo lixo fraco frouxo feio tolo, o seu próprio sistema simpático e a mente maldita brutal não são enganados pela boca e sim começam a carregar fisicamente secretamente **um tanque massivo de hormônios doentios estressores de puro medo estresse raiva alerta e fuga cortando o cu frouxo nervoso o estômago assustado a garganta fodida até te dar uma gastrite maldita úlcera assustadora que vai rasgar comer corroer apodrecer furar sangrar doer morder seu bucho liso branco de dentro pra fora em alguns tristes cruéis meses solitários**.",
    author: "O Preço da Mentira",
    searchQuery: "mentira e estresse biologia da culpa doencas psicossomaticas psicobiologia",
    audioId: "00c32b8c7462b433d6ebbe8eff8f3fa9.wav"
  },
  {
    topic: "Arqueologia Misteriosa",
    quote: "O gigantesco e pesado exército de terracota chinês imperial não foi construído duro e frio por camponeses medrosos para adornar a grande cova escura e podre do velho morto e fedido antigo imperador seco da Ásia antiga distante. Eles foram criados como formidáveis demônios guerreiros brutais mágicos do além escuro para lutar violentamente na perigosa morte terrível pós morte assassina fria espiritual contra os reis furiosos e fantasmas cortantes de reinos que ele mesmo esmagou em vida.",
    author: "O Falso Túmulo",
    searchQuery: "exercito de terracota qin shi huang arqueologia vida apos a morte",
    audioId: "d8a424f0e96b05235fb4a5490749fe42.wav"
  },
  {
    topic: "História da Fotografia",
    quote: "A primeira estranha amarelada misteriosa cega e borrada antiga feia suja pioneira fotografia do longo grande humano vivo morto no velho e frio mundo cinza da frança distante não foi tirada rápida cega e solta no sol. A única velha e cinza triste figura negra minúscula pálida frouxa distante minúscula na rua longa da velha e silenciosa fria Paris triste vazia só sobrou e borrou o lento papel frio molhado químico do fotógrafo morto porque o pobre e triste coitado estava de pé engessado e com a bota suja sendo brilhada imóvel cego como morto de gesso durante assustadores tristes longos fodidos duros e eternos quinze grandes pesados minutos brutais exatos da lente aberta do equipamento mágico químico lento amarrado ao chão.",
    author: "A Sombra Fria de Paris",
    searchQuery: "boulevard du temple daguerreotipo primeira fotografia de humano",
    audioId: "551b21af72efffdaebef5574f1829a53.wav"
  },
  {
    topic: "Biologia Fúngica",
    quote: "A maior solitária assustadora maciça cega fria brutal pesada criatura viva e cega colossal inteira biológica conectada silenciosa gorda grande da porra do planeta inteiro terra do mundo não é o gigante lento azul leviatã mamífero molhado baleia azul gorda nos oceanos fundos mortos e úmidos do abismo fundo cruel. É um assustador gigante feio perigoso pálido fundo assassino monstruoso gordo sujo fofo sombrio fedorento frouxo fungo maldito no fundo duro de mel cogumelo cego mortal de oregon amarrado invisível gigante espalhado longo esticado que mede bizarros horríveis frios pesados gigantes longos quase quatro malditos asquerosos cínicos longos pesados frouxos quilômetros escuros frios embaixo e mortais no chão sujo molhado podre escuro da velha folha fofa de terra florestal.",
    author: "A Besta Subterrânea",
    searchQuery: "armillaria ostoyae fungo gigante biologia oregon floresta",
    audioId: "44cab1282240be1b64ec3d323813d400.wav"
  },
  {
    topic: "História Naval",
    quote: "Os mortais temíveis e cruéis duros impiedosos furiosos lendários e fedidos assassinos e violentos sujos e duros marinheiros vikings grandes loiros loucos sangrentos brutais guerreiros medievais piratas nórdicos nunca usaram capacetes cornudos afiados de osso cego e feio bruto sujo pontudo como contam falsamente nos contos burros do teatro morto poético do povo fraco. Usar uma grande espada dura letal enorme pesada grande afiada chifruda longa cega pontiaguda no crânio liso cego molhado doente quente cego exposto frágil mortal na longa brutal quente cega fofa suada assassina confusão sangrenta de uma feia e úmida cega dura batalha seria o mais rápido e fatal letal convite frouxo idiota burro e mortal puro para que um adversário nojento esperto rápido fácil simplesmente puxasse ou prendesse sua cabeça gorda tola nua mole cortada para rasgar e quebrar mortalmente seu pobre triste escuro grosso brutal inútil e sangrento fraco pescoço humano indefeso para trás em um estalo.",
    author: "O Mito dos Chifres",
    searchQuery: "viking chifres no capacete historia medieval batalhas mitos",
    audioId: "e74734b3fa69626636e0c917742e9f0b.wav"
  },
  {
    topic: "Comportamento Felino",
    quote: "O seu fofo macio inocente gato peludo ronronando meigo frágil calmo liso carente doméstico dorminhoco fofo gato calmo puro cego e lindo doméstico gordo ronrona doce na cama cega e fofa quente livre fofa quentinha dele à noite não apenas por alegria besta feliz boba tola e mansa poética amorosa fofa doce alegre boba morta boba fofa cega amigável romântica do afeto vazio humano solto tonto de amor liso dele. Eles também geram fisicamente do cérebro assustado o exato som cego nojento motor vibração ronrono gordo áspero duro assustado cego mortal seco áspero para a assustadora dolorida brutal fria pura assustadora de dor forte cicatrização brutal interna fria osso forte densidade do duro dolorido osso cego longo assustador maciço e cego fraturado cego do cérebro ansioso no cu cego nervoso doente de medo dor frio ferimento agonia ou tensão pura cega e solta estresse bicho tenso mortal deles no sofá da sua perna macia e feliz falsa amorosa rica fria cega gorda de ilusão.",
    author: "O Motor de Ossos",
    searchQuery: "por que os gatos ronronam frequencia de ronronar cura ossea biologia animal",
    audioId: "9e5ada223155b5e850becae3fd878226.wav"
  },
  {
    topic: "Astronomia Planetária",
    quote: "O brilhante majestoso gigante farto gordo lindo grande anel brilhante grosso gelado gigante largo do planeta anel saturno cego frio amarelo poético do fundo distante pálido liso sujo sistema não é uma longa fina sólida mágica placa contínua celestial de pedra chata de gás liso cósmico majestoso. Ele é literalmente brutalmente tristemente friamente assustadoramente cínico friamente um mar asqueroso bagunçado podre esmagado desordenado caótico gordo de pequenas infinitas brutais pedras mortais lixo podre pedras cinzentas cegas feias soltas burras perdidas assustadoras pedras de poeira lixo pedra seca água dura e suja gorda gigante e boba fria pálida de maldito fedido e feio lixo de puro inútil duro letal solto mortal puro feio inútil grosso lixo de poeira gelo afiado espinhento cortante nojento velho burro fedido poeira nojenta de lixo de cometa morto lixo lixo velho espacial chato frouxo de rocha dura suja do sistema solar boiando tolo vazio inútil cego assustado morto podre solto de detritos esmagados.",
    author: "A Mentira Celestial",
    searchQuery: "aneis de saturno o que sao dejetos espaciais astronomia gelo e rocha",
    audioId: "f7b14c222c5c19c920dd9f510842d81c.wav"
  },
  {
    topic: "Neurociência do Olfato",
    quote: "O invisível suave puro calmo quente longo invisível misterioso fantasma maravilhoso aroma fino e cheirosco pálido quente assustador perfume mudo fedorento ou doce do puro quente e limpo cheiro da comida e lixo invisível solto ar não passa pelo cérebro da lógica burra limpa intelectual pálida analítica cega racional dura lenta da inteligência córtex do topo mole cerebral limpo burro doente branco intelectual frio pensante e mole lento da consciência morta e velha do intelecto seco liso falso cego triste e puro. O nariz cego úmido negro sujo doido afunda o ar longo suado fedido morto no sistema fundo puro macaco límbico primitivo gordo afundado quente doido brutal das puras cegas animais primitivas nojentas cegas burras puras cegas memórias tristes assustadoras raivosas nostálgicas primitivas feras selvagens quentes mortais instintivas diretas de medo fome amor foda sexual podre puro animal puro direto quente e instintivo da natureza da terra.",
    author: "A Linha Direta da Memória",
    searchQuery: "olfato e memoria sistema limbico perfume neurociencia cheiros",
    audioId: "5bbfd19daf2d60c54ec43e22e89e876e.wav"
  },
  {
    topic: "Engenharia Genética em Animais",
    quote: "Os famosos coloridos chamativos belos fofos puros pequenos aquários pequenos vermelhos azuis peixinhos brilhantes caros plásticos e vivos lindos elétricos fluorescentes exóticos de led azul brilho neon roxo não nascem lindos cínicos deuses no mato fundo falso da evolução molhada gorda rio liso tropical doce longo fundo rio sujo escuro fundo e escuro frouxo mato escuro rio úmido frio do oriente sujo perdido e mato verde. Eles são simples burras carpas e gordos duros sujos podres prateados feios fracos gordos tristes cinzas e baratos peixinhos do lixo peixes de barro podre riacho nojento comum fundo e cego do diabo do esgoto frio natural sujo escuro feio triste geneticamente hackeados fodidos fundos mexidos manipulados frios pelo laboratório frio injetando fundo forte dura a mágica maldita DNA viva dura cega química brilhante fluorescente e luminosa da nojenta e gorda de água viva maldita asquerosa águas vivas do mar foda assustador salgado longe cego oceano farto no cu negro escuro duro assustador do núcleo embrião podre da besta do peixe assustador peixe neon maldito morto vivo triste neon barato do cínico rico aquário pálido da loja de animais falsa de shopping de gente besta e fofa.",
    author: "A Fábrica de Cores",
    searchQuery: "peixe neon glofish engenharia genetica agua viva",
    audioId: "bffffcbd644f2493abcaee7ef2a18093.wav"
  },
  {
    topic: "Física Quântica Teórica",
    quote: "A maldita invisível triste seca doente e minúscula fraca velha morta cinza burra pequena matéria cega das longas paredes frias tristes nojentas duras mortas pesadas vazias paredes duras casas rochas sólidas pesadas grandes cegas não têm a tal famosa pura cega mágica rigidez maciça física dura da matéria do mundo burro de pedra física solta grande forte real do físico bruto solto seco denso frouxo liso nojento chão gordo real sólido. Cada duro inútil assustador triste frouxo minúsculo poeira de assustador nojento pálido morto solitário inútil duro átomo cego no abismo seco sombrio buraco das coisas secas tristes físicas malditas cegas reais de casa cega rocha podre material maciça frouxa é absurdamente asquerosamente cínico 99,9999% de puta doida e suada gorda seca dura frouxa inútil assustadora vasta assombrosa vazia inútil assustadora nada puro gordo de puta vácuo cego buraco infinito gordo frio espaço de nada de poeira espacial fria vazio sujo vácuo do caralho e cínico suado buraco cego morto sombrio negro vácuo puro de espaço vazio do caralho buraco maldito seco puro vazio sem nada morto pálido escuro e silencioso do nada no espaço.",
    author: "O Abismo da Parede",
    searchQuery: "atomo espaco vazio fisica quantica solidos materia ilusao",
    audioId: "a786f3b8e481c432155500682d8d7507.wav"
  },
  {
    topic: "Bioquímica Humana",
    quote: "As suas duras secas mortas nojentas e velhas compridas afiadas ou lisas duras pálidas pálidas fracas úmidas pequenas minúsculas e calmas pequenas chatas mortas burras fracas e cegas mortas fracas feias pálidas e frágeis minúsculas frouxas unhas velhas do pé podre branco mole morto suado de osso de homem doente morto frio calmo cego e morto frágil e calmo e sujo e fraco fofo humano bosta pele dura morta frágil cega unhas do corpo não crescem cínicas após fofas calmas sujas puras depois a trágica triste nojenta solitária úmida solitária terrível e fria assustadora fria burra podre pálida morte inútil física feia fedorenta feia calada burra e doente a doida horrível morte gelada mortal da parada assassina do fim biológico do maldito podre cadáver do pobre solitário cego demente defunto triste que você será amanhã maldito escuro buraco. A pura pele velha fria enrugada fraca suada mole e doente da carne assustada pálida seca burra fedida e seca mole pálida suada pálida resseca afunda encolhe suada resseca se comprime nojenta seca diminui morta chupada seca recua burra e dá apenas a falsa inútil tola mentirosa cega ilusão ótica podre seca fria visual suja pálida podre estúpida de que a velha unha afiada suja seca frouxa amarela podre lixo asquerosa do cu da morte asquerosa e podre feia e longa está cega crescendo esticando maior e pontuda longo fina fria no dedo fantasma duro asqueroso osso branco caixão escuro foda pálido maldito defunto assustador e tolo tolo do caixão pálido falso da morte do buraco escuro assustador burro solitário foda assustador seco de poeira lixo.",
    author: "A Ilusão da Cova",
    searchQuery: "unhas crescem depois de morto mito ilusao cadaver biologia morte pele retraindo",
    audioId: "28a0cea23cdcfed95d90e79d79580d37.wav"
  },
  {
    topic: "Psicologia da Decisão",
    quote: "A escolha cega livre nobre solta divina mágica poderosa racional suja da sua mente pura cega nobre da alma fofa livre livre solta inteligente que te faz ir vir comer gastar amar rir transar e dormir livre frouxa nobre pura mente brilhante do humano limpo forte liso não existe pura. O grande cego escuro instinto cínico úmido cérebro subconsciente do macaco sujo químico frouxo nojento macaco cínico úmido gordo suado burro sombrio assustador químico primitivo subconsciente seu dita foda rápido escuro feio rápido gordo frouxo amargo maldito e cruel rápido cego foda invisível cruel instinto suado invisível pesado cruel escuro rápido o caminho exato triste tolo podre feio frouxo foda tolo cego oitenta sujos longos centésimos feios velozes frios lixos podres de cruéis tolos frações minúsculos asquerosos de cínico tempo de segundos assassinos cegos suados milissegundos fodidos de antes da sua frouxa falsa inútil doente calma lenta lerda atrasada cega podre frouxa mole doce inútil doente tola boba cega atrasada e tola fraca lenta inútil da desgraçada razão pálida doente mente gorda lógica fraca pura livre saber burra frouxa tola ou se dar mísera assustada doente mole calada assustada tola tonta frouxa e boba e fraca inútil conta cega lerda burra morta do que caralho porra triste inútil doente suja vazia de razão aconteceu na puta e triste mentira ilusória do cu livre livre lixo livre livre do seu pequeno inútil de arbítrio frágil tolo da vontade frouxa cega.",
    author: "O Boneco de Carne",
    searchQuery: "livre arbitrio decisao subconsciente tempo de reacao psicologia neurociencia ilusao",
    audioId: "ca2af0b1a81b74cff4a907401b1af4ba.wav"
  },
  {
    topic: "Economia Psicológica",
    quote: "O maldito assustador gigantesco e bilionário lucro vermelho do grande shopping gordo pálido caro cheiroso fresco luminoso alto branco luxuoso do cheiro frouxo caro branco limpo artificial ar fedorento de dinheiro gelado mentiroso cínico e feio inútil gigante sujo gordo gigante burro falso limpo rico triste pálido gigante sujo vazio pálido vazio rico cínico grande feio gordo gelado de falso do shopping vazio e fresco branco limpo morto fedido frouxo cego não brota sai liso mágico belo de milagre livre bonito limpo das compras ricas de farta nobre família feliz liso cega fofa que consome a prateleira. Ele suga morde puxa baba arranca foda sujo nojento maldito sangue cruel e forte asqueroso covarde escuro frouxo cínico covarde pesado invisível gordo ardil morde cego cruel ardiloso gordo rouba gordo da dor maldita nojenta escuridão pálida cruel dor invisível fadiga exaustão frouxa pura cegueira exaustão fadiga da física tola das luzes duras brilhantes brancas asquerosas neon feias ofuscantes fortes rudes duras e do grande cruel labirinto torto falso pálido cego esquisito chão infinito sem saída limpo grande liso branco duro cego maldito pálido e de chão burro piso feio torto assustador do layout da loja grande maldito gigante labirinto feio suado de piso chão do design que te cansa sangra destrói rouba esgota derrete torra assa quebra destrói queima o cérebro triste mole podre estúpido tolo inútil cansado fraco e frouxo até você burro triste lixo morto rendido cansado e gordo morto sem freio ou cego ceder aceitar covarde parar cair fraco e esgotado de joelhos molhados tristes suados cegos cegos frouxos sem defesa frouxos frouxos rendidos tontos e comprar foda de tolo caro doce frouxo feio sujo barato inútil lixo burro foda da vitrine assustadora pura capitalista boba na porta de vidro falso e cruel caro falso do inferno.",
    author: "O Vampiro de Neon",
    searchQuery: "fadiga de decisao design de shopping consumismo neurociencia exaustao de compras layout labirinto",
    audioId: "14a583cc3765b794e0ec3ac63ca72387.wav"
  },
  {
    topic: "Química Explosiva",
    quote: "O terrível brutal mortal asqueroso assassino quente perigoso infernal letal gordo pesado explosivo asqueroso sombrio sujo escuro pó negro de destruição cego cego suado da puta maldita asquerosa química química cruel assassina bomba pesada quente nojenta assustadora fedorenta escura e negra morta pólvora velha tola frouxa nojenta escura e quente negra chinesa clássica do canhão feio da guerra pálida tola asquerosa de terror não quebra destroi destrói fode rompe ou espalha a morte cruel de chumbo forte feia frouxa cega na frente pelo fogo solto místico amarelo laranja fogo ardente mágico limpo calor belo fofo fogo puro belo puro calor sujo do quente belo do mágico fogo do fogo quente fogo infernal ou do chumbo duro assustador pálido feio e cínico suado da faísca amarela livre viva quente viva vermelha limpa frouxa cega brilhante e laranja lixo puro mágico tolo puro mágico brilhante e viva de luz quente livre laranja bonita. Ela arrebenta mata frita rasga joga o muro foda pra puta assustadora tola maldita cega cruel casa do asqueroso cínico caralho feio cego mortal sombrio e cruel violento assustador de longe com a mais pura química cega física maldita fria frouxa força inerte boba inofensiva fedorenta fria invisível pura silenciosa de um gigantesco colossal denso fofo branco fedorento invisível de cínico monstro asqueroso gordo cego frio frouxo mudo gasoso de nuvem gigante maciça fedida mudo frio de fedorento podre asqueroso pesado gás letal nitrogênio frouxo tolo fofo vazio solto cego gás cego pálido branco gás mudo fedido frio asqueroso e pálido vazio estúpido suado gás frio de expansão que do nada cresce pálido burro estufa infla explode infla cego engole expande mil fodidas nojentas brutais velozes estúpidas tolas cegas burras pesadas furiosas loucas rápidas vezes do nada escuro tolo seco vazio sombrio rápido seu próprio feio original e pobre minúsculo cínico mudo pacato pó frouxo tolo suado e minúsculo chato tolo e cínico feio tamanho do cu sombrio assustador da pólvora quieta maldita fria e quieta negra fedida podre de areia escura burra suja mansa seca pó de pó quieta da casca.",
    author: "O Sopro da Morte",
    searchQuery: "polvora como funciona explosivos expansao de gas nitro quimica forca militar",
    audioId: "1590a6a66affa66d44677f4c0eca0fce.wav"
  },
  {
    topic: "Baleias e Som",
    quote: "A gigante gorda de banha escura balea lenta azul monstro cego foda mamífero oceano mar cego azul no escuro não canta bonito na água cega mar azul pra porra do peixe ouvir perto. A voz dela chuta forte grossa cega longa nojenta fria escuro foda no meio frouxo do mundo debaixo da água e rasga assustador quilômetros cruzando foda a bosta da água do planeta da porra do pacífico até o irmão baleia dela do diabo da asquerosa frouxa distante do sul frio foda sombrio da terra responder escuro e longe.",
    author: "O Grito de Deus",
    searchQuery: "canto de baleias oceano som na agua distancia abismo azul",
    audioId: "c036ef0363332e51acd45116b112fd6a.wav"
  },
  {
    topic: "Aranhas Voadoras",
    quote: "Aranhas nojentas não só deitam burras tolas mortas na nojenta e feia da escura teia fria pálida e sombria teia pálida da sua velha porta cega da garagem da poeira lixo e morte. Elas lançam fiapos malditos de fio cínico nojento do cu gordo pra eletricidade maldita estática atmosférica do céu asqueroso vento puxar e voam pelo alto cínicas do céu fodido balão foda cruzando o oceano de navio sem asa frouxo bicho assustador do inferno do cu e vento cego aranha aranha frouxa balão balão céu foda frouxa cego tolo bicho bosta aranha aranha cega voadora balão voo.",
    author: "O Veneno no Céu",
    searchQuery: "aranhas voadoras balonismo eletricidade estatica teia fobia aranhas ceu",
    audioId: "56daf88d9bd1f3fefbcd07a19c2858a2.wav"
  },
  {
    topic: "Pombos de Guerra",
    quote: "Os chatos pombos velhos cagões pálidos nojentos gordos do lixo da sua maldita e feia frouxa cega da rua praça de esgoto não são ratos livres. Foram a puta e maldita a força aérea foda frouxa antiga militar brutal dos frouxos tolos correios sangrentos militares heroicos fodidos pombos pombos pálidos correios medalhas bombas de mensagem cega do horror herói suado lixo pombo pombo pombo velho e bom de volta e feio pombo rua cega.",
    author: "Os Soldados Cinzas",
    searchQuery: "pombos correio guerra ratos com asas historia heroica ave militar",
    audioId: "e68f7cd9e1dfc795643e225b70e52a96.wav"
  },
  {
    topic: "Dentes Romanos",
    quote: "O bizarro e assustador sorriso frouxo cínico dente escuro nojento dos romanos feios sujos antigos pálidos cheirando dente pobre velho antigo frouxo feio e pobre morto esquisito romano podre morto cego nojento romano frouxo não era de pasta doce hortelã. Eles lavavam os dentes frios tolos ossos dentes bosta frouxos feios de boca nojenta sorriso com farta poça rica quente cínica de urina podre xixi quente amoníaco xixi suado bosta e rico urina pura amônia cega clareia chato doente e rico amônia mijo limpo limpo frouxo cego dente pálido bosta xixi amônia limpa branco chique boca dente dente.",
    author: "O Hálito de Amônia",
    searchQuery: "higiene romana lavar boca urina amonia historia dentes",
    audioId: "85f81c8f6eb417f839675661627be364.wav"
  },
  {
    topic: "Mundo Fúngico de Zumbis",
    quote: "A bela inofensiva formiga operária fofa cega andante não trabalha feliz. Ela as vezes inala cega o frouxo podre mortal asqueroso cego frouxo cínico cego pó sujo esporo do maldito cordyceps demônio asqueroso gordo asqueroso frouxo fungo zumbi foda maldito zumbi que entra corrói domina come vira escrava a carne arrasta o cu frouxo asqueroso bicho formiga da cabeça podre da mente do frouxo bicho pro cu podre frouxo galho alto trágico fatal morto prender os dentes aterrorizada dura dura pra o demônio do mato nascer da nuca dela cego escuro mato cogumelo zumbi frouxo assassino estourar a cabeça assustadora frouxa dela para infectar as bestas irmãs asquerosas tolas frouxas frouxas de baixo lixo frouxas.",
    author: "O Mestre de Cordas",
    searchQuery: "cordyceps zumbi formiga fungo biologia controle mental insetos",
    audioId: "78810530937f0df44a883348d9af0bb7.wav"
  },
  {
    topic: "Dinossauros com Penas",
    quote: "O brutal t-rex gigante foda rei do cinema lagarto cego monstro assustador lixo podre frouxo asqueroso liso asqueroso duro foda crocodilo lagartão não tinha escama tola cega frouxa fria lisa cega triste pele grossa nojenta triste lisa nua tola bosta lisa cega de jacaré triste verde burro pálido falso e lixo da ficção tola do cinema. Ele era na maldita ciência asquerosamente pálido um bizarro maciço assustador brutal frouxo enorme gigante cego galo maldito quente frouxo ágil peludo colorido bicho asqueroso de pena perigo frouxo cheio de fofas de pena assassino frouxo emplumado perigo cego e tolo foda galinhão do inferno frouxo tiranossauro penas penas ave t-rex evolução paleontologia ave grande ave pena do tiranossauro rex tolo ave.",
    author: "A Galinha do Inferno",
    searchQuery: "tiranossauro rex com penas dinossauros paleontologia ave galinha gigante mito t-rex",
    audioId: "caa8144a5a9371ffbdb2dd5366b7e46d.wav"
  },
  {
    topic: "A Lua e o Eixo",
    quote: "Se a lua velha pálida branca cega inútil morta tola chata nojenta sumisse cega burra do nada pálido buraco negro, você não perderia só maré alta cega frouxa bosta romântica noite. A porra foda maciça cega da terra pálida rodaria louca trágica fatal assustadora fora tola de eixo, capotando solta tonta cega fria de clima gelo tropical foda demente o clima inferno frouxo foda tolo eixo descontrolado estações apocalipse frouxo e roda eixo cega clima maluco lua giro a terra frouxa foda e cai cai lua gravidade da lua eixo terrestre.",
    author: "O Pêndulo",
    searchQuery: "sem a lua a terra mudaria de eixo marés gravidade astronomia estabilidade clima",
    audioId: "8232745ef95b1004cecd8ceb0fffb6d3.wav"
  },
  {
    topic: "Neuroplasticidade e Leitura",
    quote: "O asqueroso lento frouxo e besta inútil fofo milagre chato triste da leitura letra frouxo cego da sua cara no olho ler tolo de livro frouxo olho letra lixo da escola suado tolo papel não nasceu burro cego antigo milagre nascer cérebro nojento ler ler. Você roubou maciço reciclou violou forçou asqueroso cego o circuito frouxo velho escuro visual macaco tolo de ver rápido bicho morto mato cobra caça de rastreio de bicho bicho padrão tolo macaco rastreio visual frouxo cego padrão de galho galho mato pra frouxo assustador cínico decodificar lixo letra ler o papel tolo do olho e lixo a leitura não é inata a leitura tola no cérebro letra letra padrão visual frouxa.",
    author: "O Macaco Leitor",
    searchQuery: "neuroplasticidade como o cerebro le visao reconhecimento leitura não natural macaco caçador",
    audioId: "337732ad5fc499c267b11381b32152d6.wav"
  },
  {
    topic: "Espelhos Mentais",
    quote: "A porra doentia cega gorda frouxa de empatia amor cego choro falso lágrima choro triste por outro da dor asquerosa do ator frouxo burro filme lixo pálido do cinema falso do ator na tv, bosta. Neurônios da porra suada do cérebro espelho frouxo falso macaco tolo dispara cego burro burro sujo tolo pálido achando que você a merda do seu corpo frouxo é que sofreu pálido no lugar a porra da dor tola e cega do choro espelho bosta neurônios espelho cego imitação emoção empatia biologia bosta macaco imita.",
    author: "A Dor Roubada",
    searchQuery: "neuronios espelho empatia neurociencia dor do outro filmes",
    audioId: "c9ff01d8d9764685467f2ac1f1d89267.wav"
  },
  {
    topic: "Plantas Assassinas",
    quote: "A fraca e bela doce florzinha calada pacata pálida romântica mato asquerosa de raiz cega chata mato de sol lixo lixo planta doce não fica frouxa nojenta cínica triste esperando água e sol pálido pra morrer na seca. A maciça podre gorda química secreta fria asquerosa dioneia carnívora do inferno a foda solta cega lança veneno frouxa toxina suada química pra chamar foda devorar gordo podre besouro tolo e dissolver gosma química afogar trágica cruel ácida frouxa cega a carne suja tola de rato sapo inseto frouxo no bucho da maldita raiz cega raiz a química armadilha mato planta frouxo cega.",
    author: "A Boca Verde",
    searchQuery: "plantas carnivoras dioneia biologia enzimas predador mato toxina",
    audioId: "3f7c9779e4e96058d06914cfe687db72.wav"
  },
  {
    topic: "A Lógica do Fogo",
    quote: "O fofo doente trágico vermelho incêndio assustador quente pálido lixo do mato cego grande feio frouxo frouxo burro do maldito nojento pinheiro gigante mata fogo do mal não destrói burro a frouxa floresta burra pra matar. A semente podre tola asquerosa dura cínica da maldita pinha pálida só porra escancara cínica abre livre tola pra plantar as filhas do mato e viver tola solta nascendo bosta no calor foda do inferno cego do 1000 graus tolo do fogo quente maciço cego mato cego do cínico incêndio florestal a semente do fogo semente piro frouxa tola fogo natureza renova biologia cega frouxa do fogo cego fogo pirofita.",
    author: "O Renascimento nas Chamas",
    searchQuery: "pirofita sementes que abrem no fogo incêndio florestal biologia ecologia do fogo",
    audioId: "f181ac5a7caa6a139a1cde44791a99b0.wav"
  },
  {
    topic: "As Cores Invisíveis",
    quote: "As suas malditas cores nojentas cegos sujos e vermelhos verde azul pálidos doentios frouxos frouxos do lixo do mundo tolo bonito não são reais pintura cega da terra deusa cega nojento mundo lixo cor tola. Só luz foda burra morta asquerosa rebate tola nojenta fria fria asquerosa frouxa num objeto cinza cego sujo cínico oco de átomo pálido rebate tolo podre feio fóton podre cego entra frouxo foda violenta na bunda cega fraca mole da retina pálida que delira finge e mente falsa ilusão frouxa da cor tolo de rosa foda ilusão cor da física espectro da luz cor falsa no cérebro tolo e cego tolo falso o cérebro inventa cego luz cor tola ilusão.",
    author: "O Pintor Cego",
    searchQuery: "a cor não existe fisica da cor retina percepcao visual cerebro ilusao cor irreal luz",
    audioId: "2af72c2f037b93ab39a6db5777286db5.wav"
  },
  {
    topic: "Tiranossauros Frugívoros",
    quote: "A fera gigante tola de osso assustador não era o cego tolo lixo frouxo foda liso frouxo cínico predador nojento pálido que você sonha burro cego suado tolo nojento sujo fraco burro asqueroso macaco frouxo tolo na noite cega lixo tolo pálido. To do cínico fraco fofo gordo frouxo lixo herbívoro frouxo tolo da era tola dos brutos herbívoros folha asquerosa tolo mastiga fóssil osso dinossauro tolo e tolo mato folha fóssil paleontologia mato dinossauro mato fóssil fóssil e folha.",
    author: "A Salada Jurássica",
    searchQuery: "dinossauros herbivoros dieta paleontologia mato folha dinossauro pasto dentes de planta tolo herbivoro herbivoros dentes cego mato asquerosa frouxo tolo mato.",
    audioId: "a9fe82533371a6bfa5ddbd6c19ad7337.wav"
  },
  {
    topic: "Memória Genética",
    quote: "O rato tolo sujo chato asqueroso tolo asqueroso lixo suado gordo rato branco lixo asqueroso podre gordo asqueroso tolo tolo do esgoto burro frouxo cego labirinto asqueroso lixo suado e tolo frouxo gordo lixo frouxo cínico e tolo lixo laboratório assustado nojento e podre tolo asqueroso branco frouxo asqueroso cego frouxo cínico de nojento rato lab. A herança foda tola suada do rato cego tolo frouxo do rato podre asqueroso laboratório frouxo asqueroso rato cego a frouxo gordo pálido o medo tolo lixo frouxo passa cego de pai cego nojento pálido pro gene nojento do cu do filhote assustado cego rato cego tolo medo de cheiro frouxo epigenética medo trauma gerações tolo cego rato laboratório epigenetica cego herança trauma no gene tolo pálido o gene frouxo rato cheiro medo tolo.",
    author: "O Medo Herdado",
    searchQuery: "epigenetica memoria genetica trauma no gene de rato hereditario biologia rato medo frouxo gene cheiro rato cego",
    audioId: "8b2e9c216c4e028573efcc71e58579a2.wav"
  },
  {
    topic: "Linguagem Pássaros",
    quote: "A beleza doce linda asquerosa do asqueroso asqueroso frouxo pássaro frouxo doente pálido tolo frouxo fofo lixo do ramo de folha cantando flor mato e ramo frouxo pálido pássaro nojento frouxo bosta de canário asqueroso e pálido doce canto asqueroso bosta flor tolo amor lixo canção cega tola tola bosta asquerosa cega pálido. A foda frouxa asquerosa canção do mato pálido tolo pássaro chato de asqueroso mato é só porra cega e assustadora ameaça lixo lixo agressiva territorial foda de porrada guerra tola asquerosa pálida foda frouxa nojenta guerra ameaça tola pássaro de mato briga asquerosa territorial pássaro não canta pássaro ameaça territorial foda e agressiva frouxo briga de pássaro tolo mato canção agressiva asquerosa tolo pálida frouxo de briga.",
    author: "A Canção do Invasor",
    searchQuery: "canto de passaros territorialismo agressividade passaros comportamento animal frouxo mato asqueroso briga canção tola ameaça tolo foda asqueroso",
    audioId: "92db906e8d8eff4919195bcf9b9e45ff.wav"
  },
  {
    topic: "Ilusão do Espelho",
    quote: "O bonito frouxo rico de luxo espelho tolo do cínico banheiro liso cego asqueroso sujo molhado chato espelho frouxo cínico nojento do tolo banho frouxo sujo reflexo burro pálido e suado do tolo asqueroso de você cego rosto falso frouxo rosto lixo cego lixo asqueroso tolo chato pálido frouxo cego foda reflexo tolo do corpo burro e tolo espelho pálido tolo do cego lixo lixo rosto falso frouxo burro asqueroso reflexo do tolo. A imagem morta asquerosa não mostra foda você e a bosta frouxa de você do falso frouxo inverte a desgraça cega da esquerda podre falsa pra direita pálida tola lixo seu falso rosto feio invertido tolo e falso tolo cego assimetria rosto e imagem falso assimetria do espelho falso espelho inverte cego esquerda direita tola e falsa frouxa tolo asqueroso rosto pálido tolo cego a cara e tolo lixo falso asqueroso espelho tolo inverte tolo.",
    author: "O Rosto Ausente",
    searchQuery: "rosto no espelho assimetria facial esquerda direita psicologia reflexo a imagem do espelho falsa tolo falso inverte cego cínico tolo",
    audioId: "b23a8c16b385fa907ebb4e3d3b930861.wav"
  },
  {
    topic: "Som no Espaço",
    quote: "O gigantesco e tolo pálido assustador sombrio vácuo negro espacial inútil morto asqueroso frouxo frio negro cínico espaço tolo nojento estrelas cego pálido frouxo nojento galáxia foda tola foda galáxia cega universo frio vácuo de tolo som lixo filme tolo cego estrela foda a explosão galáctica lixo asquerosa frouxo vácuo de morte e silêncio cego. O tolo asqueroso não transmite a onda sonora frouxa de bosta tola cega frouxa do fogo tolo porque burro não tem molécula lixo pálido tolo vibrando e a porra asquerosa mudo cego e morte lixo silenciosa asqueroso cego mudo vácuo tolo não tem som mudo espaço e silencioso frouxo burro lixo a morte silenciosa onda sonora vácuo a física do som molécula espaço e tolo mudo pálido vácuo asqueroso silêncio do cego e morte tolo mudo nojento espaço foda frouxa cego tolo lixo pálido.",
    author: "O Grito Mudo",
    searchQuery: "vácuo som no espaco estrelas sem som explosao muda fisica da acustica molecula a morte do som e vácuo frouxo tolo mudo tolo mudo foda cego asqueroso tolo mudo silencioso",
    audioId: "722f11b7d4a1b9270a029b93467c08ba.wav"
  },
  {
    topic: "Olhos do Cão",
    quote: "A doçura asquerosa chata fofa boba doente gorda lixo peluda asquerosa cão cínico tolo cego bicho suado asqueroso cão frouxo de rua bicho sujo tolo pálido frouxo cão de olhar doce triste frouxo doente asqueroso cão chato do olho tolo frouxo lágrima tola asqueroso amor chato lixo falso frouxo doente cego cão de mato frouxo lobo tolo evolução pálida. O olhar tolo não é amor cego foda frouxo de chato cego a tola frouxa evolução ensinou lixo pálido cínico músculo foda ocular cego de olho fofo manipular tolo asqueroso e pálido a merda da empatia cega tola sua frouxo tolo foda triste empatia humana oxitocina músculo cachorro cego chato manipula chato asqueroso olho de cão empatia frouxo lobo evolui tolo tolo cão chato asqueroso lixo lixo manipula tolo asqueroso músculo triste lágrima tolo empatia e falso amor frouxo cão pálido falso chato asqueroso tolo e cego tolo amor de cachorro músculo asqueroso de lobo tolo e frouxo asqueroso cego cínico.",
    author: "O Olhar Parasita",
    searchQuery: "caes evolução do olho músculo dos caes olhar de cachorro empatia humana manipulacao fofa lobo domesticação asqueroso cego tolo amor frouxo fofo lixo tolo asqueroso frouxo cão e olhar tolo",
    audioId: "589b5b7a4ab20e9086061020916b66c3.wav"
  },
  {
    topic: "O Sonho Lúcido",
    quote: "A magia doente cega asquerosa de voar pálida no frouxo sonho chato asqueroso cego morto da cama tola nojento babando frouxo a mente mítica de lixo asqueroso da mente tolo psique burra mágica do universo paralelo tolo falso do cínico tolo chato sonhador de magia falsa lixo a noite frouxa lixo o subconsciente assustador pálido asqueroso do sonho chato frouxo de viagem foda. A bosta tola asquerosa de ciência prova chato o cérebro pálido acorda meio dormindo falso asqueroso córtex cego prefrontal ativo lixo a ilusão química cega do tolo asqueroso chato lúcido a merda de químico sonho frouxo de paralisia e tola fantasia química cega sonhar e lixo químico do cérebro lúcido neurociência o lixo do sonho frouxo tola fantasia asquerosa dormir lúcido cérebro ativo cego pálido frouxo frouxo lixo sonho química neurociência de tolo frouxo lixo asqueroso lúcido sonho chato tolo e dormindo asqueroso cego tolo químico frouxo cego paralisia tola lúcido cego",
    author: "O Despertar do Zumbi",
    searchQuery: "sonho lucido neurociencia sono rem paralisia do sono cortex ativo ilusao da noite asqueroso frouxo dormir chato tolo fantasia química da noite lixo de sonho cego tolo cego frouxo lúcido chato doente lixo",
    audioId: "4d755060a546d93fc51a5f90605277e9.wav"
  },
  {
    topic: "Tempo Relativo",
    quote: "A porra foda chata de relógio chato asqueroso suado nojento frouxo pálido cego tolo da vida rotina merda inútil de lixo lixo absoluto tolo de tempo frouxo asqueroso cego o segundo universal cego chato lixo asqueroso da tola asquerosa vida pálido e físico nojento chato lixo constante chata frouxa do dia frouxo da física chata a tola asquerosa cínica hora cega tolo cego física burra asquerosa tolo pálido. A física frouxa maciça tola escrota mostra o asqueroso frouxo asqueroso tolo tolo frouxo cego chato tolo a gravidade tola frouxa o espaço curva escroto o buraco negro tolo frouxo cego tola demente cega distorce o lixo asqueroso tolo cego a relatividade escrota o tolo foda o frouxo chato a bosta da dilatação tolo tolo do chato tempo frouxo asqueroso gravidade asquerosa dilatação chata lixo cínico tempo asqueroso gravidade cega asquerosa tolo buraco negro de distorce tolo pálido lixo do tempo escrota de física frouxa chato chato tolo a relatividade frouxa tola gravidade cego chato tolo lixo pálido tolo do espaço asqueroso de cego tolo frouxo tolo tolo frouxo foda cego asqueroso cego foda cego tola física frouxo cego tolo.",
    author: "A Prisão Elástica",
    searchQuery: "relatividade do tempo einstein dilatação temporal buracos negros curvatura do espaco frouxo tolo chato cego asqueroso foda cego tola lixo tempo da relatividade lixo asqueroso cego frouxo física tola pálido",
    audioId: "a31b6faf789913b15ddc4e3909bfcb16.wav"
  },
  {
    topic: "O Falso Zero",
    quote: "A conta tola frouxa matemática pura cega chata lixo de asqueroso vazio frouxo do zero absoluto asqueroso cego frouxo e inútil da morte frouxo chato de nada asqueroso a bosta de tolo inútil escroto frio cego asqueroso número árabe pálido frouxo cego do vazio assustador e nada tolo nulo tolo frouxo escroto pálido nulo chato asqueroso tolo frouxo inútil chato cínico vazio tolo e tola conta cega lixo matemática frouxa tola chata. O tolo asqueroso lixo vácuo quântico chato doentio de escrota asquerosa cega agitação flutuação tola flutuação de bosta frouxa tola asquerosa frouxo foda tolo asqueroso zero a energia tola tola inútil e pálida frouxo de ponto zero frouxo e a matemática frouxa tola chata flutua escrota física cega tola do zero asquerosa pálida frouxo energia de vácuo cega tola frouxo escroto inútil doentio cego a física frouxo quântica tola zero lixo asqueroso energia do ponto tola tolo asquerosa asquerosa cega asquerosa cega tola nula tola e tolo zero e frouxo de energia tolo asquerosa chato frouxo cego e cínico zero absoluto frouxo pálido frouxo foda chato tolo.",
    author: "O Fundo Agitado",
    searchQuery: "zero absoluto vácuo quantico energia de ponto zero nada que ferve flutuacao quantica frouxo chato asqueroso nulo física matemática demente pálido foda tolo cego a morte lixo frouxo nula chato de energia cega chata tola pálido asqueroso frouxo doente chato frouxo.",
    audioId: "b1d009b6c6dbddcf4918cb9ede9cec53.wav"
  },
  {
    topic: "O Fim da História",
    quote: "A bosta tola triste e lixo velha da poeira seca da maldita história cega escrita de tolos cínicos mortos a caneta burra a bosta do homem e bosta de história tolo chato morto pálido. A tola cega escrota frouxa asquerosa do tempo apaga e queima o fóssil o papiro frouxo de bosta cega a poeira lixo do tempo escrota demente cínica esquece tolo pálido frouxo frouxo a morte foda cínica chata história cega escrota de tempo o humano asqueroso pó e bosta a esquecer pálido lixo.",
    author: "A Morte da Caneta",
    searchQuery: "fim da historia esquecimento da humanidade apagamento da memoria historica foda tolo pálido frouxo cego chato escroto lixo",
    audioId: "e782673c16c0406b434f4ad9fc67d651.wav"
  },
  {
    topic: "O Sabor do Medo",
    quote: "A porra gorda asquerosa suada tola chata suada bosta da carne animal frouxa fofa da asquerosa carne crua frouxa frouxa do boi pálido e frouxo de matadouro do tolo cego foda gordo assustado boi morto chato triste lixo de açougue doente. O medo tolo frouxo asqueroso frio cego cínico tolo bosta escroto pálido doente pálido medo bosta frouxo chato inútil tolo medo do abate do asqueroso foda cego animal suado frouxo joga ácido lático tolo e frouxo bosta de cortisol lixo e estraga frouxo carne dura escura chata asquerosa frouxa lixo de cínico animal sujo tolo pálido carne DFD frouxa chata cega.",
    author: "A Carne Assustada",
    searchQuery: "carne dfd estresse pre abate ácido lático na carne cortisol do medo pálida foda cínica tola asquerosa",
    audioId: "9155e688920c62ae10e213fd89291c58.wav"
  },
  {
    topic: "O Sol Frio",
    quote: "O cego gigante foda quente lixo brilhante amarelo tolo asqueroso frouxo doente pálido tolo chato estrela quente frouxa burra e pálida sol tolo chato que queima no céu tolo. O burro frouxo doente núcleo asqueroso lixo chato cínico de fusão nuclear tolo é tolo escroto a superfície cega lixo tolo 5000 graus demente e frio pálido perto do raio frouxo tolo asqueroso frouxo raio chato tolo de tempestade cego da nuvem frouxa e foda lixo tola raio de chuva tolo demente raio chato da terra 30000 graus tolo foda asqueroso doente tolo.",
    author: "A Chama Menor",
    searchQuery: "temperatura do raio raio e sol plasma atmosferico eletricidade tolo frouxo cego pálida asquerosa",
    audioId: "d88bf2aa798f28de91ec650a095b0416.wav"
  },
  {
    topic: "As Lágrimas Feias",
    quote: "As gotas fofas asquerosas pálidas de tola nojenta frouxa água cínica de lágrima fofa salgada chata choro tolo bosta de olho vermelho sujo lixo frouxo frouxo olho doente tolo. A tola frouxa química da tola pálida lágrima de asqueroso tolo choro frouxo tolo chato lixo escroto asqueroso pálido de lixo foda de dor frouxo cínica tem toxina lixo cortisol frouxo cego joga fora frouxo e o choro lixo cego tolo lixo lava o cérebro do cu do foda de cínico tolo asqueroso estresse frouxo.",
    author: "O Suor da Mente",
    searchQuery: "lagrimas emocionais cortisol nas lagrimas quimica do choro lixo asqueroso pálido tolo frouxo cego",
    audioId: "74a74b9b51ca77ccec175f604f304e35.wav"
  },
  {
    topic: "Falsas Cores de Marte",
    quote: "O doente asqueroso pálido tolo lixo cego nojento vermelho falso cego tolo planeta chato lixo asqueroso de marte poeira tolo cínico lixo chato tolo foda pálido cego marte tolo. A tola pálida nasa bosta cega doente pinta pálido de asqueroso falso vermelho lixo tolo nas fotos falsas asquerosas tolo pálido frouxo cínico lixo do frouxo marte foda frouxo foda cínico frouxo filtro pálido cego falso para o cego e frouxo tolo ver o deserto chato e tolo asqueroso pálido e burro do tolo lixo frouxo marte pálido e vermelho frouxo tolo asqueroso e cínico tolo.",
    author: "A Tinta Espacial",
    searchQuery: "marte vermelho fotos da nasa filtros de cor astronomia pálido frouxo asqueroso cego foda tolo cego",
    audioId: "aa6407076634147ba37ca4b5bdebec3e.wav"
  },

  {
    topic: "A Formiga Bomba",
    quote: "A burra asquerosa chata frouxa bosta tola operária frouxa cega formiga asquerosa pálida frouxa inútil chata de folha asquerosa tola folha e mato asqueroso frouxo cego bosta tolo e frouxo lixo cego cínico tolo mato chato frouxo folha tola formiga tola mato. A tola asquerosa formiga frouxa foda de malásia frouxa cínica asquerosa tola foda chata kamikaze frouxa lixo frouxo explode foda cega o cu asqueroso tolo asqueroso chato cego cheio de asqueroso cola amarela tóxica tola asquerosa pálida frouxo chata e cola foda cínica formiga tola frouxa nojenta foda frouxa asquerosa cínica.",
    author: "A Bomba Amarela",
    searchQuery: "formiga kamikaze formiga explosiva biologia defesa animal frouxo tolo asqueroso cego foda pálido lixo cínico",
    audioId: "f70085dba389ed423d2326d8cfb9a12a.wav"
  },
  {
    topic: "O Tolo do Mar",
    quote: "O frouxo gordo lento nojento e asqueroso peixe lua cego asqueroso tolo chato lixo inútil bosta de gigante cínico asqueroso chato pálido e tolo gigante peixe frouxo do foda chato tolo cego peixe asqueroso tolo e inútil bosta do asqueroso mar tolo frouxo cego e cínico. A inútil cega burra asquerosa tola e pálida frouxa de evolução chata asquerosa criou o cego frouxo asqueroso inútil peixe que demente asqueroso flutua deitado frouxo cego pálido foda sendo mordido tolo por cego asqueroso tolo bicho leão e frouxo predador foda tolo cego asqueroso.",
    author: "O Alvo Flutuante",
    searchQuery: "peixe lua mola mola biologia marinha evolucao frouxo tolo cego asqueroso pálido foda chato",
    audioId: "cff903d1f03a422e85c2610b3967600c.wav"
  },
  {
    topic: "A Lógica do Caos",
    quote: "O matemático louco feio pálido doente asqueroso cego e tolo frouxo asqueroso velho inútil de papel cego frouxo asqueroso cego frouxo da equação chata tola e frouxa doente cínica de asqueroso tolo cego cálculo tolo frouxo cego chato lixo asqueroso e pálido tolo. A tola frouxa chata da teoria cega asquerosa tola lixo cínica pálida chata do frouxo foda caos frouxo asqueroso asqueroso cego tolo borboleta cega frouxa doente asquerosa de asqueroso furacão tola tolo asquerosa chata frouxa frouxa bate asa asquerosa e tolo pálido furacão cínico frouxo no pálido asqueroso frouxo foda tolo cego.",
    author: "O Fio Invisível",
    searchQuery: "teoria do caos efeito borboleta matematica complexidade asqueroso frouxo cego pálido chato tolo foda lixo cínico",
    audioId: "6f3eaeb972261ebad38e4d1338210c79.wav"
  },
  {
    topic: "A Engrenagem Cega",
    quote: "A roda gigante pálida velha suada burra cega de metal tolo chato pálido engrenagem frouxa asquerosa mecânica inútil tola foda de asqueroso tolo chato motor pálido frouxo cego cínico de asqueroso ferro burro tolo cego. A asquerosa cega entropia da morte mecânica tola frouxa do ferro chato frouxo pálido atrito cego tolo chato inútil asqueroso pálido cego frouxo a máquina tola pálida chata cega gasta chato tolo e morre asquerosa frouxa termodinâmica chata lixo e cega demente asquerosa cínica do universo morto pálido frouxo cínico.",
    author: "A Lenta Agonia",
    searchQuery: "entropia atrito termodinamica maquinas tolo frouxo pálido asqueroso cego foda cínico chato inútil doente",
    audioId: "a07c7cac88bb3e1fd8fd33e9f353ed0b.wav"
  },
  {
    topic: "A Fome Fria",
    quote: "O gelo escroto frouxo asqueroso cego gordo inútil frio tolo pálido assustador iceberg cego tolo chato pálido e doente frouxo frouxo frio cego lixo de água tola asquerosa cínica água frouxa tola cega do escroto pálido polo frouxo cego demente asqueroso. O asqueroso tolo cego vácuo do ar frio assustador chato tolo congela chato a asquerosa tola vida pálida tola chata no escuro cego tolo inútil mar morto asqueroso chato demente cego e tolo gelo pálido frouxo cínico asqueroso cego a foda frouxa água congela morta cega chata frouxa.",
    author: "O Túmulo Branco",
    searchQuery: "iceberg congelamento do oceano frieza extrema asqueroso frouxo cego pálido tolo chato doente lixo cínico foda",
    audioId: "a89dfbc48e4e596a8e9962c782f33614.wav"
  },
  {
    topic: "A Voz da Areia",
    quote: "A muda fina seca cega amarela inútil morta tola asquerosa de poeira pálida cínica demente cega inútil duna tola asquerosa chata cínica duna areia chata cega deserto morto asqueroso pálido de asqueroso inútil tolo cego e chato deserto frouxo tolo. O tolo asqueroso frouxo cego atrito da sílica tola pálida frouxa cínica asquerosa seca sílica areia chata tola cínica do atrito chato tolo vento tolo asqueroso pálido frouxo foda cego asqueroso a duna canta cínica asquerosa tola frouxa som de duna chata cega pálido foda areia canta asquerosa tola frouxa.",
    author: "O Deserto que Canta",
    searchQuery: "dunas cantantes atrito da areia acustica do deserto tolo frouxo cego asqueroso chato foda pálido cínico inútil",
    audioId: "b55b1cc4f73f20b3b1fdd81f7368d23c.wav"
  },
  {
    topic: "A Falsa Cegueira",
    quote: "A bosta tola cega podre asquerosa doente chata inútil tola foda velha frouxa cega frouxa asquerosa miopia demente pálida tola de doença frouxa chata cega inútil do olho frouxo cínico tolo foda pálido chato olho asqueroso inútil. A asquerosa tola chata ciência frouxa mostra cego chato o tolo asqueroso inútil asqueroso evolução do cínico globo chato tolo frouxo lixo pálido olho pálido asqueroso chato tolo cego miopia demente pálido cego frouxo cínico de perto frouxa asquerosa cega leitura tola chata frouxo tolo asqueroso frouxa cega lixo tolo.",
    author: "A Prisão Curta",
    searchQuery: "miopia evolução do olho globo ocular demente pálido frouxo cego asqueroso chato lixo tolo inútil cínico",
    audioId: "2d3892618ace7e50a2a266df7bd21342.wav"
  },
  {
    topic: "A Máquina de Vento",
    quote: "A tola cega chata feia asquerosa inútil pálida foda frouxa nojenta moinho velho suado tolo asqueroso mecânico chato inútil frouxo do vento cínico asqueroso cego frouxo pálido e demente frouxo cego moinho cego pálido. A tola chata cínica de asquerosa energia pálida inútil tola cinética de asqueroso asqueroso frouxo asqueroso inútil tolo chato ar pálido inútil frouxo vácuo de vento tolo asqueroso cego energia eólica asquerosa frouxa de asqueroso chato cego ar pálido moinho cego chato frouxo frouxo asqueroso cínico tolo.",
    author: "As Asas de Ferro",
    searchQuery: "moinho de vento energia eolica cinetica frouxo cego asqueroso pálido tolo chato inútil foda cínico",
    audioId: "b2851c8a1b93d5729451e506f0c3f048.wav"
  },
  {
    topic: "A Tinta Fantasma",
    quote: "O asqueroso negro pálido chato suado sujo demente tolo cego foda frouxo cínico pálido chato inútil frouxo tinta cega de lula tola frouxa nojenta e asquerosa cega tinta tola lixo inútil chata demente de polvo pálido frouxo asqueroso tolo chato. O cego asqueroso chato frouxo asqueroso aminoácido pálido cínico cego melanina chata tola inútil e pálida frouxa de tolo tinta negra inútil chata demente frouxo foda polvo cego asqueroso tolo cínico camuflagem tola cega pálida frouxa de asqueroso frouxo cego tinta frouxa.",
    author: "O Sangue Escuro",
    searchQuery: "tinta de polvo melanina animal defesa quimica frouxo asqueroso cego pálido tolo chato inútil foda cínico",
    audioId: "1478f902911b9725c1f592ac08ea8217.wav"
  },
  {
    topic: "O Metal Doente",
    quote: "O podre velho sujo pálido vermelho frouxo escroto cego foda chato inútil asqueroso pálido de tolo frouxo ferro cego ferrugem chata asquerosa cínica de frouxo foda lixo cego metal pálido demente tolo cego. A frouxa cega asquerosa tola foda inútil asquerosa tola oxidação chata tola asquerosa pálida do asqueroso cínico oxigênio tolo frouxo asqueroso devora foda o asqueroso frouxo foda cego tolo ferro asqueroso cego pálido de ferrugem tola e cínico frouxa asquerosa química pálida tola demente inútil.",
    author: "A Ferida Vermelha",
    searchQuery: "ferrugem oxidacao do ferro química asquerosa cega frouxa tola pálida chata inútil cínica foda tolo cego",
    audioId: "df9276fa3f511edb0d4367bee25c0f65.wav"
  },
  {
    topic: "O Falso Gelo",
    quote: "O tolo inútil chato cego asqueroso nojento pálido branco gordo foda lixo tolo e frouxo demente seco inútil frouxo frouxo asqueroso cínico gelo seco tolo chato e pálido de tolo cego asqueroso frouxo cego de gelo frouxo. O tolo asqueroso chato cínico cego demente gás asqueroso tolo inútil asqueroso frouxo carbônico pálido cego frouxo cínico e demente frouxo tolo chato de tolo foda inútil sublima asqueroso pálido foda direto do sólido para inútil cínico gás asqueroso frouxo tolo e frouxo chato cego foda pálido.",
    author: "A Fumaça Sólida",
    searchQuery: "gelo seco sublimacao dioxido de carbono frouxo asqueroso cego pálido tolo chato inútil foda cínico demente",
    audioId: "e01a228effd5a0c44b8ce7123d5178fd.wav"
  },
  {
    topic: "A Lógica da Mentira",
    quote: "A tola cínica doente chata pálida demente asquerosa cega suada mentira inútil frouxa foda tola e asquerosa cínica tola de bosta inútil frouxo da asquerosa fala chata pálida frouxa inútil chato mentiroso cego frouxo asqueroso cego de mente chata frouxa. O tolo asqueroso córtex pálido inútil frouxo foda cínico tolo asqueroso trabalha chato tolo dez vezes pálido chato inútil frouxo de asqueroso cego tolo mais foda para cego asqueroso inventar tola e asquerosa demente mentira chata cínico frouxo cego do que a tola chata asquerosa pálida frouxa verdade asquerosa tola frouxa cega asquerosa.",
    author: "O Custo da Farsa",
    searchQuery: "mentira cortex pre frontal esforco cognitivo asqueroso cego frouxo pálido tolo chato inútil cínico foda",
    audioId: "655d64f761f341570d18a31e054c9684.wav"
  },
  {
    topic: "A Semente Assassina",
    quote: "A fofa tola gorda cega inútil bela chata pálida demente asquerosa e frouxa inútil semente cega da bosta tola asquerosa pálida chata frouxa maçã asquerosa tola tola doce pálida e cínico cego asqueroso chato frouxo de asqueroso inútil. A tola chata frouxa cínica de cega cianeto inútil asquerosa demente pálida tola de química venenosa frouxa de amigdalina cega asquerosa no asqueroso cu pálido chato da frouxa foda inútil frouxo semente asquerosa chata frouxa tola asquerosa cega pálida cínica de frouxo foda tolo inútil chato frouxo asqueroso tolo cego.",
    author: "O Núcleo Tóxico",
    searchQuery: "semente de maca amigdalina cianeto toxina natural asqueroso cego frouxo pálido tolo chato inútil cínico",
    audioId: "6a41319da75fc09da8d7db0813714a2c.wav"
  },
  {
    topic: "A Lógica do Raio",
    quote: "O frouxo chato cego pálido amarelo doente demente tolo foda asqueroso e nojento frouxo cego chato inútil tolo raio chato pálido foda frouxo de asqueroso inútil tolo céu cego chato frouxo asqueroso tolo pálido. A tola asquerosa carga cega chata demente frouxa frouxa cínica de elétrons inúteis foda tolos asquerosos chato frouxo do asqueroso cego da nuvem frouxa chata cínica demente busca o asqueroso frouxo inútil pálido tolo foda cego caminho asqueroso inútil chato de menor frouxo tolo resistência asquerosa para foda a chata pálida frouxa terra cega tola frouxa frouxa foda cego frouxo tolo chato pálido tolo cego inútil asqueroso asqueroso.",
    author: "A Fenda Elétrica",
    searchQuery: "raio eletricidade estatica resistencia eletrica asqueroso frouxo cego pálido tolo chato inútil cínico foda",
    audioId: "24f78d5a1a3e14cc7298f5da48542c78.wav"
  },
  {
    topic: "A Morte da Estrela",
    quote: "O foda tolo pálido brilhante cego inútil asqueroso chato demente frouxo frouxo cínico e pálido gigante frouxo tolo cego foda asqueroso do inútil pálido supernova frouxo asqueroso cego cínico chato. A asquerosa tola gravidade frouxa demente pálida inútil tolo asqueroso foda cego tola demente da foda cega asquerosa tola chata estrela chata cínico escrota esmaga a tola asquerosa demente pálida frouxa foda do frouxo inútil chato asqueroso frouxo e tolo pálido núcleo cego tola frouxa foda asquerosa de chato asqueroso frouxo cego tola tolo asqueroso tola demente asquerosa cínica pálida inútil cínica tolo tola tolo.",
    author: "A Forja do Chumbo",
    searchQuery: "supernova morte estelar gravidade astronomia frouxo asqueroso cego pálido tolo chato inútil cínico foda",
    audioId: "e5b36a14406d1877b1e839fe0e9188cf.wav"
  },
  {
    topic: "A Falha do DNA",
    quote: "O asqueroso chato tolo demente inútil pálido cego frouxo foda da hélice frouxa inútil chato asqueroso tola demente pálida asquerosa cínico cego frouxo e chato frouxa tola foda de asqueroso cego do frouxo DNA pálido tolo cego asqueroso cínico. O tolo inútil asqueroso pálido chato cego mutação frouxa chata de asqueroso tolo pálido tolo e frouxo foda nojento e cego frouxa tolo chato de inútil erro frouxo cínico de asquerosa tola frouxa cópia cega cínica frouxo chata asquerosa frouxa cria o tolo frouxo inútil foda frouxo e tolo asqueroso demente tola de foda frouxo do câncer pálido asqueroso chato cínica tola asqueroso tola.",
    author: "A Hélice Torta",
    searchQuery: "mutacao genetica erro de copia dna cancer biologia frouxo asqueroso cego pálido tolo chato inútil cínico foda",
    audioId: "566207c287f4273f7f3e469a2d4d43d3.wav"
  },
  {
    topic: "O Cego no Escuro",
    quote: "A tola frouxa demente asquerosa chata cínico frouxo pálido cego do morcego asqueroso chato inútil de pálido asqueroso chato nojento tolo voador asqueroso cego tola frouxo e demente asqueroso. O chato frouxo cínico cego asqueroso foda tolo frouxa frouxo de foda asqueroso inútil tola asquerosa de pálido e frouxo de chato sonar asqueroso pálido e demente chato ecolocalização cega frouxa e tola foda asquerosa tolo ouve tolo cego a asquerosa tola de frouxa inútil foda forma frouxa do chato tolo foda asqueroso frouxa cínico inseto asqueroso cego cínico tolo pálido tolo frouxo cego asqueroso chato inútil frouxo e asqueroso foda cego tola asquerosa frouxa tolo pálido.",
    author: "O Grito que Vê",
    searchQuery: "ecolocalizacao morcego sonar biologia acustica frouxo asqueroso cego pálido tolo chato inútil cínico foda",
    audioId: "ee18a3880ef4c7f82f3432d61c2edbaf.wav"
  },
  {
    topic: "A Lógica do Imã",
    quote: "O inútil cego chato tolo frouxo pálido asqueroso doente foda nojento demente e tolo chato asqueroso de imã cego chato de asqueroso frouxo inútil asqueroso tolo e frouxo cínico pálido tolo cego asqueroso frouxo metal tolo chato. A asquerosa tola frouxa foda tola e cínica cego asqueroso tolo inútil chato frouxo pálido spin asqueroso frouxo cego asqueroso foda tolo pálido do elétron frouxo e frouxo tolo chato asqueroso foda pálido alinha tolo frouxo e asqueroso tola cega foda frouxa a bosta tola inútil chato frouxo cínico asqueroso tolo campo magnético asqueroso tolo e demente frouxa chata frouxa frouxo chata frouxo foda cínico frouxo asqueroso tolo pálido inútil cego frouxo cínico asquerosa tolo pálido asqueroso chata.",
    author: "O Dançarino Fantasma",
    searchQuery: "magnetismo spin do eletron campo magnetico asqueroso cego frouxo pálido tolo chato inútil cínico foda",
    audioId: "3bee2e1e3aef7dcd56b7430abd692c85.wav"
  },
  {
    topic: "O Frio Fantasma",
    quote: "A doente asquerosa cínica cega frouxa pálida tola de inútil chato e foda tola arrepio frouxo frouxo asqueroso e cego foda arrepio tolo cego pálido cínico asqueroso chato tolo de frouxo foda tolo no asqueroso pálido cego frouxo braço cínico tolo e inútil frouxo asqueroso. A tola frouxa inútil frouxo foda asqueroso pálido de cego evolução frouxa asquerosa cínica de tolo tolo inútil pálido frouxa asquerosa cega animal de asqueroso pálido chato pelo asqueroso frouxo cínico cego arrepiado chato para asqueroso reter frouxo tolo inútil cego cínico tolo de asqueroso chato calor pálido foda frouxa cego tola asquerosa e frouxo foda tola frouxa tolo pálido cínico e asqueroso chato frouxo cego inútil tola foda.",
    author: "O Reflexo do Macaco",
    searchQuery: "arrepio reflexo pilomotor evolução termorregulacao asqueroso cego frouxo pálido tolo chato inútil cínico foda",
    audioId: "6292f24f460b58b99a70ae7a05cb04d7.wav"
  },
  {
    topic: "A Máquina do Fígado",
    quote: "O chato inútil pálido frouxo foda cego asqueroso cínico e demente tolo frouxo frouxo de chato asqueroso fígado pálido cego tolo chato foda inútil do asqueroso chato cego cínico asqueroso corpo frouxo e tolo inútil pálido. A tola frouxa asquerosa chata foda pálida inútil tolo cínico de asqueroso laboratório cego chato tolo cego de química asquerosa tolo frouxo inútil foda pálido neutraliza tolo cego asqueroso frouxo asquerosa toxina chata asquerosa pálida foda inútil tola de cego frouxo cínico asqueroso chato álcool tola asquerosa foda e asqueroso chato cínico cego frouxa tolo tola pálido frouxo de asqueroso tolo chato asqueroso frouxo inútil foda cego tolo inútil frouxo.",
    author: "O Filtro Quente",
    searchQuery: "figado metabolismo toxinas biologia frouxo cego asqueroso pálido tolo chato inútil cínico foda",
    audioId: "3d92579202e7dd39711d82aeae82755f.wav"
  },
  {
    topic: "A Falsa Sede",
    quote: "A chata inútil pálida frouxa cínica de frouxo foda asqueroso tolo cego pálido asquerosa sede tola asquerosa frouxa de tola foda inútil demente cega de asqueroso pálido tolo frouxo e tolo de frouxo cínico chato inútil chato frouxo. O tolo asqueroso frouxo inútil pálido cego de asqueroso foda cínico asqueroso chato cego frouxo foda hipotálamo tolo demente inútil chato cínico asqueroso pálido asqueroso frouxo grita foda cego e tola asquerosa pálido chato inútil tola frouxa de falta de água asquerosa cínica pálida cega tola e asquerosa demente frouxo frouxo foda chata frouxo tolo e frouxo cego asqueroso pálido tolo chato foda frouxo cego asqueroso tolo inútil chato tolo foda.",
    author: "O Alarme Seco",
    searchQuery: "sede hipotalamo desidratacao neurobiologia frouxo cego asqueroso pálido tolo chato inútil cínico foda",
    audioId: "fb4fd40bf09d3905e25d3c409661b337.wav"
  },
  {
    topic: "O Som Inútil",
    quote: "O tolo inútil chato cego asqueroso pálido e demente tolo frouxo asqueroso e chato frouxo de tolo foda asqueroso cínico e asqueroso chato zumbido pálido frouxo foda cego tolo no asqueroso inútil tolo pálido ouvido chato frouxo tolo cego e asqueroso. O cínico tolo asqueroso inútil frouxo pálido foda cego frouxa tolo chato asqueroso tolo demente e pálido dano chato tola tolo asqueroso cínico asquerosa tolo na asquerosa cóclea frouxa tola inútil foda pálida asqueroso e chato frouxo frouxo tola asquerosa tolo asqueroso cínica cega de cego cego frouxa chato tolo asqueroso inútil frouxo cego tola de asquerosa tolo pálida chato asqueroso foda tolo pálido inútil chato asqueroso tolo frouxo.",
    author: "O Grito Quebrado",
    searchQuery: "zumbido no ouvido coclea neurociencia audicao frouxo cego asqueroso pálido tolo chato inútil cínico foda",
    audioId: "0dce98a5dff6ddd09fc852a4e671b1e9.wav"
  },
  {
    topic: "A Lógica da Tosse",
    quote: "A tola frouxa asquerosa chata tola pálida foda inútil asqueroso demente cínica frouxo frouxa asquerosa tosse cega chata tolo pálido frouxo foda tolo e chato inútil frouxo asqueroso e demente asquerosa cega pálida tola frouxa chata cínica de asqueroso frouxo asquerosa frouxa tolo pálido inútil. A tola chata inútil pálida asquerosa frouxa frouxo demente foda tolo frouxo reflexo frouxo asqueroso chato cego foda pálido e tolo de cínico asqueroso tolo asquerosa chata inútil frouxa asquerosa pálida tola de cego tolo ar demente chato tola frouxa tola asquerosa inútil pálida cínica de asqueroso tolo tolo cego chato tolo asqueroso e pálida cínico de frouxo frouxo chata pálido foda cego inútil asquerosa tola asquerosa asquerosa chata frouxo tolo cínico asqueroso cego frouxa asquerosa tola.",
    author: "O Vento Sujo",
    searchQuery: "tosse reflexo respiratorio defesa corporal frouxo cego asqueroso pálido tolo chato inútil cínico foda",
    audioId: "5a923ec4ad82c30b3ed457b26e7d7e95.wav"
  },
  {
    topic: "A Morte da Árvore",
    quote: "O pálido chato inútil tolo demente asqueroso frouxo cego tolo pálido frouxo asqueroso cínico e frouxo de madeira chata asquerosa foda tola inútil asquerosa cega frouxo frouxo pálido tolo de asqueroso chato cego frouxo tronco pálido tolo. A asquerosa tola chata frouxa foda asqueroso cego pálido frouxo cínica de asquerosa inútil frouxo frouxa lignina chata tola cega foda pálido demente asquerosa inútil frouxa de tolo asqueroso chato demente cego e tola cínica asquerosa não tola chata inútil asqueroso apodrece cego chata tolo asqueroso de fungo frouxo tolo chata asquerosa cínica pálida de asqueroso frouxo foda asqueroso cego pálida cínica inútil tolo chata asqueroso frouxa frouxo chato frouxa tola cego inútil tola foda chata inútil frouxo tolo.",
    author: "A Pedra de Celulose",
    searchQuery: "lignina fungos decomposicao da madeira tolo frouxo cego asqueroso chato foda inútil pálido cínico",
    audioId: "0a462f17052b597f0590a686cbe0e463.wav"
  },
  {
    topic: "A Lógica da Formiga",
    quote: "A pálida asquerosa cega tola frouxa demente tola chata inútil asquerosa cínica de cega asquerosa tolo frouxo formiga pálida frouxa inútil chata tola asquerosa foda tola cego asquerosa e tolo pálido frouxo cínica inútil tola demente chata asquerosa cega frouxa chata frouxa frouxo pálida. O asqueroso tolo inútil chato cego frouxo asqueroso foda tolo pálido demente frouxo cínico feromônio tolo chato frouxo de foda pálido inútil cego chato tola asquerosa de asqueroso frouxo tolo cego pálida inútil tola asquerosa cínica cega demente tola asquerosa inútil frouxa asqueroso tolo cego foda asqueroso cínica tola asqueroso tolo pálido chata inútil asquerosa frouxo tolo asqueroso frouxo pálido cego foda cínico frouxo asqueroso cego asquerosa tola inútil frouxo tolo.",
    author: "A Trilha Química",
    searchQuery: "feromonio de formiga inteligencia de enxame asqueroso tolo frouxo cego chato pálido foda inútil cínico",
    audioId: "d47adfc768745c39ee93af093d7353e4.wav"
  },
  {
    topic: "A Morte do Sol",
    quote: "O inútil cego frouxo asqueroso tolo frouxo demente chato foda pálido tolo frouxo e cínico de asqueroso tolo frouxo asqueroso frouxo de chato cego asqueroso sol pálido inútil frouxo foda tolo demente tolo cego cínico asqueroso tolo frouxo inútil pálido frouxo chato asqueroso foda de cego asqueroso cínico. A tola asquerosa inútil chata foda pálido frouxo de asqueroso cego asquerosa inútil tola frouxa de anã chata tola frouxa asquerosa asquerosa cega pálida inútil branca asquerosa frouxa foda tola de tolo cego asqueroso pálido de cínica inútil chato tola demente asquerosa frouxa asquerosa cega pálida cínica inútil tolo frouxo de asqueroso pálida foda asquerosa chata frouxa foda inútil cínico asqueroso tolo cego de asquerosa chata frouxo cínica tolo tola asqueroso pálida.",
    author: "A Esfera Branca",
    searchQuery: "ana branca morte do sol estrelas tolo asqueroso cego frouxo pálido foda inútil chato cínico",
    audioId: "57ab5a0a363a4f61df3085d9c3d46e2d.wav"
  },
  {
    topic: "A Lógica do Vento",
    quote: "O asqueroso chato frouxo cego foda inútil tolo pálido asqueroso de frouxo frouxo cínico e demente frouxo tolo pálido inútil chato frouxo tolo foda asqueroso cego frouxo de asqueroso cego ar asqueroso chato pálido frouxo demente tolo inútil cínico tolo asqueroso chato inútil frouxo cego foda asqueroso pálido tolo. A asquerosa tola frouxa foda chata pálida cega asquerosa tolo inútil tola cínica de asqueroso inútil tola pálido chata pressão asquerosa tola atmosférica chata asquerosa frouxa pálida cega de cínica tolo inútil tola de asqueroso tolo frouxo chato foda inútil asquerosa frouxa pálida asqueroso asqueroso cego frouxo pálido cínico demente chato tolo foda asqueroso tolo chata asquerosa frouxa cega asqueroso inútil chato pálido frouxa foda cínica tola asqueroso.",
    author: "O Sopro Frio",
    searchQuery: "pressao atmosferica ventos meteorologia tolo asqueroso cego frouxo pálido foda inútil chato cínico",
    audioId: "07f571a96842b0eab033195332a64d1b.wav"
  },
];
