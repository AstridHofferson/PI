async function login() {
    const entrar = document.getElementsByClassName('entrar'); //pegando botão entrar

    entrar[0].addEventListener('click', async () => { //quando clicar no botão entrar
        const email = document.getElementById('email');
        const password = document.getElementById('senha');

        //coloca o que o usuário escreveu no endereço
        response = await fetch(`http://localhost:3333/login/${email.value}/${password.value}`);
        users = await response.json();

        if (users != null) { //se users não for null
            localStorage.setItem('idUser', users); //colocando no armazenamento local (nome, parâmetro)
            window.location.href = `http://127.0.0.1:5501/frontend/lerViver/`; //vai da para página lerViver
        } else { //se users for false
            alert('Senha e/ou email incorreto'); //aparece msg de erro na tela
        }
    });

}

async function pgCadastro() {
    const cadastro = document.getElementsByClassName('cadastro');

    cadastro[0].addEventListener('click', () => {
        window.location.href = `http://127.0.0.1:5501/frontend/pgCadastro/`;
    });

}

login();
pgCadastro();