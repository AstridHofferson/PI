const conn = require('../database/connection');


module.exports = {
  async index(request, response) {
    const connection = await conn;
    const [covers, fields] = await connection.execute('SELECT * FROM covers');

    if (covers) {

      return response.json( covers );

    } else {
      return response.status(400).json({ erro: 'Capa não existe' });
    }
  }
}