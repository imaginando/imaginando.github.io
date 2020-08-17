# Modifiers Panel

This panel gives access to the LFO's and the arpeggiator tabs.

## LFO

FRMS has four LFO's available to be used as modulation sources.

<img src="/frms/images/lfo-panel.png" style="padding: 0px; bottom-padding: 0px;"/>

- **LFO** - Selects between the LFO 1, 2, 3 and 4.

- **WAVEFORM** - Selects the waveform of the LFO. From the left to the right: Sinusoidal, Square, Sawtooth, Triangular, Sample and Hold (S&H), Filtered Sample and Hold (FS&H).

- **SYNC** - When enabled the LFO frequency is synced with the BPM.

- **PHASE** - Selects the behaviour of the LFO when pressing a key.

  - FREE - The LFO is always running.
  - KEY - The LFO phase is reset when a key is pressed. This way the LFO will have the same behaviour every time a key is pressed.

- **RATE** - Controls the LFO frequency.

- **DELAY** - Controls the amount of time the LFO is delayed before starting.

### **Arpeggiator**

<img src="/frms/images/arpeggiator-panel.png" style="padding: 0px; bottom-padding: 0px;"/>

- **ENABLED** - Enables/disables arpeggiator.

- **MODE** - Selects the arpeggiator playing mode.

  - UP - Notes are played from the lowest to the highest pitch.
  - DOWN - Notes are played from the highest to the lowest pitch.
  - UP/DWN I - Notes are played from the lowest to highest pitch, and back to the lowest pitch.
  - UP/DWN II - Equal to up/dwn I, but the lowest and highest notes are repeated every time direction is changed.
  - RND - Notes are played randomly.

- **GATE** - Controls the duration of the notes being played. The least the gate, the least the duration and vice-versa.

- **STEPS** - Selects the amount of octaves being added to the arpeggiator notes. If steps are equal to 0, the arpeggiator only plays pressed notes. When steps is greater than 0, arpeggiator plays pressed notes plus that same notes in the octaves above (according to its amount).

- **RATE** - Controls the speed of the arpeggiator.

- **SYNC** - When enabled, arpeggiator speed is sync with the BPM.

- **HOLD** - When enabled, arpeggiator memorizes the pressed notes, and keeps playing them even if there aren't any pressed notes.

<br/>

[See next how to use global panel.](global-panel)
