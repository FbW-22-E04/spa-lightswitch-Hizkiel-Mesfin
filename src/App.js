import { useState } from "react";
import "./App.css";

export default function App() {
  const [boolean, setBoolean] = useState(true);

  const flip = () => {
    setBoolean(!boolean);
  };

  return (
    <div>
      <section className={boolean ? "room lit" : "room dark"}></section>
      <button onClick={flip}> {boolean ? "dark" : "light"} </button>
    </div>
  );
}
