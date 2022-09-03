import { authSlice } from './../features/IsAuth/IsAuth';
import { configureStore } from "@reduxjs/toolkit";
import { AuthError } from "../features/authApiError/authApiError";
import { userSlice } from "../features/user/user";

export default configureStore({
     reducer:{
          user:userSlice.reducer,
          authError:AuthError.reducer,
          auth:authSlice.reducer
     }
})