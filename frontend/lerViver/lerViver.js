async function handleShelf() {
  response = await fetch('http://localhost:3333/books');
  books = await response.json();
  
  response = await fetch('http://localhost:3333/covers');
  covers = await response.json();
  
  const shelves = document.getElementsByClassName('livros');
  
  const randomizedBooks = [];

  for (let i = 0; i < 8; i++) {
    book = books[Math.floor(Math.random() * books.length)];
    
    if (!randomizedBooks.includes(book)) {
      randomizedBooks.push(book);
    } else {
      i--;
    }
  };
  
  randomizedBooks.forEach((book, index) => {

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
    
    shelves[0].appendChild(divCapaTitulo);
  });
}

handleShelf();