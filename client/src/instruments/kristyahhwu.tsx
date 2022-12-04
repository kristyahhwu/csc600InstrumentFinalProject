// 3rd party library imports
// import * as Tone from 'tone';
// import classNames from 'classnames';
// import { List } from 'immutable';
import React from 'react';
import trumpet from '../img/trumpet.jpg'

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Trumpet.
 ** ------------------------------------------------------------------------ */
// interface TrumpetKeyProps {
//     note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
//     duration?: string;
//     synth?: Tone.Synth; // Contains library code for making sound
//     index: number; // octave + index together give a location for the piano key
//   }

function Trumpet({ synth, setSynth }: InstrumentProps): JSX.Element {
    // const keys = List([
    // ]);   
        return (
            <div className = "instrument-trumpet">Hello Trumpet
            <img src = {trumpet} alt = "trumpet"></img>
            </div>
        );
}

export const TrumpetInstrument = new Instrument('Trumpet', Trumpet);