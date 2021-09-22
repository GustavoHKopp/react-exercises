import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [visor, setVisor] = useState('')
  const charactersAndVowels = (e) => {
    ////////// vogais //////////
    let vowelsCount = 0
    let consoantCount = 0
    let string = e.target.value.toString()
  
    for (let i in string) {
  
      if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
        vowelsCount += 1
      }
      
      if (string.charAt(i) === "b" || string.charAt(i) === "c" || string.charAt(i) === "d" || string.charAt(i) === "f" || string.charAt(i) === "g"|| string.charAt(i) === "h" || string.charAt(i) === "j" || string.charAt(i) === "k" || string.charAt(i) === "l" || string.charAt(i) === "m" || string.charAt(i) === "n" || string.charAt(i) === "o" || string.charAt(i) === "p" || string.charAt(i) === "q" || string.charAt(i) === "r" || string.charAt(i) === "s" || string.charAt(i) === "t" || string.charAt(i) === "v" || string.charAt(i) === "w" || string.charAt(i) === "x" || string.charAt(i) === "y" || string.charAt(i) === "z") {
        consoantCount += 1
      }

    }
    
  
    ////////// fim vogais //////////
    setVisor(`${string} tem ${string.length} caracteres, ${vowelsCount} vogais e ${consoantCount} consoantes  `)
 }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {visor}
        </p>
        <input type="text" onChange={charactersAndVowels} placeholder="digite uma palavra"></input>
      </header>
    </div>
  );
}

export default App;
