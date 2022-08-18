import { Box } from '@mui/material';
import React from 'react';

const CustomDivElem = ({ elStyle,handleClose,index }) => {
     let showDivSettings = (e) =>{
          e.stopPropagation()
          handleClose({elStyle,index})
     }
     return (
          <Box onClick={ showDivSettings} className='CustomDivElem' style={{ ...elStyle }}>

          </Box>
     )
}

export default CustomDivElem;