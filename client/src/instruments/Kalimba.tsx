// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

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

export function KalimbaKey({
  note,
  synth,
  minor,
  index,
}: KalimbaKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the Kalimba.
   * See `KalimbaKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div>
      <img src ={"./img/Kalimba.jpg"} alt="Kalimba" />
    </div>
  );
}

// eslint-disable-next-line
function KalimbaKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: KalimbaKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `KalimbaKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'img',
    {
      src: "./img/Kalimba.jpg"
    },
    [],
  );
}

function KalimbaType({ title, onClick, active }: any): JSX.Element {
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
            const isMinor = key.note.indexOf('b') !== -1; 
            const note = `${key.note}${octave}`;
            return (
              <KalimbaKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          }),
        )}
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <KalimbaType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  );
}

export const KalimbaInstrument = new Instrument('Kalimba', Kalimba);
