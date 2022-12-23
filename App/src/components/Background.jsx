import React from "react";
import "../components/Background.css";
import videoBg from "../assets/video.mp4";
import Carved from "./Carved";
import img from "../assets/UPDATED Giving Back Official PNG.png";

export const Background = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div class="content">
        <Carved class="relative mb-0 z-10"></Carved>
        <div className="boxpo">
          <img class="square" src={img}></img>
        </div>
      </div>
    </div>
  );
};
