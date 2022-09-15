import { IUser } from './../../models/authModels/user.model';
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const HOST = process.env.REACT_APP_HOST || 'http://192.168.1.108:2700/api'

interface IState {
     auth: boolean,
     user: IUser|undefined,
     status: null|'idle' | 'loading' | 'failed';
     error: null|string;
}

export const authAsync: any = createAsyncThunk('auth/auth',
     async function ({ user, path }: any, { rejectWithValue, dispatch }) {
          try {
               
               const response: any = await fetch(HOST + path, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(user)
               });

               if (!response.ok) throw Error('Server Errror');

               const data = await response.json();
               const { token, status, msg,name ,favorite} = data;

               if (status >= 400) throw Error(msg);

               localStorage.setItem('user', token);

               dispatch(setUser({token,name}))
               return data.msg
          } catch (error: any) {
               return rejectWithValue(error.message)
          }

     })

const initialState: IState = {
     auth: false,
     user: undefined,
     status: null,
     error:null
}

export const authSlice = createSlice({
     name: 'auth',

     initialState,

     reducers: {
          setUser(state, action: PayloadAction<IUser|undefined>) {
               state.auth = !state.auth;
               state.user = action.payload;
               
          },
     },
     extraReducers: (builder) => {
          builder
               .addCase(authAsync.pending, (state) => {
                    state.status = 'loading';
               })
               .addCase(authAsync.fulfilled, (state,action) => {
                    state.status = 'idle';
                    state.error = action.payload;
               })
               .addCase(authAsync.rejected, (state,action) => {
                    state.status = 'failed';
                    state.error = action.payload;
               })
     }
})


export const { setUser } = authSlice.actions;

export default authSlice.reducer;