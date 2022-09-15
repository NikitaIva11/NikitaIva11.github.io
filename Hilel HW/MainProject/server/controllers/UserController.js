const AuthService = require("../services/AuthService");
const UserService = require("../services/UserService");

 class AuthController{
     async getFavorite(req,res,next){
          try {
               const response = await UserService.getUsersFavoriteData(req.params.userId);
               res.send(response)
          } catch (error) {
               console.log(error);
          }
          
     }
     async addFavorite(req,res,next){
          try {
               const {bookId} = req.body
               const response = await UserService.toggleFavorite(req.params.userId,bookId);
               res.send(response)
          } catch (error) {
               console.log(error);
          }
          
     }
     async postProgress(req,res,next){
          try {
               const {bookId,progress} = req.body
               const response = await UserService.postFavoriteProgress(req.params.userId,bookId,progress);
               res.send(response)
          } catch (error) {
               console.log(error);
          }
          
     }
}

module.exports = new AuthController();