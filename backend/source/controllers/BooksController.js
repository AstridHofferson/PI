const conn = require('../database/connection');

module.exports = {
  async index(request, response) {
    const connection = await conn;
    const [books] = await connection.execute('SELECT * FROM books');

    return response.json(books);
  },

  async show(request, response) {
    const connection = await conn;
    const { bookId } = request.params;
    const [books] = await connection.execute('SELECT * FROM books WHERE id = ? LIMIT 1', [bookId]);

    if (books) {

      return response.json(books);

    } else {
      return response.status(400).json({ erro: 'Livro não existe' });
    }
  },

  // async search(request, response) {
  //   const connection = await conn;
  //   const { search } = request.params;
  //   const [books] = await connection.execute('SELECT * FROM books WHERE title LIKE "%?%" OR author LIKE "%?%"', [search]);

  //   return response.json(books);
  // }

};