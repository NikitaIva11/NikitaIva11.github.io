import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { LocalContext } from '../LocalListProvider/LocalListProvider';
const BottomNav = () => {
     const { list, putList } = useContext(LocalContext)

     const [value, setValue] = React.useState(0);
     let onClick = (e)=>{
          e.stopPropagation()
     }
     let onRemove=(e)=>{
          let newList = []
          putList(newList)
     }
     let onShanking=(e)=>{
          let newList = [...list];
          newList.forEach(el=>{
               el.left = `${Math.floor(Math.random()*(window.innerWidth-100))}px`
               el.top = `${Math.floor(Math.random()*(window.innerHeight-150))}px`
          })
          putList(newList);
     }
     let onFilter=(e)=>{
          let newList = [...list];
          let offsetLeft = 0;
          let offsetTop = 0; 
          const maxWidth = window.innerWidth-100;
          newList.forEach((el,index)=>{
               if(newList[index-1]){
                    offsetLeft+=parseInt(newList[index-1].width)
                    
               }
               if(offsetLeft>=maxWidth){
                    offsetTop+=100
                    offsetLeft=0
               }
               el.left=`${offsetLeft}px`
               el.top=`${offsetTop}px`
               
              
          })
          putList(newList);
     }
     return (
          <Box onClick={onClick} sx={{ position:'absolute', width: '100%',height:'50px',zIndex:1000,bottom:0 }}>
               <BottomNavigation
                    sx={{backgroundColor:'#001E3C',color:'#fff'}} 
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                         setValue(newValue);
                    }}
               >
                    <BottomNavigationAction onClick={onRemove} sx={{color:'#fff'}} label="Remove all"  />
                    <BottomNavigationAction onClick={onShanking}  sx={{color:'#fff'}}  label="Shaking" />
                    <BottomNavigationAction onClick={onFilter}  sx={{color:'#fff'}}  label="Filter"   />
               </BottomNavigation>
          </Box>
     )
}

export default BottomNav;