const AuthService = require("../services/AuthService");
const UserActionService = require("../services/UserActionService");

 class UserActionsController{
     async toggleFavorite(req,res,next){
          try {
               const {bookId} = req.body
               const response = await UserActionService.toggleFavorite(req.params.userId,bookId);
               res.send(response)
          } catch (error) {
               console.log(error);
          }
          
     }
     async addBookProgress(req,res,next){
          try {
               const {email,password} = req.body
               const response = await AuthService.login(email,password)
               res.send(response)
          } catch (error) {
               console.log(error);
          }
     }
}

module.exports = new UserActionsController();