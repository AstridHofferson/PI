const conn = require('../database/connection');

module.exports = {
  async index(request, response) {
    const connection = await conn;
    const { book_id } = request.params;
    const [blog_avaliation] = await connection.execute('SELECT blog_avaliation_note, blog_avaliation_link FROM blog_avaliation WHERE book_id = ?', [book_id]);

    return response.json(blog_avaliation);
  },

  async average(request, response) {
    const connection = await conn;
    const { book_id } = request.params;
    const [blog_avaliation] = await connection.execute('SELECT AVG(blog_avaliation_note) AS average FROM blog_avaliation WHERE book_id = ?', [book_id]);
    return response.json(blog_avaliation);
  },

  async quantity(request, response) {
    const connection = await conn;
    const { book_id } = request.params;
    const [blog_avaliation] = await connection.execute('SELECT COUNT(blog_avaliation_note) AS quantity FROM blog_avaliation WHERE book_id = ?', [book_id]);
    return response.json(blog_avaliation);
  },

  async blogName(request, response) {
    const connection = await conn;
    const { book_id } = request.params;
    const [blog_avaliation] = await connection.execute('SELECT blog_name FROM blog_avaliation WHERE book_id = ?', [book_id]);
    return response.json(blog_avaliation);
  }

}