// 3rd party library imports
// import * as Tone from 'tone';
// import classNames from 'classnames';
// import { List } from 'immutable';
import React from 'react';
import drums from '../img/drums.jpg'

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

// interface DrumsKeyProps {
//   note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
//   duration?: string;
//   synth?: Tone.Synth; // Contains library code for making sound
//   minor?: boolean; // True if minor key, false if major key
//   octave: number;
//   index: number; // octave + index together give a location for the piano key
// }
function Drums({ synth, setSynth }: InstrumentProps): JSX.Element {
  // const keys = List([
  // ]);   
      return (
        <div>
          <img src = {drums} alt = "drums"></img>
        </div>
      );
}


export const DrumInstrument = new Instrument('Drums', Drums);
