import { useCallback, useState } from 'react';
import './App.css';
import BlockNameComponent from './Components/BlockNameComponent/BlockNameComponent';
import InputName from './Components/InputNameComponent/InputName';
import { Names } from './ListNames/Names';

function App() {
  let [inpName,setInpName] = useState('')
  let onInput = useCallback((params)=>{
    setInpName(params)
  },[])
  return (
    <div className="App">
      <div className="wrapper">
        <InputName onInput={onInput} />
        <div className="block-wrapper">
        {list.map((el, index) =>
          <BlockNameComponent 
          key={index} 
          color={el.name === inpName?true:''}
          name={el.name} 
          />
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
