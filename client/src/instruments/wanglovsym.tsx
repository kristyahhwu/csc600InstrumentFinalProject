import React, { useState } from 'react';
import * as Tone from 'tone';
import { List, Range } from 'immutable';
import img_guitar from '../img/guitar.jpg';
import img_guitar_strings from '../img/guitar_strings_6String.png';


import { Instrument, InstrumentProps } from '../Instruments';

interface GuitarKeyProps {
    note: string;
    synth?: Tone.Synth;
}

const Guitar: React.FC<InstrumentProps> = ({ synth, setSynth }): JSX.Element => {
    // sound of 6 keys in guitar.
    const guitar_keys: GuitarKeyProps[] = [
        { note: 'C4' },
        { note: 'B4' },
        { note: 'G4' },
        { note: 'C5' },
        { note: 'E5' },
        { note: 'G5' },
    ]

    return (
        <div>
            <div style={{width: "100%"}}><img src={img_guitar_strings} style={{ maxHeight: "300px" }} /></div>
            {guitar_keys.map((item, index) => {
                return (
                    <button
                        onMouseDown={() => synth?.triggerAttack(`${item.note}`)}
                        onMouseUp={() => synth?.triggerRelease(`+0.25`)}
                        style={{
                            height: "50px",
                            width: "50px",
                            marginRight: "10px",
                        }}
                    >
                        {item.note}
                    </button>
                )
            })}
        </div>

    )
}

export const GuitarInstrument = new Instrument('Guitar', Guitar);