# LK Help - Midi Pads Module

The Midi Pads module is composed by a 4x4 grid of midi pads, velocity controls, arpeggiator, chorder and an octave selector.

The **MIDI Pads** section has two modes: the **MIDI mode**, that can be used to control MIDI \(external hardware, iOS apps, etc\), and the **Live mode**, which can be used to play instruments on Ableton Live.

**Note:** these two modes can be used alternatively.

![LK Midi Pads Module screenshot](/lk/images/pads/overview.png)

Depending on the selected mode, you will find different fields in the status bar at the top of the midi pads module screen:

- **MODE** - allows toggling between Live and MIDI modes.
- **TEMPO** - allows BPM adjustment, which affects the arpeggiator \(MIDI mode only as in Live mode it depends on Live's tempo\).
- **SELECTED TRACK** - selects the MIDI track controlled by the MIDI pads \(Live mode only\).
- **TRACK ARMED** - toggles record arm on track ON or OFF \(Live mode only\).
- **REC. QUANT.** - enable and choose record quantization \(Live mode only\).
- **DEVICE** - selects the MIDI device to be used.
- **CHANNEL** - selects the MIDI channel.

On the lower part of the screen, a split view can be opened by dragging the green line or tapping anywhere else on the left of right of it. This allows access to Midi Pads settings.

## THE MIDI PADS SECTION

The midi pads are layed out from C-2 to G8 notes, across 9 pages and were designed to visually match Live drum rack pads layout.

You can select the visible midi pads range using by dragging the finger up and down the right side area of the screen.

You can also adjust velocity response for the midi pads with two parameters, one for the outer velocity and another for the inner velocity.

This allows you to make the midi pads louder when pressed at the center and more gentle at the bounds, or the opposite, thus giving you a more natural expression.

## PLAYING MIDI PADS WITH ARPEGGIATOR

The Midi Pads module is equipped with an arpeggiator, enhancing creativity when using the midi pads. The arpeggiator unit is composed of the following parameters:

- **ON** - toggles the arpeggiator between on and off
- **SYNC** - synchronises the arpeggiator to the session's tempo
- **MODE** - defines the order on which the arpeggio notes will be played. There are four modes available:

- Up - notes are played from lower to higher.
- Down - notes are played from higher to lower.
- Up/Down I - notes are played from lower to higher and then from higher to lower.
- Up/Down II - notes are played from lower to higher and then from higher to lower but repeating the higher and lower notes.
- Random - notes are played randomly.

- **STEPS** - allows choosing the number of octaves the arpeggio will go up to.
- **RATE** - defines the arpeggiator rate.
- **GATE** - defines the length of each note's event \(time on vs time off\).

When sync is off, arpeggiator rate units is milliseconds. By turning sync on, the arpeggiator will sync to the section BPM and the rate will be available in 21 quantized steps, ranging from 2/1 to 1/128 including dotted and triplet values.

## PLAYING CHORDS WITH THE MIDI PADS

The chorder function allows you to play chords while pressing a single midi pad. Using the chorder is pretty straightforward. Start by choosing one between the many available chords to automatically play a chord when you tap on a midi pad. To turn this function off, choose "None" from the list.

**Tip:** use the chorder along with the arpeggiator to get some really interesting musical results.

[Learn all about the MIDI Controller module.](midi-controller)
