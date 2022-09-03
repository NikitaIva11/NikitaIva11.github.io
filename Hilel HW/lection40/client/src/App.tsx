import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ServerMessage from './components/ServerMessage/serverMessage';
import Navbar from './components/Navbar/Navbra';
import RouterProvider from './components/RouterProvider/RouterProvider';
import { ILocalUser } from './model/localUser.model';
import { RootState } from './model/redux.model';
import AuthService from './services/ApiService/AuthServices';
function App() {
  const error = useSelector((state:RootState)=>state.authError.value)
  const active = useSelector((state:RootState)=>state.auth.value)
  useEffect(()=>{
    const localUser:ILocalUser = JSON.parse(localStorage.getItem('user')||"{}")
    if(!localUser)return;
    if(!localUser.token)return;
    AuthService.checkToken(localUser)
  },[])
  return (
    <div className="App">
      <Navbar/>
      {error.active&&<ServerMessage className='danger' msg={error.msg}/>}
      <div className="content">
        <div className="container">
        <RouterProvider/>
        </div>
     
      </div>
    </div>
  );
}

export default App;
