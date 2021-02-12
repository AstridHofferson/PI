create database pi;
use pi;

create table books (
	id int primary key auto_increment,
    title varchar(50) not null not null,
    publication_date varchar(50) not null,
    author varchar(150) not null,
    genres varchar(100) not null,
    nationality varchar(50) not null,
    original_title varchar(50) not null,
    publisher varchar(50) not null,
    price varchar(10) not null,
    reading_level int not null,
    publication_year int not null,
    synopsis text(1000) not null
);

create table users (
	id int primary key auto_increment,
    email varchar(100) not null,
    password varchar(10) not null,
    name varchar(100) not null
);

create table blog_avaliation (
    id int primary key auto_increment,
    blog_avaliation_note int not null,
    blog_avaliation_link varchar(150) not null,
    blog_name varchar(45) not null,
    book_id int not null,
    constraint fk_book foreign key(book_id) references books(id)
);

create table rate (
	id int primary key auto_increment,
	note int not null,
    avaliation_date date not null,
    comentary text(300) not null,
	user_id int not null,
    book_id int not null,
    constraint fk_user foreign key(user_id) references users(id),
    constraint book_fk_book foreign key(book_id) references books(id)
);

create table covers (
	id int primary key auto_increment,
    image varchar(100) not null,
    title varchar(50) not null
);

create table book_cover (
	id int primary key auto_increment,
    book_id int not null,
    cover_id int not null,
    constraint fkBook foreign key(book_id) references books(id),
    constraint fk_cover foreign key(cover_id) references covers(id)
);



