import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Auth from '../../pages/auth/Auth';
import Book from '../../pages/book/Book';
import Favorite from '../../pages/favorite/Favorite';
import Home from '../../pages/home/Home';
import Reader from '../../pages/reader/Reader';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const RouterProvider = () => {
     const auth = useSelector((state:any)=>state.auth.auth)
     const navigate = useNavigate()
     useEffect(()=>{
          auth?navigate('/home'):navigate('/auth/signup')
     },[auth])
    return (
        <div className='content'>

               {
                    auth?
                    <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    {/* <Route path="/book/:id" element={<Book/>}/> */}
                    <Route path="/reader/:bookId/:page" element={<Reader/>}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                    </Routes>
                    :
                    <Routes>
                    <Route path="/" element={<Navigate to="/auth/signup"/>}/>
                    <Route path="/auth" element={<Auth/>}>
                         <Route path='/auth/signup' element={<SignUp/>}/>
                         <Route path='/auth/signin' element={<SignIn/>}/>
                    </Route>
                    <Route path="*" element={<h1>404</h1>}/>
                    </Routes>
               }
        </div>
    )
}
 
export default RouterProvider;