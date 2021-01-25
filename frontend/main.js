async function handleShelf() {
    response = await fetch('http://localhost:3333/books');
    books = await response.json();

    response = await fetch('http://localhost:3333/covers');
    covers = await response.json();

    const shelves = document.getElementsByClassName('livros');

    //barra de pesquisa
    const span = document.getElementsByClassName('material-icons');
    var booksFound = [];

    span[0].addEventListener('click', () => {
        var input = document.getElementById('pesquisa').value; //pegando valor escrito na barra de pesquisa
        
        for(let i = 0; i < books.length; i++) {
            var verTit = books[i].title.toLowerCase().indexOf(input.toLowerCase());
            var verAut = books[i].author.toLowerCase().indexOf(input.toLowerCase());

            if(verTit != -1 || verAut != -1) { //verificando se o que foi escrito na barra de pesquisa tem no título do livro ou no nome do autor pego
                window.location.href = `http://127.0.0.1:5501/frontend/pgPesquisa`;
                booksFound = [books[i]]; //colocando os livros que passaram pelo if na var booksFound
            }
        }
    });

    booksFound.forEach((book, index) => { 

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