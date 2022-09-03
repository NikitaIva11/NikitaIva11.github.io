import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RootState } from '../../model/redux.model';
import Auth from '../../Pages/Auth/Auth';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import SignIn from '../Auth/SIgnIn';
import SignUp from '../Auth/SIgnUp';


const RouterProvider = () => {
     const auth = useSelector((state: RootState) => state.auth.value)
     return (
          <Routes>
               <Route path='/' element={<Navigate to={auth ? `/home` : '/auth/signup'} />} />
               <Route path='/home' element={auth ?<Home />:<Navigate to={`/auth/signup`} />} />
               <Route path='/contact' element={auth ?<Contact />:<Navigate to={`/auth/signup`} />} />
               <Route path='/auth' element={auth ? <Navigate to={`/home`} /> : <Auth />}>
                    <Route path='signup' element={<SignUp />} />
                    <Route path='signin' element={<SignIn />} />
               </Route>
               <Route path='*' element={<h1>404</h1>} />
          </Routes>
     )
}

export default RouterProvider;