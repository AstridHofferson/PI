const conn = require('../database/connection');


module.exports = {
  async login(request, response) {
    const connection = await conn;
    const { email, password } = request.params;
    const [users, fields] = await connection.execute('SELECT 1 FROM users WHERE email = ? AND password = ? LIMIT 1', [email, password]);

    if (users.length) {

      return response.json( true );

    } else {
      return response.json( false );
    }
  },

  async insert(request, response) {
    const connection = await conn;
    const [users, fields] = await connection.execute('INSERT INTO users (name, email, password) VALUES (:name, :email, :password)', request.params);
  }
}