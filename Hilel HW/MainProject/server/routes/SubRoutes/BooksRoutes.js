const BooksController = require('../../controllers/BooksController');

const Router = require('express').Router;

const BooksRouter = new Router();

BooksRouter.get('/available',BooksController.avaible);
BooksRouter.get('/:id',BooksController.bookId);
module.exports = BooksRouter;







// const user = {
//      userId: {
//           email: 'email',
//           name: 'name',
//           password: 'password',
//           avatar: 'file',
//           favorite: [
//                {
//                     book: link,
//                     progress: '',
//                }
//           ]
//      }
// }