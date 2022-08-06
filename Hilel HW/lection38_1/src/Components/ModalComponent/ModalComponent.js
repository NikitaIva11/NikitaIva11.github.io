import React, {  useCallback, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { localContext } from '../Context/Context';
import ModalItem from '../ModalItem/ModalItem';
import { Button } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgb(0, 30, 60)',
    p: 4,
  };
  
const ModalComponent = () => {
    let {modal,setModal,id,localList,editLocalList} = useContext(localContext);
    let [editElem,setElem] = useState({})
    let makeArr = () =>{
        if(!id)return;
        let arr = []
        for(let keys in localList[id]){
            arr.push({[keys]:localList[id][keys]})
        }
        return arr;
    }
    let closeModal = (e) =>{
        e.stopPropagation()
        setModal(false)
    }
    let getElem = useCallback((params)=>{
        let newArr = localList;
        newArr[id] = {...localList[id],...params}
        setElem(newArr)
    },[id])
    let changeElem = () =>{
        editLocalList(editElem)
        setModal(false)
    }
    return (
        <div>
            <Modal
                open={modal}
                onClick={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box onClick={(e)=>{e.stopPropagation()}} sx={style}>
                    {id&&makeArr().map((el,index)=><ModalItem getElem={getElem} param={el} key={index}/>)}
                    <Button onClick={changeElem} style={{width:'100%',backgroundColor:'rgb(17, 163, 24)'}} variant="contained">OK</Button>
                </Box>
            </Modal>

        </div>
    )
}

export default ModalComponent;