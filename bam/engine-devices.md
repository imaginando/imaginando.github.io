# Engine Devices

## SAMPLER

<img src="/bam/images/engine-devices/sampler-engine-device.png" width="800" alt="BAM sampler engine interface" />

BAM’s SAMPLER is an easy to use sampler with a streamlined set of
features and an intuitive minimal interface. It includes a range of
playback modes, legato and portamento functions, tuning controls and
multi-mode filter. A notable feature is the ‘SAMPLE’ parameter control,
which lets you switch between samples from the project’s sample pool.

### AMP EG (Amplitude envelope generator) section

The amplitude envelope controls the volume of the sound over time,
visually represented here by the yellow line. The yellow line can be
interacted with directly by dragging different parts of the line, on
both x and y axis. The envelope can be adjusted with the following
parameters:

- **CURVE** - this button provides access to individual controls with
    which to define non-linear curve shapes for the attack, decay and
    release stages of the envelope
    - **A.Curve** - Define the curve for the ATTACK phase of the EG
    - **D.Curve** - Define the curve for the DECAY phase of the EG
    - **R.Curve** - Define the curve for the RELEASE phase of the EG
- **INV** - inverts the envelope so that the volume amplitude starts and ends at maximum
- **ATTACK** - the time it takes for the sound to reach its peak volume after the start of a note
- **DECAY** - the time it takes for the volume of the sound to transition to its SUSTAIN value while the note is held
- **SUSTAIN** - the volume of the sound after the ATTACK and SUSTAIN stages of the envelope while the note is held
- **RELEASE** - time it takes for the volume of the sound to transition from its SUSTAIN value to its final value after the note is released
- **MAX** - opens controls to adjust the scale/range of the ATTACK, DECAY and RELEASE knobs by defining the maximum duration value for each knob
    - **A.MAX** - maximum ATTACK time available
    - **D.MAX** - maximum DECAY time available
    - **R.MAX** - maximum RELEASE time available

### FILTER EG Section

All parameters are the same as the AMP EG but these are applied on the
FILTER instead of the amplitude of the sound

### WAVEFORM Controls

- **START** - starting point of sample playback
- **LOOP START** - point where the sample starts to loop when it is in
    loop mode
- **END** - end point for the sample playback
- **LINK POS** - link START, END and LOOP START positions so that they can be moved simultaneously
- **PLAY MODE** - this defines how the sample playback is made. It can play forward, backwards, forward loop, backward loop, forward with ping-pong loop and backward with ping-pong loop
- **CROSSFADE** - Volume crossfade when the sample loops. Only available with the loop modes
- **TUNE** - fine tuning of the pitch for the sample
- **TRANSPOSE** - defines the base pitch for the sample playback
- **SAMPLE** - which sample from the sample POOL is being played at the moment

### FILTER Controls

- **CUTOFF** - filter frequency after which the filter rolls off and stops affecting the signal
- **Q** - The resonance of the filter or Q factor occurs when the output from the filter is fed back to the input internally (with some caveats), creating a peak at the cutoff frequency. The RESONANCE knob controls the amount of resonance you create this way.
- **MODE** - filter type
    - **LP** - Low pass filter
    - **BP** - Band pass filter
    - **HP** - High pass filter
    - **NOTCH** - Band reject filter
- **EG** - amount of the envelope generator that is affecting the
    filter

### MASTER Controls

- **MODE** - select between MONO (only plays one note at a time), Poly (plays up to 8 voices at a time) and UNISON (plays all 8 voices simultaneously with slight detune)
- **LEGATO** - Toggles LEGATO style note transitions on or off. With LEGATO on and the synthesizer working in MONO mode, the sound simply shifts between the frequencies of the notes without retriggering the envelope generators.
- **PORTAMENTO** - toggles a slide of frequency between notes when they are overlapped instead of an instant frequency shift
- **TIME** - (If PORTAMENTO is on) this defines the time it takes for a note to pitch slide to the next note played
- **VOLUME** - controls the main volume of the synthesizer

