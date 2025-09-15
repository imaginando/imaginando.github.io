# Parameters

The rightmost side of the interface shows the basic controls laid out
vertically. The remainder of the parameters can be accessed through the
**Advanced** button on the **TV**.

## **BASIC VIEW**

- **Cutoff** - Cutoff frequency for the main filter. The cutoff point
  can be pushed further when affected by an **accent** or modulated by
  the envelope (see **Env. Mod**).

- **Resonance** - Amount of filter resonance. Forms a resonant peak on
  top of the cutoff frequency.

- **Accent** - Amount of volume boost and added frequency modulation
  for notes with accent. Accent is applied to all notes with a velocity
  value above 100. In addition, accent forces the decay time to minimum.

- **Env. Mod** - Amount of envelope modulation applied to the filter
  cutoff.

- **Decay** - Decay time of the primary envelope. This envelope is fully
  responsible for the filter modulation, but factors only lightly into the
  amplitude envelope.

- **Drive** - Pre-distortion signal gain. Adjust for harsher or softer
  distortion.

- **Dry/Wet** - The dry/wet balance of the original and the distorted
  signal.

## **ADVANCED**

<img src="/tv3/images/parameters-advanced.png" width="600" alt="TV3 Parameters Advanced" style="padding: 0px" />

<br>

When the **Advanced** option is toggled, additional controls become
available within the **TV**.

### **Osc**

- **Waveform** - Select between a square or sawtooth waveform for the
  main oscillator.

- **Tune** - Fine-tune both the main and sub oscillators within a range of
  -1200 and +1200 cents.

### **Sub**

The sub oscillator plays on octave below the main oscillator.

- **Waveform** - Select between a square or sawtooth waveform for the sub
  oscillator.

- **Volume** - Volume of the sub oscillator.

### **Distortion**

The distortion stage is applied after the main filter.

- **Type** - Choose from four different distortion types:

  - **SAT** - Classic saturation.
  - **FOLD** - Saturated wavefolding; a mix of saturation and sinusoidal
    wavefolding.
  - **FUZZ** - Extreme gain and hard clipping for a harsh distortion
    effect.
  - **NOCK** - Asymmetrical waveshaping that introduces discontinuities
    in the crest for a very noisy sound.

- **Highpass** - Pre-distortion highpass filter for attenuating the
  fundamental and first few harmonics of the notes.

### **Broadcast**

The **Broadcast** parameter toggles the video broadcast of the **TV**.
Deactivate to disable the video.

<br>

[Previous: Patch Manager](patch-manager)

[Next: Sequence Generation](sequence-generation)
