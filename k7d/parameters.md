# Parameters

#### **MAIN PANEL**

- **Time** - the delay time in milliseconds. This parameter varies between 1ms and 1000ms.

- **Sync** - syncs **Time** with **Tempo**. If **ON**, delay time value is synced to Tempo and is fixed to beat division steps (2, 1, 1/2, 1/4, etc).

- **LFO** - the amount of low frequency modulation affecting **Time**. This parameter is bipolar. It can have a positive or negative modulation values.

- **KBD** - if set to **ON** the delay time will vary accordingly with the note played (the higher the note the shorter the delay).

- **INVERT** - if set to **ON** inverts the phase of the LFO applied to the right channel, creating subtle stereo nuances.

- **MUTE** - mutes the audio input (only visible in iOS standalone version).

- **PRE-GAIN** - amount of gain given to the unprocessed (dry) audio signal before being delayed.

- **FEEDBACK** - the amount of delay feedback. How much signal of the output is fed back into the input.

- **DRY/WET** - the mix of unprocessed (dry) and processed (wet) audio outputs.

#### **LFO**

- **WAVEFORM** - the shape of the waveform used for modulation (Sine, Square, Sawtooth, Triangle, Sample & Hold or Filtered Sample & Hold)

- **RATE** - the rate of the low frequency modulation (LFO) signal measured in Hz (cycles per seconds). This parameter varies between 0.01 and 10 Hz.

- **SYNC** - syncs LFO rate with tempo. If **ON**, LFO rate value is synced to Tempo and is fixed to beat division steps (2, 1, 1/2, 1/4, etc).

- **PHASE** - determines LFO phase behaviour. Two possible modes: **FREE**, LFO runs free; **KBD**, LFO's wave cycle phase resets when a MIDI note event is received.

#### **FILTER**

- **LOWPASS** - determines the cutoff frequency of the low pass filter. It cannot be inferior to the high pass cutoff frequency.

- **LFO** - amount of low frequency modulation (LFO) affecting the cutoff frequency of the low pass filter.

- **HIGHPASS** - determines the cutoff frequency of the high pass filter. It cannot be superior to the low pass cutoff frequency.

- **LINK** - links LFO filter amount knobs so that the same amount is applied to both parameters.

- **LFO** - amount of low frequency modulation (LFO) affecting the cutoff value of the high pass filter.

#### **CHARACTER**

- **SPREAD** - amount of time offset between left and right delays. When this parameter is zero, both delays have the same time. When this parameter is one, the right delay line has twice the time of the left delay channel.

- **STEREO WIDTH** - the amount of stereo widening applied to the delayed signal (left is full mono, right is full stereo. When **PING PONG** is **ON** full stereo becomes hard pan).

- **WOW** - slow form of flutter. Knob represents the effect amount applied to the signal.

- **FLUTTER** - emulation of tape's time fluttering while rotating, resulting in pitch variation. Knob represents the effect amount applied to the signal

- **PING PONG** - If set to **ON** the the first delay tap plays only on the left and the second tap plays only on right side and so on. **STEREO WIDTH** must be greater than zero to hear this effect.

[Next: Patches](patches)
