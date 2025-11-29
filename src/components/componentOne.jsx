import { useContext } from "react";
import ComponentTwo from "./componentTwo.jsx";
import { Context, UserContext } from "../assets/context.js";

export default function ComponentOne() {
  const [signedIn, setSignedIn] = useContext(Context);
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      {signedIn ? <h3>Welcome user: {user.name}</h3> : <></>}
      <ComponentTwo />
    </>
  );
}
