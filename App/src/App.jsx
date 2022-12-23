import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import img from "./assets/UPDATED Giving Back Official PNG.png";
import "./rotate.css";
import Carved from "./components/Carved";
import { Background } from "./components/Background";
// import videoBg from "./assets/video.mp4"

function App() {

  return (
    <div >
     <Background>
     <Carved class="relative mb-0 z-10"></Carved>
      <div className="boxpo">
        <img class="square" src={img}></img>
      </div>
      </Background> 
      
    </div>
  );
}

export default App;
