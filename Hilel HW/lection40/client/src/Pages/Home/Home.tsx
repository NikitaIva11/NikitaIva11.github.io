import React, { useCallback, useEffect, useState } from 'react';
import HomeItem from '../../components/HomeItem/HomeItem';
import { IUserData } from '../../model/usersAll.model';
import { UserService } from '../../services/ApiService/UsersServices';
import styles from './Home.module.scss'
const Home = () => {
  const [users, setUsers] = useState<Array<IUserData>>([]);
  useEffect(() => {
    UserService.getAll().then((data) => setUsers(data))
  }, [])
  return (
    <div className={styles.home_wrapper}>
      <table>
        <tbody>
        <tr style={{ height:'50px'}} >
            <td>EMAIL</td>
            <td>USER NAME</td>
            <td>CREATION TIME</td>
            <td>LAST LOGIN TIME</td>
          </tr>
          {users.map((el: IUserData, index: number) => <HomeItem key={index} users={el} />)}
        </tbody>
    
      </table>

    </div>
  )
}

export default Home;