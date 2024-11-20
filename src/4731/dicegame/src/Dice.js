import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

//절대 바뀌지 않는 값 ->상수라고 한다. 
//보통 상수 변수의 이름은 전부 대문자다. 이름이 단어 여러단어인 경우는 _로 구분한다.
const DICE_IMAGES = {
   blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06]
   red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06]
}

DICE_IMAGES['blue'][5]

export function Dice(props) {

    const src = props.color ==="blue" ? diceBlue01 : diceRed01
      //let src
      //if (props.color === "blue"){
      //  src = diceBlue01
      //
      //} else {
      //  src = diceRed01
      // }
    
    return <img src={src} alt="dice" />
}
