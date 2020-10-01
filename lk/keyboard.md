# Keyboard Module - LK Help

![LK Keyboard Module Overview](/lk/images/keyboard/overview.jpg)

The Keyboard module serves as an enhanced Ableton Live or MIDI keyboard controller, with 3-axis expression capabilities. It is fully customisable to scale and keyboard range. It also allows the possibility of mapping Ableton Live or MIDI CC parameters to be controlled by where you touch each key, providing additional expression opportunities to the performance of each note.

The interface features an adjustable view-port, pitch bend and modulation wheel controls and a HOLD function which allows the sustain of notes, just like a sustain pedal.

The view-port adjustment control is located across the top of the screen, consisting of a solid green line with two draggable circle handles at each end, which represent the visible range of keyboard notes displayed in the view-port.

![LK Keyboard Module view-port adjustment control](/lk/images/keyboard/viewport-control.png)

Drag either circle to adjust the visible range of notes displayed in the viewport; the larger the range, the greater the number of notes that are displayed, with all notes resized accordingly.

Drag the centre of the green line to scroll/move up and down the visible octaves.

The Keyboard has a settings area that you can open by dragging the == icon, or tapping anywhere else inside the bar to instantly maximize/minimize.

## Settings

The Keyboard has three settings columns to fully customize its use: Scale, Arpeggiator and Modulation.

### Scale

Here, a root key can be chosen to serve as the tonic note of a selected scale. There are many musical scales available to choose from, which will automatically adapt the keyboard to its corresponding intervals. You can also set a custom scale, and choose which notes are included/shown.

### Arpeggiator

The Keyboard module is equipped with an arpeggiator to further improve its performance.
The arpeggiator unit is composed of the following parameters:

- **ON** - toggle the arpeggiator on and off
- **SYNC** - synchronize the arpeggiator to the session tempo
- **MODE** - the order in which the arpeggio notes will be played. There are four modes available:
  - **Up** - notes are played from lowest to highest
  - **Down** - notes are played from highest to lowest
  - **Up/Down I** - notes are played from lowest to highest and then from highest to lowest.
  - **Up/Down II** - notes are played from lowest to highest and then from highest to lowest but repeating the highest and lowest notes
  - **Random** - notes are played at random
- **STEPS** - set the number of octaves included in the arpeggio
- **RATE** - define the arpeggiator rate
- **GATE** - define the length of each note's event (time on vs time off).
  When sync is off, arpeggiator rate is measured in milliseconds. By turning sync on, the arpeggiator will sync to the session BPM and the rate will be available in 21 quantized steps, ranging from 2/1 to 1/128 including dotted and triplet values.

### Modulation

This section allows the mapping of any Ableton Live or MIDI CC parameter, to the relative position inside the key that it is pressed, on a specific axis. This means, for example, if we map the velocity of a MIDI channel to the Y axis, the key will play with more velocity when touched near the top of the note.

To map a parameter to the Keyboard, just press the corresponding axis. If in Live mode, changing the parameter to map will automatically assign that parameter to the chosen axis. In MIDI mode a screen will popup allowing the selection of a MIDI control change value.

[Go to the LK Troubleshooting page.](troubleshooting)
