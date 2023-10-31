# FX devices

## FILTER

<img src="/bam/images/fx-devices/fx-filter-device.png" width="350" alt="BAM Filter FX Device" />

A Multi-mode filter with 6 different modes: LP24 (24dB per octave,
4-pole low-pass ladder filter), LP (12db per octave, low-pass resonant
filter), BP (12db per octave, band-pass resonant filter), HP (12db per
octave, High-pass resonant filter), Notch (band reject filter with
controllable bandwidth), Peak (Band pass filter with controllable
bandwidth)

- **CUTOFF** - filter frequency after which the filter rolls off and stops affecting the signal
- **RESON** - The RESON or resonance of the filter occurs when the output from the filter is fed back to the input internally (with some caveats), creating a peak at the cutoff frequency. The RESON knob controls the amount of resonance you create this way. It is used to make the filter more aggressive.
- **MODE** - This button allows you to switch between all the different FILTER Modes. Filter types available are: L4P, L2P, B2P, H2P, NOTCH. These were described above

## 3-BAND EQ

<img src="/bam/images/fx-devices/fx-3-band-eq-device.png" width="400" alt="BAM 3-band EQ FX device" />

A three-band equalizer with controllable bandwidth parameters, ideal as a frequency band cut or frequency band isolator.

- **LOW** - controls the gain for the frequencies below the LM CROSSover
- **MEDIUM** - controls the gain of the frequencies between the LM and HM CROSSover frequencies
- **HIGH** - controls the gain of the frequencies above MH CROSSover
- **LM CROSS** - defines crossover of the filters between the low frequencies and the medium frequencies
- **MH CROSS** - defines the crossover frequencies between the medium frequencies and the high frequencies

## PARAMETRIC EQ

<img src="/bam/images/fx-devices/fx-parametric-eq-device.png" width="650" alt="BAM Parametric EQ FX device" />

This is a full parametric equalizer with low and high shelves control and three more bands with dedicated frequency and Q factor parameters.

### L SHELF

- **CUT LS** - defines the cutoff frequency for the lower shelf filter
- **GAIN LS** - controls the gain for the low shelf filter

### PEAK

- **CUT 1** - defines the bandwidth range of frequencies for the first peak filter situated between the low shelf CUT LS and the frequency of CUT 1
- **GAIN 1** - controls the gain for the frequency range between the frequencies of the CUT LS and the CUT 1
- **Q1** - this control changes the Q factor of the first peak filter which defines the bandwidth in which the filter operates. The bigger the Q factor the more frequencies will be affected by the filter
- **CUT 2** - defines the bandwidth range of frequencies for the second peak filter situated between the low shelf CUT 1 and the frequency of CUT 2
- **GAIN 2** - controls the gain for the frequency range between the frequencies of the CUT 1 and the CUT 2
- **Q2** - this control changes the Q factor of the second peak filter which defines the bandwidth in which the filter operates. The bigger the Q factor the more frequencies will be affected by the filter
- **CUT 3** - defines the bandwidth range of frequencies for the second peak filter situated between the low shelf CUT 2 and the frequency of CUT HS
- **GAIN 3** - controls the gain for the frequency range between the frequencies of the CUT 2 and the CUT HS
- **Q3** - this control changes the Q factor of the third peak filter which defines the bandwidth in which the filter operates. The bigger the Q factor the more frequencies will be affected by the filter.

### H SHELF

- **CUT HS** - defines the cutoff frequency for the lower shelf filter
- **GAIN HS** - controls the gain for the low shelf filter

## CHORUS

<img src="/bam/images/fx-devices/fx-chorus-device.png" width="500" alt="BAM Chorus FX device" />

Stereo chorus effect (it converts mono signals to stereo) with two different algorithms. The CHORUS is supposed to simulate the subtle pitch and timing differences that occur when multiple musicians or vocalists play the same note, but vary slightly in pitch and timing.

