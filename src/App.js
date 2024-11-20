import './App.css';
import { useState } from 'react';
import { Board } from './Board';
import { Button } from './Button';

const random = n => Math.ceil(Math.random() * n)



function App() {
  
  const [myGameHistory, setMyGameHistory] = useState([])
  const [yourGameHistory, setYourGameHistory] = useState([])

const handleRollClick = () => {
  const nextNum = random(6) 
  setMyGameHistory([...myGameHistory, nextNum])

  const nextYourNum = random(6)
  setYourGameHistory([...yourGameHistory, nextYourNum])
}

  const firstRollClick = () => {
    setMyGameHistory([])
    setYourGameHistory([])
  }

  return (
    <div>
      <Board 
        color="blue" 
        name ="나" 
        history={myGameHistory} 
      />
      <Board 
        color="red" 
        name ="너" 
        history={yourGameHistory}/>
      <Button 
        onClick={handleRollClick}>던지기</Button>
      <Button 
        onClick={firstRollClick}>처음부터</Button>
    </div>
  );
}

export default App;
