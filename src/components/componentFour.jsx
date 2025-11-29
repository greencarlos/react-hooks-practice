import { useContext } from "react";
import { NameContext } from "../assets/context.js";
import ComponentFive from './componentFive'

export default function ComponentFour() {
  const [name, setName] = useContext(NameContext);

  return (
    <>
      <p>Name: {name}</p>
      <ComponentFive/>
    </>
  );
}
