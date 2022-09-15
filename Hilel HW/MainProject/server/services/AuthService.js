const UserService = require("./UserService");
const UserValidation = require("./UserValidation");



class AuthService {
     async create(data) {
          const { email, name, password, repeatPassword } = data;
          console.log(data);
          let validation = await UserValidation.userCreateValidation(email, name, password, repeatPassword);
          if (validation) return validation;
          const response = await UserService.postUser(email, name, password, repeatPassword)
          return response;

     }
     async login(email, password) {
          const id = btoa(email)
          const userData = await UserService.getUserDataById(id)
          if (!userData) return { status: 401, msg: 'user does not exist' };
          else if (userData.password !== password) return { status: 401, msg: 'bad email or password' };
          return { status: 200, msg: 'user login', token: id, name: userData.name }
     }
     async token(token) {
          const userData = await UserService.getUserDataById(token)
          if (!userData) return { status: 401, msg: 'user does not exist' };
          return { status: 200, msg: 'user login', token: token, name: userData.name}
     }
}
module.exports = new AuthService();