// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
// project imports
import { Visualizer } from '../Visualizers';


export const FinaldestroyerVisualizer = new Visualizer(
  'Rainbow',
  (p5: P5, analyzer: Tone.Analyser) => {
    //Max color Combination = 16,581,375
    let colorCombination = 0; 
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
  },
);
