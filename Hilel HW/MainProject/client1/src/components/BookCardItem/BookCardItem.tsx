import React, { useCallback, useEffect, useState } from 'react';
import { IBooks } from '../../models/booksModels/books.model';
import styles from './index.module.scss';
import favorite from '../../assets/icons/bookmark .png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setUser } from '../../features/auth/authSlice';
import { emitKeypressEvents } from 'readline';
import { SetFavoriteAsync } from '../../features/favorite/favorite';
import Book from '../../pages/book/Book';
interface Iprops {
     book: IBooks
}
const BookCardItem = (props: Iprops) => {
     const [toggleFavorite,setToggleFavorite] = useState(false)
     const [modalShow,setModalShow] = useState(false)

     const user: any = useSelector((state: RootState) => state.auth.user);
     const favorite: any = useSelector((state: RootState) => state.favorite.favorite);
     const dispatch = useDispatch();

     const { id, name, img } = props.book;
     const { token }: any = user;

     useEffect(()=>{
          if(favorite){
               const fav = favorite.some((el:any)=>el.id===id)
               setToggleFavorite(fav)
          }
        
     },[favorite])

     const onModal = useCallback(() => {
          setModalShow((prevstate) =>(!prevstate))
     }, [])

     const addFavorite = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
          dispatch(SetFavoriteAsync({ token, bookId: id }))
     }, [favorite])
     return (
          <div className={styles.book_card}>
               {modalShow&&<Book book={props.book} onModal={onModal}/>}
               <div className={styles.title_block}>
                    <p>{name}</p>
                    <button onClick={addFavorite} className={styles.favorite}>
                         <svg className={toggleFavorite? styles.favoriteSvg : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
                              <g fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                   <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
                              </g>
                         </svg>
                    </button>
               </div>
               <div className={styles.img_block}>
                    <img src={img} alt="" />
               </div>
               <div className={styles.card_buttons}>
                    <button onClick={onModal} data-id={id} className={styles.read}>More</button>

               </div>

          </div>
     )
}

export default BookCardItem;