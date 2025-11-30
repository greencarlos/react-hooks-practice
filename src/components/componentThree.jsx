import { useContext } from "react";
import ComponentFour from "./componentFour.jsx";
import { Context, CartContext } from "../assets/context.js";

export default function ComponentThree() {
  const [signedIn, setSignedIn] = useContext(Context);
  const [cart, setCart] = useContext(CartContext);
  const data = cart.items.map((item) => {
    return { name: item, id: crypto.randomUUID() };
  });

  return (
    <>
      {signedIn ? (
        <>
          <h3>Your Cart:</h3>
          {data.map(({ name, id }) => (
            <p key={id}>{name}</p>
          ))}
          <p>Total Price: ${cart.totalPrice}.95</p>
          <ComponentFour />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
