import React from 'react';
import styles from './Auth.module.scss'
import { NavLink, Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <section className={styles.auth_wrapper}>
            <div className={styles.auth_buttons}>
                <NavLink
                    className={({ isActive }) => isActive ? styles.auth_link_active : styles.auth_link}
                    to={'signup'}>
                    Sign Up
                </NavLink>
                <NavLink
                     className={({ isActive }) => isActive ? styles.auth_link_active : styles.auth_link}
                    to={'signin'}>
                    Sign In
                </NavLink>
            </div>
            <Outlet />
        </section>
    )
}

export default Auth;