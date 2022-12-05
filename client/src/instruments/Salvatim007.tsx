// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
//img
import drum_img from '../img/drum_img.jpg';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface TomDrumProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  topDrum?: boolean;
  octave: number;
  index: number; // octave + index together give a location for the piano key
}
export function TomDrum({
  note,
  synth,
  topDrum,
  index,
}: TomDrumProps): JSX.Element {
  return (
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.45')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim gray', {
        // 'bg-black black h3': minor, // minor keys are black
        'bg-black white h3': topDrum, // minor keys are black
        'black bg-white h4 mt5': !topDrum, // major keys are white
      })}
      style={{
        // CSS
        justifyContent: 'center',
        top: 0,
        left: `${index * 2}rem`,
        width: '6rem',
        borderRadius:'50%',
        height: '4rem',
        marginTop: topDrum ? '6rem' : 0,
        opacity:'10%',
      }}
    ></div>
  );
}

function Drum({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: '2G', idx: -4.5 ,octave: 2, topDrum: true},//BL
    { note: '2D', idx: 2 ,octave: 3, topDrum: true},//BR
    { note: '3D', idx: -3.5 ,octave: 2, topDrum: false},//TL
    { note: '2B', idx: 1.25 ,octave: 2, topDrum: false},//TR
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
    <div className="flex-row" >
      <div className="flex " style={{
        
      justifyContent: 'center',
      }}>
      <img src = {drum_img} alt = "drums" style={{
      width: '30rem',
      height: '12rem',
      }}></img>
      <div className="top_drums absolute">
      {
          keys.map(key => {
            const isTopDrum = key.topDrum;
            const note = `${key.note}${key.octave}`;
            return (
              <TomDrum
                key={note} //react key
                note={note}
                synth={synth}
                topDrum={isTopDrum}
                octave={key.octave}
                index={  key.idx}
              />
            );
          })
        }

      </div>
      <div className="bottom_drums">

      </div>


      </div>


      <div className={'pl4 pt4 flex'}>
      </div>

    </div>//END
    
  );
}

export const DrumInstrument = new Instrument('Drum', Drum);
