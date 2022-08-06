import './App.css';
import Context from './Components/Context/Context';
import Wrapper from './Components/Wrapper/Wrapper';

function App() {
  return (
  
      <div className="App">
      <Context>
        <Wrapper />
      </Context>
      </div>

  );
}

export default App;