- **RATE** - frequency of the modulations happening inside the CHORUS algorithm
- **TIME** - delay of the modulated signal inside the CHORUS effect
- **DEPTH** - amount of modulation of the signal in the CHORUS
- **SPREAD** - amount of stereo widening effect produced by the CHORUS effect
- **FEEDBACK** - amount of signal that is fed back into the circuit to be processed again. This results in a more intense result of the effect.
- **DRY/WET** - controls the relationship between the DRY clean signal and the WET processed signal
- **MODE** - Switch between two different CHORUS algorithms; ANA o DIM

## BIT REDUCTION

<img src="/bam/images/fx-devices/fx-bit-reduction-device.png" width="175" alt="BAM Bit Reduction FX Device" />

An FX unit for reducing the number of bits used to reproduce an audio
signal therefore degrading it.

- **DEPTH** - controls the BIT depth of the resulting signal
- **DRY/WET** - controls the relationship between the DRY clean signal and the WET processed signal

## STEREO ENHANCER

<img src="/bam/images/fx-devices/fx-stereo-enhancer-device.png" width="500" alt="BAM Stereo Enhancer FX Device" />

With this device you can change the apparent width and stereo position
of stereo signals, for mono signals you can only control the position of
the signal on the stereo.

It also allows you to control two different frequency bands where you
can alter the width of those bands by means of manipulating its audio
phase. It only works on stereo signals.

- **L WIDTH** - controls the stereo width of the signal below the crossover frequency
- **H WIDTH** - controls the stereo width of the signal above the crossover frequency
- **CROSSOVER** - frequency which divides the two stereo frequency ranges for stereo processing
- **PAN ON** - enables PAN and PAN WIDTH controls
- **PAN** - controls the position of the signal in the stereo field
- **PAN WIDTH** - controls the stereo width of the signal

## DELAY

<img src="/bam/images/fx-devices/fx-delay-device.png" width="500" alt="BAM Delay FX Device" />

A virtual stereo tape Delay machine FX. This Delay has tape emulation
controls, a custom controllable filter and stereo parameters.

- **TIME** - delay time for the first repetition of the signal
- **SYNC** - synchronize the time of the delay with multiples of the tempo´s time
- **FEEDBACK** - number of delay repetitions. This is done by feeding back the output signal back to the beginning of the circuit.
- **PING PONG** - enables PING-PONG mode, where the delay bounces back and forth between the left and right channels
- **FREQUENCY**- is the amount of output signal that is fed back into the beginning of the circuit resulting in this case in more delay repetitions.
- **BAND** - controls the cutoff frequency for the low pass filter of the output of the delay
- **SPREAD** - controls the amount of delay inserted on the right side of the filter after the initial delay
- **STEREO WIDTH** - controls the amount of pan separation between the left and right signals of the output
- **FLUTTER** - this parameter controls the amount of a fast frequency modulation generated on the playback speed of a tape flowing in a tape machine.
- **WOW** - controls the amount of variation in the playback speed of the tape machine generated by the slow variation of playback speed created in the tape machine
- **DRY/WET** - controls the relationship between the DRY clean signal and the WET processed signal

## REVERB

<img src="/bam/images/fx-devices/fx-reverb-device.png" width="650" alt="BAM Reverb FX device" />

This is Reverb FX in which you can recreate different acoustic spaces
from small rooms to long halls.

### INPUT

- **INPUT HP** - frequency cutoff of the input filter of the reverb. The reverb will only be generated for frequencies above this value.

### REFLECTIONS

- **EARLY** - amount of signal generated by the first reflections simulations of the reverb
- **SHAPE** - defines the size and type of reverb in the simulation
- **PRE-DELAY** - controls the distance between the sound source and the first reflection of the reverb.

### DIFFUSION

- **M.DEPTH** - controls the amount of frequency modulation between the reflections on the reverb
- **DECAY** - defines how fast the reverb decays from maximum to silence
- **M.RATE** - controls the frequency of the modulation between the reflections of the reverb

### DAMPING

