import React, { useCallback, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ModalItem from '../ModalItem/ModalItem';
import { LocalContext } from '../LocalListProvider/LocalListProvider';
const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: '#0A1929',
     color:'#fff',
     p: 4,
};
const ModalComponent = ({open,handleClose,itemInfo}) => {
     const {list,putList } = useContext(LocalContext);
     const {elStyle,index} = itemInfo;
     let [newItem,setNewItem] = useState({}) ;
  
     
     let arr = Object.entries(elStyle);
     
     let onCLose = (e)=>{
          e.stopPropagation()
          handleClose()
     }
     let getNewSettings = useCallback((item)=>{
          let createNewSettings = {...newItem,...item}
          setNewItem(createNewSettings)
     },[newItem])
     let onChangeSettings = (e)=>{
          let newList = [...list]
          newList[index] = {...newList[index],...newItem}
          putList(newList)
          setNewItem({})
          handleClose()
     }
     let onDeleteEl = (e)=>{
          let newList = [...list]
          newList.splice(index,1)
          putList(newList)
          setNewItem({})
          handleClose()
     }
     let onSettings=(e)=>{
          e.stopPropagation()
     }
     return (
          <div>
               <Modal
                    open={open}
                    onClick={onCLose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box  onClick={onSettings} sx={style}>
                         {itemInfo&&arr.map((el,index)=>
                         <ModalItem 
                         getNewSettings={getNewSettings}
                         key={index} 
                         item={el}/>)}
                         <Box 
                         sx={{
                              display:'flex',
                              alignItem:'center',
                              justifyContent:'space-around'
                         }}
                         >
                                 <Button onClick={onDeleteEl}  sx={{
                              backgroundColor:'red'
                         }} 
                         variant="contained"
                         >
                              Delete
                              </Button>
                         <Button onClick={onChangeSettings}  sx={{
                              backgroundColor:'green'
                         }} 
                         variant="contained"
                         >
                              Change
                              </Button>
                      
                         </Box>
                         
                    </Box>
               </Modal>
          </div>
     )
}

export default ModalComponent;