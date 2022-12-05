// 3rd party
import { List, Map } from "immutable";

// Instruments
import { KalimbaInstrument } from "./instruments/Finaldestroyer";
import { PianoInstrument } from "./instruments/Piano";
import { GuitarInstrument } from "./instruments/wanglovsym";
import { DrumInstrument } from "./instruments/Salvatim007";
import { TrumpetInstrument } from "./instruments/kristyahhwu";

// Visualizer
import { RainbowVisualizer } from "./visualizers/Finaldestroyer";
import { WaveformVisualizer } from "./visualizers/Waveform";
import { StarVisualizer } from "./visualizers/kristyahhwu";
import { BoomVisualizer } from "./visualizers/wanglovesym";
import { ElectricVisualizer } from "./visualizers/Salvatim007";

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>; // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([
	PianoInstrument,
	TrumpetInstrument,
	GuitarInstrument,
	KalimbaInstrument,
	DrumInstrument,
]); // similar to Instrument[]
/**
 * Start with the default waveform visualizer.`
 * Add your visualizers to this list.
 */
const visualizers = List([
	WaveformVisualizer,
	StarVisualizer,
	BoomVisualizer,
	RainbowVisualizer,
	ElectricVisualizer,
]); // similar to Visualizer[]

/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
	instruments: instruments,
	visualizers: visualizers,
});
