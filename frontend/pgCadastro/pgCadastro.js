async function register() {
    const cadastro = document.getElementsByClassName('cadastro');

    cadastro[0].addEventListener('click', async () => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('senha');
        const confPassword = document.getElementById('confSenha');

        response = await fetch(`http://localhost:3333/users/${name.value}/${email.value}/${password.value}/${confPassword.value}`);
        users = await response.json();

        if (users.erro) {
            alert(users.erro);
        } else {
            window.location.href = `http://127.0.0.1:5501/frontend/lerViver/`;
        }
    });
}

register();