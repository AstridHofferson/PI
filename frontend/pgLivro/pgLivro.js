const synopsis = document.getElementsByClassName('sinopse');
const info = document.getElementsByClassName('informacoes');
const title = document.getElementsByClassName('titulo');
const imgCover = document.getElementsByClassName('capa');
const imgCoverRel = document.getElementsByClassName('capaRel');
const avaliacao = document.getElementsByClassName('avaliacao');

const urlParams = new URLSearchParams(location.search); //pegando parametros que vem pela URL

async function handleBook() {

  response = await fetch(`http://localhost:3333/books/${urlParams.get('idLivro')}`);
  book = await response.json();
  book = book[0];

  response = await fetch(`http://localhost:3333/covers/${urlParams.get('idLivro')}`);
  covers = await response.json();
  cover = covers[0];

  response = await fetch(`http://localhost:3333/blogAvaliationAverage/${urlParams.get('idLivro')}`);
  blog_avaliation = await response.json();
  blog_avaliation = JSON.stringify(blog_avaliation[0]);
  average_note = blog_avaliation.substring(12, blog_avaliation.length - 7);

  response = await fetch(`http://localhost:3333/blogAvaliationQuantity/${urlParams.get('idLivro')}`);
  blog_avaliation = await response.json();
  blog_avaliation = JSON.stringify(blog_avaliation[0]);
  quantity_avaliation = blog_avaliation.substring(12, blog_avaliation.length - 1);


  title[0].innerHTML = book.title; //colocando o título do livro na pg

  imgCover[1].setAttribute('src', 'http://localhost:3333/uploads/' + cover.image);

  info[0].innerHTML = `<b>Data da primeira publicação:</b> ${book.publication_date}`;
  info[1].innerHTML = `<b>Autor(a):</b> ${book.author}`;
  info[2].innerHTML = `<b>Gênero(s):</b> ${book.genres}`;
  info[3].innerHTML = `<b>Nacionalidade:</b> ${book.nationality}`;
  info[4].innerHTML = `<b>Título original:</b> ${book.original_title}`;
  info[5].innerHTML = `<b>Editora(s):</b> ${book.publisher}`;
  info[6].innerHTML = `<b>Preço:</b> ${book.price}`;
  info[6].innerHTML = `<b>Avaliações de Blogs:</b> ${average_note}<img height="13vh" width="13vw" src="../../images/star.png"> (${quantity_avaliation} avaliações)`;

  synopsis[0].children[1].innerHTML = book.synopsis; //colocando texto dentro do segundo filho de sinopse



  //avaliações de blogs
  response = await fetch(`http://localhost:3333/blogAvaliation/${urlParams.get('idLivro')}`);
  blog_avaliation = await response.json();

  response = await fetch(`http://localhost:3333/blogName/${urlParams.get('idLivro')}`);
  blog_name = await response.json();

  avaliacao[0].innerHTML = `<b>${blog_avaliation[0].blog_avaliation_note}</b><img height="18vh" width="18vw" src="../../images/star.png"> <a href="${blog_avaliation[0].blog_avaliation_link}"> ${blog_name[0].blog_name}</a>`;
  avaliacao[1].innerHTML = `<b>${blog_avaliation[1].blog_avaliation_note}</b><img height="18vh" width="18vw" src="../../images/star.png"> <a href="${blog_avaliation[1].blog_avaliation_link}"> ${blog_name[1].blog_name}</a>`;
  avaliacao[2].innerHTML = `<b>${blog_avaliation[2].blog_avaliation_note}</b><img height="18vh" width="18vw" src="../../images/star.png"> <a href="${blog_avaliation[2].blog_avaliation_link}"> ${blog_name[2].blog_name}</a>`;
  avaliacao[3].innerHTML = `<b>${blog_avaliation[3].blog_avaliation_note}</b><img height="18vh" width="18vw" src="../../images/star.png"> <a href="${blog_avaliation[3].blog_avaliation_link}"> ${blog_name[3].blog_name}</a>`;
  avaliacao[4].innerHTML = `<b>${blog_avaliation[4].blog_avaliation_note}</b><img height="18vh" width="18vw" src="../../images/star.png"> <a href="${blog_avaliation[4].blog_avaliation_link}"> ${blog_name[4].blog_name}</a>`;


  // if (!window.hcb_user) { hcb_user = {}; }
  // (function () {
  //   var s = document.createElement("script"), l = hcb_user.PAGE || ("" + window.location).replace(/'/g, "%27"), h = "https://www.htmlcommentbox.com";
  //   s.setAttribute("type", "text/javascript");
  //   s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+", "%2B") + "&mod=%241%24wq1rdBcg%24tAt5ghvAWepMTgiNmPZsp0" + "&opts=16862&num=10&ts=1613071827524");
  //   if (typeof s != "undefined") document.getElementsByTagName("head")[0].appendChild(s);
  // })();


  //livro relacionado
  // response = await fetch('http://localhost:3333/books');
  // books = await response.json()

  // var bookGenres = String([book.genre]).split(","); //separando string nas vírgulas e passando pra array
  // var relBook = [0, 0]; //[id, quantidade]

  // for(i = 0; i < books.length; i++) {
  //   if(i != book.id - 1) {
  //     let qnt = 0;

  //     String(books[i].genre).split(",").forEach((genre, index) => { //pegando gêneros do livro com id i
  //       bookGenres.forEach(genreComp => {

  //         if(genreComp == genre) {
  //           qnt++;
  //         }
  //       });

  //       if(relBook[1] < qnt) {
  //         relBook = [i, qnt];
  //       }
  //     });

  //   }
  // }

  // if(relBook[1] > 0) {
  //   const divRelacionado = document.getElementsByClassName('relacionado');

  //   divRelacionado[0].addEventListener('click', () => {
  //     window.location.href = `http://127.0.0.1:5501/frontend/pgLivro/index.html?idLivro=${relBook[0]+1}`;
  //   })

  //   imgCoverRel[0].setAttribute('src', 'http://localhost:3333/uploads/'+coverRel.image);
  // }
}

handleBook();