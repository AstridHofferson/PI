const conn = require('../database/connection');


module.exports = {
  async index(request, response) {
    const connection = await conn;
    const [covers] = await connection.execute('SELECT * FROM covers');

    if (covers) {

      return response.json( covers );

    } else {
      return response.status(400).json({ erro: 'Capa não existe' });
    }
  },

  async show(request, response) {
    const connection = await conn;
    const {coverId} = request.params;
    const [covers] = await connection.execute('SELECT * FROM covers WHERE id = ? LIMIT 1', [coverId]);

    if (covers) {

      return response.json( covers );

    } else {
      return response.status(400).json({ erro: 'Capa não existe' });
    }
  },

}