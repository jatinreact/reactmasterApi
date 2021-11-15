import React from "react";
import song from "./../../audio/test.mp3";
import "./Audio.css";

const Audio3 = () => {
  const handelStart = () => {
    var audio = document.getElementById("myAudio");
    var canva = document.getElementById("myCanvas");
    var barWidth = 2;
    var barHeight = 2;
    var barSpacing = 7;
    var barColor = "#cafdff";
    var shadowBlur = 20;
    var shadowColor = "#ffffff";
    var font = ["12px", "Helvetica"];
  };
  return (
    <div>
      <div className="audio_section">
        <audio
          id="myAudio"
          src={song}
          data-author="insert/author/name"
          data-title="insert/audio/name"
          controls
        ></audio>
        <canvas id="myCanvas" width="800" height="400"></canvas>
        <div className="pay_paus_container">
          <p className="text-danger" onClick={handelStart}>
            OKK
          </p>
        </div>
      </div>
    </div>
  );
};

export default Audio3;