## OSCILLATOR

<img src="/bam/images/engine-devices/oscillator-engine-device.png" width="1000" alt="Oscillator interface" />

A subtractive analogue modeling synthesizer with two independent
oscillators and a noise generator as its main audio source capable of
Ring modulation, FM and a noise generator as well. It also has a
multi-mode filter and a saturation circuit.

### OSC 1

- **OCTAVE 1** - controls the pitch of octave played by the oscillator
- **COARSE 1** - controls the pitch of the oscillator in semitones
- **FINE 1** - fine controls the pitch of the oscillator in cents
- **WAVEFORM** - allows for choice of the base waveform shape for the oscillator sound.
- **PULSE WIDTH** - Adjusts the pulse width of the square waveform, from an even square to an infinitely thin pulse.
- **LEVEL** - controls the volume of the oscillator
- **MOD MODE** - lets you choose between no oscillator modulation, ring modulation and frequency modulation between the first and second oscillator.
- **MOD AMOUNT** - controls the amount of oscillator modulation that exists between the first and second oscillator.

### OSC 2

All parameters are the same as the oscillator 1 with only the MOD MODE
and MOD AMOUNT parameters missing.

### FILTER

- **CUTOFF** - filter frequency after which the filter rolls off and
    stops affecting the signal

- **Q** - The resonance of the filter or Q factor occurs when the output from the filter is fed back to the input internally (with some caveats), creating a peak at the cutoff frequency. The RESONANCE knob controls the amount of resonance you create this way.

- **MODE** - This button allows you to switch between all the
    different FILTER Modes:
    - **L4P** - 4 pole Low Pass Filter (24dB/oct attenuation) - A Low Pass Filter type allows low frequency content to pass through cutting high frequency content at a rate defined by the number of poles.This filter type is a digital implementation of the Moog Transistor Ladder Filter.
    - **L2P** - 2 pole Low Pass Filter (12dB/oct - thus less frequency
        cutting effect than the L4P) - This filter is a digital
        implementation of an analog multimode filter topology in the
        Lowpass Mode. A Low Pass Filter type allows low frequency
        content to pass through cutting high frequency content at a rate
        defined by the number of poles.
    - **B2P** - 2 pole Bandpass Filter (12dB/oct) - The 2 pole
        bandpass filter allows only a restricted frequency band to pass
        through cutting frequencies below and above at a 12dB per octave
        rate. In this filter the Resonance has a particular importance
        as it somewhat defines the bandwidth that can get through the
        filter.This filter represents the bandpass output of the analog
        multiband filter implementation.
    - **H2P** - 2 pole High Pass Filter (12dB/oct) - A 2 pole High
        Pass Filter type allows high frequency content to pass through
        cutting low frequency content at a rate defined by the number of
        poles. This filter represents the High Pass output of the analog
        multiband filter implementation.
    - **NOTCH** - A notch filter is a filter that cuts only a very
        restricted band of frequencies, you can think of it as a more
        aggressive form of bandpass, that instead of allowing a band to
        pass it cuts that band out. This filter is also a product of the
        multimode filter topology used in the other filters (except
        L4P). It gives the sound a sort of hollowness that can be
        interesting in some situations, if you use an LFO to modulate
        this filter you will get an effect that resembles a phaser. Try
        using low resonance.
- **EG** - amount of the envelope generator that is affecting the filter
- **KBD** - modulate the FILTER frequency by the note of the oscillators
- **VEL** - modulate the FILTER frequency by the velocity value of the note.

### PITCH

- **EG1 MOD** - modulate the pitch of the oscillators by the first envelope generator
- **EG2 MOD** - modulate the pitch of the oscillators by the second envelope generator

### VCA

- **KBD** - modulate the amplitude of the oscillators by the note of the oscillators
- **VEL** - modulate the amplitude of the sound by velocity value of the note

### NOISE

- **LEVEL** - control the volume of the noise generator
- **TONE** - control the width of the spectrum generated by the noise
    generator

### AMP EG

