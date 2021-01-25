module.exports = {
  async seed(knex) {
    await knex('books').insert([
      { title: 'A Abadia de Northanger',
        synopsis: 'Escrito ainda na juventude de Jane Austen e publicado postumamente, em 1818, "A Abadia de Northanger" é, sem dúvida, um dos romances mais elaborados da época – uma comédia satírica que aborda questões humanas de maneira sutil, tendo como pano de fundo a cidade de Bath. O enredo gira em torno de Catherine Morland, que deixa a tranquila e, por vezes, tediosa vida na zona rural da Inglaterra para passar uma temporada na agitada e sofisticada Bath do final do século XVIII. Catherine é uma jovem ingênua, cheia de energia e leitora voraz de romances góticos. O livro faz uma espécie de paródia a esses romances, especialmente os escritos por Ann Radcliffe. Jane Austen faz um eloquente contraste entre realidade e imaginação, entre uma vida pacata e as situações sinistras e excitantes que os personagens de um romance podem viver.',
        publicationDate: 'Dezembro de 1817',
        author: 'Jane Austen',
        genre: 'Ficção gótica, Sátira, Romance de amor',
        nationality: 'Reino Unido',
        originalTitle: 'Northanger Abbey',
        publisher: 'Martin Claret',
        price: 'R$59,90',
        readingLevel: 5 },
      { title: 'As Crônicas de Nárnia',
        synopsis: 'Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é "O leão, a feiticeira e o guarda-roupa", escrito em 1949 por Clive Staples Lewis. Mas Lewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como "As crônicas de Nárnia". Nos últimos cinquenta anos, "As crônicas de Nárnia" transcenderam o gênero da fantasia para se tornar parte do cânone da literatura clássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações.',
        publicationDate: '16 de outubro de 1950',
        author: 'C. S. Lewis',
        genre: 'Ficção fantástica, Literatura infantil',
        nationality: 'Reino Unido',
        originalTitle: 'The Chronicles of Narnia',
        publisher: 'WMF Martins Fontes',
        price: 'R$99,90',
        readingLevel: 1 },
      { title: 'Circo Mecânico Tresaulti',
        synopsis: 'Respeitável público, sejam bem vindos ao incrível Circo Mecânico Tresaulti, o lugar para quem acredita no mundo mágico que nos rodeia. Permita-me conduzi-lo por uma viagem única através da luz e das sombras onde descobriremos juntos uma nova forma de ver tudo e a todos. Onde não existe limite entre o picadeiro e a plateia, onde tudo é real e o único limite é a nossa vontade de sonhar. Às vezes, o mundo pode parecer um lugar desolador e escuro, formado por vastas amplidões cheias de conflito, onde o que todos procuram é se agarrar a algo que os faça sobreviver ao dia seguinte. Pois em O Circo Mecânico Tresaulti esse deserto cheio de perigos é atravessado pela magia de uma potente força criadora, capaz de devolver a integridade emocional e física a quem se juntar à trupe.',
        publicationDate: '10 de maio de 2011',
        author: 'Genevieve Valentine',
        genre: 'Ficção fantástica, Steampunk',
        nationality: 'Estados Unidos',
        originalTitle: 'Mechanique: A Tale of the Circus Tresaulti',
        publisher: 'Darkside',
        price: 'R$54,90',
        readingLevel: 3 },
      { title: 'Como Treinar o Seu Dragão',
        synopsis: 'Soluço Spantosicus Strondus III foi um extraordinário herói viking. Chefe guerreiro, mestre no combate com espadas, era conhecido por todo o território viking como "O encantador de dragões", devido ao poder que exercia sobre as terríveis feras. Mas nem sempre foi assim... \n Neste livro estão as memórias da época em que Soluço era apenas um garoto normal. Muito normal. Nem um pouco heroico. Ele precisava desesperadamente capturar e treinar um dragão, e teria de ser o animal mais impressionante de todos. Mas tudo o que conseguiu foi uma criaturinha pequena e banguela, nada ameaçadora. Foi então que seu destino de herói começou a ser traçado.',
        publicationDate: '1 de fevereiro de 2003',
        author: 'Cressida Cowell', 
        genre: 'Fantasia, Ficção infanto-juvenil',
        nationality: 'Reino unido',
        originalTitle: 'How to Train Your Dragon',
        publisher: 'Intrínseca',
        price: 'R$39,90',
        readingLevel: 1 },
      { title: 'Duna',
        synopsis: 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.',
        publicationDate: '1 de agosto de 1965',
        author: 'Frank Herbert', 
        genre: 'Romance, Ficção científica, Literatura fantástica',
        nationality: 'Estados Unidos',
        originalTitle: 'Dune',
        publisher: 'Aleph',
        price: 'R$84,90',
        readingLevel: 4 },
      { title: 'Jane Eyre',
        synopsis: 'Jane Eyre, romance de estreia da consagrada e renomada escritora inglesa Charlotte Brontë, narra a história de vida da heroína homônima. Quebrando paradigmas e criticando a realidade vitoriana da época, Jane Eyre desafia o destino imposto às mulheres e as posições sociais que elas deveriam ocupar. Recheado de características góticas, o romance possui personagens inesquecíveis e transformadores, como a figura do misterioso Rochester, patrão de Jane e peça vital da narrativa.',
        publicationDate: '16 de outubro de 1847',
        author: 'Charlotte Brontë',
        genre: 'Romance de amor, Drama, Ficção gótica',
        nationality: 'Reino Unido',
        originalTitle: 'Jane Eyre',
        publisher: 'Martin Claret',
        price: 'R$59,90',
        readingLevel: 5 },
      { title: 'Jogos Vorazes',
        synopsis: 'Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte! Para evitar que sua irmã seja a mais nova vítima do programa, Katniss se oferece para participar em seu lugar. Vinda do empobrecido Distrito 12, ela sabe como sobreviver em um ambiente hostil. Peeta, um garoto que ajudou sua família no passado, também foi selecionado. Caso vença, terá fama e fortuna. Se perder, morre. Mas para ganhar a competição, será preciso muito mais do que habilidade.',
        publicationDate: '14 de setembro de 2008',
        author: 'Suzanne Collins',
        genre: 'Romance, Ficção juvenil, Ficção científica', 
        nationality: 'Estados Unidos',
        originalTitle: 'The Hunger Games', 
        publisher: 'Rocco',
        price: 'R$49,90',
        readingLevel: 2 },
      { title: 'O Hobbit',
        synopsis: 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. \n Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, sejam eles, os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler e descobrir.',
        publicationDate: '21 de setembro de 1937',
        author: 'J. R. R. Tolkien',
        genre: 'Romance, Alta fantasia, Literatura infantil, Literatura fantástica',
        nationality: 'Reino Unido',
        originalTitle: 'The Hobbit',
        publisher: 'HarperCollins',
        price: 'R$59,90',
        readingLevel: 1 },
      { title: 'Orgulho e Preconceito',
        synopsis: 'Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada. A nova coleção possui capa dura e estilo inspirado nos bullet journals.',
        publicationDate: '28 de janeiro de 1813',
        author: 'Jane Austen',
        genre: 'Romance de amor, Ficção, Sátira',
        nationality: 'Reino Unido',
        originalTitle: 'Pride and Prejudice',
        publisher: 'Martin Claret',
        price: 'R$59,90',
        readingLevel: 5 },
      { title: 'Rangers - Ruínas de Gorlan',
        synopsis: 'Durante a vida inteira, o pequeno e frágil Will sonhou em ser um forte e bravo guerreiro, como o pai, que ele nunca conheceu. Por isso, ficou arrasado quando não conseguiu entrar para a Escola de Guerra.A partir daí, sua vida tomou um rumo inesperado: ele se tornou o aprendiz de Halt, o misterioso arqueiro, que muitos acreditam ter habilidades que só podem ser resultado de alguma feitiçaria.Relutante, Will aprendeu a usar as armas secretas dos arqueiros: o arco, a flecha, uma capa manchada e... um pequeno pônei muito teimoso. Podem não ser a espada e o cavalo que ele desejava, mas foi com eles que Will e Halt partiram em uma perigosa missão: impedir o assassinato do rei.Essa será uma viagem de descobertas e aventuras fantásticas, na qual Will aprenderá que as armas dos arqueiros são muito mais valiosas do que ele imaginava.',
        publicationDate: '7 abril 2009',
        author: 'John Flanagan',
        genre: 'Literatura fantástica, Ficção de aventura',
        nationality: 'Austrália',
        originalTitle: 'The Ruins of Gorlan',
        publisher: 'Fundamento',
        price: 'R$59,90',
        readingLevel: 1 },
      { title: 'A Rainha Vermelha',
        synopsis: 'O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos poderes sobrenaturais os tornam quase deuses. Mare rouba o que pode para ajudar sua família a sobreviver e não tem esperanças de escapar do vilarejo miserável onde mora. Entretanto, numa reviravolta do destino, ela consegue um emprego no palácio real, onde, em frente ao rei e a toda a nobreza, descobre que tem um poder misterioso… Mas como isso seria possível, se seu sangue é vermelho? Em meio às intrigas dos nobres prateados, as ações da garota vão desencadear uma dança violenta e fatal, que colocará príncipe contra príncipe - e Mare contra seu próprio coração.',
        publicationDate: '10 de fevereiro de 2015',
        author: 'Victoria Aveyard',
        genre: 'Ficção juvenil, Literatura fantástica',
        nationality: 'Estados Unidos',
        originalTitle: 'Red Queen',
        publisher: 'Seguinte',
        price: 'R$39,90',
        readingLevel: 2 },
    ]);
  }
}