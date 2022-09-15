import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.scss'
const Auth = () => {
     return (
          <section className={styles.auth_wrapper}>
               <div className={`container ${styles.auth_container}`}>
                    <div className={styles.auth_content}>
                         <div className={styles.auth_links}>

                              <NavLink
                                   className={({ isActive }) =>
                                        isActive ? styles.active : undefined
                                   }
                                   to='/auth/signup'>
                                   Sign Up
                              </NavLink>
                              <NavLink
                                   className={({ isActive }) =>
                                        isActive ? styles.active : undefined
                                   }
                                   to='/auth/signin'>
                                   Sign In
                              </NavLink>

                         </div>
                         <div className={styles.auth_form}>
                              <Outlet/>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Auth;