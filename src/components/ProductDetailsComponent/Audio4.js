import React from "react";
import aa from "./../../audio/test.mp3";
import { useEffect } from "react";
import { useState } from "react";

const Audio4 = () => {
  var audio = new Audio(aa);
  var context;
  var source;

window.addEventListener("load", initMp3Player)

function initMp3Player(){
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var source = audioCtx.createMediaElementSource(audio);
    var analyser = audioCtx.createAnalyser();

    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    source.connect(analyser);
    analyser.connect(audioCtx.destination);    

    frameLooper();
    console.log(audioCtx,source, analyser );
}

function frameLooper(){
    // window.requestAnimationFrame(frameLooper);

    // analyser.getByteFrequencyData(dataArray);

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = '#00CCFF';
    // bars = 100;
    // for (var i = 0; i < bars; i++) {
    //     bar_x = i * 3;
    //     bar_width = 2;
    //     bar_height = -(dataArray[i] / 2);
    //     ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    // }
}
  const handelStart = () => {
    audio.play();
  };
  return (
    <div>
        <canvas id="myCanvas" width="500" height="200"></canvas>
      <p onClick={handelStart}> LL</p>
    </div>
  );
};

export default Audio4;
