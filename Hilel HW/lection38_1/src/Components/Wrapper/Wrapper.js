import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { localContext } from '../Context/Context';
import CustomDivElem from '../CustomDivElem/CustomDivElem';
import ModalComponent from '../ModalComponent/ModalComponent';
import SettingsBar from '../SettingsBar/SettingsBar';
let randomColor = () =>{
     let a = Math.floor(Math.random()* 256)
     let b = Math.floor(Math.random()* 256)
     let c = Math.floor(Math.random()* 256)
     return `rgba(${a},${b},${c})`
};
const Wrapper = () => {
     let {localList, editLocalList,windowParam,setWindowParam} = useContext(localContext);

     let createCustomDiv = (event) =>{
          localList.push({
               width:'100px',
               height:'100px',
               left:event.clientX,
               top:event.clientY,
               backgroundColor:randomColor()
          });
          let newList = [...localList];
          editLocalList(newList);
     };
     let wrap = useRef(null)
     useEffect(()=>{
          let {width,height} = wrap.current.getBoundingClientRect()
          let newObj = {width,height}
          setWindowParam(newObj)
     },[])
     return (
          <div ref={wrap} onClick={createCustomDiv} className='wrapper'>
               <ModalComponent/>
               {localList.map((el,index)=>
               <CustomDivElem
               index={index} 
               key={index}
               params={el}
               />
               )}
               <SettingsBar/>
          </div>
     )
}

export default Wrapper;