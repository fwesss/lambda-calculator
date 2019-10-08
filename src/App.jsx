import React, { useState } from 'react';

import Logo from './components/DisplayComponents/Logo';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

import './index.css';
import './App.css';


function App() {
  const [operatorState, setOperatorState] = useState('');
  const [numberState, setNumberState] = useState('0');
  const [percentageState, setPercentageState] = useState(false);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display numberState={numberState} />
        <div className="App-leftButtons">
          <Specials
            numberState={numberState}
            setNumberState={setNumberState}
            percentageState={percentageState}
            setPercentageState={setPercentageState}
          />
          <Numbers numberState={numberState} setNumberState={setNumberState} />
        </div>
        <div className="App-rightButtons">
          <Operators operatorState={operatorState} setOperatorState={setOperatorState} />
        </div>
      </div>
    </div>
  );
}

export default App;
