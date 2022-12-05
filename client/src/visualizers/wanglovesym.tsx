import P5 from 'p5';
import * as Tone from 'tone';
import { AmplitudeEnvelope } from 'tone';
import { StereoFeedbackEffect } from 'tone/build/esm/effect/StereoFeedbackEffect';

import { Visualizer } from '../Visualizers';

const analyser_node = new AudioContext().createAnalyser();

export const histogramVisualizer = new Visualizer(
    'Histogram',
    (p5: P5, analyzer_tone: Tone.Analyser) => {
        // function audioSignal(analyser: AnalyserNode, frequencies: Float32Array, min_hz: number, max_hz: number) {
        //     if (!analyser) {
        //         return 0;
        //     }
        //     else {
        //         const sample_rate = analyser.context.sampleRate;
        //         const bin_count = analyser.frequencyBinCount;
        //         let start = frequencyToIndex(min_hz, sample_rate, bin_count);
        //         const end = frequencyToIndex(max_hz, sample_rate, bin_count);
        //         const count = end - start;
        //         let sum = 0;
        //         for (; start < end; start++) {
        //             sum += frequencies[start];
        //         }

        //         const min_db = analyser_node.minDecibels;
        //         const max_db = analyser_node.maxDecibels;
        //         const value_db = count === 0 || !isFinite(sum) ? min_db : sum / count;
        //         return p5.map(value_db, min_db, max_db, 0, 1, true);
        //     }
        // }

        // function polygon(x: number, y: number, radius: number, sides = 3, angle = 0) {
        //     p5.beginShape();
        //     for (let i = 0; i < sides; i++) {
        //         const a = angle + 2 * Math.PI * (i / sides);
        //         let sx = x + Math.cos(a) * radius;
        //         let sy = y + Math.sin(a) * radius;
        //         p5.vertex(sx, sy);
        //     }
        //     p5.endShape();
        // }

        // p5.background("black");
        // p5.fill("white");
        // p5.noStroke();

        // const width = window.innerWidth;
        // const height = window.innerHeight / 2;
        // const dim = Math.min(width, height);
        // const sides: number = 3;
        // const angle: number = 0;
        // const x: number = width / 2;
        // const y: number = height / 2;
        // const radius: number = dim * 0.1;

        // const frequency_data: Float32Array = analyzer_tone.getValue() as Float32Array;

        // analyser_node.getFloatFrequencyData(frequency_data);
        // const cx = width / 2;
        // const cy = height / 2;
        // const raduis = dim * 0.75;
        // p5.strokeWeight(dim * 0.0075);
        // p5.noFill();

        // // draw the low frequency signal
        // p5.stroke("#E84420");
        // const drum = audioSignal(analyser_node, frequency_data, 10, 100);
        // p5.circle(cx, cy, radius * drum);

        // // draw the higher frequency signal
        // p5.stroke("#F4CD00");
        // const voice = audioSignal(analyser_node, frequency_data, 5000, 7000);
        // p5.circle(cx, cy, radius * voice);

        function musicCircle01(spectrum: Float32Array | Float32Array[], posX: number, poxY: number, maxR: number, minR: number, step: number) {

            // for (let i = 0; i < spectrum.length; i += step) {
            //     const amplitude = spectrum[i] as number;
            //     const rad = p5.map(i, 0, spectrum.length, 0, 2 * Math.PI);
            //     const l = p5.map(amplitude, 0, 255, minR, maxR);
            //     p5.line(posX + minR * Math.cos(rad), poxY + minR * Math.sin(rad), posX + l * Math.cos(rad), poxY + l * Math.sin(rad));
            //     // p5.vertex(rad, l);
            // }

            // p5.noFill();
            for (let i = 0; i < spectrum.length; i++) {
                let rad = p5.map(i, 0, spectrum.length, 0, width);
                let l = p5.map(spectrum[i] as number, 0, 255, minR, maxR);
                p5.vertex(posX + rad * Math.cos(rad), poxY + l * Math.sin(rad));
            }
        }

        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);

        p5.background(0, 0, 0, 255);

        p5.strokeWeight(dim * 0.01);
        p5.stroke(255, 255, 255, 255);
        p5.noFill();

        const spectrum = analyzer_tone.getValue();

        p5.beginShape();
        for (let i = 0; i < spectrum.length; i++) {
            let x = p5.map(i , 0, spectrum.length, 0, width);
            let y = p5.map(spectrum[i] as number, -1, 1, 0, 320);
            p5.vertex(x, y)
        }
        // musicCircle01(spectrum, width / 2, height / 2, height / 3, height / 8, 1);
        p5.endShape();

    }
)

const frequencyToIndex = (frequency_hz: number, sample_rate: number, frequency_bin_count: number) => {
    const ny_quist = sample_rate / 2;
    const index = Math.round((frequency_hz / ny_quist) * frequency_bin_count);
    return Math.min(frequency_bin_count, Math.max(0, index));
}