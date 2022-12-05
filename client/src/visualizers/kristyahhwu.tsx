// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";

/**
 * Yinyin Wu
 *
 */

export const StarVisualizer = new Visualizer(
	"Star",
	(p5: P5, analyzer: Tone.Analyser) => {
		const width = window.innerWidth;
		const height = window.innerHeight / 2;
		const dim = Math.min(width, height);

		p5.background(0);
		p5.background(p5.color(0));
		p5.strokeWeight(dim * 0.008);
		p5.stroke(255, 255, 255, 255);
		p5.angleMode("degrees");

		p5.strokeWeight(dim * 0.008); // 蹦跶的线条粗细
		p5.textSize(50);
		p5.text("Holiday Season", width / 3.5, height / 4);
		// p5.stroke(255, 255, 255, 255);
		// const amplitude = values[i] as number;
		p5.stroke(255, 255, 255, 255);

		const values = analyzer.getValue();
		// const rad = (Math.PI * 2) / 500; // 图形大小

		// star extra
		p5.noFill();
		p5.translate(width / 15, height / 30);
		for (var t = -1; t <= 1; t += 2) {
			p5.beginShape();
			let lines = 0.01;
			for (var i = 0; i <= 80; i += 10) {
				var index = Math.floor(p5.map(i, 0, 80, 0, values.length - 1));
				const amplitude = values[index] as number;
				var r = p5.map(amplitude, -1, 1, 50, 350) / 1.5;

				var x = r * Math.sin(i);
				var y = r * Math.cos(i);
				p5.rotate(lines);
				p5.vertex(x, y);
			}
			lines += 0.1;
			p5.endShape();
		}

		// star 1
		p5.translate(width / 5, height / 2);
		p5.fill(0, 0, 0);
		for (var s = -1; s <= 1; s += 2) {
			p5.beginShape();
			let space = 0.01;
			for (var j = 0; j <= 80; j += 10) {
				var index1 = Math.floor(p5.map(j, 0, 80, 0, values.length - 1));
				const amplitude = values[index1] as number;
				var r2 = p5.map(amplitude, -1, 1, 50, 350) / 1.5;

				var x2 = r2 * Math.sin(j);
				var y2 = r2 * Math.cos(j);
				p5.rotate(space);
				p5.vertex(x2, y2);
			}
			space += 0.1;
			p5.endShape();
		}

		// star 2
		p5.translate(width / 3, height / 5);
		p5.fill(0, 0, 0);
		for (var u = -1; u <= 1; u += 2) {
			p5.beginShape();
			let space = 0.01;
			for (var k = 0; k <= 80; k += 10) {
				var index2 = Math.floor(p5.map(k, 0, 80, 0, values.length - 1));
				const amplitude = values[index2] as number;
				var r3 = p5.map(amplitude, -1, 1, 50, 350) / 1.5;

				var x3 = r3 * Math.sin(k);
				var y3 = r3 * Math.cos(k);
				p5.rotate(space);
				p5.vertex(x3, y3);
			}
			space += 0.1;
			p5.endShape();
		}
	}
);
