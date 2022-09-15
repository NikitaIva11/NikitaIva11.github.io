const AuthService = require("../services/AuthService");

 class AuthController{
     async create(req,res,next){
          try {
               const response = await AuthService.create(req.body);
               res.send(response)
          } catch (error) {
               console.log(error);
          }
          
     }
     async login(req,res,next){
          try {
               const {email,password} = req.body
               const response = await AuthService.login(email,password)
               res.send(response)
          } catch (error) {
               console.log(error);
          }
          
     }
     async token(req,res,next){
          try {
               const {token} = req.body
               const response = await AuthService.token(token)
               res.send(response)
          } catch (error) {
               console.log(error);
          }
          
     }
}

module.exports = new AuthController();