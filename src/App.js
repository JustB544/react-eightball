import React, {useState} from 'react';
import EightBall from './EightBall';
import eightball_states from './eightball_states';
import './App.css';

function App() {
  const randomState = () => eightball_states[Math.floor(Math.random() * eightball_states.length)];
  const [eightball, setEightball] = useState({msg: "Think of a question", color: "black"});
  return (
    <div className="App" onClick={() => setEightball(randomState())}>
      <EightBall answers={eightball}/>
    </div>
  );
}

export default App;
