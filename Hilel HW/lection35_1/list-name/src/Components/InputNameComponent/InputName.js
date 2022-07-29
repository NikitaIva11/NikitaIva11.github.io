import React, { useCallback, useMemo } from 'react';
import './index.css'
const InputName =(props) => {
     let onInput = useCallback((event)=>{
          props.onInput(event.target.value)
     },[])
     return (
          <div className="input-wrapper">
               <input onInput={onInput} placeholder='Write name' className='InputName' type="text" />
          </div>
     )
}

export default InputName;