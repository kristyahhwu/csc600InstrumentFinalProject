// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const StarVisualizer = new Visualizer(
    'Star',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);

        p5.background(0);
        p5.background(p5.color(0));
        p5.strokeWeight(dim * 0.008);
        p5.stroke(255, 255, 255, 255);
        p5.angleMode('degrees');
    
        p5.strokeWeight(dim * 0.008); // 蹦跶的线条粗细
        p5.textSize(50);
        p5.text("Holiday Season", width / 3.5, height / 4);
        //p5.stroke(255, 255, 255, 255);
        //const amplitude = values[i] as number;
        p5.stroke(255, 255, 255, 255);
    
        const values = analyzer.getValue();
        const rad = (Math.PI*2)/500; // 图形大小

        // star 1
        p5.translate(width/5,height/2);
        p5.fill(0,0,0);
        for (let i = 0; i < values.length; i++) {
          const amplitude = values[i] as number;
          const x = 500*(amplitude * Math.cos(rad*i));
          const y = 500*(amplitude * Math.sin(rad*i));
          p5.line(x,y,x,y);
        }
    
        // star 2
        p5.translate(width/3,height/5);
        p5.fill("#ffffff");
        for (let i = 0; i < values.length; i++) {
          const amplitude = values[i] as number;
          const x = 500*(amplitude * Math.cos(rad*i));
          const y = 500*(amplitude * Math.sin(rad*i));
          p5.line(x,y,x,y);
        }
    });