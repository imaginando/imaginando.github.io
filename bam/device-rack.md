# Device Rack

<img src="/bam/images/device-rack/device-rack-overview.png" width="800" alt="" />

Each track consists of a chain of devices, processed from left to right.
There are fixed devices for each track which are the Trigger, Modulators
and Track Devices. Each device can be minimized/expanded by double
clicking the name of the device. You can also add ENGINE and FX devices
which can be bypassed by toggling the green circle on/off switch at the
top left of the device, and single clicking an ENGINE or FX device will
open/close its floating window interface.

- **TRIGGER** - controls some of the notes properties
- **MODULATORS** - provides LFO and Envelope Generator based modulation of ENGINE, FX, and MIXER parameters
- **ENGINE** - the main instrument/synthesis generator of the track
- **FX** - two optional slots for adding effects processing devices (represented by a + icon inside a dotted line rectangle when empty). The FX devices in these two slots can be dragged to change its order of processing.
- **TRACK** - mixer controls for each of the tracks and master. When the master track is selected you can access the master FX chain as well as the FX chains for the Send A and Send B.

## TRIGGER

<img src="/bam/images/device-rack/device-rack-trigger.png" width="200" alt="BAM Device Rack Trigger device" />

The TRIGGER device allows you to set the track’s default note, velocity,
and time offset values, plus provides probability and retrigger controls

- **NOTE** - Value of the tracks´s default MIDI note triggered by its track pad or TIMELINE step sequence
- **VELOCITY** - Default value for the velocity of the step manually entered into the TIMELINE, COMPOSER or MODULATIONS
- **TIME OFFSET** - allows shifting of the timing of the step playback, This allows for small time adjustments of steps so they can be played out of the time quantization grid.
- **PROBABILITY** - Controls the percentage of the probability of a step being played or not.
- **RETRIGGER** - Controls the trigger frequency of a step being played. If this value is one, the step only triggers once.

## MODULATORS

The MODULATORS rack device enables Envelope Generator (EG) and Low
Frequency Oscillator (LFO) based modulation for rotary parameters of
ENGINE, FX or MIXER devices.

You can define up to two modulation sources for each track by pressing
the plus button at the top right, and set multiple target parameters to
modulate from each source.

### LFO Modulator (Low Frequency Oscillator)

<img src="/bam/images/device-rack/device-rack-modulators-lfo.png" width="400" alt="BAM Device Rack LFO Modulator device" />

- **RATE** - Controls the frequency/speed of the wave cycle.
- **OFFSET** - Changes the bias of the values of the waveform. This allows the modulation value to change from positive and negative to only positive when the OFFSET value is at maximum and only negative when the OFFSET value is set to the minimum.
- **DELAY** - Controls the time it takes for the Modulator to start gradually modulating after a key is triggered, from no modulation to full modulation.
- **WAVEFORM** - waveform type used for the wave modulation cycle. (Sine, Triangle, Saw Square, Sample and Hold, Filtered Sampled and Hold).
- **SYNC** - changes between frequency control of the waveform time cycles or BPM music time divisions.
- **PHASE MOD** - changes between FREE mode which is a continuous and independent oscillation of the modulator or in KEY mode a waveform phase reset every time a note is played.

### EG Modulator (Envelope Generator)

<img src="/bam/images/device-rack/device-rack-modulator-eg.png" width="400" alt="BAM Device Rack EG Modulator" />

- **ATTACK** - The attack is the initial slope of the ADSR envelope. This control defines the time it takes for the envelope to grow from zero to its maximum amplitude.
- **DECAY** - The Decay slider controls the amount of time the envelope takes to go from its maximum value, after climbing the attack slope, to the value dialed in the Sustain slider.
- **SUSTAIN** - As long as you are pressing a key, the place where the envelope amplitude rests is the Sustain level. The envelope does the Attack and Decay movements and rests at Sustain value, so you can say this is the actual nominal level of a note pressed. If you use a low sustain you emphasize the Attack and Decay part of the envelope giving rise to more percussive results.
- **RELEASE** - The Release is the time it takes after you release a key, for the envelope to go from the Sustain level to zero. It's the tale of the note if you like.
- **TIME SCALE** - This is a way of changing the time duration of all the phases of the ADSR by a multiplier over the original time value.
- **MODE** - This button toggles between normal EG functioning where the envelope generator starts when a key is pressed and when a note off is received the EG enters the Release phase and ends on its time value, and a mode which cycles from the beginning of the attack phase to the end of the decay phase until a note off is received.

### How to modulate BAM parameters

To start first click on the top right + icon:

<img src="/bam/images/device-rack/add-modulator-device.png" width="175" alt="BAM Device Rack add Modulator" />

Then choose the modulation type you want to add:

<img src="/bam/images/device-rack/device-rack-choose-modulator-type.png" width="400" alt="BAM Choose modulator type" />

After selecting LFO or EG, you will see the main MODULATORS interface, which shows the modulation type that you added with a label inside a gray box, plus an X which will delete the modulator:

<img src="/bam/images/device-rack/device-rack-modulator-chosen.png" width="400" alt="BAM EG modulator device" />

You can assign multiple parameters to modulate - to add a parameter first click the large + button at the bottom of the device, then move the target parameter on the device that you want to modulate and it should appear in the MODULATORS target parameter list:

<img src="/bam/images/device-rack/eg-modulator-with-parameters.png" width="400" alt="BAM EG modulator device with parameters added" />

Here you can dial in the amount of modulation you want using the parameter knobs.

The list of target parameters becomes scrollable when there are five or more target parameters assigned.

### How to modulate parameters for AUv3 plugins

To modulate the parameters of an AUv3 plugin, you need to make them available for BAM to use, first click the cog icon shown at the top right of the plugin interface:

<img src="/bam/images/device-rack/device-rack-auv3-mapping.png" width="800" alt="BAM device rack AUv3 parameter mapping" />

Then click the LEARN button and move the plugin parameter control that you wish to expose to the MODULATORS device.

## TRACK Mixer controls

<img src="/bam/images/device-rack/device-rack-track-mixer.png" width="175" alt="" />

- **Save** track sound as - Save current track as a preset
- **Track MIDI** input settings - Choose MIDI input device and channel to be used on this track
- **MUTE** - Mute current track
- **SOLO** - Solo current track
- **ARM** - Arm current track for playback and record
- **SEND A** - Control signal sent to mixer´s effect Send A
- **SEND B** - Control signal sent to mixer´s effect Send B
- **PAN** - mixer control for the current track´s panning if the signal is mono and balance if the signal is stereo
- **VOLUME** - Mixer control of volume for current track
