// 3rd party library imports
import * as Tone from 'tone';
// import classNames from 'classnames';
// import { List, Range } from 'immutable';
// import React,{ useState, useEffect} from 'react';


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
                    sampler.triggerAttackRelease("C6", "10n");
                    console.log("dont click")
                }}
                src={THead}
                alt="left"
            />

            <img
                className="note-1"
                onClick={() => {
                    sampler.triggerAttackRelease("C6", "10n");
                    console.log("clicked 1st")
                }}
                src={T1}
                alt="note-1"
            />

            <img
                className="note-2"
                onClick={() => {
                    sampler.triggerAttackRelease("G3", "10n");
                    console.log("clicked 2nd")
            }}
                src={T2}
                alt="note-2"
            />

            <img
                className="note-3"
                onClick={() => {
                    sampler.triggerAttackRelease("G5", "10n");
                    console.log("clicked 3rd")
                }}
                src={T3}
                alt="note-3"
            />

            <img
                className="right"
                onMouseDown={() => {
                    sampler.triggerAttackRelease("C6", "10n");
                    console.log("dont click")
                }}
                src={TEnd}
                alt="right"
            />
            </div>
        );
}

export const TrumpetInstrument = new Instrument('Trumpet', Trumpet);