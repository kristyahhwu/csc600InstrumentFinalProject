import React from 'react';
import * as Tone from 'tone';
import img_guitar from '../img/guitar.jpg';
import img_guitar_strings from '../img/guitar_strings.png';


import { Instrument, InstrumentProps } from '../Instruments';

const Guitar: React.FC<InstrumentProps> = (props): JSX.Element => {
    return (
        <img src={img_guitar_strings}></img>
    )
}

export const GuitarInstrument = new Instrument('Guitar', Guitar);