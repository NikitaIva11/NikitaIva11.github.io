import { IUserData } from "../../model/usersAll.model";

export class UserService{
     static async getAll(){
          const data = await fetch(process.env.REACT_APP_HOST_NAME + '/users/all');
          const result = await data.json();
          const userData:Array<IUserData> = []
          for(let keys in result){
               userData.push(result[keys])
          }
          return userData;
     }
}