import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../features/authApiError/authApiError';
import { RootState } from '../../model/redux.model';
import styles from './Error.module.scss'
interface IProps {
     msg: string | undefined
     className:string
}
const ServerMessage = (props: IProps) => {
     const error = useSelector((state: RootState) => state.authError.value)
     const dispatch = useDispatch()
     useEffect(() => {
        
          if (error.active) {
               let timeout = setTimeout(() => {
                    dispatch(setError({ active: false, msg: undefined }))
                    return () => clearTimeout(timeout)
               }, 2000)
              
          }
     }, [error])

     return (
          <div className={props.className==='danger'?styles.danger:styles.good}>
               <h1>{props.msg}</h1>
          </div>
     )
}

export default ServerMessage;