const AuthController = require('../controllers/auth-controller');

const Router = require('express').Router;
const { body } = require('express-validator')

const AuthRoutes = new Router();

AuthRoutes.post('/create',
body('email').isEmail(),
body('password').isLength({ min: 8, max: 32 }),
body('repeatPassword')
  .isLength({ min: 8, max: 32 })
  .custom((value, { req }) => {
    if (req.body.password === value) {
      return true;
    } else {
      return false;
    }
  })
  .withMessage("Passwords don't match.")
,
  AuthController.registration);
  AuthRoutes.post('/token', AuthController.checkToken);
  AuthRoutes.post('/login', body('email').isEmail(), body('password').isLength({ min: 8, max: 32 }), AuthController.login);

module.exports = AuthRoutes;