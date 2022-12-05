// 3rd party
import { List, Map } from "immutable";

// Instruments
import { KalimbaInstrument } from "./instruments/Finaldestroyer";
import { PianoInstrument } from "./instruments/Piano";
import { GuitarInstrument } from "./instruments/wanglovsym";
import { DrumInstrument } from "./instruments/Salvatim007";

// Visualizer
import { RainbowVisualizer } from "./visualizers/Finaldestroyer";
import { WaveformVisualizer } from "./visualizers/Waveform";
import { TrumpetInstrument } from "./instruments/kristyahhwu";
import { StarVisualizer } from "./visualizers/kristyahhwu";
import { histogramVisualizer } from "./visualizers/wanglovesym";

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
	histogramVisualizer,
	RainbowVisualizer,
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
