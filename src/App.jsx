import { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import {
  Context,
  NameContext,
  UserContext,
  ThemeContext,
  CartContext,
} from "./assets/context.js";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("Nova Designs");
  const [user, setUser] = useState({ name: "Alice" });
  const [dark, setDark] = useState(true);
  const [cart, setCart] = useState({
    items: ["Apple", "Banana", "Orange"],
    totalPrice: 10,
  });

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <NameContext.Provider value={[name, setName]}>
        <UserContext.Provider value={[user, setUser]}>
          <ThemeContext.Provider value={[dark, setDark]}>
            <CartContext.Provider value={[cart, setCart]}>
              <div style={themeStyles}>
                <Nav />
                <h1>{signedIn ? "Signed in" : "Signed out"}</h1>
              </div>
            </CartContext.Provider>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </NameContext.Provider>
    </Context.Provider>
  );
}

export default App;
