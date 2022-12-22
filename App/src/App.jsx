import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import img from "./assets/UPDATED Giving Back Official PNG.png"
import "./rotate.css"
import Carved from "./components/Carved";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Carved/>
      <div class="w-96 py-3.5 m-8">
        <img class="square" src={img}></img>

      </div>

    </div>
  );
}

export default App;
