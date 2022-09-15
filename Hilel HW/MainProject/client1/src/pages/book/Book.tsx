import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './index.module.scss';
import favorite from '../../assets/icons/bookmark .png';
import { IBooks } from '../../models/booksModels/books.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { SetFavoriteAsync, SetProgressAsync } from '../../features/favorite/favorite';
const host = process.env.REACT_APP_HOST || 'http://localhost:2700/api'
interface IProps {
    book: IBooks,
    onModal: Function
}
const Book = (props: IProps) => {
    const favorite: any = useSelector((state: RootState) => state.favorite.favorite);
    const user: any = useSelector((state: RootState) => state.auth.user);

    const { book, onModal } = props;
    const { token }: any = user;

    const [toggleFavorite, setToggleFavorite] = useState(false);
    const [inpRangeValue, setInpRangeValue] = useState(book.progress);

    const dispatch = useDispatch();

    useEffect(() => {
        const fav = favorite.some((el: any) => el.id === book.id)
        setToggleFavorite(fav)
    }, [favorite])

    const addFavorite = useCallback(() => {
        dispatch(SetFavoriteAsync({ token, bookId: book.id }))
    }, [])

    const modal = useCallback(() => {
        onModal()
    }, [onModal])

    const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }, [])

    const onRange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInpRangeValue(e.target.value)
        dispatch(SetProgressAsync({ token, bookId: book.id ,progress:e.target.value}))
    }, [inpRangeValue])
    return (
        <div onClick={modal} className={styles.book_wrapper}>
            <div onClick={stopPropagation} className={`container ${styles.book_container}`}>
                <div className={styles.book_header}>
                    <button onClick={modal} className={styles.closeModal}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
                    </button>
                    <h1>{book.name}</h1>
                    <div className={styles.book_buttons}>
                        {/* <button className={styles.book_read}>Read Book</button> */}
                        <button onClick={addFavorite} className={styles.favorite}>
                            <svg className={toggleFavorite ? styles.favoriteSvg : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
                                <g fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.book_img}>
                    <img src={book.img} alt="" />
                </div>
                <div className={styles.book_mainInfo}>
                    <div className={styles.info_item}>
                        <div className={styles.tag}>
                            <p>Author:</p>

                        </div>
                        <div className={styles.key}>
                            <p>{book.author}</p>
                        </div>
                    </div>
                    <div className={styles.info_item}>
                        <div className={styles.tag}>
                            <p>Year:</p>

                        </div>
                        <div className={styles.key}>
                            <p>{book.year}</p>
                        </div>
                    </div>
                    <div className={styles.info_item}>
                        <div className={styles.tag}>
                            <p>Pages:</p>

                        </div>
                        <div className={styles.key}>
                            <p> {book.pageSize}</p>
                        </div>

                    </div>
                    {book.progress &&
                        (<div className={styles.info_item}>
                            <div className={styles.tag}>
                                <p>Your progress:</p>

                            </div>
                            <div className={styles.key}>
                                <p>{`${inpRangeValue}%`}</p> 
                                <input type="range" onChange={onRange}  step={25} min={0} max={100} value={inpRangeValue} />
                            </div>
                        </div>)}

                </div>
                <div className={styles.book_descriprion}>
                    <p>{book.description}</p>
                </div>

            </div>
        </div>

    )
}

export default Book;