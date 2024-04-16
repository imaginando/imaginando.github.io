# AUTOMATIONS Panel

<img src="/bam/images/automations/bam-beat-maker-automations-panel.png" width="1000" alt="BAM Automations panel overview" />

<br>

This panel provides clip-based step automation of the parameters of the
track’s devices. It also features the
timeline of the currently selected clip, which can be edited using the
same pencil types as in the TIMELINE panel. Multiple parameters can be
automated by adding them to the scrollable list on the left using the
LEARN button or enabling the SHIFT button and pressing the parameter you wish to add. Conversely you
can remove parameters from the list by selecting them and then pressing
the trash icon next to LEARN. 

Selecting a parameter from the list shows
its automations represented by a series of vertical bars, one for each
step of the clip. You can draw/erase automations manually by using the
automation tools, plus there are preset ramp-shape shortcuts and
randomisation functions also present on the toolbar. For each parameter,
any step that is automated appears brighter in color, with non-automated
steps shaded darker. Using the erase tool resets a step’s automation.

<img src="/bam/images/automations/bam-beat-maker-automations-panel-overview.png" width="1000" alt="BAM automations panel overview" />

<br>

- **(A)** Select pencil type
    - Fill Pencil - Fill each step with a note
    - Long Note Pencil - Create long notes
    - Smart Pencil - Create evenly spaced notes
- **(B)** Select automation tool type
    - Pencil - Draw automations values
    - Dice - Creates a probability range from which a value will be randomly chosen every time the step is played
    - Eraser - Delete the step automation and probability range
- **(C)** Horizontally mirror automation for the selected clip pages
- **(D)** Create preset automations for the selected clip pages
    - Ramp up
    - Ramp up and down
    - Ramp down and up
    - Random
- **(E)** Change clip length and manage loop/pages (see [Timeline panel overview](timeline))
- **(F)** Automation parameter list
- **(G)** Add parameters to automation list
- **(H)** Delete selected parameter from automation list

SHIFT functions:
- When enabled, pressing a parameter adds it to clip automations
- Toggle between pencil and eraser on the automation tool type
- View and select loop zone in clip page view

## How to automate a parameter

These are the different ways to automate parameters in BAM:

- Adding the parameter to the Automations page through LEARN 
- Enabling SHIFT and manipulating a parameter
- Automating a parameter for a single step by changing the parameter value while pressing and holding the step in the Automations or Timeline panels. (iOS only)
- Manipulating a parameter directly while the record button is active

Parameter automations are always associated with a clip. Once learned, changes to the parameter and its displayed value are linked to the selected clip. All of the listed actions will add the parameter to the clip's automation list.

Whenever a parameter is automated or modulated you can monitor
its activity through a small dot moving around the parameter knob showing the automated and/or modulated value.

If a parameter control is manipulated directly while it is being
automated, this will bypass its automation and the icon near the Record
button (re-enable automation) will light red showing that automations
have been bypassed. By pressing this icon BAM will return automations to
normal.

<img src="/bam/images/automations/bam-beat-maker-automations-re-enable-automations.png" width="450" alt="BAM re-enable automation button" />

<br>