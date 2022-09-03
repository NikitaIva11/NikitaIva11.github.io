import React, { useCallback, useState } from 'react';
import AuthService from '../../services/ApiService/AuthServices';
import styles from './sign.module.scss'
import TextField from './TextFiled';
const SignIn = () => {
    let [value, setValue] = useState({ email: '', password: '' });
    const textFiledKey = Object.keys(value);

    const getValue = useCallback((getVal:object)=>{
        setValue({...value,...getVal})
    },[value])

    const onClick = useCallback(async ()=>{
        let date = new Date();
        const userData = {...value,...{lastLoginTime:date.getTime()}}
        AuthService.login(userData)
    },[value])
    return (
        <div className={styles.sign_wrapper}>
            <div className={styles.signup_form}>
                {textFiledKey.map((el, index) => <TextField getValue={getValue} placeholder={el} key={index} />)}
                <button onClick={onClick} >sign up</button>
            </div>
        </div>
    )
}

export default SignIn;