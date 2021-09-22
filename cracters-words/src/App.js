import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [word, setWord] = useState('')

  const characters = (e) => {
    let string = e.target.value
      setWord(` ${string} tem ${string.length} caracteres`)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{word}</p>
        <input type="text" onChange={characters} placeholder="digite uma palavra"></input>
      </header>
    </div>
  );
}

export default App;
