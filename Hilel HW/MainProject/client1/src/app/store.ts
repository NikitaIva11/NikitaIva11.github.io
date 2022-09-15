import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import authReducer from '../features/auth/authSlice';
import favoriteReducer from '../features/favorite/favorite';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    favorite: favoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
