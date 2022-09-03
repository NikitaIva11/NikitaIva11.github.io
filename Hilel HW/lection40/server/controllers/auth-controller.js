const ApiError = require("../exceptions/api-error");
const AuthService = require("../service/auth-services")
const { validationResult } = require("express-validator")

class AuthController {
     async registration(req, res, next) {
          try {
               
               const errors = validationResult(req);
               if (!errors.isEmpty()) {
                    return next(ApiError.BadRequest('Bad email or password', errors.array()))
               }
               const userData = await AuthService.registration(req.body);
               return res.json(userData)
          } catch (error) {
               next(error)
          }
     }
     async login(req, res, next) {
          try {
               const errors = validationResult(req);
               if (!errors.isEmpty()) {
                    return next(ApiError.BadRequest('Bad email or password', errors.array()))
               }
               const { email, password, lastLoginTime } = req.body
               const userData = await AuthService.login(email, password, lastLoginTime);
               return res.json(userData)
          } catch (error) {
               next(error)
          }
     }
     async checkToken(req, res, next) {
          try {
               const userData = await AuthService.checkToken(req.body.token);
               return res.json(userData)
          } catch (error) {
               next(error)
          }
     }
}
module.exports = new AuthController()