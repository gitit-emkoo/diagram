import './App.css';
import { Dice } from './Dice';

const DEFAULT_NUM =6

export function Board(props) {
  const color = props.color
  const name = props.name
  const history = props.history
  
  const num = history.at(-1) || DEFAULT_NUM //히스토리의 마지막 숫자를 가져오기 위해 -1 사용(배열의 뒤에서 1번째란 뜻 )
  return (
    <div>
      <div>{name}</div>
      <Dice color={color} num={num} />
      <div>
        {history.join('.')}
      </div>    
   </div>
  );
}

