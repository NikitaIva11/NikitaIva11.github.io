import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { authAsync } from '../../features/auth/authSlice';
import ISignUp from '../../models/authModels/signUp.model';
import AuthTextField from './AuthTextFileld';
import styles from './index.module.scss'
const SignUp = () => {
     const [user, setUser] = useState<ISignUp>({ email: '', name: '', password: '', repeatPassword: '' });

     const inpKeys = Object.keys(user);
     
     let dispatch = useAppDispatch();
     

     const getUserValue = useCallback((value:any)=>{
          setUser((prevstate) =>({...prevstate,...value}) )
     },[]);

     const onClick = useCallback(()=>{
          dispatch(authAsync({user,path:'/auth/create'}))
     },[user]);
     return (
          <>
          {inpKeys.map((el,index)=><AuthTextField key={index} getUserValue={getUserValue} placeholder={el}/>)}
          
          <button onClick={onClick} className={styles.auth_startButton}>Sign Up</button>
          </>
     )
}

export default SignUp;