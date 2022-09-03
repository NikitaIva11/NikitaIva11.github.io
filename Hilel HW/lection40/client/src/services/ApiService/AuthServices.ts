import { ILoginRequest } from "../../model/login.model";
import { IRegistrationRequest } from "../../model/registartion.model";
import { AuthMiddleware } from "../AuthMidlleware";

export default class AuthService {
     static async registration(user: IRegistrationRequest) {
          const data = await fetch(process.env.REACT_APP_HOST_NAME + '/auth/create', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json;charset=utf-8'
               },
               body: JSON.stringify(user)
          });
          const result = await data.json();
          AuthMiddleware(result)
     }
     static async login(user: ILoginRequest) {
          const data = await fetch(process.env.REACT_APP_HOST_NAME + '/auth/login', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json;charset=utf-8'
               },
               body: JSON.stringify(user)
          });
          const result = await data.json();
          AuthMiddleware(result)
     }
     static async checkToken(token: object) {
          const data = await fetch(process.env.REACT_APP_HOST_NAME + '/auth/token', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json;charset=utf-8'
               },
               body: JSON.stringify(token)

          });
          const result = await data.json();
          AuthMiddleware(result)
     }
}