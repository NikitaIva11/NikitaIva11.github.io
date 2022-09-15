import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss'
import { RootState } from '../../app/store';
import BookCardItem from '../../components/BookCardItem/BookCardItem';

const Favorite = () => {
     const favorite = useSelector((state: RootState) => state.favorite.favorite)
     const user: any = useSelector((state: RootState) => state.auth.user)

     return (
          <div className={`container ${styles.fav_container}`}>
               {favorite?.length ?
                    favorite.map((el: any, index: any) => <BookCardItem book={el} key={index} />)
                    :
                    <h1>Your favorite list is empty</h1>}
          </div>
     )
}

export default Favorite;