- **CURVE** - access curve controls for the envelope shape
    - **A.Curve** - Define the curve for the ATTACK phase of the EG
    - **D.Curve** - Define the curve for the DECAY phase of the EG
    - **R.Curve** - Define the curve for the RELEASE phase of the EG
- **INV** - invert vertically the envelope generator shape
- **ATTACK** - time it takes for the amplitude of the sound to reach
    full volume after note start
- **DECAY** - time it takes for the amplitude of the sound to fall
    from full volume to the SUSTAIN value while the note is playing
- **SUSTAIN** - volume of the sound after the ATTACK and SUSTAIN
    stages of the envelope and the note is still playing
- **RELEASE** - time it takes for the amplitude of the sound to fall
    from the SUSTAIN level after the note is released
- **MAX** - opens controls to adjust the scale/range of the ATTACK,
    DECAY and RELEASE knobs by defining the maximum duration value for
    each knob
    - **A.MAX** - maximum ATTACK time available
    - **D.MAX** - maximum DECAY time available
    - **R.MAX** - maximum RELEASE time available

### FILTER EG

All parameters are the same as the AMP EG but these are applied on the
FILTER instead of the amplitude of the sound

### MASTER

- **VOLUME** - controls the master volume of the synthesizer
- **OVERDRIVE** - turn on saturation on the main signal of the synthesizer
- **DRIVE** - increase the saturation of the main signal of the synthesizer
- **LEGATO** - Toggles LEGATO style note transitions on or off. With LEGATO on and the synthesizer working in MONO mode, the sound simply shifts between the frequencies of the notes without retriggering the envelope generators.
- **MODE** - select between MONO (only plays one note at a time), Poly (plays up to 8 voices at a time) and UNISON (plays all 8 voices simultaneously with slight detune)
- **PORTAMENTO** - toggles a slide of frequency between notes when they are overlapped instead of an instant frequency shift.
- **TIME** - (If PORTAMENTO is on) this defines the time it takes for a note to pitch slide to the next note played.

## DRUM SYNTH

<img src="/bam/images/engine-devices/drum-synth-engine-device.png" width="800" alt="Drum synth interface" />

A synthesizer specifically engineered for creating drum sounds. It has
an oscillator with a filter, a noise generator with different noise
sources filter and stereo controls. It also has a frequency modulation
section and a saturation stage.

### OSCILLATOR

- **FILTER TYPE** - This button allows you to switch between all the different FILTER Modes. Filter types available are: L4P, L2P, B2P, H2P, NOTCH. These were described above
- **CUTOFF** - filter frequency after which the filter rolls off and stops affecting the signal
- **RESO** - The RESO or resonance of the filter occurs when the output from the filter is fed back to the input internally (with some caveats), creating a peak at the cutoff frequency. The RESO knob controls the amount of resonance you create this way. It is used to make the filter more aggressive
- **ATTACK** - time it takes for the amplitude of the sound to reach full volume after note start
- **DECAY** - time it takes for the amplitude of the sound to fall from full volume to no volume at all
- **WAVEFORM** - Shape of the waveform used in the oscillator part of the synthesizer
- **TUNE** - controls the fine tuning of the pitch of the oscillator in Cents.
- **P MOD** - Pitch modulation amount of the oscillator
- **P DECAY** - this controls the time it takes for the pitch modulation to complete its cycle
- **VOLUME** - controls the volume of the oscillator

### FM

- **WAVEFORM** - defines the waveform shape used for frequency modulation of the oscillator
- **FREQ** - frequency of the oscillator
- **OSC FM** - amount of frequency modulation introduced to the oscillator
- **NOISE FM** - amount of frequency modulation introduced to the noise generator

### NOISE

