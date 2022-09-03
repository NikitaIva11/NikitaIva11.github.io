const UserController = require("../controllers/user-controller")

const Router = require('express').Router;

const UserRoutes = new Router();

UserRoutes.get('/all',UserController.getUsers);

module.exports = UserRoutes