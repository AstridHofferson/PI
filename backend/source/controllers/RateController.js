const conn = require('../database/connection');


module.exports = {
  async index(request, response) {
    const connection = await conn;
    const [rate, fields] = await connection.execute('SELECT * FROM rate');

    if (rate) {

      return response.json( rate );

    } else {
      return response.status(400).json({ erro: 'Avaliação de usuário não existe' });
    }
  }
}