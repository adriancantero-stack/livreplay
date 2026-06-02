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
];
