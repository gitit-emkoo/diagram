import './App.css';
import { Dice } from './Dice';

function App() {
  return (
    <>
      <Dice color="blue" num={1}/>
      <Dice color="red" num={4}/>
    </>
  );
}

export default App;
