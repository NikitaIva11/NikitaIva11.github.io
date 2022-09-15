import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reader = () => {
     let { bookId, page } = useParams<any>();
     const [bookPage,setBookPage] = useState('')
     const fetchReader = useCallback(async () => {
          const response = await fetch(`http://localhost:2700/api/reader/${bookId}/${page}`);
          const data = await response.text();
          console.log(data);
          
          setBookPage(data)
     }, [bookId])
     useEffect(()=>{
          fetchReader()
     },[])
     console.log(bookPage);
     
     return (
          <div style={{width:'80%',height:"93vh",textAlign:'left'}} >
               <p style={{whiteSpace: 'pre-line'}}>{ `${bookPage}`}</p>
               
          </div>
     )
}

export default Reader;