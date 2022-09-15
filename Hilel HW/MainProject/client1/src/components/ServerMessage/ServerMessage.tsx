import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import styles from './index.module.scss'

const ServerMessgae = () => {
    const AuthError = useSelector((state:RootState)=>state.auth.error)
    const AuthStatus = useSelector((state:RootState)=>state.auth.status)
    const [msgShow, setMsgShow] = useState(false)
    useEffect(() => {
        if(AuthStatus==='failed')setMsgShow(true)
        if(AuthStatus==='idle')setMsgShow(true)
        const timer = setTimeout(() => {
            setMsgShow(false)
        }, 3000)
        return ()=>{
            clearTimeout(timer)            
        }
    }, [AuthStatus])
    return (
        <>
            {msgShow&&<div className={`${styles.message_container} ${AuthStatus}`}>
                <h1>{AuthError}</h1>
            </div>
            }
        </>

    )
}

export default ServerMessgae;