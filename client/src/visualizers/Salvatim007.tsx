// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const ElectricVisualizer = new Visualizer(
  'ElectricForm',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 100, 0, 150);
    p5.rect(20, 20, 60, 60);//
    p5.strokeWeight(dim * 0.05);
    p5.stroke(50, 255, 0, 255);
    p5.noFill();
    
    p5.rect(250, 20, 40, 40);//
    

    const values = analyzer.getValue();
    p5.beginShape();
    
    for (let i = 20; i < values.length/4; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 5, 0, width );
      const y = height / 2 + amplitude * height;
      // Place vertex
      p5.vertex(x, y);
    }


    p5.endShape();
  },
);
