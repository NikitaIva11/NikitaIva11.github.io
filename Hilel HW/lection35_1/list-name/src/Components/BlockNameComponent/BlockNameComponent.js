import React from 'react';
import './index.css'
const BlockNameComponent = (props) => {
     console.log(props.color)
    return (
        <div className={"block"+` ${props.color}`}>
          {props.name}
        </div>
    )
}
 
export default BlockNameComponent;