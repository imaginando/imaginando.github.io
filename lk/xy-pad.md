# X/Y Pad Module

![LK X/Y Modulation Control Pad Module](https://www.imaginando.pt/images/products/lk/help/xy/overview.png)

This module is composed of several screen controls for distinct modulation tools, including four banks, three mappable axis per bank, one ASR envelope generator for the Z axis with configurable release mode and an LFO for automated X/Y pad modulation.

The **X/Y Pad** section has two modes: the **MIDI mode**, that can be used to control MIDI (external hardware, apps, etc), and the **Live mode**, which can be used to control different parameters in Ableton Live.

**Note**: These two modes can be used alternatively, each with different control assignments.

Depending on the mode selected, you will find different fields in the status bar, located at the top of the screen:

- **MODE** - allows toggling between Live and MIDI modes
- **TEMPO** - allows BPM adjustment for this section (LFO and Z axis ASR)
- **DEVICE** - selects the output MIDI device (MIDI mode only)
- **CHANNEL** - chooses the MIDI output channel (MIDI mode only)
- **SELECTED TRACK** - selects the MIDI track controlled by the MIDI pads (Live mode only).
- **TRACK ARMED** - toggles record arm on track ON or OFF (Live mode only).
- **REC. QUANT.** - enable and choose record quantization (Live mode only).

## The ASR envelope generator

The Z axis features an ASR (Attack, Sustain, Release) envelope generator.

**Attack** defines the amount of time it will take to get to the **Sustain** level while **Release** will define how much time it will take to get back to the value defined on the RELEASE MODE existing on the menu opened by the drag-able bar (see below). The ASR unit is triggered as soon as you press the pad.

**Note**: If nothing is assigned to the Z axis, then no meaningful behaviour will occur.

Two additional control functions are available: sync and hold. Sync allows the release time to be synced with the tempo while the hold function allows you to release the pad without triggering the release of the ASR.

## Module settings

As in other LK modules, on the bottom of the screen there is a split view that can be opened by dragging the green line in the middle of the bar or by tapping anywhere else on the bar. Inside are four columns of settings for the X/Y Pad:

- BANKS
- AXIS
- LFO
- RELEASE MODE.

Over the right side of the screen there is also a control section for the ASR envelope generator described below.

### Bank

There are 4 selectable and configurable banks for the X/Y PAD. Just choose the one you want to work on, edit what you want and it is already saved on that bank.

### LFO (Low Frequency Oscillator)

The integrated LFO unit provides you with additional modulation control on the X and Y axis. This unit has the following parameters:

- **Waveform** - toggle between three different kind of waveforms: sine, square, Saw.
- **Sync** - syncs the oscillator frequency with tempo
- **Behaviour** - choose between horizontal, vertical or linear behaviour.
- **Amount** - defines the amount of modulation applied to the axis
- **Rate** - defines the frequency of the oscillator
- **Delay** - defines the time LFO will take to start
  **Note**: the Z axis is not affected by the LFO.

### Release Mode

Release Mode allows the user to define the default position to which the X/Y cursor returns to. This means that whenever you release your finger from the pad, X and Y positions will tend to the point defined by the Relase Mode with the release time defined by the ASR envelope generator settings.

## Assigning a custom MIDI CC

To customize the MIDI mapping (MIDI mode), from the settings view, select the axis you want to map by tapping the correspondent button; this will automatically show you a list of CC values. Tap on the number of the value you want to map and finally tap OK to confirm.

![Axis assign on MIDI mode](https://www.imaginando.pt/images/products/lk/help/xy/axis-assign-midi-mode.png)

## Assigning an Ableton Live Parameter

To customize the parameters (in Live mode), again, from the settings view, the AXIS you want to map by tapping its mapping button and change the parameter you want assign on Ableton Live or using the Matrix devices section. Press OK to confirm.

![Axis assign live mode](https://www.imaginando.pt/images/products/lk/help/xy/axis-assign-live-mode.png)

[Learn all about the Chorder module.](chorder)
