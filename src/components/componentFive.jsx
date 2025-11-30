import { useState, useEffect, useRef } from "react";
import ComponentSix from './componentSix'

export default function ComponentFive() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef("");
  const countRef = useRef(0);

  const focus = () => {
    inputRef.current.focus();
  };

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;
    console.log("State: ", count);
    console.log("Ref: ", countRef.current);
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Hi name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <div>
        My name is <b style={{ color: "lightgreen" }}>{name}</b> and it used to
        be <b style={{ color: "green" }}>{prevName.current}</b>
      </div>
      <button onClick={focus}>Focus on Input</button>
      <p>
        Count: {count}, Ref: {countRef.current}
      </p>
      <button onClick={handleIncrement}>Increment</button>
      <ComponentSix />
    </>
  );
}
