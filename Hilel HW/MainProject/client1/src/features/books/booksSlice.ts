import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IBooks } from '../../models/booksModels/books.model';

const HOST = process.env.REACT_APP_HOST || 'http://localhost:2700/api'

interface IState {
     books: undefined | [IBooks],
     status: 'idle' | 'loading' | 'failed';
}

export const getBooksAsync: any = createAsyncThunk('books/getAll',
     async function ( path:any, { rejectWithValue, dispatch }) {
          try {
               const response: any = await fetch(HOST + path)

               if (!response.ok) throw Error('Server Errror');

               const data = await response.json();
               dispatch(books(data))

          } catch (error: any) {
               return rejectWithValue(error.message)
          }

     })

const initialState: IState = {
     books: undefined,
     status: 'idle'
}

export const booksSlice = createSlice({
     name: 'books',

     initialState,

     reducers: {
          books(state, action: PayloadAction<[IBooks]>) {
               state.books = action.payload;
          },
     },
     extraReducers: (builder) => {
          builder
               .addCase(getBooksAsync.pending, (state) => {
                    state.status = 'loading';
               })
               .addCase(getBooksAsync.fulfilled, (state) => {
                    state.status = 'idle';
               })
               .addCase(getBooksAsync.rejected, (state) => {
                    state.status = 'failed';
               })
     }
})


export const { books } = booksSlice.actions;

export default booksSlice.reducer;