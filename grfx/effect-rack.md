# Effect Rack

<img src="/grfx/images/effect-rack.png" alt="Effect Rack" style="padding: 0px" />
<br>
<br>

**GRFX has 2 Multi-effect inserts, 2 Sends and a Mixer section**.

You can **control the probability of each grain entering the Multi-effect** section with the **Route parameter**. They will either go through the effects (route A) or directly to the mixer (route B). There are two linked Multi-effect slots which can be bypassed, along with 2 Sends, a Delay and a Reverb, **which can work in series or in parallel by toggling the Link button**. Each has independent route A and route B input gains.

In the mixer section you can control the volume of all signal paths plus the overall volume and the plug-in’s dry/wet amount.

**The Multi-effect and Send panels have a BYPASS button on the top right which will disable the effect and let the clean signal pass**.

### FX 1 & 2

The FX slots can have the following effects:

#### Filter

A Multi-mode filter with 6 different modes.

- **Cutoff** - Filter cutoff frequency.
- **Resonance** - Resonance or Q factor of the filter; creates a resonant peak at the cutoff frequency.
- **Mode** - Filter Mode.
  - **Lowpass** - A low-pass filter allows low frequency content to pass through, cutting high frequency content.
  - **Bandpass** - A band-pass filter allows only a restricted frequency band to pass through, attenuating frequencies above and below.
  - **Highpass** - A high-pass filter allows high frequency content to pass through, attenuating low frequency content.
  - **Notch** - A notch filter is a filter that cuts a very restricted band of frequencies. The Q factor designates how narrow the band is. Can be used to achieve a phaser-like effect, especially.
  - **Peak** - A peak filter amplifies a frequency band with the resonance determining the amplification amount, creating a resonant peak at high values.

#### Distortion

This is a distortion device that can alter the sound from subtle amplification gain saturation to clipping and fuzz effects.

- **Drive** - Pre distortion input gain.
- **Output** - Post distortion output volume control.
- **Type** - Distortion type.
  - **Sat** - Classic saturation.
  - **Fold** - Saturated wavefolding; a mix of saturation and sinusoidal wavefolding.
  - **Fuzz** - Extreme gain and hard clipping for a harsh distortion effect.
  - **Nock** - Asymmetrical waveshaping that introduces discontinuities in the crest for a very noisy sound.
- **Pre HP** - Pre distortion highpass filter frequency. Reduces low frequency content prior to distorting.
- **Post LP** - Post distortion lowpass filter frequency. Reduces high frequency harmonics introduced by the distortion.
- **Dry/Wet** - Mix between the unprocessed and processed signals.

#### Delay

A virtual stereo tape delay. This delay has tape emulation controls, a custom filter and stereo parameters.

- **Time** - Delay tie between the repetitions of the signal.
- **Filter** - A lowpass and highpass filter control. For negative values, it cuts the high frequency harmonics, while positive values cut the low end.
- **Feedback** - Amount of the output signal fed back into the circuit.
- **Sync** - Synchronize the delay time of the host's tempo.
- **Stereo** - Amount of pan separation between the left and right signals of the output.
- **Dry/Wet** - Mix between the unprocessed and processed signals.

#### EQ

Two peak filters with controllable cutoff frequency, gain and Q factor.

- **Gain 1** - Amplification/attenuation control of the first frequency band.
- **Freq 1** - Cutoff frequency of the filter; determines the centre of the first frequency band.
- **Q 1** - Q factor; controls the width of the second frequency band.
- **Gain 2** - Amplification/attenuation control of the second frequency band.
- **Freq 2** - Cutoff frequency of the filter; determines the centre of the second frequency band.
- **Q 2** - Q factor; controls the width of the second frequency band.

#### Chorus

The chorus effect simulates the subtle pitch and timing differences that occur when multiple musicians or vocalists play the same note, but vary slightly in pitch and timing. This is a stereo chorus, widening the stereo image of the input signal.

- **Rate** - Frequency of the modulations.
- **Time** - Delay of the modulated signal.
- **Depth** - Modulation amount.
- **Feedback** - Amount of signal to be fed back into the circuit.
- **Mode** - Switch between the different algorithms.
  - **ANA** - Analog.
  - **DIM** - Dimension.
- **Dry/Wet** - Mix between the unprocessed and processed signals.

#### Phaser

A phaser introduces a comb filter-like effect by creating a series of notches in the frequency spectrum around a center frequency. This center frequency is modulated by a controllable LFO.

- **Centre** - Centre frequency of the phaser; notches are grouped around this point.
- **Rate** - Modulation rate.
- **Depth** - Modulation depth of the notch frequencies.
- **Spread** - Control the distance between the notches.
- **Feedback** - Amount of signal to be fed back into the circuit.
- **Dry/Wet** - Mix between the unprocessed and processed signals.

#### Bitcrusher

Degrade the audio bit depth and sample rate, introducing audible quantization error artifacts.

- **Bits** - Audio bit depth.
- **Sample Rate** - Audio sample rate.
- **Dry/Wet** - Mix between the unprocessed and processed signals.

#### Reverb

This is a reverb effect that can recreate different acoustic spaces from small rooms to long halls.

- **Input HP** - Cutoff frequency of the highpass filter affecting the input signal.
- **Shape** Vary between small and large room reflections.
- **Decay** - Decay rate of the reflections.
- **Pre-Delay** - TIme between the sound source and the arrival of the first reflections.

### Sends 1 & 2

<img src="/grfx/images/sends.png" width=350 alt="Sends" style="padding: 0px" />
<br>
<br>

Sends have the same delay and reverb engines as the ones of the FX section with two additional knobs.

- **In B** - Amount of B signal (grains without FX) input.
- **In A** - Amount of A signal (grains with FX) input.

**The first send has a LINK button which, when enabled, will make both sends work in series**.

In this mode, you can only route the signal to the first send, which will then pass to the second send. This allows processing the signal with both delay and reverb. **When LINK is disabled, both sends are processed independently**.

### Mixer

In the mixer panel you can adjust the volumes of the various audio signals for full control of the output.

- **A** - Volume of the route A signal (grains processed by Multi-effect chain).
- **B** - Volume of the route B signal (unprocessed grains).
- **Volume** - Overall output volume.
- **Return 1** - Volume of the Delay return signal.
- **Return 2** - Volume of the Reverb return signal.
- **Dry/Wet** - Mix between the unprocessed input and the plugin signal.

The mixer also features a meter in the bottom to monitor the output level of the plugin.

<img src="/grfx/images/output-meter.png" alt="Output Meter" style="padding: 0px" />

<br>
<br>

Previous: [Modulator Rack](modulator-rack)

Next: [Patch Management](patch-management)
