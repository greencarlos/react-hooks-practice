import { useContext } from "react";
import ComponentThree from "./componentThree.jsx";
import {
  Context,
  ThemeContext,
  NameContext,
  UserContext,
  CartContext,
} from "../assets/context.js";

export default function ComponentTwo() {
  const [signedIn, setSignedIn] = useContext(Context);
  const [dark, setDark] = useContext(ThemeContext);
  const [name, setName] = useContext(NameContext);
  const [user, setUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);

  const handleClick = () => {
    setDark(!dark);
    dark ? setName("Rico Swave") : setName("Nova Designs");
    dark
      ? setUser({ ...user, name: "Dante" })
      : setUser({ ...user, name: "Virgil" });
    dark
      ? setCart({ items: ["Bacon", "Hot Dogs"], totalPrice: 25 })
      : setCart({ items: ["Eggs", "Milk", "Cheese"], totalPrice: 50 });
  };

  return (
    <>
      {signedIn ? (
        dark ? (
          <button onClick={handleClick}>Enable Light mode</button>
        ) : (
          <button onClick={handleClick}>Disable Light mode</button>
        )
      ) : (
        <></>
      )}
      <ComponentThree />
    </>
  );
}
