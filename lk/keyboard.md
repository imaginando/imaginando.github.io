# Keyboard Module - LK Help

![LK Keyboard Module Overview](/lk/images/keyboard/overview.jpg?width=2048&height=1536)

The Keyboard module features two individual keyboards with 3-axis expression capabilities and, in MIDI MODE, MPE expression. It is fully customisable to scale and keyboard range. You can also map Ableton Live or MIDI CC parameters to the X/Y position touched within the key, providing additional expression opportunities.

Depending on the selected mode, you will find different fields in the status bar, located at the top of the screen:

- **MODE** - Toggle between MIDI and LIVE modes.
- **TEMPO** - Adjust tempo. This affects the arpeggiator. In LIVE MODE, this also sets the Ableton Live session tempo.
- **DEVICE (MIDI MODE)** - Select output MIDI device.
- **CHANNEL (MIDI MODE)** - Select output MIDI output channel.
- **SELECTED TRACK** - In MIDI MODE, select the Matrix track. In LIVE MODE, change the selected Ableton Live track.
- **TRACK ARMED** - Arm the select track.
- **REC. QUANT.** - Set recording quantization. Quantizes the recorded notes to the designated beat division.
- **MPE (MIDI MODE)** - Turns the keyboard into an MPE controller.

The interface features an adjustable view-port, pitch bend and modulation wheel controls and a HOLD function for holding pressed notes.

The view-port adjustment controls are located across the top of the keyboards, consisting of a solid green line with two draggable circle handles at each end, which represent the visible range of keyboard notes.

![LK Keyboard Module view-port adjustment control](/lk/images/keyboard/viewport-control.png)

Drag either circle to adjust the visible range; the larger the range, the greater the number of notes that are displayed, with all notes resized accordingly.

Drag the centre of the green line to scroll/move up and down the visible octaves.

The Keyboard has an Inspector panel that you can open by dragging the == icon, or tapping anywhere else inside the bar to maximize/minimize.

## Scale

A root key can be chosen to serve as the tonic note of a selected scale. There are many musical scales available to choose from, which will automatically adapt the keyboard to its corresponding intervals. You can also build your own custom scale.

When a scale other than the Chromatic scale is selected, the keyboard folds to display the scale notes.

## Arpeggiator

The arpeggiator has the following parameters:

- **ON** - Toggles the arpeggiator on/off.
- **SYNC** - Synchronises the arpeggiator to the tempo.
- **MODE** - Order in which the arpeggio notes will be played.
  - **UP** - Notes are played from low to high.
  - **DOWN** - Notes are played from high to low.
  - **UP/DOWN I** - Notes are played from low to high and then from high to low.
  - **UP/DOWN II** - Notes are played from low to high and then from high to low but repeating the highest and lowest notes.
  - **RANDOM** - Notes are played at random.
- **STEPS** - Number of octaves the arpeggio will go up to.
- **RATE** - Arpeggiator rate.
- **GATE** - Length of each note event (time on vs time off).

When sync is off, arpeggiator rate units are in milliseconds. Turning sync on synchronises the arpeggiator to beat divisions, ranging from 2/1 to 1/128 including dotted and triplet values.

## Modulation

This section allows the mapping of Ableton Live parameters or MIDI CCs to the relative position pressed within the key. X, Y and Z axes may be mapped, with Z acting as a MIDI trigger (on on press, off on release).

This means, for instance, if we map the velocity of a MIDI channel to the Y axis, the key will play with more velocity when touched near the top of the note.

To map a parameter to the Keyboard, press the corresponding axis. In LIVE MODE, change the parameter in Ableton Live to map it. In MIDI mode, a screen will display, allowing changing the name, MIDI channel and CC output, as well as minimum and maximum output values.

[Go to the LK Troubleshooting page.](troubleshooting)
