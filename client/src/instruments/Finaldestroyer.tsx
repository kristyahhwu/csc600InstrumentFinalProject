// 3rd party library imports
import * as Tone from 'tone';
import { List, Range } from 'immutable';
import React from 'react';
import kalimba from '../img/Kalimba.jpg'


// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Kalimba.
 ** ------------------------------------------------------------------------ */

interface KalimbaKeyProps {
  note: string; // D, B, G, E, C, A, F, D, C, E, G, B, D, F, A, C, E
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the Kalimba key
}


function Kalimba({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    // D, B, G, E, C, A, F, D, C, E, G, B, D, F, A, C, E
    { note: 'D', idx: 0 },
    { note: 'B', idx: 1 },
    { note: 'G', idx: 2 },
    { note: 'E', idx: 3 },
    { note: 'C', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'F', idx: 6 },
    { note: 'D', idx: 7 },
    { note: 'C', idx: 8 },
    { note: 'E', idx: 9 },
    { note: 'G', idx: 10 },
    { note: 'B', idx: 11 },
    { note: 'D', idx: 12 },
    { note: 'F', idx: 13 },
    { note: 'A', idx: 14 },
    { note: 'c', idx: 15 },
    { note: 'E', idx: 16 },
  ]);
  return (
    <div>
    <img src = {kalimba} alt = "Kalimba"></img>
    </div>
);
}
export const KalimbaInstrument = new Instrument('Kalimba', Kalimba);
