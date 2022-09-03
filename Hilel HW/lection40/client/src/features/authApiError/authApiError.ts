import { createSlice } from '@reduxjs/toolkit';

export const AuthError = createSlice({
     name:'authError',
     initialState:{
          value:{active:false,msg:undefined},
     },
     reducers:{
          setError:(state:any,action)=>{
               
               state.value=action.payload
          }
     }
})

export const {setError} = AuthError.actions;
export default AuthError.reducer;