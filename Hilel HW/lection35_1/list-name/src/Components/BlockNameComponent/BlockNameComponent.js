import React from 'react';
import './index.css'
const BlockNameComponent = (props) => {
     return (
          <div className={"block" + ` ${props.color}`}>
               {props.name}
          </div>
     )
}

export default BlockNameComponent;