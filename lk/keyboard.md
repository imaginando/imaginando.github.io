# Keyboard Module

Keyboard module serves as a Live or MIDI enhanced keyboard controller with 3-axis expression capabilities. It is fully customisable to scale and keyboard range. It also allows the possibility of mapping any Live or MIDI CC parameters to be controlled by the position you play in each of the keys of the keyboard thus providing additional expression to the performance of each note.

The **Keyboard **module features an adjustable view-port, with pitch bending, modulation wheel and HOLD function which allows the sustain of notes, just like a sustain pedal.

There is an adjustable view-port located as a line right on top of the keyboard, allowing the user to adjust the amount of keys available on the keyboard to play, thus making each one of these keys bigger or smaller. This is done by dragging any of the handlers marked on the picture above with blue squares to the left or to the right. It also allows the adjustment of the visible notes region by dragging the line left or right.

Again, like on other modules, the **Keyboard** has a settings area that you can open by dragging the green line at the bottom center of the screen.

## Settings

The **Keyboard** has three settings columns to fully custumize its use: Scale, Arpeggiator and Modulation.

### Scale

Here, a root key can be chosen to serve as the tonic note of a selected scale. There are many musical scales available to choose from, which will automatically adapt the keyboard to it's corresponding intervals.

### Arpeggiator

The **Keyboard** module is equipped with an arpeggiator to further improve its performance.

The arpeggiator unit is composed of the following parameters:

- **ON**
- toggles the arpeggiator between on and off
- **SYNC**
- synchronizes the arpeggiator to the session's tempo
- **MODE**- defines the order on which the arpeggio notes will be played. There are four modes available:

- Up - notes are played from lower to higher.
- Down - notes are played from higher to lower.
- Up/Down I - notes are played from lower to higher and then from higher to lower.
- Up/Down II - notes are played from lower to higher and then from higher to lower but repeating the higher and lower notes.
- Random - notes are played randomly.

- **STEPS**

- allows choosing the number of octaves the arpeggio will go up to.

- **RATE**

- defines the arpeggiator rate.

- **GATE**

- defines the length of each note's event \(time on vs time off\).

When sync is off, arpeggiator rate units is milliseconds. By turning sync on, the arpeggiator will sync to the section BPM and the rate will be available in 21 quantized steps, ranging from 2/1 to 1/128 including dotted and triplet values.

### Modulation

This section allows the mapping of any Live or MIDI CC parameter to the position relative to the 3 axis in each of the keys of the **Keyboard**. This means, for example, that if we for example map the velocity of a MIDI channel to the Y axis will mean that the key will play with more velocity the higher the position it is played inside a key .

To map a parameter to the **Keyboard**, just press the corresponding axis. If in Live mode, changing the parameter to map will automatically assing that parameter to the chosen axis. In MIDI mode a screen will popup allowing the selection of a MIDI control change value.

[Go to the **LK** Troubleshooting page.](troubleshooting)
