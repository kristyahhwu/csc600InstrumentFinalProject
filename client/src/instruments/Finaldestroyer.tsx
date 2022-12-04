// 3rd party library imports
import * as Tone from 'tone';
// import { Tone } from 'tone/build/esm/core/Tone';
// import { List } from 'immutable';
// import React from 'react';
// import { Howl } from "howler";

// import kalimba from '../img/Kalimba.jpg'
//Kalimba Keys
import Kalimba_Key1_D2 from '../img/Kalimba/Kalimba_Key1_D2.jpg'
import Kalimba_Key2_B7 from '../img/Kalimba/Kalimba_Key2_B7.jpg'
import Kalimba_Key3_G5 from '../img/Kalimba/Kalimba_Key3_G5.jpg'
import Kalimba_Key4_E3 from '../img/Kalimba/Kalimba_Key4_E3.jpg'
import Kalimba_Key5_C1 from '../img/Kalimba/Kalimba_Key5_C1.jpg'
import Kalimba_Key6_A6 from '../img/Kalimba/Kalimba_Key6_A6.jpg'
import Kalimba_Key7_F4 from '../img/Kalimba/Kalimba_Key7_F4.jpg'
import Kalimba_Key8_D2 from '../img/Kalimba/Kalimba_Key8_D2.jpg'
import Kalimba_Key9_C1 from '../img/Kalimba/Kalimba_Key9_C1.jpg'
import Kalimba_Key10_E3 from '../img/Kalimba/Kalimba_Key10_E3.jpg'
import Kalimba_Key11_G5 from '../img/Kalimba/Kalimba_Key11_G5.jpg'
import Kalimba_Key12_B7 from '../img/Kalimba/Kalimba_Key12_B7.jpg'
import Kalimba_Key13_D2 from '../img/Kalimba/Kalimba_Key13_D2.jpg'
import Kalimba_Key14_F4 from '../img/Kalimba/Kalimba_Key14_F4.jpg'
import Kalimba_Key15_A6 from '../img/Kalimba/Kalimba_Key15_A6.jpg'
import Kalimba_Key16_C1 from '../img/Kalimba/Kalimba_Key16_C1.jpg'
import Kalimba_Key17_E3 from '../img/Kalimba/Kalimba_Key17_E3.jpg'

// import A4 from '../Audio/KalimbaAudio/A4.wav'
// let A4 = require('../Audio/KalimbaAudio/A4.wav');

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
  
/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Kalimba.
 ** ------------------------------------------------------------------------ */

// interface KalimbaKeyProps {
//   note: string; // D, B, G, E, C, A, F, D, C, E, G, B, D, F, A, C, E
//   duration?: string;
//   synth?: Tone.Synth; // Contains library code for making sound
//   minor?: boolean; // True if minor key, false if major key
//   octave: number;
//   index: number; // octave + index together give a location for the Kalimba key
// }

// const [E6] = useSound('../Audio/KalimbaAudio/E6.wav');

function Kalimba({ synth, setSynth }: InstrumentProps): JSX.Element {
  // const keys = List([
  //   // D, B, G, E, C, A, F, D, C, E, G, B, D, F, A, C, E
  //   { note: 'D', idx: 0 },
  //   { note: 'B', idx: 1 },
  //   { note: 'G', idx: 2 },
  //   { note: 'E', idx: 3 },
  //   { note: 'C', idx: 4 },
  //   { note: 'A', idx: 5 },
  //   { note: 'F', idx: 6 },
  //   { note: 'D', idx: 7 },
  //   { note: 'C', idx: 8 },
  //   { note: 'E', idx: 9 },
  //   { note: 'G', idx: 10 },
  //   { note: 'B', idx: 11 },
  //   { note: 'D', idx: 12 },
  //   { note: 'F', idx: 13 },
  //   { note: 'A', idx: 14 },
  //   { note: 'c', idx: 15 },
  //   { note: 'E', idx: 16 },
  // ]);
  return (
    <div>
    {/* <img src = {kalimba} alt = "Kalimba" ></img> */}
    <img src = {Kalimba_Key1_D2} alt = "D2" ></img>
    <img src = {Kalimba_Key2_B7} alt = "B7" ></img>
    <img src = {Kalimba_Key3_G5} alt = "G5" ></img>
    <img src = {Kalimba_Key4_E3} alt = "E3" ></img>
    <img src = {Kalimba_Key5_C1} alt = "C1" ></img>
    <img src = {Kalimba_Key6_A6} alt = "A6" ></img>
    <img src = {Kalimba_Key7_F4} alt = "F4" ></img>
    <img src = {Kalimba_Key8_D2} alt = "D2" ></img>
    <img src = {Kalimba_Key9_C1} alt = "C1" ></img>
    <img src = {Kalimba_Key10_E3} alt = "E3" ></img>
    <img src = {Kalimba_Key11_G5} alt = "G5" ></img>
    <img src = {Kalimba_Key12_B7} alt = "B7" ></img>
    <img src = {Kalimba_Key13_D2} alt = "D2" ></img>
    <img src = {Kalimba_Key14_F4} alt = "F4" ></img>
    <img src = {Kalimba_Key15_A6} alt = "A6" ></img>
    <img src = {Kalimba_Key16_C1} alt = "C1" onClick={
                                                      ()=>{
                                                      console.log('../Audio/KalimbaAudio/C6.wav');
                                                      }}></img>
    <img src = {Kalimba_Key17_E3} alt = "E3" onClick={()=>{
                                                          // synth.triggerAttackRelease("E6","8n")
                                                          const player = new Tone.Player("../Audio/KalimbaAudio/E6.wav").toDestination();
                                                          player.autostart = true;
                                                      }}></img>
    </div>
);
}
export const KalimbaInstrument = new Instrument('Kalimba', Kalimba);


//    <button name='E6'>