import React,{useState} from 'react';
import cat from '../images/cat.png';

function Imagemanipulation(){
  const[catHeight,setCatHeight]=useState(200);
  const[catWidth,setCatWidth]=useState(200);
  const[catAngle,setCatAngle]=useState(60);
  const[left,setLeft]=useState(0);
  const[right,setRight]=useState(0);

  function setHeight(){
    setCatHeight(catHeight+10);
  }

  function setWidth(){
    setCatWidth(catWidth+10);
  }

  function rotateCat(){
    setCatAngle(catAngle+10);
  }

  function moveLeft(){
    setLeft(left-10);
  }

  function moveRight(){
    setRight(right+10);
  }

  return(
    <div>
      <h2 style={{color:'green',backgroundColor:'pink'}}>Imagemanipulation</h2>

      <div style={{
        border:'2px solid green',
        height:'400px',
        width:'400px',
        position:'relative',
        left:`${left+right}px`
      }}>
        <img
          src={cat}
          height={catHeight}
          width={catWidth}
          style={{transform:`rotate(${catAngle}deg)`}}
          alt="Cat"
        />
      </div>

      <div>
        <button onClick={setHeight}>Increase Height</button>
        <button onClick={setWidth}>Increase Width</button>
        <button onClick={rotateCat}>Rotate</button>
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
      </div>
    </div>
  );
}

export default Imagemanipulation;