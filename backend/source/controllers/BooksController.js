const conn = require('../database/connection');

module.exports = {

    async index(request, response) {
      const connection = await conn;
      const [books, fields] = await connection.execute('SELECT * FROM books');

      return response.json(books);
    },

    async show(request, response) {
      const connection = await conn;
      const { bookId } = request.params;
      const [books, fields] = await connection.execute('SELECT * FROM books WHERE id = ? LIMIT 1',[bookId]);

      if (book) {

        return response.json( book );

      } else {
        return response.status(400).json({ erro: 'Livro não existe' });
      }

    },
};