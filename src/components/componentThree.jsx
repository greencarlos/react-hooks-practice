import { useContext } from "react";
import ComponentFour from "./componentFour.jsx";
import { Context, CartContext } from "../assets/context.js";

export default function ComponentThree() {
  const [signedIn, setSignedIn] = useContext(Context);
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
      {signedIn ? (
        <>
          <h3>Your Cart:</h3>
          {cart.items.map((item, i) => (
            <p key={i}>{item}</p>
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
