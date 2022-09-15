import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import Loader from './components/Loader/Loader';
import RouterProvider from './components/RouterProvider/RouterProvider';
import ServerMessgae from './components/ServerMessage/ServerMessage';
import Navbar from './components/Static/Navbar/Navbar';
import { authAsync } from './features/auth/authSlice';
import { FavoriteAsync } from './features/favorite/favorite';


function App() {


  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.auth.status)
  const user = useSelector((state: RootState) => state.auth.user)
  const favorite = useSelector((state: RootState) => state.favorite.favorite);
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (!token) return;
    dispatch(authAsync({ user: { token: token }, path: '/auth/token' })) 
  }, [])
  useEffect(()=>{
    if(status==='idle')dispatch(FavoriteAsync(user?.token))
    
  },[status])
  // console.log(favorite);
  return (
    <div className="App">
      <Navbar />
      {status === 'loading' && <Loader />}
      <ServerMessgae />
      <RouterProvider />
    </div>
  );
}

export default App;
