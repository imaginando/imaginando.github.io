# TIMELINE Panel

<img src="/bam/images/timeline/bam-beat-maker-timeline-panel.png" width="1000" alt="Timeline panel" />

<br>

This panel presents the tracks along with their selected clips as a step sequencer. Each of the clips may have different lengths, playback speeds and directions, among other properties.

Here you can write/delete notes on steps, with each step representing a 16th note. The default clip length is 16 steps, but may be expanded to a maximum of 256 steps. The number of steps is displayed next to the track name. 

The top toolbar lets you change various clip properties as well as view and loop specific sections of the clips.

When you toggle a step, the created note takes after the Note parameter in the Trigger Device (existing note automations will override this). If keys are being pressed on an external MIDI controller or on BAM's internal keyboard while toggling a step, notes will be created according to the pressed keys. If multiple keys are pressed, a chord will be written.


<img src="/bam/images/timeline/bam-beat-maker-timeline-panel-overview.png" width="1000" alt="BAM Timeline panel overview" />

<br>

- **(A)** Select pencil type
    - Fill Pencil - Fill each step with a note
    - Long Note Pencil - Create long notes
    - Smart Pencil - Create evenly spaced notes
- **(B)** Create random step sequence
- **(C)** Delete all steps
- **(D)** Select clip time signature
- **(E)** Select clip swing
- **(F)** Clip direction playback
- **(G)** Clip playback speed multiplier
- **(H)** Loop zone on/off
- **(I)** Reduce clip length
    - Remove one step
    - Halve length
- **(J)** Clip page and loop zone selection
- **(K)** Increase clip length
    - Duplicate length
    - Add one step
- **(L)** Track selection

<br>

Pressing and holding or right clicking **(L)** will open the track's context menu:

- **Copy** - Copy the track's engines and selected clip
- **Paste** - Paste copied contents
- **Rename** - Rename track
- **Clear** - Clear all track contents

<br>

SHIFT functions:
- View and select loop zone in navigator