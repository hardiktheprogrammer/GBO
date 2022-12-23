import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import img from "./assets/UPDATED Giving Back Official PNG.png";
import "./rotate.css";
import Carved from "./components/Carved";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Carved class="relative mb-0"></Carved>
      <div className="boxpo">
        <img class="square" src={img}></img>
      </div>
    </div>
  );
}

export default App;