- **FILTER TYPE** - This button allows you to switch between all the different FILTER Modes. Filter types available are: L4P, L2P, B2P, H2P, NOTCH. These were described above
- **CUTOFF** - filter frequency after which the filter rolls off and stops affecting the signal
- **RESO** - The RESO or resonance of the filter occurs when the output from the filter is fed back to the input internally (with some caveats), creating a peak at the cutoff frequency. The RESO knob controls the amount of resonance you create this way. It is used to make the filter more aggressive.
- **F.MOD** - controls the amount of FILTER modulation introduced by the envelope generator
- **VOLUME** - controls the volume of the noise generator
- **EG MODE** - Toggles the behavior of the envelope generator curves between linear or exponential progression
- **ATTACK** - time it takes for the amplitude of the sound to reach full volume after note start
- **DECAY** - time it takes for the amplitude of the sound to fall from full volume to silence
- **TONE** - control the width of the spectrum generated by the noise generator
- **STEREO** - amount of stereo width produced by the noise generator

### MASTER

- **DIST AMT** - distortion amount introduced in the master signal
- **MODE** - control the destination of the distortion circuit between the oscillator, the oscillator and the noise generator or just the noise generator
- **DECAY** - controls the time it takes for amplitude of the whole sound to drop from full volume to silence.
- **VOLUME** - controls the volume of the whole sound of the synthesizer

## HOFMANN

<img src="/bam/images/engine-devices/hofmann-engine-device.png" width="800" alt="Hofmann interface" />

A monophonic synthesizer with an oscillator, a sub-oscillator and a
filter, physically modeled after the most famous classic acid synth with
the number three hundred and three in its name

- **WAVEFORM** - toggles between square and sawtooth wave produced by the synthesizer´s oscillator
- **CUTOFF** - filter frequency after which the filter rolls off and starts affecting the signal
- **RESO** - The RESO or resonance of the filter occurs when the output from the filter is fed back to the input internally (with some caveats), creating a peak at the cutoff frequency. The RESO knob controls the amount of resonance you create this way. It is used to make the filter more aggressive.
- **ENVELOPE** - amount of the envelope generator that is affecting the filter
- **DECAY** - time it takes for the amplitude of the sound (or filter frequency if the amount of the ENVELOPE parameter is different from zero) to fall from full value to zero
- **ACCENT** - controls the amount of ACCENT modulation of the note. The ACCENT modulation allows through velocity control (ACCENT is triggered when the velocity value is the same or above 100), to modulate the amplitude and filter of a given note.
- **SUB LEVEL** - Controls the volume of the sub oscillator on the synthesizer. The sub-oscillator is an oscillator that is similar to the original oscillator in the synthesizer but operates at a lower octave in frequency.
- **DISTORTION** - toggles the distortion of the main signal on or off
- **DRIVE** - amount of distortion introduced to the synthesizer´s signal
- **LEVEL** - level of the signal's volume after the distortion circuit.
- **VOLUME** - control of the main signals volume

## ‘08’ ENGINES COLLECTION

Virtual analogue models of the sounds of the iconic drum machine. (08
Kick / 08 Snare / 08 Clap / 08 Tom Conga / 08 Hihat / 08 Cowbell)

### 08 KICK

<img src="/bam/images/engine-devices/08-kick-engine-device.png" width="400" alt="08 Kick interface" />

- **PITCH** - controls the pitch of the oscillator
- **TONE** - controls the frequency at which the filter stops affecting the clicky part of the signal
- **DECAY** - controls the time it takes for the amplitude of the signal to go from maximum to silence
- **GAIN** - controls the level of amplification of the main signal
- **ACCENT** - controls the amount of ACCENT modulation of the note. The ACCENT modulation allows through velocity control (ACCENT is triggered when the velocity value is the same or above 100), to modulate the amplitude

### 08 SNARE

<img src="/bam/images/engine-devices/08-snare-engine-device.png" width="400" alt="08 Snare interface" />

- **SNAPPY** - controls the level of the noise generator
- **FREQ** - controls the frequency of the oscillators in the synth
- **TONE** - controls the relation of volume between the two oscillators of the synth
- **DECAY** - controls the time it takes for the amplitude of the signal to go from maximum to silence
- **ACCENT** - controls the amount of ACCENT modulation of the note. The ACCENT modulation allows through velocity control (ACCENT is triggered when the velocity value is the same or above 100), to modulate the amplitude

