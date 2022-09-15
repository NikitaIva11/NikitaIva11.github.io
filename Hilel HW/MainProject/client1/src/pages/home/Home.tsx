import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAsync } from '../../features/books/booksSlice';
import { RootState } from '../../app/store';
import Loader from '../../components/Loader/Loader';
import BookCardItem from '../../components/BookCardItem/BookCardItem';
const Home = () => {
    const dispatch = useDispatch()
    const books = useSelector((state:RootState)=>state.books.books)
    const status = useSelector((state:RootState)=>state.books.status)
    useEffect(() => {
        if(!books){            
            dispatch(getBooksAsync('/books/available'))
        }
    }, [getBooksAsync])
    return (
      
        <div className={`container ${styles.home_container}`}>
              {status==='loading'&&<Loader/>}
            {books&&books.map((el,index)=><BookCardItem key={index} book={el}/>)}
        </div>
    )
}

export default Home;