import P5 from 'p5';
import * as Tone from 'tone';

import { Visualizer } from '../Visualizers';

export const histogramVisualizer = new Visualizer(
    'Histogram',
    (p5: P5, analyzer: Tone.Analyser) => {
    }
)