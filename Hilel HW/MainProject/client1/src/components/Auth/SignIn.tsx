import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { authAsync } from '../../features/auth/authSlice';
import ISignIn from '../../models/authModels/signIn.model';
import AuthTextField from './AuthTextFileld';
import styles from './index.module.scss'
const SignIn = () => {
     const [user, setUser] = useState<ISignIn>({ email: '', password: ''});
     const inpKeys = Object.keys(user);
     const navigate = useNavigate()
     const status = useSelector((state:RootState)=>state.auth.status)
     
     let dispatch = useAppDispatch();

     const getUserValue = useCallback((value:any)=>{
          setUser((prevstate) =>({...prevstate,...value}) )
     },[]);


     const onClick = useCallback(()=>{
          dispatch(authAsync({user,path:'/auth/login'}))
     },[user]);
     return (
          <>
               {inpKeys.map((el, index) => <AuthTextField  getUserValue={getUserValue} key={index} placeholder={el} />)}
               <button onClick={onClick} className={styles.auth_startButton}>Sign Up</button>
          </>
     )
}

export default SignIn;