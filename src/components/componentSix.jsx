import { useReducer } from "react";
import ComponentSeven from './componentSeven'

function reducer(state, action) {
  console.log("state", state, action);
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0
    default:
      throw new Error("not an action");
  }
}

export default function ComponentSix() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <ComponentSeven />
    </>
  );
}
