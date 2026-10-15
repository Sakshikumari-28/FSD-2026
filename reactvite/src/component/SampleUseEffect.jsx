import React, { useEffect, useState } from 'react';

function SampleuseEffect() {
const [counter, setCounter] = useState(0);
const [pointer, setPointer] = useState(100);

useEffect(() => {
console.log("Counter = " + counter);
console.log("Pointer = " + pointer);
}, [counter, pointer]);

function setCount() {
setCounter(counter + 5);
}

function updatePointer() {
setPointer(pointer - 5);
}

return ( <div>
<h2 style={{ color: 'red' }}>SampleUseEffect</h2>

  <h1>Counter Value = {counter}</h1>
  <button onClick={setCount}>Counter</button>

  <h1>Pointer Value = {pointer}</h1>
  <button onClick={updatePointer}>Pointer</button>
</div>

);
}

export default SampleuseEffect;
