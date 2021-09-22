import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState('')
  
  const isLegalAge = (e) => {
    const ageValue = e.target.value
    if(ageValue >= 18){
      if (ageValue > 112){
        setAge('A pessoa mais velha do mundo atualmente tem 112 anos.')
      }else{
        setAge('Você é de maior')
      }
    }else{
      setAge('Você é de menor')
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {age}
        </p>
          <input type="text" onChange={isLegalAge} placeholder="digite sua idade"></input>
        
      </header>
    </div>
  );
}

export default App;
