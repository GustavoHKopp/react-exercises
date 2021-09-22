import './App.css';
import { useState } from 'react';
function App() {
const [num, setNum] = useState(``)

const handleOnChange = (e) =>{
  let value = e.target.value
  let numbInt = parseInt(value)
    setNum(`antecessor: ${numbInt - 1} sucessor: ${numbInt + 1}`)
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>antecessor e sucessor</h1>
        <p>
          {num}
        </p>
        <input type="text" onChange={handleOnChange} placeholder="digite um numero"></input>
      </header>
    </div>
  );
}

export default App;