- **L.DAMP** - controls the dampening of the reflections happening below the L.FREQ frequency
- **H.DAMP** - controls the dampening of the reflections happening above the L.FREQ frequency
- **L.FREQ** - frequency cutoff for the low frequency damper
- **H.FREQ** - frequency cutoff for the high frequency damper

### MASTER

- **DRY/WET** - controls the relationship between the DRY clean signal and the WET processed signal

## COMPRESSOR

<img src="/bam/images/fx-devices/fx-compressor-device.png" width="650" alt="BAM Compressor FX Device" />

A flexible and versatile compressor with side-chain capabilities, suitable for controlling audio with fast transients and managing perceived loudness.

The compressor is an audio effect designed to control the dynamics of an audio signal in real time

- **THRESHOLD** - this controls the level at which the compressor starts affecting the signal
- **RATIO** - this value is the proportion between the input signal level and the output compressed signal
- **ATTACK** - this is the time it takes for the compressor to start compressing after the signal goes above the THRESHOLD level
- **RELEASE** - this is the time it takes for the compressor to stop compressing after the signal goes below the THRESHOLD level
- **MODE** - change between feedback or feedforward compression algorithms. In the feedback compression the audio signal is fed into the sidechain just after the gain reduction element. This compressor also reacts to the signal after it has already been compressed meaning that with time the compression level decreases since the signal analysis is already compressed. In the feedforward compression the audio signal is fed before the compression so it is basically compressing based on the original signal.
- **STYLE** - this parameter controls the speed of the envelope of the compressors reaction time to the signal.. This means that this envelope can make the compression snappier or rounder independent of the attack or release times. The smaller the STYLE value the more subject to ripples and distortion the signal is. With high STYLE values you get a more musical behavior at the expense of snappiness and control.

### SIDE CHAIN

- **SC SOURCE** - source for the compressors analysis signal (SIDE-CHAIN). This will be the signal that will be used to trigger the threshold of the compressor
- **SC GAIN** - this controls the volume of the compressors analysis signal
- **SC HP** - toggle the SIDE-CHAIN high-pass filter on or off
- **SC HP CUTOFF** - control the cutoff frequency for the high-pass filter on the SIDE-CHAIN signal

### MASTER

- **MAKEUP** - volume control of the output signal. Normally used to rebalance the amplitude of the signal after the compression.
- **DRY/WET** - control the balance between the DRY normal signal and the WET compressed signal, also known as parallel or New York style compression.

## DISTORTION

<img src="/bam/images/fx-devices/fx-distortion-device.png" width="800" alt="BAM Distortion FX device" />

This is a distortion device which can alter the sound from subtle
amplification gain saturation to clipping and fuzz effects.

### INPUT

- **HP** - cutoff frequency for the input´s signal high-pass filter.

- **MODE** - toggle between processing the signal in stereo mode or MS (MID-SIDE) mode. In the MID-SIDE mode, instead of having a left and right signal to process, we have a mid mono signal and a SIDE mono signal in which positive and negative values are split into left and right signals and summed with the MID signal to create the full stereo signal. This allows for the processing of only the mono or stereo parts of the sound.
- **IN LINK** - toggle between processing the two channels independently or simultaneously
- **IN L** - Input level for channel Left or MID
- **IN R** - Input level for the channel Right or SIDE

### DISTORTION

- **BIAS** - this parameter affects the distortion by increasing the gain, compression and harmonic content of the distortion the higher it is its value.
- **MODE A** - select the type of distortion on the Left or MID channel. This distortion can be a Saturator, a Clipper, a Fuzz, and Sinusoidal wavefolding.
- **WS LINK** - Link the distortion types between the two channels
- **MODE B** - select the type of distortion on the Right or Side channel
- **TONE** - frequency cutoff for the output low pass filter.

### OUTPUT

- **OUT LINK** - link the output gain values for the two channels
- **OUT L** - control the gain for the Left or MID output channel
- **OUT R** - control the gain for the Right or SIDE output channel

### MASTER

- **DRY/WET** - control the balance between the DRY or unprocessed signal with the WET distorted signal.
