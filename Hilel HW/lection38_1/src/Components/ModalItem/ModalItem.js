import { Box } from '@mui/system';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './ModalItem.css'

const ModalItem = ({ item ,getNewSettings}) => {
     let [key, value] = item
     let [inpVal,setInpVal] = useState(value)
     let newObj = (e)=>{
          setInpVal(e.target.value)
          getNewSettings({[key]:e.target.value})
     }
     return (
          <Box className='modal_item'>
               <Box className='modal_item_key'>
                    {key}
               </Box>
               {key === 'backgroundColor' ?
                    <Box className='modal_item_color'>
                         <input 
                         className="inp_color" 
                         type="color" 
                         value={inpVal} 
                         onInput={newObj} 
                         name="" 
                         id="" />
                    </Box>
                    :
                    <input 
                    className='modal_item_value' 
                    type="text" 
                    value={inpVal} 
                    onInput={newObj}
                    placeholder={inpVal} 
                    name="" 
                    id="" />}
          </Box>
     )
}

export default ModalItem;