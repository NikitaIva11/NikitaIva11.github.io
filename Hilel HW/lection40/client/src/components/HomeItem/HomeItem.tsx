import React, { useCallback } from 'react';
import { IUserData } from '../../model/usersAll.model';
interface IProps {
    users: IUserData
}
const HomeItem = (props: IProps) => {
    const { email, userName, creationTime, lastLoginTime } = props.users
   
    return (
        <tr style={{ height: '60px' }} >
            <td >{email}</td>
            <td >{userName}</td>
            <td >
                {new Date(creationTime).toLocaleTimeString()}
                <br />
                {new Date(creationTime).toLocaleDateString()}
            </td>

            <td >
                {new Date(lastLoginTime).toLocaleTimeString()}
                <br />
                {new Date(lastLoginTime).toLocaleDateString()}
            </td>
        </tr>
    )
}

export default HomeItem;