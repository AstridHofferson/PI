const conn = require('../database/connection');


module.exports = {
  async index(request, response) {
    const connection = await conn;
    const [blog_avaliation, fields] = await connection.execute('SELECT * FROM blog_avaliation');

    if (blog_avaliation) {

      return response.json( blog_avaliation );

    } else {
      return response.status(400).json({ erro: 'Avaliação de Blog não existe' });
    }
  }
}