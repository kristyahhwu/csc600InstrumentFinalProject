import { BaggageClaim16 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
import { AmplitudeEnvelope } from 'tone';
import { StereoFeedbackEffect } from 'tone/build/esm/effect/StereoFeedbackEffect';

import { Visualizer } from '../Visualizers';

export const histogramVisualizer = new Visualizer(
    'BOOM',
    (p5: P5, analyzer_tone: Tone.Analyser) => {

        const width = window.innerWidth;
        const height = window.innerHeight / 2;

        let level = analyzer_tone.getValue();
        p5.background(0, 80);
        for (let i = 0; i < level.length; i++) {
            let r = p5.map(level[i] as number, 0, 1, 0, 400);
            p5.fill(p5.random(255), 80, 80);
            p5.ellipse(width / 2, height / 2, r, r)

        }
        p5.noFill();
        p5.stroke(255, 80, 80, 60);
        p5.strokeWeight(2);
        for (let j = 0; j < level.length; j++) {
            let angle = p5.map(j, 0, 1024, 0, 360);
            let x = width / 2 + Math.cos(angle) * 180;
            let y = height / 2 + Math.sin(angle) * 180;
            let r = p5.map(level[j] as number, -0.8, 0.8, 50, 220);
            let x1 = width / 2 + Math.cos(angle) * r;
            let y1 = height / 2 + Math.sin(angle) * r;
            p5.line(x, y, x1, y1);
        }
    }
)