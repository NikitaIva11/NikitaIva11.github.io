import React, { useCallback, useState } from 'react';
 interface IProps{
    placeholder:string,
    getValue:Function,
 }
const TextField = (props:IProps) => {
    let [value, setValue] = useState('')
    const {placeholder,getValue} = props
    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        getValue({[placeholder]:event.target.value})
        setValue(event.target.value)
        
    }
    return (
        <>
        <input value={value} onChange={onChange} type="text" placeholder={placeholder}/>
        </>
    )
}
 
export default TextField;