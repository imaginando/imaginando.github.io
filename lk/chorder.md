# Chorder Module - LK Help

![LK Chorder Module overview](/lk/images/chorder/overview.jpg)

The Chorder module allows for the playing of complex chords with a single tap containing a huge library of chord types, as well as a strumming utility that allows even more creative playing possibilities.

Like all other LK modules, the Chorder module has a settings area that you can open by dragging one of the thin, feint grey horizontal lines at the left or right side of the bar, or tapping anywhere else inside the bar to instantly maximize/minimize.

Chorder has two modes: LIVE mode and MIDI mode - tap to toggle.
Depending on the mode selected, you will find different fields in the status bar, located at the top of the screen:

- **MODE** - allows toggling between Live and MIDI modes
- **TEMPO** - allows BPM adjustment (affects arpeggiator). In LIVE MODE this only displays Ableton Live session tempo.
- **DEVICE (MIDI MODE)** - selects the output MIDI device
- **CHANNEL (MIDI MODE)** - chooses the MIDI output channel.
- **SELECTED TRACK (LIVE MODE)** - selects the MIDI track controlled by the MIDI pads.
- **TRACK ARMED (LIVE MODE)** - toggles record arm on track ON or OFF.
- **REC. QUANT. (LIVE MODE)** - enable and choose record quantization.

The playing section of the Chorder is divided in two parts, the keys and the strummer. In the middle section of the Chorder is where the hexagon cells are layed out, each cell representing either a note, or a chord.

Each row represents a preset and it can be fully customized, as well as the chords played throughout each of these scales.

On each side of the screen there are small horizontal lines stacked vertically which allow strumming, or playing like one would do on a string instrument.

## Settings

The Chorder has four settings columns: Layouts, Presets, Arpeggiator and View.

### Layout

A layout is a set of presets. Layouts can be recalled just by pressing the correspondent name. To create a new layout, ensure that the desired presets are active and press the + button. This will pop up a dialog box to fill in the name for the intended layout. Any user defined layout can be deleted. Ensure that the layout is selected and then press the - button.

### Presets

This section allows the stacking of factory bundled presets or custom scales.
To insert a scale into the playing section just press the corresponding preset and the scale will appear on the playing section as well as its corresponding name will be highlighted.

If more scales are needed, another preset can be stacked into the playing section just by pressing another preset, in the same way that a scale can be removed from the playing section by pressing the correspondent highlighted preset.

#### Preset Creation

To create a new set of Scale/Chord, on the upper right corner of this section, press the + button. A new screen will appear with the controls for scale and chord customization.

This screen is divided into three rows:

![LK Chorder Module chord and scale preset creation](/lk/images/chorder/preset-creation.jpg)

The first row represents the scale: here the 12 notes of a chromatic scale are represented and known scales can be selected on the right side of the row.
Customization is also possible by pressing to select or remove keys from the scale, as well as changing the octave of the respective key by pressing the + / - buttons above and below the key.

The second row represents the chord intervals: use this row to select the intervals of notes that will define the chord. 11 higher or lower note intervals in relation to the Tone key are available for the construction of the chord. Pressing the interval adds or removes the interval from the chord and pressing the - button below the interval button toggles the interval relations from higher to lower. On the right side of this row, predefined chords are available for easy select.

The third row represents a preview of the preset: use this row to test your preset.

To save a preset, tap the save button below and name it.

### Arpeggiator

The arpeggiator has the following parameters:

- **ON** - toggles the arpeggiator between on and off
- **SYNC** - synchronizes the arpeggiator to the session's tempo
- **MODE** - defines the order on which the arpeggio notes will be played. There are four modes available:
  - **UP** - notes are played from lowest to highest.
  - **DOWN** - notes are played from highest to lowest.
  - **UP/DOWN I** - notes are played from lowest to highest and then from highest to lowest.
  - **UP/DOWN II** - notes are played from lowest to highest and then from highest to lowest but repeating the highest and lowest notes.
  - **Random** - notes are played at random.
- **STEPS** - allows choosing the number of octaves the arpeggio will go up to.
- **RATE** - defines the arpeggiator rate.
- **GATE** - defines the length of each note's event (time on vs time off).

When sync is off, the arpeggiator rate is shown in milliseconds. By turning sync on, the arpeggiator will sync to the section BPM and the rate will be available in 21 quantized steps, ranging from 2/1 to 1/128 including dotted and triplet values.

### View

This settings, allows to change the chorder viewport to your needs. Use the -/+ buttons to zoom out/in the viewport, and the ‘pan’ button to scroll the display left or right. To pan, hold the pan button down and then drag left or right within the viewport.

Use the buttons labelled with -12 and +12 for a full octave transpose of all the keys simultaneously.

The Mode key in the middle toggles between ‘play’ mode and ‘select mode. In ‘play’ mode the chords will play when each cell is tapped, whereas ‘select’ mode will select the chord without playing it. This is useful to play with the strummer without playing the chorder cells.

[Now for the Keyboard Module page.](keyboard)
