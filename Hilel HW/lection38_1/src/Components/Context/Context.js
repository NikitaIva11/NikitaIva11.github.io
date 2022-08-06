import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
export let localContext = createContext(null)

const Context = ({ children }) => {
     let getLocalList = useCallback(() => {
          let list = JSON.parse(localStorage.getItem('list'))
          if (!list) {
               localStorage.setItem('list', JSON.stringify([]))
               list = JSON.parse(localStorage.getItem('list'))
          }
          return list
     }, [])
     let [localList, setLocalList] = useState(getLocalList())
     let [modal, setModal] = useState(false)
     let [id, setId] = useState(null)
     let [windowParam,setWindowParam] = useState({})
     let editLocalList = useCallback((newList) => {
          localStorage.setItem('list', JSON.stringify(newList))
          setLocalList(newList)
     }, [])
     return (
          <localContext.Provider value={{ localList, editLocalList , modal, setModal ,id, setId,windowParam,setWindowParam}}>
               <div className="wrapper">
                    {children}
               </div>
          </localContext.Provider>
     )
}

export default Context;