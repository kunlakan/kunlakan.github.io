import './Button.css'

import Triangle from '../img/button_triangle.png';
import Square from '../img/button_square.png';
import Circle from '../img/button_circle.png';
import X from '../img/button_x.png';
import Up from '../img/button_up.png';
import Down from '../img/button_down.png';
import Left from '../img/button_left.png';
import Right from '../img/button_right.png';

interface Props {
  type : string;
  side : string;
};

type buttonData = {
  imgScr : string;
  imgAlt : string;
};

let buttonMap = new Map<string, buttonData>();
buttonMap.set('Triangle', {imgScr : Triangle, imgAlt : "Options"});
buttonMap.set('Square', {imgScr : Square, imgAlt : ""});
buttonMap.set('Circle', {imgScr : Circle, imgAlt : "Confirm"});
buttonMap.set('X', {imgScr : X, imgAlt : "Deny"});
buttonMap.set('Up', {imgScr : Up, imgAlt : "Move Up"});
buttonMap.set('Down', {imgScr : Down, imgAlt : "Move Down"});
buttonMap.set('Left', {imgScr : Left, imgAlt : "Move Left"});
buttonMap.set('Right', {imgScr : Right, imgAlt : "Move Right"});

const Button: React.FC<Props> = ({ type, side }) => { 
  const data = buttonMap.get(type);

  return (
    <button className={side}>
      <img src={data?.imgScr} alt={data?.imgAlt}
      onClick={(event: React.MouseEvent<HTMLElement>) => {onClick(type)}} />
    </button>
  );
}

function onClick( type : string )
{
  switch(type) {
    case 'Triangle':
      console.log('Triangle Pressed');
      break;
    case 'Square':
      console.log('Square Pressed');
      break;
    case 'Circle':
      console.log('Circle Pressed');  
      break;
    default:
      console.log('X Pressed');
  }
}

export default Button;
