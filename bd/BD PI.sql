create table Usuario(
    idUsuario int primary key auto_increment,
    email varchar(100) not null,
    senha varchar(10) not null,
    nome varchar(100) not null
);

create table Livro (
    idLivro int primary key auto_increment,
    autor varchar(150) not null,
    generos varchar(100) not null,
    nacionalidade varchar(50) not null,
    data_publicacao date not null,
    preco varchar(10) not null,
    titulo_original varchar(50) not null,
    titulo varchar(50) not null not null,
    ano_publicacao int not null,
    editora varchar(50) not null,
    sinopse text(800) not null
);

create table Avaliacao_blog (
    idAvaliacao_blog int primary key auto_increment,
    nota_avaliacao_blog int not null,
    link_avaliacao_blog varchar(150) not null,
    Livro_idLivro int not null,
    constraint fk_Livro foreign key(Livro_idLivro) references Livro(idLivro)
);

create table Avalia (
idAvalia int primary key auto_increment,
	nota int not null,
    data_avaliacao date not null,
    comentario text(300) not null,
	Livro_idUsuario int not null,
    Livro_idLivro int not null,
    constraint fk_Usuario foreign key(Usuario_idUsuario) references Usuario(idUsuario),
    constraint fk_Livro foreign key(Livro_idLivro) references Livro(idLivro)
);

insert into Livro (autor, generos, nacionalidade, data_publicacao, preco, titulo_original, titulo, ano_publicacao, editora, sinopse)
values ('Jane Austen', 'romance de amor, ficção, sátira', 'Reino-Unido', '1813/01/28', 'R$59,90', 'Pride and Prejudice', 'Orgulho e Preconceito', 1813, 'Martin Claret', 'Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada. A nova coleção possui capa dura e estilo inspirado nos bullet journals.'),
('Clive Staples Lewis', 'literatura infantil, literatura fantástica', 'Reino-Unido', '1956', 'R$99,90', 'The Chronicles of Narnia', 'As Crônicas de Nárnia', 1956, 'WMF Martins Fontes', 'Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é "O leão, a feiticeira e o guarda-roupa", escrito em 1949 por Clive Staples Lewis. Mas Lewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como "As crônicas de Nárnia". Nos últimos cinquenta anos, "As crônicas de Nárnia" transcenderam o gênero da fantasia para se tornar parte do cânone da literatura clássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações.'),
('Cressida Cowell', 'humor, literatura infantil, literatura fantástica', 'Reino-Unido', '2003/02/01', 'R$39,90', 'How to Train Your Dragon', 'Como Treinar o Seu Dragão', 2003, 'Intrínseca', 'Soluço Spantosicus Strondus III foi um extraordinário herói viking. Chefe guerreiro, mestre no combate com espadas, era conhecido por todo o território viking como "O encantador de dragões", devido ao poder que exercia sobre as terríveis feras. Mas nem sempre foi assim... Neste livro estão as memórias da época em que Soluço era apenas um garoto normal. Muito normal. Nem um pouco heroico. Ele precisava desesperadamente capturar e treinar um dragão, e teria de ser o animal mais impressionante de todos. Mas tudo o que conseguiu foi uma criaturinha pequena e banguela, nada ameaçadora. Foi então que seu destino de herói começou a ser traçado.'),
('John Flanagan', 'literatura fantástica, ficção de aventura', 'Austrália', '2004/11/01', 'R$44,80', 'The Ruins of Gorlan', 'Ruínas de Gorlan', 2004, 'Fundamento', 'Durante a vida inteira, o pequeno e frágil Will sonhou em ser um forte e bravo guerreiro, como o pai, que ele nunca conheceu. Por isso, ficou arrasado quando não conseguiu entrar para a Escola de Guerra. A partir daí, sua vida tomou um rumo inesperado: ele se tornou o aprendiz de Halt, o misterioso arqueiro, que muitos acreditam ter habilidades que só podem ser resultado de alguma feitiçaria. Relutante, Will aprendeu a usar as armas secretas dos arqueiros: o arco, a flecha, uma capa manchada e... um pequeno pônei muito teimoso. Podem não ser a espada e o cavalo que ele desejava, mas foi com eles que Will e Halt partiram em uma perigosa missão: impedir o assassinato do rei.'),
('Charlotte Brontë', 'ficção gótica, romance, romance de amor', 'Reino-Unido', '1847/10/16', 'R$59,90', 'Jane Eyre', 'Jane Eyre', 1847, 'Martin Claret', 'Jane Eyre, romance de estreia da consagrada e renomada escritora inglesa Charlotte Brontë, narra a história de vida da heroína homônima. Quebrando paradigmas e criticando a realidade vitoriana da época, Jane Eyre desafia o destino imposto às mulheres e as posições sociais que elas deveriam ocupar. Recheado de características góticas, o romance possui personagens inesquecíveis e transformadores, como a figura do misterioso Rochester, patrão de Jane e peça vital da narrativa.');

insert into Avaliacao_blog (nota_avaliacao_blog , link_avaliacao_blog)
values (4, 'https://resenhandosonhos.com/orgulho-e-preconceito-jane-austen/'),
(5, 'https://www.estantediagonal.com.br/2018/06/resenha-orgulho-e-preconceito.html'),
(5, 'http://www.livrosefuxicos.com/2012/02/resenha-orgulho-e-preconceito-jane.html'),
(5, 'http://resenhandopormarina.com/orgulho-preconceito/'),
(4, 'http://www.psamoleitura.com/2019/02/resenha-orgulho-e-preconceito.html'),
(5, 'https://resenhasalacarte.com.br/resenha/orgulho-e-preconceito-jane-austen/');