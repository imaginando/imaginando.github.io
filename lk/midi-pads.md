# MIDI Pads Module - LK Help

The MIDI Pads module consists of a 4x4 grid of MIDI Pads, velocity controls, arpeggiator, chorder and a note range selector.

The MIDI Pads section has two modes: the MIDI mode, that can be used to control MIDI (external hardware, iOS apps, etc), and the LIVE mode, which can be used to play instruments on Ableton Live.

In MIDI mode, the MIDI Pads can also be routed to the Matrix module as an input source.

![LK MIDI Pads Module screenshot](/lk/images/pads/overview.jpg?width=2048&height=1536)

Depending on the selected mode, you will find different fields in the status bar at the top of the MIDI Pads module screen:

- **MODE** - Toggle between LIVE and MIDI modes.
- **TEMPO** - Adjust tempo. This affects the arpeggiator. In LIVE MODE, this also changes your Ableton Live session tempo.
- **DEVICE (MIDI MODE)** - Select MIDI output device.
- **CHANNEL (MIDI MODE)** - Select MIDI output channel.
- **CLIP TRANSPORT** - Displays the beat time of the select clip.
- **SELECTED TRACK** - Set selected track.
- **TRACK ARMED** - Arm the selected track.
- **REC. QUANT.** - Set recording quantization. Quantizes the recorded notes to the designated beat division.
- **EDIT** - Set pad editing mode. In this mode, you can press a pad to edit its name and color.

![LK MIDI Pads Property Editing](/lk/images/pads/pad-properties.png?width=2048&height=1536)

In the lower part of the interface, there is a split view bar for opening the Inspector panel. Drag the == icon or tap anywhere else in the bar to maximize/minimize. This allows access to MIDI Pads settings.

## Pads

The Pads are laid out from C-2 to G8.

You can select the visible Pads range by dragging up and down the region slider to the right of the Pads.

The **HOLD** switch under the region slider turns the pads into switches, making them hold their notes until they're pressed again.

## Expressiveness

In the Expressiveness section, you can adjust the velocity response for the MIDI Pads. The note velocity can be programmed to change according to the pressed position within the pad.

When the expressiveness mode is set to **RADIAL**, the two controls are **CENTRE** and **BOUNDS**. When set to **LINEAR**, the controls are **TOP** and **BOTTOM**.

## Arpeggiator

The MIDI Pads module is equipped with an arpeggiator, enhancing creativity. The arpeggiator unit has the following parameters:

- **ON** - Toggles the arpeggiator on/off.
- **MODE** - Order in which the arpeggio notes will be played.
  - **UP** - Notes are played from low to high.
  - **DOWN** - Notes are played from high to low.
  - **UP/DOWN I** - Notes are played from low to high and then from high to low.
  - **UP/DOWN II** - Notes are played from low to high and then from high to low but repeating the highest and lowest notes.
  - **RANDOM** - Notes are played at random.
- **SYNC** - Synchronises the arpeggiator to the tempo.
- **STEPS** - Number of octaves the arpeggio will go up to.
- **RATE** - Arpeggiator rate.
- **GATE** - Length of each note event (time on vs time off).

When sync is off, arpeggiator rate units are in milliseconds. Turning sync on synchronises the arpeggiator to beat divisions, ranging from 2/1 to 1/128 including dotted and triplet values.

## Chorder

The chorder function allows you to play chords by pressing a single MIDI pad. Start by choosing one of the many available chord types.

Changing the chord type while pressing a pad will retrigger the pad, playing the new chord. This will allow you to play different chords of the same root, without the need to press the pad again.

**Tip: Use the chorder along with the arpeggiator to get some really interesting musical results.**

[Learn all about the MIDI Controller module.](midi-controller)