INSERT INTO books (title, publication_date, author, genres, nationality, original_title, publisher, price, reading_level, publication_year, synopsis)
VALUES ('A Abadia de Northanger', 'Dezembro de 1817', 'Jane Austen', 'Ficção gótica, Sátira, Romance de amor', 'Reino Unido', 'Northanger Abbey', 'Martin Claret', 'R$59,90', 5, 1817, 'Escrito ainda na juventude de Jane Austen e publicado postumamente, em 1818, "A Abadia de Northanger" é, sem dúvida, um dos romances mais elaborados da época – uma comédia satírica que aborda questões humanas de maneira sutil, tendo como pano de fundo a cidade de Bath. O enredo gira em torno de Catherine Morland, que deixa a tranquila e, por vezes, tediosa vida na zona rural da Inglaterra para passar uma temporada na agitada e sofisticada Bath do final do século XVIII. Catherine é uma jovem ingênua, cheia de energia e leitora voraz de romances góticos. O livro faz uma espécie de paródia a esses romances, especialmente os escritos por Ann Radcliffe. Jane Austen faz um eloquente contraste entre realidade e imaginação, entre uma vida pacata e as situações sinistras e excitantes que os personagens de um romance podem viver.'),
('As Crônicas de Nárnia', '16 de outubro de 1950', 'C. S. Lewis', 'Ficção fantástica, Literatura infantil', 'Reino Unido', 'The Chronicles of Narnia', 'WMF Martins Fontes', 'R$99,90', 1, 1950, 'Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é "O leão, a feiticeira e o guarda-roupa", escrito em 1949 por Clive Staples Lewis. Mas Lewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como "As crônicas de Nárnia". Nos últimos cinquenta anos, "As crônicas de Nárnia" transcenderam o gênero da fantasia para se tornar parte do cânone da literatura clássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações.'),
('Circo Mecânico Tresaulti', '10 de maio de 2011', 'Genevieve Valentine', 'Ficção fantástica, Steampunk', 'Estados Unidos', 'Mechanique: A Tale of the Circus Tresaulti', 'Darkside', 'R$54,90', 3, 2011, 'Respeitável público, sejam bem vindos ao incrível Circo Mecânico Tresaulti, o lugar para quem acredita no mundo mágico que nos rodeia. Permita-me conduzi-lo por uma viagem única através da luz e das sombras onde descobriremos juntos uma nova forma de ver tudo e a todos. Onde não existe limite entre o picadeiro e a plateia, onde tudo é real e o único limite é a nossa vontade de sonhar. Às vezes, o mundo pode parecer um lugar desolador e escuro, formado por vastas amplidões cheias de conflito, onde o que todos procuram é se agarrar a algo que os faça sobreviver ao dia seguinte. Pois em O Circo Mecânico Tresaulti esse deserto cheio de perigos é atravessado pela magia de uma potente força criadora, capaz de devolver a integridade emocional e física a quem se juntar à trupe.'),
('Como Treinar o Seu Dragão', '1 de fevereiro de 2003', 'Cressida Cowell', 'Fantasia, Ficção infanto-juvenil', 'Reino unido', 'How to Train Your Dragon', 'Intrínseca', 'R$39,90', 1, 2003, 'Soluço Spantosicus Strondus III foi um extraordinário herói viking. Chefe guerreiro, mestre no combate com espadas, era conhecido por todo o território viking como "O encantador de dragões", devido ao poder que exercia sobre as terríveis feras. Mas nem sempre foi assim... \n Neste livro estão as memórias da época em que Soluço era apenas um garoto normal. Muito normal. Nem um pouco heroico. Ele precisava desesperadamente capturar e treinar um dragão, e teria de ser o animal mais impressionante de todos. Mas tudo o que conseguiu foi uma criaturinha pequena e banguela, nada ameaçadora. Foi então que seu destino de herói começou a ser traçado.'),
('Duna', '1 de agosto de 1965', 'Frank Herbert', 'Romance, Ficção científica, Literatura fantástica', 'Estados Unidos', 'Dune', 'Aleph', 'R$84,90', 4, 1965, 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.'),
('Jane Eyre', '16 de outubro de 1847', 'Charlotte Brontë', 'Romance de amor, Drama, Ficção gótica', 'Reino Unido', 'Jane Eyre', 'Martin Claret', 'R$59,90', 5, 1847, 'Jane Eyre, romance de estreia da consagrada e renomada escritora inglesa Charlotte Brontë, narra a história de vida da heroína homônima. Quebrando paradigmas e criticando a realidade vitoriana da época, Jane Eyre desafia o destino imposto às mulheres e as posições sociais que elas deveriam ocupar. Recheado de características góticas, o romance possui personagens inesquecíveis e transformadores, como a figura do misterioso Rochester, patrão de Jane e peça vital da narrativa.'),
('Jogos Vorazes', '14 de setembro de 2008', 'Suzanne Collins', 'Romance, Ficção juvenil, Ficção científica', 'Estados Unidos', 'The Hunger Games',  'Rocco', 'R$49,90', 2, 2008, 'Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte! Para evitar que sua irmã seja a mais nova vítima do programa, Katniss se oferece para participar em seu lugar. Vinda do empobrecido Distrito 12, ela sabe como sobreviver em um ambiente hostil. Peeta, um garoto que ajudou sua família no passado, também foi selecionado. Caso vença, terá fama e fortuna. Se perder, morre. Mas para ganhar a competição, será preciso muito mais do que habilidade.'),
('O Hobbit', '21 de setembro de 1937', 'J. R. R. Tolkien', 'Romance, Alta fantasia, Literatura infantil, Literatura fantástica', 'Reino Unido', 'The Hobbit', 'HarperCollins', 'R$59,90', 1, 1937, 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. \n Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, sejam eles, os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler e descobrir.'),
('Orgulho e Preconceito', '28 de janeiro de 1813', 'Jane Austen', 'Romance de amor, Ficção, Sátira', 'Reino Unido', 'Pride and Prejudice', 'Martin Claret', 'R$59,90', 5, 1813, 'Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada. A nova coleção possui capa dura e estilo inspirado nos bullet journals.'),
('Rangers - Ruínas de Gorlan', '7 abril 2009', 'John Flanagan', 'Literatura fantástica, Ficção de aventura', 'Austrália', 'The Ruins of Gorlan', 'Fundamento', 'R$59,90', 1, 2009, 'Durante a vida inteira, o pequeno e frágil Will sonhou em ser um forte e bravo guerreiro, como o pai, que ele nunca conheceu. Por isso, ficou arrasado quando não conseguiu entrar para a Escola de Guerra.A partir daí, sua vida tomou um rumo inesperado: ele se tornou o aprendiz de Halt, o misterioso arqueiro, que muitos acreditam ter habilidades que só podem ser resultado de alguma feitiçaria.Relutante, Will aprendeu a usar as armas secretas dos arqueiros: o arco, a flecha, uma capa manchada e... um pequeno pônei muito teimoso. Podem não ser a espada e o cavalo que ele desejava, mas foi com eles que Will e Halt partiram em uma perigosa missão: impedir o assassinato do rei.Essa será uma viagem de descobertas e aventuras fantásticas, na qual Will aprenderá que as armas dos arqueiros são muito mais valiosas do que ele imaginava.'),
('A Rainha Vermelha', '10 de fevereiro de 2015', 'Victoria Aveyard', 'Ficção juvenil, Literatura fantástica', 'Estados Unidos', 'Red Queen', 'Seguinte', 'R$39,90', 2, 2015, 'O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos poderes sobrenaturais os tornam quase deuses. Mare rouba o que pode para ajudar sua família a sobreviver e não tem esperanças de escapar do vilarejo miserável onde mora. Entretanto, numa reviravolta do destino, ela consegue um emprego no palácio real, onde, em frente ao rei e a toda a nobreza, descobre que tem um poder misterioso… Mas como isso seria possível, se seu sangue é vermelho? Em meio às intrigas dos nobres prateados, as ações da garota vão desencadear uma dança violenta e fatal, que colocará príncipe contra príncipe - e Mare contra seu próprio coração.');


INSERT INTO covers (title, image)
VALUES ('A Abadia de Northanger', 'a-abadia-de-northanger.jpg'),
('As Crônicas de Nárnia', 'as-cronicas-de-narnia.jpg'),
('Circo Mecânico Tresaulti', 'circo-mecanico-tresaulti.jpg'),
('Como Treinar o Seu Dragão', 'como-treinar-o-seu-dragao.jpg'),
('Duna', 'duna.jpg'),
('Jane Eyre', 'jane-eyre.jpg'),
('Jogos Vorazes', 'jogos-vorazes.jpg'),
('O Hobbit', 'o-hobbit.jpg'),
('Orgulho e Preconceito', 'orgulho-e-preconceito.jpg'),
('Rangers - Ruínas de Gorlan', 'rangers-ruinas-de-gorlan.jpg'),
('A Rainha Vermelha', 'rainha-vermelha.jpg');


INSERT INTO blog_avaliation (blog_avaliation_note, blog_avaliation_link, blog_name, book_id)
VALUES (4, 'https://www.minhavidaliteraria.com.br/2012/02/06/resenha-abadia-de-northanger-html/', 'Minha Vida Literária', 1),
(5, 'https://www.garotasdevorandolivros.com/2018/03/resenha-abadia-de-northanger-jane-austen.html', 'Garotas Devorando Livors', 1),
(5, 'http://cronicasdeeloise.blogspot.com/2018/12/resenha-abadia-de-northanger.html', 'Crônicas de Eloise', 1),
(5, 'http://poressaspaginas.com/resenha-a-abadia-de-northanger-jane-austen', 'Por Essas Páginas', 1),
(4, 'https://aishando.home.blog/2020/06/15/resenha-a-abadia-de-northanger-jane-austen/', 'Aishando Books', 1),

(3, 'https://medium.com/@tocadalebre/resenha-do-livro-as-cr%C3%B4nicas-de-n%C3%A1rnia-1b587cce8be5', 'Toca da Lebre', 2),
(4, 'http://www.revelandosentimentos.com.br/2018/12/resenha-as-cronicas-de-narnia.html', 'Revelando Sentimentos', 2),
(5, 'http://interesses-sutis.blogspot.com/2017/06/resenha-as-cronicas-de-narnia.html', 'Interesses Sutis', 2),
(4, 'https://castelodoimaginario.blogspot.com/2018/09/resenha-as-cronicas-de-narnia-c-s-lewis.html', 'Castelo Imaginário', 2),
(5, 'https://www.leitoresesuasmanias.com/2018/01/resenha-as-cronicas-de-narnia-volume.html', 'Leitores e Suas Manias', 2),

(3, 'https://www.momentumsaga.com/2016/06/resenha-o-circo-mecanico-tresaulti-de-genevieve-valentine.html', 'Momentum Saga', 3),
(5, 'http://www.amigadaleitora.com/2016/05/resenha-o-circo-mecanico-tresaulti.html', 'Amiga da Leitora', 3),
(3, 'https://formigaeletrica.com.br/livros/o-circo-mecanico-tresaulti/', 'Formiga Elétrica', 3),
(5, 'http://colorindonuvens.com/blog/2016/10/18/resenha-do-livro-circo-mecanico-tresaulti-de-genevieve-valentine/', 'Colorindo Nuvens', 3),
(5, 'https://www.soodablog.com.br/2016/03/resenha-circo-mecanico-tresaulti.html', 'Sooda Blog', 3),

(5, 'http://www.seguindoocoelhobrancoo.com.br/2018/09/resenha-como-treinar-o-seu-dragao.html', 'Seguindo o Coelho Branco', 4),
(4, 'https://www.capitulares.com.br/resenha-como-treinar-seu-dragao/', 'Capitulares', 4),
(5, 'https://olhandoporai.wordpress.com/2014/06/11/resenha-como-treinar-o-seu-dragao-1-como-treinar-o-seu-dragao-cressida-cowell/', 'Olhando Por Aí', 4),
(3, 'http://www.sohlendo.com.br/2011/11/resenha-como-treinar-o-seu-dragao.html', 'Só Lendo', 4),
(4, 'https://www.ohmydogestolcombigods.com.br/2013/06/resenha-como-treinar-o-seu-dragao.html', 'Oh My Dog Estol Com Bigods', 4),

(5, 'http://anatomiapop.com/2018/01/28/resenha-3-motivos-para-ler-duna-e-1-para-nao-ler/', 'Anatomia Pop', 5),
(4, 'https://anatomiadapalavra.com/2020/12/17/livro-duna-resenha/', 'Anatomia da Palavra', 5),
(5, 'https://blogsemserifa.com/2015/03/23/resenha-duna/', 'Blog Sem Serifa', 5),
(3, 'https://www.vailendo.com.br/2017/10/27/duna-de-frank-herbert-resenha/', 'Vai Lendo', 5),
(4, 'https://formigaeletrica.com.br/livros/livro-duna/', 'Formiga Elétrica', 5),

(5, 'https://www.minhavidaliteraria.com.br/2012/07/19/resenha-jane-eyre-html/', 'Minha Vida Literária', 6),
(4, 'https://www.vailendo.com.br/2020/09/21/jane-eyre-de-charlotte-bronte-resenha/', 'Vai Lendo', 6),
(5, 'https://resenhandosonhos.com/jane-eyre-charlotte-bronte/', 'Resenahndo Sonhos', 6),
(3, 'http://www.starbooks.com.br/2019/09/resenha-jane-eyre-charlotte-bronte.html', 'Star Books', 6),
(5, 'https://www.parforceinsider.com/post/2019/08/20/resenha-jane-eyre-bront%C3%AB-charlotte', 'Parforce Literário', 6),

(4, 'http://poressaspaginas.com/resenha-jogos-vorazes-suzanne-collins', 'Por Essas Páginas', 7),
(4, 'https://www.minhavidaliteraria.com.br/2011/10/11/resenha-jogos-vorazes-html/', 'Minha Vida Literária', 7),
(5, 'http://www.livrosefuxicos.com/2012/04/resenha-jogos-vorazes-suzanne-collins.html', 'Livros e Fuxicos', 7),
(4, 'http://www.engeplus.com.br/noticia/entre-lidas-e-vindas/2016/resenha-jogos-vorazes', 'Engeplus', 7),
(4, 'https://www.psamoleitura.com/2018/04/resenha-jogos-vorazes.html', 'PS Amo Leitura', 7),

(5, 'https://valeugutenberg.wordpress.com/2017/05/26/resenha-o-hobbit/', 'Valeu Gutenberg', 8),
(4, 'https://ellendo.com/2020/01/15/resenha-o-hobbit-j-r-r-tolkien/', 'Ellendo', 8),
(5, 'http://www.clubedofarol.com/2020/10/resenha-o-hobbit.html', 'Clube do Farol', 8),
(5, 'https://contaseumlivro.blogspot.com/2018/04/resenha-o-hobbit-jrr-tolkien.html', 'Contas e Um Livro', 8),
(4, 'https://www.garotasdevorandolivros.com/2019/12/resenha-o-hobbit-jrr-tolkien.html', 'Garotas Devorando Livros', 8),

(4, 'https://resenhandosonhos.com/orgulho-e-preconceito-jane-austen/', 'Resenhando Sonhos', 9),
(5, 'https://www.estantediagonal.com.br/2018/06/resenha-orgulho-e-preconceito.html', 'Estante Diagonal', 9),
(5, 'http://www.livrosefuxicos.com/2012/02/resenha-orgulho-e-preconceito-jane.html', 'Livros e Fuxicos', 9),
(5, 'http://resenhandopormarina.com/orgulho-preconceito/', 'Resenahndo Por Marina', 9),
(4, 'http://www.psamoleitura.com/2019/02/resenha-orgulho-e-preconceito.html', 'PS Amo Leitura', 9),

(5, 'https://www.mundodasresenhas.com.br/resenha-rangers-ordem-dos-arqueiros-livro-1-ruinas-de-gorlam/', 'Mundo das Resenhas', 10),
(4, 'https://leitorcabuloso.com.br/2015/04/resenha-rangers-ordem-dos-arqueiros-ruinas-de-gorlan-de-john-flanagan/', 'Leitor Cabuloso', 10),
(4, 'https://resenhandosonhos.com/rangers-1-ruinas-de-gorlan-john-flanagan/', 'Resenhando Sonhos', 10),
(5, 'https://infinitasvidas.wordpress.com/2014/07/10/resenha-ruinas-de-gorlan-john-flanagan/', 'Infinitas Vidas', 10),
(4, 'https://saidaminhalente.com/rangers-1-ruinas-de-gorlan/', 'Sai da Minha Lente', 10),

(3, 'https://meowbookblog.com/2018/08/29/resenha-serie-a-rainha-vermelha/', 'Meow Book Blog', 11),
(3, 'https://www.momentumsaga.com/2018/12/resenha-a-rainha-vermelha-de-victoria-aveyard.html', 'Momentum Saga', 11),
(5, 'http://www.livrosefuxicos.com/2015/09/resenha-rainha-vermelha-victoria-aveyard.html', 'Livros e Fuxicos', 11),
(4, 'https://idris.com.br/blog/2018/06/08/resenha-a-rainha-vermelha-quadrilogia-victoria-aveyard/', 'Idris', 11),
(5, 'https://livrosmaisvendidos.net/a-rainha-vermelha-victoria-aveyard-resenha/', 'Livros Mais Vendidos', 11);