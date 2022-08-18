import { useCallback } from 'react';
import { useContext, useState } from 'react';
import './App.css';
import BottomNav from './Components/BottomNav/BottomNav';
import CustomDivElem from './Components/CustomDivElem/CustomDivElem';
import { LocalContext } from './Components/LocalListProvider/LocalListProvider';
import ModalComponent from './Components/ModalComponent/ModalComponent';
import { RandomColor } from './RandomColor/RandomColor';


function App() {
  const { list, postList } = useContext(LocalContext)
  const [showModal, setShowModal] = useState(false)
  const [el,setEl] = useState(null)
  const changeModalState = useCallback((el) => {
    if(el)setEl(el)
    setShowModal(prev => !prev)
  })
  const createCustomDiv = (e) => {
    // window.innerHeight/window.innerWidth
    let x = e.clientX - 50
    let y = e.clientY- 50
    if(x+50>=window.innerWidth-50)x=window.innerWidth-100
    if(y+100>=window.innerHeight-50)y=window.innerHeight-150
    let item =
    {
      backgroundColor: RandomColor(),
      width: '100px',
      height: '100px',
      left: `${x}px`,
      top: `${y}px`
    };
    postList(item)
  }
  return (
    <div onClick={createCustomDiv} className="App" >
      {list.map((el, index) =>
        <CustomDivElem
          key={index}
          index={index}
          elStyle={el}
          handleClose={changeModalState}
        />)}
        <BottomNav/>
      {el&&<ModalComponent itemInfo={el} open={showModal} handleClose={changeModalState} />}
    </div>

  );
}

export default App;
