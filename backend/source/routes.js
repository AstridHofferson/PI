const express = require('express');
const CoversController = require('./controllers/CoversController'); //importando objeto da pasta CoversController
const BooksController = require('./controllers/BooksController');
const UsersController = require('./controllers/UsersController');
const BlogAvaliationController = require('./controllers/BlogAvaliationController');

const routes = express.Router();

routes.get('/covers', CoversController.index);
routes.get('/covers/:coverId', CoversController.show);

routes.get('/books', BooksController.index);
routes.get('/books/:bookId', BooksController.show);
// routes.get('/books/:search', BooksController.search);

routes.get('/login/:email/:password', UsersController.login);
routes.get('/users/:name/:email/:password/:confPassword', UsersController.insert);
routes.get('/update/:name/:email/:password/:confPassword/:idUser', UsersController.update);
routes.get('/user/:idUser', UsersController.show);

routes.get('/blogAvaliation/:book_id', BlogAvaliationController.index);
routes.get('/blogAvaliationAverage/:book_id', BlogAvaliationController.average);
routes.get('/blogAvaliationQuantity/:book_id', BlogAvaliationController.quantity);
routes.get('/blogName/:book_id', BlogAvaliationController.blogName);

module.exports = routes;