### 08 CLAP

<img src="/bam/images/engine-devices/08-clap-engine-device.png" width="350" alt="08 Clap interface" />

- **TONE** - controls the frequency at which the filter stops affecting the signal
- **DECAY** - controls the length of the retriggering noise clap oscillators
- **TAIL** - controls the length of the continuous noise generator sound
- **ACCENT** - controls the amount of ACCENT modulation of the note. The ACCENT modulation allows through velocity control (ACCENT is triggered when the velocity value is the same or above 100), to modulate the amplitude

### 08 TOM CONGA

<img src="/bam/images/engine-devices/08-tom-conga-engine-device.png" width="350" alt="08 Tom conga interface" />

- **DECAY** - controls the time it takes for the amplitude of the sound to go from maximum value to silence
- **PITCH** - controls the frequency of the oscillator
- **NOISE** - controls the volume of the noise generator
- **ACCENT** - controls the amount of ACCENT modulation of the note. The ACCENT modulation allows through velocity control (ACCENT is triggered when the velocity value is the same or above 100), to modulate the amplitude

### 08 HI-HAT

<img src="/bam/images/engine-devices/08-hihat-engine-device.png" width="400" alt="08 HiHat interface" />

- **PITCH** - controls the pitch of the oscillator of the synth
- **TONE** - controls the frequencies of the filter that are affectingthe signal
- **DECAY** - controls the time it takes for the amplitude of thesound to go from maximum value to silence
- **ACCENT** - controls the amount of ACCENT modulation of the note.The ACCENT modulation allows through velocity control (ACCENT istriggered when the velocity value is the same or above 100), tomodulate the amplitude
- **MODE** - toggles between the OPEN HIHAT mode and CLOSED HIHAT mode of the synthesizer.

### 08 COWBELL

<img src="/bam/images/engine-devices/08-cowbell-engine-device.png" width="250" alt="08 Cowbell interface" />

- **PITCH** - controls the main pitch of the oscillators generating the COWBELL sound
- **DECAY** - controls the time it takes for the amplitude of the sound to go from maximum to silence
- **ACCENT** - controls the amount of ACCENT modulation of the note. The ACCENT modulation allows through velocity control (ACCENT is triggered when the velocity value is the same or above 100), to modulate the amplitude

## NOISE

<img src="/bam/images/engine-devices/noise-engine-device.png" width="550" alt="Noise engine interface" />

A creative noise generator with different noise sources three different
filters and a simple envelope generator.

- **SOURCE** - controls the noise source of the signal
- **LP CUTOFF** - controls the frequency of the filter from which the filter stops affecting the signal. Frequencies above the value will be filtered
- **HP CUTOFF** - controls the frequency of the filter from which the filter stops affecting the signal. Frequencies below the value will be filtered
- **ATTACK** - time it takes for the amplitude of the sound to reach full volume after note start
- **RELEASE** - time it takes for the amplitude of the sound to fall from full volume to silence
- **NOTCH** - controls the frequency of the filter around which frequencies will be filtered.
- **GAIN** - controls the level of amplification of the main signal

## AUDIO INPUT

<img src="/bam/images/engine-devices/audio-input-device.png" width="175" alt="Audio input engine interface" />

An audio input for processing external sources inside BAM (eg: a
microphone or an external synthesizer).

- **GAIN** - controls the level of amplitude of the input of the signal
- **MUTE** - mutes the signal

## MIDI OUT

<img src="/bam/images/engine-devices/midi-out-engine-device.png" width="500" alt="MIDI out engine interface" />

- **DEVICE** - The MIDI device to send MIDI to (click to open scrollable drop down menu)
- **CHANNEL** - Select MIDI channel to use
- **BANK** - Select MIDI bank to use
- **SUB-BANK** - Select MIDI SUB-BANK to use
- **PROGRAM** - Select which MIDI program to use
- **PITCHBEND** - Change PITCHBEND value
- **AFTERTOUCH** - Change AFTERTOUCH value
