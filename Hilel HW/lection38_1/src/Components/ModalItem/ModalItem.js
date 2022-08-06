import { Box, Button, TextField } from '@mui/material';
import './ModalItem.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { localContext } from '../Context/Context';
const style = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    borderRadius:'10px',
    oveflow:'hidden',
    marginBottom:'10px',
    bgcolor: '#5090D3',
};

const ModalItem = ({ param ,getElem}) => {
    let [showTextField,setShowTextField] = useState(false)
    let textFieldHandler = (e) =>{
        setShowTextField(prev=>!prev)
    }

    let keys = Object.keys(param)
    let changeInp = (e)=>{
        getElem({[keys[0]]:e.target.value})
    }
    return (
        <Box style={style}>
            <Box className='key'>{keys[0]}</Box>
            <Box className='value'>
                {!showTextField&&param[keys[0]]}
                {showTextField&&<input onInput={changeInp} placeholder='Write new param' className='inp' />}
                </Box>
            
            <Button onClick={textFieldHandler} className='button' variant="contained">Edit</Button>
        </Box>
    )
}

export default ModalItem;