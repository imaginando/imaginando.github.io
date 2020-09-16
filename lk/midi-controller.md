# Midi Controller Module - LK Help

![LK Midi Controller Overview](/lk/images/controller/overview.jpg)

This module is composed of several screen controls distributed through 8 columns per bank; each column has a knob, a button, a fader and a pad.

With four banks available, this means you have 32 programmable controls per bank, to a total of 128.

As all modules it has two modes: the MIDI mode, that can be used to control MIDI (external hardware, apps, etc), and the Live mode, which can be used to control Ableton Live parameters.

Note that these two modes can be used alternatively, giving you the possibility to control Ableton Live and MIDI, each with different channels and control assignments.

Depending on the mode selected, you will find different sections in the status bar at the top of the screen:

- **MODE** - allows toggling between Live and MIDI modes
- **DEVICE (MIDI MODE)** - selects the output MIDI device.
- **CHANNEL (MIDI MODE)** - chooses the MIDI output channel.
- **PARAMETER** - shows the CC number (MIDI MODE) or the Ableton Live parameter (LIVE MODE) of the selected screen control
- **VALUE** - shows the value of data transmitted by the selected screen control.

At the bottom of the screen, a split view can be opened by dragging the green line in the middle of the bar or by tapping anywhere else on the bar. This menu gives access to the following module settings:

- **BANKS** - four independent and customizable banks.
- **RENAME** - change the label name of a controller (While pressing this button, press your desired screen control to change its name).
- **ASSIGN** - allows mapping of a CC (While pressing this button, press your desired screen control to change its cc value (MIDI MODE), or to sync it with an Ableton Live parameter (LIVE MODE)).

By default, the CC values are distributed in an ascending order in each column and bank, from 0 to 128. This means that the first screen control of bank A is by default mapped to CC 0, while the last screen control, on bank D is by default mapped to CC 128. Nevertheless, all these parameters can be customized, giving you the possibility to adapt this section to your needs.

## Assigning a custom MIDI CC

To customize the MIDI mapping (MIDI mode), the assign key must be pressed while pressing the screen controller intended for mapping. This will open a list of CC values available - press the number of the value you want to map and press OK to confirm. To reset a CC, open the assign window and choose RESET at the bottom.

![LK Midi Controller Module CC Assign](/lk/images/controller/cc-assign.jpg)

## Assigning an Ableton Live Parameter

To customize the parameters in Live mode, select the screen control you want to map, then press ASSIGN. Change the parameter you want assign on Ableton Live or using the [Matrix](matrix) devices section. The name of the parameter will be displayed in the screen, press OK to confirm.

In any case it is possible to return to the default CC mapping by pressing ASSIGN and then RESET.

![LK Midi Controller Ableton Live Parameter assign](/lk/images/controller/live-assign.jpg)

[Learn all about the XY-Pad Module.](xy-pad)
