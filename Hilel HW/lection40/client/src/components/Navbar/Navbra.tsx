import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuth } from '../../features/IsAuth/IsAuth';
import { setUser } from '../../features/user/user';
import { RootState } from '../../model/redux.model';
import { IUser } from '../../model/user.model';
import styles from './Navbar.module.scss'
const Navbar = () => {
     const user: IUser = useSelector((state: RootState) => state.user.value)
     const auth = useSelector((state: RootState) => state.auth.value)
     const dispatch = useDispatch()
     const onClick = useCallback(()=>{
          dispatch(setUser({userName:undefined,token:undefined}))
          dispatch(setAuth(false))
          localStorage.removeItem('user')
     },[auth])
     return (
          <section className={styles.navbar_wrapper}>
               <div className={`container ${styles.navbar_container}`}>
                    <div className={styles.navbar_userinfo}>
                         {auth ? user.userName : 'guest'}
                    </div>
                    <div className={styles.navbar_button}>
                    {auth&&<NavLink  to={'/contact'} className={styles.contact}>Contact</NavLink>}
                         {auth ?
                              <NavLink onClick={onClick} to={'/auth/signup'} className={styles.logout}>Logout</NavLink>
                              :
                              <NavLink to={'/auth/signup'} >Sign In / Sign Up</NavLink>
                         }
                       
                    </div>
               </div>
          </section >
     )
}

export default Navbar;