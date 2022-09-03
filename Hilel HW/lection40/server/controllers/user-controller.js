const UserService = require("../service/user-service")
class UserController {
     async getUsers(req, res, next) {
          try {
               const userData = await UserService.getUsers();
               return res.json(userData)
          } catch (error) {
               next(error)
          }
     }
}
module.exports = new UserController()   