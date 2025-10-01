# Midi Controller Module - LK Help

![LK Midi Controller Overview](/lk/images/controller/overview.jpg?width=2048&height=1536)

This module is composed of several screen controls distributed through 8 columns per bank; each column has, from top to bottom, a switch, a knob, a fader and a pad.

With four banks available, this means you have a total of 128 programmable controls, 32 per bank.

As all modules it has two modes: the MIDI mode, that can be used to control MIDI (external hardware, apps, etc), and the LIVE mode, which can be used to control Ableton Live parameters.

Depending on the mode selected, you will find different sections in the status bar at the top of the screen:

- **MODE** - Toggle between MIDI and LIVE modes.
- **DEVICE (MIDI MODE)** - Select output MIDI device.
- **CHANNEL (MIDI MODE)** - Select output MIDI channel.
- **PARAMETER** - Shows the CC number (MIDI MODE) or the Ableton Live parameter (LIVE MODE) of the last touched control.
- **VALUE** - Shows the value sent by the last touched control.
- **BANK** - Switch between the four different banks of controls.
- **ASSIGN** - Enter control assign mode. Pressing a control will open the [MIDI Assign panel](#assigning-a-custom-midi-cc) (MIDI MODE) or the [Live Assign](#assigning-an-ableton-live-parameter) (LIVE MODE).
- **IMPORT** - Import banks from a JSON file.
- **EXPORT** - Export all banks as a JSON file.

By default, the CC values are distributed in an ascending order in each column and bank, from 0 to 127. This means that the first control of bank 1 is by default mapped to CC 0, while the last screen control, on bank 4 is by default mapped to CC 127. Nevertheless, all these parameters can be customized, giving you the possibility to adapt this section to your needs.

## Assigning a custom MIDI CC

To customize the MIDI mapping (MIDI mode), tap ASSIGN, then tap the control you wish to change. This will open a pop-up for editing the name, color, MIDI channel, CC number, min and max values, and snap options. **RESET** resets the mapping to its default state.

**SNAP** enables snapping knobs and faders to a designated **SNAP VALUE** once the control is released.

![LK Midi Controller Module CC Assign](/lk/images/controller/midi-assign.png)

## Assigning an Ableton Live Parameter

To control parameters in Live mode, press ASSIGN and select the LK control you want to map. Change the parameter you want to assign in Ableton Live; the name of the parameter will be displayed on the screen. Press SAVE to confirm.

![LK Midi Controller Ableton Live Parameter assign](/lk/images/controller/live-assign.png)

[Learn all about the XY-Pad Module.](xy-pad)
