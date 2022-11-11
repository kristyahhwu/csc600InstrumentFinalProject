import React from 'react';
import * as Tone from 'tone';


import { Instrument, InstrumentProps } from '../Instruments';

const Guitar: React.FC<InstrumentProps> = (props): JSX.Element => {
    return (
        <button>Click</button>
    )
}

export const GuitarInstrument = new Instrument('Guitar', Guitar);