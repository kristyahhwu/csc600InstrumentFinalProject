import React from 'react';
import * as Tone from 'tone';
import img_guitar from '../img/guitar.jpg';


import { Instrument, InstrumentProps } from '../Instruments';

const Guitar: React.FC<InstrumentProps> = (props): JSX.Element => {
    return (
        <img src={img_guitar}></img>
    )
}

export const GuitarInstrument = new Instrument('Guitar', Guitar);