#
Oscillators

The Oscillators are the foundation of any subtractive synth. They create harmonically rich waveforms \(or simpler ones\) which get “sculpted” as the sound passes from module to module.

You can decompose any periodic waveform as a bunch of sine waves or harmonics \(this is called Fourier Series\). A complex waveform \(such as Sawtooth, Square or Triangle\) can be described as a sum of harmonics or sine waves.

The first harmonic gets called the fundamental, all other harmonics will be multiples of the first. You can also group harmonics as being even or odd. The simplest waveform is the Sine Wave composed of only the fundamental frequency.

The Sawtooth waveform is the richest classic periodic waveform composed of all harmonics both even and odd. These harmonics get lower in amplitude as they grow higher in frequency, but nevertheless, mathematically speaking, they are of infinite number, getting infinitely smaller as you go.

The Square Waveform is composed of only odd harmonics as is the Triangle Waveform. But these two waveforms differ in the way in which the harmonics are attenuated as they grow, being a lot more attenuated in the Triangle.

A non periodic waveform such as White Noise, in particular, is composed of every possible frequency with every possible amplitude distributed over time.

You use the Filter to alter the frequency content of the waveforms, and the VCA to alter the amplitude. These changes can be made static or can be made dynamic by using modulation sources such as the EG’s \(Envelope Generators\) or LFO’s \(Low Frequency Oscillators\).

We provide 4 different and simultaneous sound sources: 2 oscillators, 1 sub-octave oscillator and 1 noise source. There is also an additional pseudo sound source which reaches the MIXER, the RING \(Ring Modulation\), and this waveform is not a source per se but a product of the multiplication between OSC 1 with OSC 2.

There are 5 TABs in this panel: OSC 1, OSC 2, SUB/NOISE, MOD and PERF.

## Oscillator 1

<img src="https://www.imaginando.pt/images/products/drc/help/oscillators/osc1_tab.png" alt="DRC Oscillators Panel" width="500" style="float: right; padding: 20px; right-padding: 0px;" />

OSC 1 is the default sound source in **DRC** and is the one that in a sense defines the pitch of the synthesizer. This Oscillator has some unique capabilities such as the ability to change the Pulse Width of the Square Wave and to do Pulse Width Modulation, but lacks for instance the ability to detune. In **DRC** you detune OSC 2 in relation to OSC 1 and the frequency of the Sub Oscillator is tied to the frequency of OSC 1.

### Parameters

* **WAVEFORM** - select the waveform being produced in the oscillator. You can choose between SAW \(sawtooth\), SQR \(square\), TRI \(triangular\), SIN \(sine\)

* **SAW** - The Sawtooth waveform is the richest of all periodic waveforms being produced on **DRC**’s Oscillators. It is made of all harmonics, both odd and even. If you have more harmonic content to begin with you have more material to be able to sculpt with the filter down the line.

* **SQR** - The Square waveform is made of only odd harmonics. It is less harmonically rich than the sawtooth, but nonetheless a very useful and nice sounding waveform. A pure square waveform is very easy to produce electronically and so, very widespread use of it was made in cheap electronic sound devices.

* **TRI** - The Triangular waveform, like the Square wave, is only made of odd harmonics, but in a much lower quantity. This makes the triangular waveform much less rich harmonically. It is a subtle waveform that is works great with less aggressive filtering.

* **SIN** - The sine wave is the simplest, most pure waveform **DRC** can produce. It consists of only one harmonic, called the fundamental. It is a very “delicate” sounding waveform. In **DRC** we use a lot of saturation stages and so, a sine wave is almost always a little bit saturated, which gives it a richer tone and more harmonic content to filter out than usual.

* **OCTAVE** - The OCTAVE selector allows for you to choose the base octave of the oscillator. Here you can dial between -3 to +3 octaves.

* **P. WIDTH \(SQR only\)** - Pulse Width defines the duty cycle of the Square waveform, which changes its harmonic content. At the middle of the travel you have 50/50 duty cycle which represents a pure square wave. At the extremities you have a very small positive or negative going pulse.

* **PWM LFO1 \(SQR only\)** - PWM means Pulse Width Modulation. This slider allows you to modulate the pulse width or duty cycle of the waveform with the output of LFO1. This modulation is superimposed on the pulse width you define in the P. WIDTH slider. This modulation creates a very rich and evolving sound. To change the modulation frequency you have to change LFO1 Frequency in the MODIFIERS panel, LFO1 tab.

## Oscillator 2

<img src="https://www.imaginando.pt/images/products/drc/help/oscillators/osc2_tab.png" alt="DRC Oscillator 2 Panel" width="500" style="float: right; padding: 20px; right-padding: 0px;" />

OSC 2 is similar to OSC 1 but with 3 additional parameters.

### OSC 2 additional parameters

