import React, {  useContext } from 'react';
import { localContext } from '../Context/Context';
const CustomDivElem = ({params,index}) => {
    let {setModal,setId} = useContext(localContext);
    let openModal=(e)=>{
        e.stopPropagation()
        setModal(true)
        setId(e.target.dataset.id)
    }
    let style = {...params}
    return (
        <div data-id={index} onClick={openModal} style={style} className='block'>
 
        </div>
    )
}
 
export default CustomDivElem;