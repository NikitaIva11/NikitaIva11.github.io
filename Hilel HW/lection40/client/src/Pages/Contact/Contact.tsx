import React, { useCallback, useEffect, useState } from 'react';
import ServerMessage from '../../components/ServerMessage/serverMessage';
import { ContactService } from '../../services/ApiService/ContactServices';
 import styles from './contact.module.scss'
const Contact = () => {
     const [value,setValue]=useState('')
     const [show,setShow]=useState({active:false,msg:undefined})
     const onChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>)=>{
          setValue(event.target.value)
     },[value])
     const onClick = useCallback(async ()=>{
          const user = JSON.parse(localStorage.getItem('user')||'{}')
          if(user.token){
               const form = {token:user.token,message:value}
               const resp:any = await ContactService.send(form)
               
               if(resp.status){
                    setShow({active:true,msg:resp.msg})
            
               }
          }
           
     },[value])
     useEffect(()=>{
          let timeout = setTimeout(() => {
               setShow({active:false,msg:undefined})
              
          }, 2000)
          return () => clearTimeout(timeout)
     },[show])
    return (
        <div className={styles.contact_wrapper}>
          {show.active&&<ServerMessage className='good' msg={show.msg}/>}
          <h1>Contact Form</h1>
          <textarea value={value} onChange={onChange} placeholder='Write your message here' name="" id="" cols={30} rows={30}></textarea>
          <button onClick={onClick}>Send</button>
        </div>
    )
}
 
export default Contact;