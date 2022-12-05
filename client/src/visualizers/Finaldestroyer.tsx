// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
// project imports
import { Visualizer } from '../Visualizers';

export const RainbowVisualizer = new Visualizer(
  'Rainbow',
  (p5: P5, analyzer: Tone.Analyser) => {
    // var vol = new Tone.Volume(10);
    //Max color Combination = 16,581,375
    // let colorCombination = 0; 
    // ctx.strokeStyle = "#FF0000";
    // let relativeBlue = 255, relativeRed = 255, yellow = 255, brightness = 255; 

    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    // p5.background(0, 0, 0, 255);
    p5.background(40, 67, 67, 255);
    // p5.draw();
    p5.strokeWeight(dim * 0.01);
    // let relativeBlue = 255, relativeRed = 255, yellow = 255, brightness = 255;
    // p5.stroke(relativeBlue, relativeRed, yellow, brightness);
    p5.stroke(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), 255);

    p5.noFill();
    const values = analyzer.getValue();
    p5.beginShape();
    
    // p5.rect(Math.random()*width,Math.random()*height,Math.random()*25,Math.random()*75);      

    for (let i = 0; i < values.length; i++) {
    // p5.beginShape();
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + (amplitude/2) * height;
      p5.rect(x,y+25,-Math.random()*18.75,-Math.random()*56.25);  
      p5.rect(x,y+25,x*6.25,y*18.75);
    }
    
    p5.endShape();

  },
);
