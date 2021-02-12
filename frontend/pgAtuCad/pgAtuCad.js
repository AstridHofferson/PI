async function updateProfile() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('senha');
    const confPassword = document.getElementById('confSenha');
    const idUser = localStorage.getItem('idUser');
    const salvar = document.getElementsByClassName('salvar');

    response = await fetch(`http://localhost:3333/user/${idUser}`);
    user = await response.json();
    user = user[0];

    name.value = user.name;
    email.value = user.email;

    salvar[0].addEventListener('click', async () => {

        response = await fetch(`http://localhost:3333/update/${name.value}/${email.value}/${password.value}/${confPassword.value}/${idUser}`);
        users = await response.json();

        if (users) {
            window.location.href = `http://127.0.0.1:5501/frontend/lerViver/`;
        } else {
            alert('Erro');
        }

    });

}

updateProfile();