async function perfil() {
    const perfil = document.getElementsByClassName('perfil');

    perfil[0].addEventListener('click', async () => {
        const idUser = localStorage.getItem('idUser');

        if (idUser != null) {
            window.location.href = `http://127.0.0.1:5501/frontend/pgAtuCad/`;
        } else {
            window.location.href = `http://127.0.0.1:5501/frontend/pgLogin/`;
        }
    });
}

async function search() {
    const span = document.getElementsByClassName('material-icons');

    span[0].addEventListener('click', () => {
        const search = document.getElementById('pesquisa');
        window.location.href = `http://127.0.0.1:5501/frontend/pgPesquisa/index.html?Pesquisa=${search.value}`;
    });
}

// async function search() {
//     response = await fetch('http://localhost:3333/books');
//     books = await response.json();

//     response = await fetch('http://localhost:3333/covers');
//     covers = await response.json();

//     const span = document.getElementsByClassName('material-icons');
//     var booksFound = [];

//     span[0].addEventListener('click', () => {
//         var input = document.getElementById('pesquisa').value; //pegando valor escrito na barra de pesquisa

//         for (let i = 0; i < books.length; i++) {
//             var verTit = books[i].title.toLowerCase().indexOf(input.toLowerCase());
//             var verAut = books[i].author.toLowerCase().indexOf(input.toLowerCase());

//             if (verTit != -1 || verAut != -1) { //verificando se o que foi escrito na barra de pesquisa tem no título do livro ou no nome do autor pego
//                 window.location.href = `http://127.0.0.1:5501/frontend/pgPesquisa`;
//                 booksFound = [books[i]]; //colocando os livros que passaram pelo if na var booksFound
//             }
//         }
//         return booksFound;
//     });
// }

perfil();
search();