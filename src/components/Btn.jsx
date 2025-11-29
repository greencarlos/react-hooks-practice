import { useState, useContext } from "react";
import { Context } from "../assets/context.js";
import ComponentOne from "./componentOne";

export default function Btn() {
  const [signedIn, setSignedIn] = useContext(Context);

  const handleClick = () => {
    setSignedIn(!signedIn);
  };

  return (
    <>
      <button onClick={handleClick}>{signedIn ? "Sign out" : "Sign in"}</button>
      {signedIn ? <ComponentOne /> : <></>}
    </>
  );
}
