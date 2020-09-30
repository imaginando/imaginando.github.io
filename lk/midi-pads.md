# MIDI PADS Module - LK Help

The MIDI PADS module is composed of a 4x4 grid of MIDI PADS, velocity controls, arpeggiator, chorder and a note range selector.

The MIDI PADS section has two modes: the MIDI mode, that can be used to control MIDI (external hardware, iOS apps, etc), and the LIVE mode, which can be used to play instruments on Ableton Live.

In MIDI mode, the MIDI PADS can also be routed to the MATRIX MODULE as an input source.

![LK MIDI PADS Module screenshot](/lk/images/pads/overview.jpg)

Depending on the selected mode, you will find different fields in the status bar at the top of the MIDI PADS module screen:

- **MODE** - allows toggling between Live and MIDI modes.
- **TEMPO** - allows BPM adjustment, which affects the arpeggiator. In LIVE MODE, this section only displays the tempo of the Ableton Live’s session.
- **SELECTED TRACK (LIVE MODE)** - selects the MIDI track controlled by the MIDI PADS
- **TRACK ARMED (LIVE MODE)** - toggles record arm on track ON or OFF.
- **REC. QUANT. (LIVE MODE)** - enable and choose record quantization.
- **DEVICE (MIDI MODE)** - selects the MIDI device to be used.
- **CHANNEL (MIDI MODE)** - selects the MIDI output channel to be used.

On the lower part of the screen, there is a split view bar which allows the Inspector panel to be opened. This can be done by dragging the == icon, or tapping anywhere else inside the bar to instantly maximize/minimize. This allows access to MIDI PADS settings.

## THE MIDI PADS SECTION

The MIDI PADS are layed out from C-2 to G8 notes.

You can select the visible MIDI PADS range by dragging the finger up and down the right side area of the screen.

## EXPRESSIVENESS

In the EXPRESSIVENESS section, you can adjust velocity response for the MIDI PADS with two parameters, changing the velocity of each note played depending on whereabouts inside the pad you press.

When expressiveness mode is set to 'RADIAL' the two controls are 'CENTRE' and 'BOUNDS', and when expressiveness mode is 'LINEAR' the controls are 'TOP' and 'BOTTOM'

## PLAYING MIDI PADS WITH ARPEGGIATOR

The MIDI PADS module is equipped with an arpeggiator, enhancing creativity when using the MIDI PADS. The arpeggiator unit is composed of the following parameters:

- **ON** - toggles the arpeggiator between on and off
- **SYNC** - synchronises the arpeggiator to the session's tempo
- **MODE** - defines the order on which the arpeggio notes will be played. There are four modes available:
  - **UP** - notes are played from low to high.
  - **DOWN** - notes are played from high to low.
  - **UP/DOWN I** - notes are played from low to high and then from high to low.
  - **UP/DOWN II** - notes are played from low to high and then from high to low but repeating the highest and lowest notes.
  - **RANDOM** - notes are played at random.
- **STEPS** - allows choosing the number of octaves the arpeggio will go up to.
- **RATE** - defines the arpeggiator rate.
- **GATE** - defines the length of each note's event (time on vs time off).

When sync is off, arpeggiator rate units are in milliseconds. By turning sync on, the arpeggiator will sync to the section BPM and the rate will be available in 21 quantized steps, ranging from 2/1 to 1/128 including dotted and triplet values.

## PLAYING CHORDS WITH THE MIDI PADS

The chorder function allows you to play chords by pressing a single MIDI pad. Start by choosing one of the many available chord types, then turn the function on with the power button icon at the top right of the chorder section. To turn this function off, tap the power icon to toggle it off.

When the chorder mode is on, if you change the chord type while pressing a pad, you’ll play the selected chord. This will allow you to play different chords of the same root, without the need to press the pad again.

Below the note range slide selector (on the right), there is a HOLD button, that will hold any pressed pad.

**Tip: use the chorder along with the arpeggiator to get some really interesting musical results.**

[Learn all about the MIDI Controller module.](midi-controller)
