import { setError } from "../features/authApiError/authApiError";
import store from "../store/store";

export default function checkError(result:any){
     if(result.user)return;
     store.dispatch(setError({active:true,msg:result.message}))
}