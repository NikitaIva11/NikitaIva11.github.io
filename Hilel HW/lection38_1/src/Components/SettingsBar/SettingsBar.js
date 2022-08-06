import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import './SettingsBar.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { localContext } from '../Context/Context';

const SettingsBar = () => {
    let {localList,windowParam, editLocalList} = useContext(localContext);
    let stopProp = (e) =>{
        e.stopPropagation()
    }
    let reset = ( ) =>{
        localList=[]
        let newList = [...localList]
        editLocalList(newList)
    }
    let shaking = () =>{
        localList.forEach(element => {
            element.left = Math.floor(Math.random()*window.innerWidth)
            element.top = Math.floor(Math.random()*window.innerHeight)
        });
        let newList = [...localList]
        editLocalList(newList)
    }
    let filter = ( ) =>{
        for(let i =0;i<localList.length;i++){
            if(i===0){
                localList[i].left = 0
                localList[i].top = 0
            }else if(localList[i-1].left+200>windowParam.width ){
                localList[i].left = (0)
                localList[i].top = (localList[i-1].top+100)
            }
            else if(localList[i-1].left+100<windowParam.width){
                localList[i].left = (localList[i-1].left+100)
                localList[i].top = localList[i-1].top
            }

        }
        let newList = [...localList]
        editLocalList(newList)
    }
    return (
        <Box onClick={stopProp} className='settings-bar'>
            <BottomNavigation className='bottom'
                showLabels
            >
                <BottomNavigationAction onClick={reset} className='bottom-button' label="Reset "  />
                <BottomNavigationAction onClick={shaking} className='bottom-button' label="Shaking "  />
                <BottomNavigationAction onClick={filter} className='bottom-button' label="Filter "  />
            </BottomNavigation>
        </Box>
    )

}

export default SettingsBar;