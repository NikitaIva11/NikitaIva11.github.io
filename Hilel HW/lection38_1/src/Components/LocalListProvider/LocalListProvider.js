import React, { createContext, useCallback, useState } from 'react';
import { LocalList } from '../../LocalStorageHandler/LocalStorageHandler';
export let LocalContext = createContext()
const LocalListProvider = ({ children }) => {
     let [list, setList] = useState(LocalList.getList())
     const postList = useCallback((item) => {
          setList(LocalList.postList(list, item))
     })
     const putList = useCallback((item)=>{
          setList(LocalList.putList(item))
     })
     return (
          <LocalContext.Provider value={{ list, postList, putList }}>
               {children}
          </LocalContext.Provider>
     )
}

export default LocalListProvider;