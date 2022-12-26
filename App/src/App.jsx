import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import img from "./assets/UPDATED Giving Back Official PNG.png";
import "./rotate.css";
import Carved from "./components/Carved";
import { Background } from "./components/Background";
import Navbar from "./components/Navbar";
// import videoBg from "./assets/video.mp4"
import styles from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Background>

          </Background>
        </div>
      </div>
    </div>
  );
}

export default App;
