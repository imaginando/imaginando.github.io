# Overview

FRMS features a clean minimal interface that can help on the control of advanced concepts through a simple and easy to use design. The interface consists of a main window that has a status bar on the top, a collapsable menu at the left, two layer panels at the center and a performance zone at the bottom. The layering system is composed of several tabs for easy access to the different parameters and functionalities. Through the use of two separate layer visualizations, it is possible to manage an intuitive and easygoing workflow using FRMS as a production tool or as an instrument for live performances.

<img alt="FRMS Main Screen" align="center" src="images/overview.png" style="padding: 0px;"/>
<br/>
<br/>

The following features are found on **FRMS**'s status bar:

- **Midi Learn** - toggle midi learn on and off
- **Clock Source** - Selection of the engine clock source. It can be internal, midi clock or ableton link
- **Tempo** - main session tempo
- **Patch** - indicates the currently selected patch. Tap it to open patch browser

## Midi learn

The Mapping feature of **FRMS** allows the mapping of its parameters for remote control by a MIDI controller.

Toggle the MIDI Learn function by tapping it and **FRMS**'s controls will get darker. When the desired mapping parameter is selected, it will get highlighted \(if the parameter doesn't have any assignment it will be labeled as N/A\).

Once a message from the MIDI Device is received, it will be mapped and displayed on **FRMS**. Once you are done with the mappings, turn off MIDI Learn on the status bar and **FRMS** is ready to operate with the given assignments.

## Tempo

The tempo setting, controls the value of **FRMS**'s internal clock. If FRMS is working in slave mode (as a plugin in a DAW or as a inter-app audio node), the tempo is defined by the host.

## Patch

Tapping here opens the patch browser where it is possible to navigate between the different banks of patches and select any of the available **FRMS** patches.

## Status bar icons

On the right side of the status bar are 5 icons:

- **Disk**

  This opens the save menu where you can name/save the current patch state as either a new patch, or overwrite an existing one, in either the local or cloud bank.

- **Revert**

  This resets the current patch back to its original saved state. (This button is only active/available if changes have been made to a saved patch - to indicate this, an asterisk will appear to the right of the patch name.)

- **Random**

  When pressed this will assign a random value to each parameter.

- **Up arrow**

  This selects the previous patch from the list of patches in the currently selected bank.

- **Down arrow**

  This selects the next patch from the list of patches in the currently selected bank.

[See next how to use FRMS layers.](layers)
