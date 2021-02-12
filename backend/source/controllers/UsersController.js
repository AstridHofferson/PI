//está executando connection e passando o exportado, uma promessa, para a constante conn
const conn = require('../database/connection');

module.exports = { //permite a exportação do objeto para outro arquivo
  async login(request, response) { //função assíncrona com parametros request e response
    const connection = await conn; //espera a promessa de conn ser executada, então passa para connection
    //destrutor de objeto/"destrói" o objeto e pega email e passaword como variáveis
    const { email, password } = request.params;
    //selecionando 1 da tabela users onde o usuário deve escrever o email e a senha, limite 1
    //executando o select e colocando o que foi selecionado no array users
    const [users] = await connection.execute('SELECT id FROM users WHERE email = ? AND password = ? LIMIT 1', [email, password]);

    if (users.length >= 1) { //contando quantos users tem
      return response.json(users[0].id); //se tiver mais do que/ou 1 retorna id do user que logou
    } else {
      return response.json(null); //se tiver menos que 1 retorna null
    }

  },

  async insert(request, response) {
    const connection = await conn;
    const { name, email, password, confPassword } = request.params;

    //conferindo se o que foi escrito no input password é igual o que foi escrito no input confPassword
    if (password != confPassword) {
      return response.json({ erro: 'Senhas diferentes' });
    }

    //conferindo se a senha tem mais de 10 caracteres
    if (password.length > 10) {
      return response.json({ erro: 'Senha de no máximo 10 caracteres' });
    }

    //verificando se o email é válido ou não
    //verificando se o que foi escrito no input email tem '@gmail.com'
    str = email.indexOf('@gmail.com') > -1;
    if (!str) {
      return response.json({ erro: 'E-mail não válido' });
    }

    //isere no banco de dados na tabela users o que o usuário digita como nome, email e senha
    const [users] = await connection.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);

    return response.json(users);
  },

  async update(request, response) {
    const connection = await conn;
    const { name, email, password, confPassword, idUser } = request.params;

    if (password != confPassword) {
      return response.json({ erro: 'Senhas diferentes' });
    }

    var str = email.indexOf('@gmail.com') > -1;
    if (!str) {
      return response.json({ erro: 'E-mail não válido' });
    }

    try {
      //atualiza nome e email do usuário
      const [users] = await connection.execute('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, idUser]);
      return response.json(true);
    } catch (e) {
      return response.json(false);
    }
  },

  async show(request, response) {
    const connection = await conn;
    const { idUser } = request.params;
    const [users] = await connection.execute('SELECT name, email FROM users WHERE id = ?', [idUser]);

    return response.json(users);
  }

}