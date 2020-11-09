async function handleShelf() { //função assíncrona não lê a próxima linha até a linha atual ter executado
  response = await fetch('http://localhost:3333/books'); //pegando informações da tabela livros
  books = await response.json(); //transformando arquivo json em objeto js
  
  response = await fetch('http://localhost:3333/covers');
  covers = await response.json();
  
  const shelves = document.getElementsByClassName('livros');
  
  const randomizedBooks = [];

  for (let i = 0; i < 8; i++) {
    book = books[Math.floor(Math.random() * books.length)]; //(arredonda num pra baixo(cria num aleatorio de 0 a 1))
    
    if (!randomizedBooks.includes(book)) { //testa se não tem o livro no array
      randomizedBooks.push(book); //colocar um livro no array
    } else {
      i--;
    }
  };
  
  randomizedBooks.forEach((book, index) => { //a function vai acontecer para cada livro que tiver no array

    const cover = covers.find(cover => cover.id === book.id); //pegar as capas do cover que tenham o mesmo id do livro

    const divCapaTitulo = document.createElement('div'); //criando uma div
    divCapaTitulo.setAttribute('class', 'capa-titulo'); //colocando atributos (atributo que vai ser colocado, valor do atributo)
    divCapaTitulo.setAttribute('id', book.id);

    divCapaTitulo.addEventListener('click', () => {
      window.location.href = `http://127.0.0.1:5501/frontend/pgLivro/index.html?idLivro=${book.id}`; //quando clicar no livro entra no link
    })

    const imgCapa = document.createElement('img');
    imgCapa.setAttribute('class', 'capa');
    imgCapa.setAttribute('src', cover.image_url);

    const divText = document.createElement('div');
    divText.setAttribute('class', 'text');
    divText.innerHTML = book.title; //adicionando texto na div

    divCapaTitulo.appendChild(imgCapa); //colocando imgCapa na div
    divCapaTitulo.appendChild(divText);
    
    shelves[0].appendChild(divCapaTitulo);
  });

  //categoria dos livros recém-publicados
  const latestBooks = [];

  const releaseDates = books.map(book => { //passando por todos os objetos do array de livros /map retorna array
    const releaseDateSize = book.publicationDate.length; //pegando tamanho da string
    const year = book.publicationDate.slice(releaseDateSize - 4); //selecionando 4 caracteres antes de terminar a string
    return year;
  });

  releaseDates.sort(); //arruma a ordem dos anos de mais velho pra mais novo
  releaseDates.reverse(); //coloca na ordem de mais novo pra mais velho

  for (let i = 0; i < 8; i++) {
    latestBooks.push(books.find(book => book.publicationDate.includes(releaseDates[i]))); //testa se publicationDate tem o valor de releaseDates[i]
  };

  latestBooks.forEach((book, index) => { 

    const cover = covers.find(cover => cover.id === book.id);

    const divCapaTitulo = document.createElement('div');
    divCapaTitulo.setAttribute('class', 'capa-titulo');
    divCapaTitulo.setAttribute('id', book.id);

    divCapaTitulo.addEventListener('click', () => {
      window.location.href = `http://127.0.0.1:5501/frontend/pgLivro/index.html?idLivro=${book.id}`;
    })

    const imgCapa = document.createElement('img');
    imgCapa.setAttribute('class', 'capa');
    imgCapa.setAttribute('src', cover.image_url);

    const divText = document.createElement('div');
    divText.setAttribute('class', 'text');
    divText.innerHTML = book.title;

    divCapaTitulo.appendChild(imgCapa);
    divCapaTitulo.appendChild(divText);
    
    shelves[2].appendChild(divCapaTitulo);
  });
}

handleShelf();