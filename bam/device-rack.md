# Device Rack

<img src="/bam/images/device-rack/bam-beat-maker-device-rack-overview.png" width="1000" alt="" />

Each track consists of a chain of devices, processed from left to right. Each device can be minimized/expanded by double
pressing the name of the device. MIDI FX, Engine and FX devices can be bypassed by toggling the green circle switch at the
top left of the device. Single pressing their title bars will
open/close their floating window interfaces, while double pressing will collapse the device panel.

- **(A) Trigger** - Note properties for created steps.
- **(B) MIDI FX** - Effects processing for incoming MIDI (up to three per track).
- **(C) Modulators** - Modulator engines (EG and LFO) (up to two per track).
- **(D) Engine** - Synthesis source/generator of the tracks.
- **(E) FX** - Effects processing for incoming audio which can be dragged to change their order of processing (five available per track).
- **(F) Mixer** - Mixer parameters. When the master track is selected you can access the master FX chain as well as the FX chains for the Send A and Send B.

## TRIGGER

<img src="/bam/images/device-rack/bam-beat-maker-device-rack-trigger.png" width="200" alt="BAM Device Rack Trigger device" />

<br>

The TRIGGER device allows you to set the track’s default note, velocity,
and time offset values, plus provides probability and retrigger controls.

- **NOTE** - Default value for the MIDI note triggered by the track pad and adopted when toggling steps
- **VELOCITY** - Default velocity for the note triggered by the track pad and adopted when toggling steps
- **TIME OFFSET** - Allows backward and forward shifting of the step timing
- **PROBABILITY** - Controls the probability of a step being played
- **RETRIGGER** - Controls the retrigger frequency of a step being played

The top right corner icon opens the Trigger settings panel with the following options:

- **MIDI Input Channel** - Select channel to receive MIDI from (ALL will listen to MIDI from all channels)
- **MIDI Input Device** - Select external device to receive MIDI from
- **MIDI Output Channel** - Select MIDI channel to send MIDI to (ALL will send to all channels)
- **MIDI Output Device** - Select device to send MIDI to

## MIDI FX

<img src="/bam/images/device-rack/bam-beat-maker-device-rack-midi-fx.png" width="440" alt="BAM Device Rack MIDI FX" />

<br>

The MIDI FX rack device allows loading AUv3 MIDI effects.

## MODULATORS

The MODULATORS rack device enables Envelope Generator (EG) and Low
Frequency Oscillator (LFO) based modulation for rotary parameters of MIDI FX,
ENGINE, FX and MIXER devices.

You can add up to two modulation sources for each track by pressing
the + button in the top right corner and set multiple modulation targets from each source.

### LFO (Low Frequency Oscillator)

<img src="/bam/images/device-rack/bam-beat-maker-device-rack-modulators-lfo.png" width="440" alt="BAM Device Rack LFO Modulator device" />

<br>

- **RATE** - Control the frequency of the wave cycle.
- **OFFSET** - Change the bias of the values of the waveform. This allows the LFO to gradually change from bipolar to unipolar.
- **DELAY** - Control the time it takes for the LFO to start gradually modulating after triggered, from no modulation to full modulation.
- **WAVEFORM** - Waveform type used for the wave modulation cycle. 
    - Sine
    - Square
    - Saw
    - Triangle
    - Sample and Hold
    - Filtered Sample and Hold
- **SYNC** - Synchronize the LFO to the project tempo.
- **PHASE MODE** - Select LFO trigger mode.
    - **Free** - Run continuously
    - **Key** - Reset phase on note on
    - **Oneshot** - Reset phase on note on and stop after one cycle
    - **Play** - Reset phase when playback is started

### EG (Envelope Generator)

<img src="i/bam/mages/device-rack/bam-beat-maker-device-rack-modulators-eg.png" width="440" alt="BAM Device Rack EG Modulator Device" />

<br>

- **ATTACK** - The initial slope of the ADSR envelope. Defines the time it takes for the envelope to grow from zero to its maximum amplitude.
- **DECAY** - Controls the time the envelope takes to go from its maximum value, after climbing the attack slope, to the value designated in the Sustain parameter.
- **SUSTAIN** - After the attack and decay phases, the envelope will rest on this value while the note is held. Low sustain values will result in percussive envelopes.
- **RELEASE** - The time it takes for the envelope to go from the Sustain level to zero after the note is released.
- **TIME SCALE** - Apply a multiplier on the time duration of all of the EG's phases.
- **MODE** - Toggle between the two trigger modes.
    - **Key** - Trigger envelope on note on
    - **Loop** - Trigger envelope on note on and continuously cycle from attack to decay

### Modulating BAM parameters

<img src="/bam/images/device-rack/bam-beat-maker-eg-modulator-with-parameters.png" width="440" alt="BAM EG modulator device with parameters added" />

<br>

You can assign multiple parameters to a modulator - to add a parameter press the large + button in the bottom right of the device, then press the target parameter to add it to the scrollable parameter list where you can can dial in the amount of modulation.

### Modulating parameters from AUv3 plugins

<img src="/bam/images/device-rack/bam-beat-maker-device-rack-auv3-mapping.png" width="1000" alt="BAM device rack AUv3 parameter mapping" />

<br>

To modulate an AUv3 plugin's parameters, you need to make them available in BAM. Press the cog icon **(A)** in the bottom left corner of the plugin interface, then toggle the EDIT button **(B)**. Interacting with a plugin parameter will add it to the parameter list **(C)** and allow modulating and automating it.

Double pressing a learned parameter with EDIT toggled will remove it along with its modulations and automations.

## ENGINE
<img src="/bam/images/device-rack/bam-beat-maker-device-rack-engine.png" width="350" alt="BAM device rack engine" />

<br>

The ENGINE rack device displays the main synthesizer/generator of the track. Pressing the top right corner icon shows the [list of available engines](engine-devices) to choose from.

The save icon saves the current engine state as a user preset available from the [Browser](sample-manager-soundbank.md#browser).

The macros icon <img src="/bam/images/device-rack/bam-beat-maker-device-rack-macros-icon.png" width="25" alt="BAM device rack macros icon" /> enables the macros editing mode. While enabled, you can add or replace macros by selecting one of the eight macro slots and pressing a parameter in the engine interface. Double pressing a macro slot will remove it.

<img src="/bam/images/device-rack/bam-beat-maker-device-rack-macros.png" width="350" alt="BAM device rack macros editing" />

<br>

## FX
<img src="/bam/images/device-rack/bam-beat-maker-device-rack-fx.png" width="350" alt="BAM device rack FX" />

<br>

The FX rack device is an optional slot for loading up to 5 audio effect engines. Pressing the top right corner icon shows the [list of available FX](fx-devices) to choose from.

You may drag FX panels to reorganize the process chain.

## TRACK Mixer controls

<img src="/bam/images/device-rack/bam-beat-maker-device-rack-track-mixer.png" width="175" alt="" />

<br>

- **Save Icon** - Save track sound as a preset
- **Mute** - Mute track
- **Solo** - Solo track (enable SHIFT for non exclusive solo)
- **Arm** - Arm track for playback and record
- **Send A** - Control signal sent to mixer´s effect Send A
- **Send B** - Control signal sent to mixer´s effect Send B
- **Pan** - Control track panning
- **Volume** - Mixer control of volume for current track
