import React, { useCallback } from 'react';
import styles from './index.module.scss'
import userAvatar from '../../../assets/icons/user.png'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { setUser } from '../../../features/auth/authSlice';

const notAuthNav = (setLight: any, setDark: any, setNight: any) => {
     return (
          <>
               <div className={`${styles.container}`}>
                    <div className={styles.navigation_links}>
                         <NavLink to={'/auth/signup'} className={styles.navigation_button}>Sign up / Sign In</NavLink>
                    </div>
                    <div className={styles.functional_buttons}>
                         <div className={styles.user_container}>
                              <button className={styles.user_avatar}>
                                   <svg xmlns="http://www.w3.org/2000/svg"  focusable="false" viewBox="0 0 12 12">
                                        <g fill="currentColor">
                                             <circle cx="6" cy="3" r="3" />
                                             <path d="M6 7a5 5 0 00-5 4.42.51.51 0 00.5.58h8.94a.51.51 0 00.5-.58A5 5 0 006 7z" />
                                        </g>
                                   </svg>

                              </button>
                              <p>guest</p>
                         </div>
                         <div className={styles.them_container}>
                              <p>theme:</p>
                              <button className={styles.theme_picker}>
                                   <div onClick={setLight} className={styles.light}>

                                   </div>
                                   <div onClick={setDark} className={styles.dark}>

                                   </div>
                                   <div onClick={setNight} className={styles.night}>

                                   </div>

                              </button>
                              {/* <p>theme</p> */}
                         </div>

                    </div>
               </div>
          </>
     )
};
const authNav = (setLight: any, setDark: any, setNight: any, user: any,onLogOut:any) => {
     return (
          <>               <div className={`${styles.container}`}>
               <div className={styles.navigation_links}>
                    <NavLink to={'/home'} className={styles.navigation_button}>Home</NavLink>
                    <NavLink to={'/favorite'} className={styles.navigation_button}>Favorite</NavLink>
               </div>
               <div className={styles.functional_buttons}>
               
                    <div className={styles.user_container}>
                         <button className={styles.user_avatar}>
                         <svg xmlns="http://www.w3.org/2000/svg"  focusable="false" viewBox="0 0 12 12">
                                        <g fill="currentColor">
                                             <circle cx="6" cy="3" r="3" />
                                             <path d="M6 7a5 5 0 00-5 4.42.51.51 0 00.5.58h8.94a.51.51 0 00.5-.58A5 5 0 006 7z" />
                                        </g>
                                   </svg>
                         </button>
                         <p>{user.name}</p>
                    </div>
                    <div className={styles.them_container}>
                         <p>theme:</p>
                         <button className={styles.theme_picker}>
                              <div onClick={setLight} className={styles.light}>

                              </div>
                              <div onClick={setDark} className={styles.dark}>

                              </div>
                              <div onClick={setNight} className={styles.night}>

                              </div>

                         </button>
                    </div>
                    <NavLink onClick={onLogOut} to={'/auth/signup'} className={styles.log_out}>Log out</NavLink>
               </div>
          </div>
          </>
     )
}

const Navbar = () => {
     const auth = useSelector((state: RootState) => state.auth.auth)
     const user = useSelector((state: RootState) => state.auth.user)
     const dispatch = useDispatch()
     const setLight = useCallback(() => {
          localStorage.setItem('them', 'light')
          document.documentElement.classList.add('light')
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.remove('night')
     }, [])
     const setDark = useCallback(() => {
          localStorage.setItem('them', 'dark')
          document.documentElement.classList.add('dark')
          document.documentElement.classList.remove('night')
          document.documentElement.classList.remove('light')
     }, [])
     const setNight = useCallback(() => {
          localStorage.setItem('them', 'night')
          document.documentElement.classList.add('night')
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.remove('light')
     }, [])
     const onLogOut = useCallback(()=>{
          localStorage.setItem('user','')
          dispatch(setUser(undefined))
     },[])
     return (
          <div className={styles.navbar_wrapper}>
               {auth ? authNav(setLight, setDark, setNight, user,onLogOut) : notAuthNav(setLight, setDark, setNight)}

          </div>
     )
}

export default Navbar;