* **SEMITONE** - Here you can increment one semitone \(one note\) at a time the pitch of OSC2. You can make pseudo chords this way, and in conjunction with the FINE knob which spans +-1 semitone and the OCTAVE knob, you can seamlessly tune every possible frequency in the musical spectrum.

* **FINE** - The Fine knob allows you to fine tune the oscillator pitch in a very precise way. The entire range of the knob only spans one semitone, so in conjunction with the Pitch knob you can reach every possible detune amount \(frequency\) between OSC 1 and OSC 2 with a lot of precision. Detuning OSC 2 in relation to OSC 1 creates a beating effect which adds a lot of richness to the sound.

* **SYNC** - The Sync toggle button allows for you to sync OSC 2 with OSC 1. Syncing works by resetting the OSC 2 phase \(going back to the beginning of OSC 2 waveform\) whenever OSC 1 waveform repeats itself. Fine tune is very useful to take full advantage of this effect, try it.

## Sub Oscillator and Noise Generator

<img src="https://www.imaginando.pt/images/products/drc/help/oscillators/sub_tab.png" alt="DRC Sub/Noise Oscillator Panel" width="500" style="float: right; padding: 20px; right-padding: 0px;" />

In this TAB you control the Sub Octave Oscillator and the Noise generator section of the Oscillators. The Sub Octave Oscillator is an auxiliary oscillator used to fatten the sound. In analog synths it is derived from one main oscillator, usually OSC 1, by doubling consecutively its period, which is very easy to do with logic integrated circuits. Here things work a bit differently and we are able to provide different waveforms at the same processing cost, so, why not. The Noise Generator outputs White Noise, which is random static noise. Noise is used to give texture to sounds. In **DRC** the Noise can be Filtered in order to give more noise flavours with less high frequency content.

### Parameters

* **WAVEFORM** - The WAVEFORM toggle button changes the waveform of the Sub Octave Oscillator allowing you to choose from Square, Sawtooth and Sine waveforms.

* **OCTAVE** - This knob changes the octave of the SUB Octave Oscillator. The SUB Oscillator frequency is always relative to OSC 1 frequency and goes from -1 octave to -3 octaves below OSC 1.

* **NOISE BANDWIDTH** - The NOISE BANDWIDTH knob allows for the noise output to be filtered with a 6dB / oct low pass filter. This can create a continuous flavour of noise from White Noise to Brown Noise.

* **WAVEFORM** - The WAVEFORM toggle button changes the waveform of the Sub Octave Oscillator allowing you to choose from Square, Sawtooth and Sine waveforms.

* **OCTAVE** - This knob changes the octave of the SUB Octave Oscillator. The SUB Oscillator frequency is always relative to OSC 1 frequency and goes from -1 octave to -3 octaves below OSC 1.

* **NOISE BANDWIDTH** - The NOISE BANDWIDTH knob allows for the noise output to be filtered with a 6dB / oct low pass filter. This can create a continuous flavour of noise from White Noise to Brown Noise.

## Modulation

<img src="https://www.imaginando.pt/images/products/drc/help/oscillators/mod_tab.png" alt="DRC Oscillators Modulation Tab" width="500" style="float: right; padding: 20px; right-padding: 0px;" />

In **DRC** you can modulate the pitch \(note\) with LFO’s \(Low Frequency Oscillators\) and EG’s \(Envelope Generators\). In this TAB you can choose modulation sources and decide what gets affected by the modulation. You have two main modulation sources SRC1 and SRC2 and a common destination for both sources \(OSC1, OSC2 or BOTH\).

### Parameters

* **SRC 1** The SRC1 toggle Buttons turn on or off the LFO1 and EG1 Sources. You have an AMOUNT Knob associated to these sources. Basically you can choose which modulation source is active and in what dose it will affect the oscillators pitch.

* **SRC 2** This works like SRC1 but now you can choose two different modulation sources: LFO2 and EG2.

* **DESTINATION** The destination toggles allow for you to choose if the modulation sources will affect OSC1, OS2 or BOTH Oscillators pitch.

## Performance

The **PERF** tab contains parameters relating to the performance settings of **DRC** oscillators.

### Parameters

* **MODE** - Choose one of the following voice modes:

* **Polyphonic** - One voice per note played, multiple notes can be played simultaneously, limited only by the global voice settings.

* **Mono** - One voice per note played, but only one note can be played at once. The last played note will have priority over any other note still pressed.

* **Unison** - all the voices will play the same note resulting in a richer sound.

* **TRANSPOSE** - This setting allows you to shift the global base note of **DRC** within a range of -24 to 24 semitones.

* **PORTAMENTO** - Toggles Portamento feature **ON** or **OFF**

* **TIME** - \(If Portamento is **ON**\) this defines the time it takes for a note to pitch slide to the next note played.

* **LEGATO** - Toggles Legato style note transitions **ON** or **OFF**

[And now for the Filter section.](https://www.imaginando.pt/products/drc/help/filter)