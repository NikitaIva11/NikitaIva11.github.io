import React, { useCallback, useState } from 'react';
import styles from './index.module.scss'
 interface IProps {
     placeholder:string,
     getUserValue:Function
 }

const AuthTextField = (props:IProps) => {
    const [value,setValue] = useState('')
    const {placeholder,getUserValue} = props;
    const onChange = useCallback((event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
        getUserValue({[placeholder]: event.target.value})
    },[getUserValue])

    return (
     <input onChange={onChange} value={value} className={styles.auth_textField} type="text" placeholder={placeholder} />
    )
}
 
export default AuthTextField;