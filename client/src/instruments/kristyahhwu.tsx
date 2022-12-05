// 3rd party library imports
import * as Tone from 'tone';
// import classNames from 'classnames';
// import { List, Range } from 'immutable';
import React,{ useState, useEffect} from 'react';


// project imports
import { Instrument } from '../Instruments';
import T1 from "../img/T1.png";
import T2 from "../img/T2.png";
import T3 from "../img/T3.png";
import TEnd from "../img/TEnd.png";
import THead from "../img/THead.png";


// reference
// https://tonejs.github.io/examples/sampler

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Trumpet.
 ** ------------------------------------------------------------------------ */

function Trumpet(): JSX.Element {

    // store all the sound
    const sampler = new Tone.Sampler({
        urls:{
            C6: "TC6.mp3",
            C4: "TC4.mp3",
            G3: "TG3.mp3",
            G5: "TG5.mp3",
        },
        baseUrl: "http://localhost:3000/",
    }).toDestination();

    return (
        <div className = "trumpet-container" style={{ marginLeft: "1rem"}}>
            <img
                className="left"
                onMouseDown={() => {
                    sampler.triggerAttackRelease("C4", "1n");
                    console.log("left clicked")
                }}
                src={THead}
                alt="left"
            />

            <img
                className="note-1"
                onMouseDown={() => {
                    sampler.triggerAttackRelease("C6", "1n");
                    console.log("clicked 1st")
                }}
                src={T1}
                alt="note-1"
            />

            {/* Works note2 and 3 */}
            <img
                className="note-2"
                onMouseDown={() => {
                    sampler.triggerAttackRelease("G3", "1n");
                    console.log("T2 clicked")
            }}
                src={T2}
                alt="note-2"
            />

            <img
                className="note-3"
                onMouseDown={() => {
                    sampler.triggerAttackRelease("G5", "1n");
                    console.log("T3 clicked")
                }}
                src={T3}
                alt="note-3"
            />

            <img
                className="right"
                src={TEnd}
                alt="right"
            />
            </div>
        );
}

export const TrumpetInstrument = new Instrument('Trumpet', Trumpet);