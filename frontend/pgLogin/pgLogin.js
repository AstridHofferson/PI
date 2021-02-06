async function login() {
    const entrar = document.getElementsByClassName('entrar');

    entrar[0].addEventListener('click', async () => {
        const email = document.getElementById('email');
        const password = document.getElementById('senha');

        response = await fetch(`http://localhost:3333/login/${email.value}/${password.value}`);
        users = await response.json();

        if (users) {
            window.location.href = `http://127.0.0.1:5501/frontend/lerViver/`;
        } else {
            // console.log('Error');
            alert('Error');
        }
    });

}

login();

// clica no botão entrar
// -> pega email e password colocado
// -> fetch users login true ou false
// -> se true passa, se false não passa