# TV-303 Help - Parameters

The rightmost side of the interface shows the basic controls laid out vertically. The remainder of the parameters can be accessed through the **Advanced** button at the very bottom.

#### **BASIC VIEW**

- **Cutoff** - The cutoff frequency for the main filter. As in the original machine, this parameter reaches up to 1200Hz. However, the cutoff point can be pushed further when modulated by the envelope (see Env. Mod).

- **Resonance** - The amount of filter resonance. Forms a resonant peak on top of the cutoff frequency.

- **Env. Mod** - Amount of envelope modulation applied to the filter cutoff. 

- **Decay** - Decay time of the main envelope. This envelope is fully responsible for the filter modulation, but only factors lightly into the amplitude envelope.

- **Drive** - Pre-distortion signal gain. Adjust for harsher or lighter distortion.

- **Dry/Wet** - The dry/wet balance between the original and the distorted signal.

#### **ADVANCED**

If the **Advanced** option is toggled, additional controls can be accessed from the **TV**.

##### **Osc**

- **Waveform** - Pick between a square or sawtooth waveform for the main oscillator.

- **Tuning** - Fine tune both the main and sub oscillators between -1200 and +1200 cents.

- **Accent** - Amount of volume gain and added frequency modulation for notes with accent. Accent is applied to all notes with a velocity value above 100.

##### **Sub**

The sub oscillator plays alongside the main oscillator, transposed minus one octave.

- **Waveform** - Pick between a square or sawtooth waveform for the sub oscillator.

- **Volume** - Volume of the sub oscillator.

##### **Distortion**

The distortion stage is introduced after the filtering.

- **Type** - Pick distortion mode among four different available waveshaping types:
    - **SAT** - Classic saturation waveshaping.
    - **CLIP** - Hard clipping.
    - **NOCK** - Asymmetrical waveshaping that introduces small discontinuities in the crest for a noisy sound.
    - **FOLD** - Sinusoidal wavefolding.

- **Highpass** - Pre-distortion highpass filter. Gradually attenuates the fundamental and first harmonic of the oscillator output.

[Previous: Overview](overview)
[Next: Sequence Generation](sequence-generation)
