async function handleShelf() {
    response = await fetch('http://localhost:3333/books');
    books = await response.json();

    //barra de pesquisa
    const span = document.getElementsByClassName('material-icons');

    span[0].addEventListener('click', () => {
    var input = document.getElementById('pesquisa').value; //pegando valor escrito na barra de pesquisa
    
    for(let i = 0; i < books.length; i++) {
        var verTit = books[i].title.toLowerCase().indexOf(input.toLowerCase());
        var verAut = books[i].author.toLowerCase().indexOf(input.toLowerCase());

        if(verTit != -1 || verAut != -1) { //verificando se o que foi escrito na barra de pesquisa tem no título do livro ou no nome do autor pego
            window.location.href = `http://127.0.0.1:5501/frontend/pgPesquisa`;
        }
    }

    });
}

handleShelf();