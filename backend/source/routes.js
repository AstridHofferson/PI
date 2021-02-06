const express = require('express');
const CoversController = require('./controllers/CoversController');
const BooksController = require('./controllers/BooksController');
const UsersController = require('./controllers/UsersController');

const routes = express.Router();

routes.get('/covers', CoversController.index);

routes.get('/books', BooksController.index);
routes.get('/books/:bookId', BooksController.show);

routes.get('/login/:email/:password', UsersController.login);
routes.get('/users/:name/:email/:password', UsersController.insert);

module.exports = routes;