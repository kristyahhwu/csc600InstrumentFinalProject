// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
// project imports
import { Visualizer } from '../Visualizers';


export const WaveformVisualizer = new Visualizer(
  'Waveform',
  (p5: P5, analyzer: Tone.Analyser) => {
    //Max color Combination = 16,581,375
    // let colorCombination = 0; 
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    let relativeBlue = 255, relativeRed = 255, yellow = 255, brightness = 255;
    p5.stroke(relativeBlue, relativeRed, yellow, brightness);
    p5.noFill();

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
    
  },
);
