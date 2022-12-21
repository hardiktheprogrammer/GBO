import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import img from "./assets/UPDATED Giving Back Official PNG.png"
import "./rotate.css"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div class="w-96 py-3.5 m-8">
        <h1 class="text-amber-300">Welcome to Giving Back Official </h1>
        <img className="square" class="bg-auto h-96 " src={img}></img>
      </div>
    </div>
  );
}

export default App;
