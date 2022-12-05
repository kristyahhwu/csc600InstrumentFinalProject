// 3rd party library imports
<<<<<<< HEAD
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
=======
// import * as Tone from 'tone';
// import classNames from 'classnames';
// import { List } from 'immutable';
>>>>>>> origin/Japheth
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import drums from '../img/drums.jpg'

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

<<<<<<< HEAD
interface PianoKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  label?: string; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function PianoKey({
  note,
  synth,
  label,
  index,
}: PianoKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.

    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        // 'bg-black black h3': minor, // minor keys are black
        'bg-black white h3': label, // minor keys are black
        'black bg-white h4': !label, // major keys are white
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: label ? 1 : 0,
        width: label ? '4rem' : '4rem',
        marginLeft: label ? '0.25rem' : 0,
        height: 70,
        padding:'1rem',
        margin:'3rem',
        borderRadius: 30,
        borderColor:'red',
      }}
    ></div>
  );
=======
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
>>>>>>> origin/Japheth
}

// eslint-disable-next-line
function PianoKeyWithoutJSX({
  note,
  synth,
  label,
  index,
}: PianoKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': label,
        'black bg-white h4': !label,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: label ? 1 : 0,
        width: label ? '1.5rem' : '2rem',
        marginLeft: label ? '0.25rem' : 0,
      },
    },
    [],
  );
}

//wave types
function PianoType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function Drum({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },

    { note: 'F', idx: 2 },

    { note: 'B', idx: 4 },
    
    { note: 'B', idx: 6 },
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4">
        {Range(2, 7).map(octave =>
          keys.map(key => {
           
            const note = `${key.note}${octave}`;
            return (
              <PianoKey
                key={note} //react key
                note={note}
                synth={synth}
               label = {key.note}
                octave={octave}
                index={ key.idx}
              />
            );
          }),
        )}
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <PianoType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
        <img src = {drums} alt = "drums"></img>
      </div>
    </div>
  );
}

export const DrumInstrument = new Instrument('Drum', Drum);
