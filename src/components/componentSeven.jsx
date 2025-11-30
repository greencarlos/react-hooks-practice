import { useState, useMemo } from "react";
import ComponentEight from './componentEight'

function showFunction(number) {
  console.log("show function called");
  for (let i = 0; i < 10000; i++) {
    console.log('component seven, showFunction: i', i)
  }
  const double = number * 2;
  return double;
}

export default function ComponentSeven() {
  const [num, setNum] = useState(1);
  const [val, setVal] = useState(1);
  const [double, setDouble] = useState(1);
  const getDouble = useMemo(() => showFunction(val), [val]);

  return (
    <>
      <h1>Add number</h1>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>add one</button>

      <h1>Add double</h1>
      <h1>{val}</h1>
      <button onClick={() => setVal(val + 1)}>add double</button>

      <h1>Get Double</h1>
      <h1>{double}</h1>
      <button onClick={() => setDouble}>Get double</button>
      <ComponentEight />
    </>
  );
}
