const synopsis = document.getElementsByClassName('sinopse');
const info = document.getElementsByClassName('informacoes');
const title = document.getElementsByClassName('titulo');
const imgCover = document.getElementsByClassName('capa');
const imgCoverRel = document.getElementsByClassName('capaRel');

const urlParams = new URLSearchParams(location.search); //pegando parametros que vem pela URL

async function handleBook() {
  response = await fetch(`http://localhost:3333/books/${urlParams.get('idLivro')}`);
  book = await response.json();

  response = await fetch('http://localhost:3333/covers');
  covers = await response.json();

  const cover = covers.find(cover => cover.id === book.id);

  title[0].innerHTML = book.title; //colocando o título do livro na pg

  imgCover[1].setAttribute('src', cover.image_url);

  info[0].innerHTML = `<b>Data da primeira publicação:</b> ${book.publicationDate}`;
  info[1].innerHTML = `<b>Autor(a):</b> ${book.author}`;
  info[2].innerHTML = `<b>Gênero(s):</b> ${book.genre}`;
  info[3].innerHTML = `<b>Nacionalidade:</b> ${book.nationality}`;
  info[4].innerHTML = `<b>Título original:</b> ${book.originalTitle}`;
  info[5].innerHTML = `<b>Editora(s):</b> ${book.publisher}`;
  info[6].innerHTML = `<b>Preço:</b> ${book.price}`;

  synopsis[0].children[1].innerHTML = book.synopsis; //colocando texto dentro do segundo filho de sinopse
  


  //livro relacionado
  response = await fetch('http://localhost:3333/books');
  books = await response.json()

  var bookGenres = String([book.genre]).split(","); //separando string nas vírgulas e passando pra array
  var relBook = [0, 0]; //[id, quantidade]

  for(i = 0; i < books.length; i++) {
    if(i != book.id - 1) {
      let qnt = 0;

      String(books[i].genre).split(",").forEach((genre, index) => { //pegando gêneros do livro com id i
        bookGenres.forEach(genreComp => {

          if(genreComp == genre) {
            qnt++;
          }
        });

        if(relBook[1] < qnt) {
          relBook = [i, qnt];
        }
      });

    }
  }
  
  if(relBook[1] > 0) {
    const divRelacionado = document.getElementsByClassName('relacionado');

    divRelacionado[0].addEventListener('click', () => {
      window.location.href = `http://127.0.0.1:5501/frontend/pgLivro/index.html?idLivro=${relBook[0]+1}`;
    })

    const coverRel = covers.find(cover => cover.id === relBook[0]+1);
    imgCoverRel[0].setAttribute('src', coverRel.image_url);
  }
}

handleBook();