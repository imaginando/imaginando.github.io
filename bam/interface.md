# **Interface overview**

BAM’s interface consists of a fixed horizontal toolbar across the top, a
dynamic three-section main work area, and a fixed horizontal toolbar
across the bottom.

## Top toolbar

<img src="/bam/images/interface/overview-top-toolbar.png" width="675" alt="BAM overview top toolbar" />

1.  Menu icon - open BAM’s menu
2.  MIDI learn - activate MIDI mapping mode and select highlighted
    controls to map to connected MIDI devices
3.  Clock source (standalone app only) - choose between internal,
    external MIDI Clock, or Ableton Link
4.  Tempo - set project tempo and adjust the volume of built-in
    metronome
5.  Project - open project manager to load factory projects or locally
    saved projects
6.  Save Project icon - Save current project
7.  Revert project to last manually saved state
8.  Open previous project in current bank
9.  Open next project in current bank
10. Open sample manager

### BAM Menu

- **Profile** - Login to Imaginando account
- **MIDI** (Standalone app only) - enable/disable available MIDI
    in/out ports
- **Settings**
    - **Audio Driver** (Windows standalone app only) - select ASIO or
        WASAPI drivers
    - **Sample rate** (standalone app only) - select sample rate
    - **Buffer size** - (standalone app only) - select audio buffer
        size
    - **Window scale** - resize BAM UI size/scale
- **About** - details about app version number, publisher, and
    production credits
- **Help** - open BAM´s user manual in a web browser

## Top Section - Device rack

<img src="/bam/images/interface/overview-rack-section.png" width="686" alt="BAM overview rack section" />

- **TRIGGER** - controls the behavior of some note properties

- **MODULATORS** - envelope based and low frequency oscillator
    modulation

- **ENGINE** - the synthesis source/generator of the tracks

- **FX** - Effects processing for the Engines. Two available per track

- **TRACK MIXER** - single track mixer parameters

## Middle Section - Main panels

<img src="/bam/images/interface/overview-middle-section.png" width="687" alt="BAM overview middle section" />

In this section we have the panels for:

1.  **MATRIX** - MIDI Clip and Scene launcher
2.  **TIMELINE** - Step Sequencer
3.  **MODULATIONS** - Clip-based parameter step-modulation editor
4.  **COMPOSER** - Piano roll MIDI clip editor
5.  **MIXER** - 16 track mixer plus master and return

On the bottom part of this middle section you have a number representing
each of the 16 tracks of BAM and one more for the Master channel. You
can press any of them to select a track.

## Lower Section - Performance area

There are 16 pads which trigger the default note of each track´s engine,
and provide a visual representation of each track’s audio in real time.

<img src="/bam/images/interface/track-pads.png" width="688" alt="BAM track pads"/>

To the right there are four toggle buttons that when active perform the
following actions:

- **KBD** - switch to keyboard mode (see below image)
- **SOLO** - select tracks to solo
- **MUTE** - select tracks to mute
- **ARM** - select tracks to arm for performance and recording

Tip: You can SOLO/ARM multiple tracks by using the SHIFT keys located at
the bottom left and right of BAM’s interface.

<img src="/bam/images/interface/shift-key.png" width="28" alt="BAM shift button" />

## Keyboard mode (KBD)

<img src="/bam/images/interface/kbd-mode.png" width="687" alt="BAM Track Pads Keyboard mode" />

Keyboard mode changes the pads into note triggers for the currently
selected track engine, arranged like piano keys. You can drag the
keyboard horizontally to reveal available notes above and below, as well
as zooming in and out by dragging the mouse over it vertically. While
Keyboard mode is active the toggle buttons change accordingly:

- **TRK** - switch back to pad trigger mode
- **OCT +** - raise the values of all note triggers by one octave
- **OCT -** - lower the values of all note triggers by one octave
- **PANIC** - panic button to stop all audio

## Bottom toolbar

<img src="/bam/images/interface/bottom-toolbar.png" width="688" />

The bottom toolbar consists of several different functions:

1.  **DSP usage meter** - displays the current level of DSP available
    being used by BAM
2.  **Show/hide top section** - expands and minimizes the upper section
    (device rack)
3.  **Show/hide bottom section** - expands and minimizes the lower
    section (performance area)
4.  **UNDO button** - UNDO the last performed action
5.  **REDO button** - revert the last UNDO function
6.  **PLAY button** - start project playback
7.  **STOP button** - stop project playback
8.  **RECORD button** - enables recording for armed track(s)
9.  **RE-ENABLE automation button** - This is used for reactivation of
    an existing step automation, when manual operation of parameters has
    temporarily overwritten the automation in currently playing clips.
10. **EXPORT manager**
11. **MIDI mapping manager**
12. **Settings menu**
13. **SHIFT button**

Note: When using BAM AUv3 plugin in an iOS host DAW, the top and bottom
sections cannot both be displayed at the same time. Expanding either
section will automatically hide the other.

## Settings menu

<img src="/bam/images/interface/settings-menu.png" width="384" alt="BAM Settings menu" />

### General

- **Engine windows always on top** (desktop only) - toggles whether
    pop-up Engine windows always render in front of the main BAM window.
    When this setting is disabled, clicking the main BAM window will
    bring it to the front and Engine windows will render behind it.
- **Open Engine windows by default** - when adding a new engine or
    changing an existing engine to a different type, if this setting is
    active, the main interface of the new engine window will always
    automatically open
- **Recording Countdown** - the number of ‘count in’ bars before
    recording starts each time the record button is pressed. This is
    represented by the metronome playing the respective number of bars,
    with the first beat of each bar indicated by a higher pitch note.
- **Always select master track when selection mixer** - when active,
    switching to the MIXER panel will automatically select the master
    track each time the panel is opened.
- **Auto add engine parameters to modulation list** - when active,
    adding a new engine or re-selecting the engine type will
    automatically add all of its parameters to the automations panel
    list
- **Auto select tracks when pressing pads** - when active, clicking
    any of the track pads automatically selects that track.
- **Arm track on selection** - when active, selecting any track number
    will automatically arm the selected track (and un-arm any other
    currently armed tracks). When used in combination with the ‘Auto
    select tracks when pressing pads’ setting, clicking any track pad
    will select and arm the track simultaneously.
- **Autosave Frequency** - enables auto saving of the project state,
    based on a regular time interval in minutes (a choice of 1, 2, 5 or
    10 minute intervals), or disables auto save when set to ‘off’.

### Performance

**Trigger Quantisation** - the time period expressed in units of
bars/note length that triggering a clip or scene synchronizes the start
of playback to. (sometimes referred to as onset timing correction of
triggering)

**Recording Quantization** - when recording MIDI notes they will
automatically quantize (snap) to the closest note position to the
specified note length division. When set to off, no quantization is
applied.

**Select clip on trigger -** when active, triggering a clip will also
select it.

**Select all scene clips when triggered by follow action -** when
active, any scene triggered by a follow action will automatically select
all of the scene’s clips when playback of the scene commences.

**Change clip properties on beat time -** when active, properties of the
clip that can be changed on the TIMELINE and AUTOMATIONS panel wait for
the next beat to take effect.
