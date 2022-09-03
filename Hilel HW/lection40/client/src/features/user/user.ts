import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
     name:'user',
     initialState:{
          value:{userName:undefined,token:undefined},
     },
     reducers:{
          setUser:(state:any,action)=>{
               state.value = action.payload
          }
     }
})


export const {setUser} = userSlice.actions 
export default userSlice.reducer;
