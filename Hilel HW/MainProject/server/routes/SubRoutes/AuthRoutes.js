const AuthController = require('../../controllers/AuthController');

const Router = require('express').Router;

const AuthRouter = new Router();

AuthRouter.post('/create',AuthController.create);
AuthRouter.post('/login',AuthController.login);
AuthRouter.post('/token',AuthController.token);

module.exports = AuthRouter;