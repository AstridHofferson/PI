const express = require('express');
const CoversController = require('./controllers/CoversController');
const BooksController = require('./controllers/BooksController');

const routes = express.Router();

routes.get('/covers', CoversController.index);

routes.get('/books', BooksController.index);
routes.get('/books/:bookId', BooksController.show);

module.exports = routes