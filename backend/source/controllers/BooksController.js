const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
      const books = await connection('books').select('*');

      return response.json(books);
    },

    async show(request, response) {
      const { bookId } = request.params;

      const book = await connection('books').where('id', bookId).first();

      if (book) {

        return response.json( book );

      } else {
        return response.status(400).json({ erro: 'Livro não existe' });
      }

    },
};