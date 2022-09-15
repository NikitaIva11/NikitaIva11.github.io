import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBooks } from '../../models/booksModels/books.model';
import { log } from 'console';

const HOST = process.env.REACT_APP_HOST || 'http://localhost:2700/api'

interface IState {
     favorite: undefined | [IBooks],
     status: 'idle' | 'loading' | 'failed';
}

export const FavoriteAsync: any = createAsyncThunk('books/favorite',
     async function ( token, { rejectWithValue, dispatch }) {
          try {
               const response: any = await fetch(HOST + `/user/${token}/books/favorite`)

               if (!response.ok) throw Error('Server Errror');

               const data = await response.json();
               
               dispatch(getFavorite(data))
               return data.msg
          } catch (error: any) {
               return rejectWithValue(error.message)
          }

     })
export const SetFavoriteAsync: any = createAsyncThunk('books/favorite-add',
     async function ( {token,bookId}:any, { rejectWithValue, dispatch }) {
          try {
               const response: any = await fetch(HOST + `/user/${token}/books/add-favorite`,{
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({bookId:bookId})
               })

               if (!response.ok) throw Error('Server Errror');

               const data = await response.json();
               
               dispatch(setFavorite(data.favorite))
               return data.msg

          } catch (error: any) {
               return rejectWithValue(error.message)
          }

     })
export const SetProgressAsync: any = createAsyncThunk('books/progress',
     async function ( {token,bookId,progress}:any, { rejectWithValue, dispatch }) {
          try {
               const response: any = await fetch(HOST + `/user/${token}/books/progress`,{
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({bookId:bookId,progress:progress})
               })

               if (!response.ok) throw Error('Server Errror');

               const data = await response.json();
               
               dispatch(setFavorite(data.favorite))
               return data.msg

          } catch (error: any) {
               return rejectWithValue(error.message)
          }

     })

const initialState: IState = {
     favorite: undefined,
     status: 'idle'
}

export const FavoriteSlice = createSlice({
     name: 'favorite',

     initialState,

     reducers: {
          getFavorite(state, action: PayloadAction<[IBooks]>) {
               state.favorite = action.payload;
               
          },
          setFavorite(state, action: PayloadAction<[IBooks]>) {
               state.favorite = action.payload;
          },
     },
     extraReducers: (builder) => {
          builder
               .addCase(FavoriteAsync.pending, (state) => {
                    state.status = 'loading';
               })
               .addCase(FavoriteAsync.fulfilled, (state) => {
                    state.status = 'idle';
               })
               .addCase(FavoriteAsync.rejected, (state,action) => {
                    state.status = 'failed';
               })
               .addCase(SetFavoriteAsync.pending, (state) => {
                    state.status = 'loading';
               })
               .addCase(SetFavoriteAsync.fulfilled, (state,action) => {
                    state.status = 'idle';
               })
               .addCase(SetFavoriteAsync.rejected, (state,action) => {
                    state.status = 'failed';
               })
               .addCase(SetProgressAsync.pending, (state) => {
                    state.status = 'loading';
               })
               .addCase(SetProgressAsync.fulfilled, (state,action) => {
                    state.status = 'idle';
               })
               .addCase(SetProgressAsync.rejected, (state,action) => {
                    state.status = 'failed';
               })
          }
})


export const { getFavorite ,setFavorite} = FavoriteSlice.actions;

export default FavoriteSlice.reducer;