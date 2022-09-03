import { setAuth } from "../features/IsAuth/IsAuth"
import { setUser } from "../features/user/user"
import store from "../store/store"
import checkError from "./AuthErrorService"

export function AuthMiddleware(result:any){
     if(!result.user)  checkError(result)
     else {
          store.dispatch(setUser(result.user))
          store.dispatch(setAuth(true))
          localStorage.setItem('user',JSON.stringify(result.user))
     }
}