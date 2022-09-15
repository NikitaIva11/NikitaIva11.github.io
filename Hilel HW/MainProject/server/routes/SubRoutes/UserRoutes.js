const UserController = require('../../controllers/UserController');

const Router = require('express').Router;

const UserRouter = new Router();


UserRouter.get('/:userId/books/favorite',UserController.getFavorite);
UserRouter.post('/:userId/books/add-favorite',UserController.addFavorite);
UserRouter.post('/:userId/books/progress',UserController.postProgress);

module.exports = UserRouter;