// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const RandomVisualizer = new Visualizer(
  'Waveform',
  (p5: P5, analyzer: Tone.Analyser) => {
  },
);
