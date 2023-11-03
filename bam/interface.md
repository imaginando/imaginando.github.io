# Interface overview

BAM is a groovebox style application ready for full autonomous music
production. It comes with sound engines, effects units, a mixer, various
panels for MIDI clips and automation editing as well as a factory
soundbank.

BAM’s interface consists of a fixed horizontal toolbar across the top, a
dynamic three-section main work area, and a fixed horizontal toolbar
across the bottom.

<img src="/bam/images/interface/interface-overview.png" alt="BAM interface overview" />

## Top toolbar

<img src="/bam/images/interface/interface-top-toolbar.png" alt="BAM interface top toolbar"/>

- **(A)** Menu icon - open BAM’s menu
- **(B)** MIDI learn - activate MIDI mapping mode and select highlighted controls to map to connected MIDI devices
- **(C)** Clock source (standalone app only) - choose between internal, external MIDI Clock, or Ableton Link
- **(D)** Tempo - set project tempo and adjust the volume of built-in metronome
- **(E)** Project - open project manager to load factory projects or locally saved projects
- **(F)** Create new project
- **(G)** Save Project icon - Save current project
- **(H)** Revert project to last manually saved state
- **(I)** Open previous project in current bank
- **(J)** Open next project in current bank
- **(K)** Open sample manager

### BAM Menu

- **Profile** - Login to Imaginando account
- **MIDI** (Standalone app only) - enable/disable available MIDI in/out ports
- **Settings**
    - **Audio Driver** (Windows standalone app only) - select ASIO or WASAPI drivers
    - **Sample rate** (standalone app only) - select sample rate
    - **Buffer size** - (standalone app only) - select audio buffer size
    - **Window scale** - resize BAM UI size/scale
- **About** - details about app version number, publisher, and production credits
- **Help** - open BAM´s user manual in a web browser

## Top Section - Device rack

<img src="/bam/images/interface/interface-top-section.png" alt="overview-rack-section.png" />

- **TRIGGER** - controls the behavior of some note properties
- **MODULATORS** - envelope based and low frequency oscillator modulation
- **ENGINE** - the synthesis source/generator of the tracks
- **FX** - Effects processing for the Engines. Two available per track
- **TRACK MIXER** - single track mixer parameters

## Middle Section - Main panels

<img src="/bam/images/interface/interface-main-panels.png" alt="BAM interface main panels" />

In this section we have the panels for:
- **(A) MATRIX** - MIDI Clip and Scene launcher
- **(B) TIMELINE** - Step Sequencer
- **(C) AUTOMATIONS** - Clip-based parameter step-modulation editor
- **(D) COMPOSER** - Piano roll MIDI clip editor
- **(E) MIXER** - 16 track mixer plus master and return

On the bottom part of this middle section you have a number representing
each of the 16 tracks of BAM and one more for the Master channel. You
can press any of them to select a track.

## Lower Section - Performance area

There are 16 pads which trigger the default note of each track´s engine,
and provide a visual representation of each track’s audio in real time.

<img src="/bam/images/interface/interface-track-pads.png" alt="BAM interface performance area" />

To the right there are four toggle buttons that when active perform the
following actions:
- **KBD** - switch to keyboard mode (see next section)
- **SOLO** - select tracks to solo
- **MUTE** - select tracks to mute
- **ARM** - select tracks to arm for performance and recording

Tip: You can SOLO/ARM multiple tracks by using the SHIFT keys located at
the bottom left and right of BAM’s interface:

<img src="/bam/images/interface/interface-shift-keys.png" alt="BAM interface SHIFT keys" />

On desktop you can use the shift keys of your computer keyboard to
activate SHIFT function.

## Keyboard mode (KBD)

<img src="/bam/images/interface/interface-kbd-mode.png" alt="BAM interface Keyboard mode (KBD)" />

Keyboard mode changes the pads into note triggers for the currently
selected track engine, arranged like piano keys. With SHIFT active you
can drag the keyboard horizontally to scroll the available notes, and
drag vertically to zoom/resize the keys. While Keyboard mode is active
the toggle buttons change accordingly:

- **TRK** - switch back to pad trigger mode
- **OCT +** - raise the values of all note triggers by one octave
- **OCT -** - lower the values of all note triggers by one octave
- **PANIC** - panic button to stop all audio

## Bottom toolbar

<img src="/bam/images/interface/interface-bottom-toolbar.png" alt="BAM interface bottom toolbar" />

The bottom toolbar consists of several different functions:

- **(A) SHIFT button** - provides additional functions for some tools when active
- **(B) DSP usage meter** - displays the current level of DSP available being used by BAM
- **(C) Show/hide top section** - expands and minimizes the upper section (device rack)
- **(D) Show/hide bottom section** - expands and minimizes the lower section (performance area)
- **(E) UNDO button** - UNDO the last performed action
- **(F) REDO button** - revert the last UNDO function
- **(G) PLAY button** - start project playback
- **(H) STOP button** - stop project playback
- **(I) RECORD button** - enables recording for armed track(s)
- **(J) RE-ENABLE automation button** - This is used for reactivation of an existing step automation, when manual operation of parameters has temporarily overwritten the automation in currently playing clips.
- **(K) EXPORT manager**
- **(L) MIDI mapping manager**
- **(M) Settings menu**
- **(N) SHIFT button** - provides additional functions for some tools when active

Note: When using BAM AUv3 plugin in an iOS host DAW, the top and bottomsections cannot both be displayed at the same time. Expanding either section will automatically hide the other.

## Preferences menu

<img src="/bam/images/interface/interface-preferences-menu-general.png" alt="BAM interface general preferences menu" />
<img src="/bam/images/interface/interface-preferences-menu-performance.png" alt="BAM interface performance preferences menu" />

### General

- **Engine windows always on top** - toggles whether pop-up Engine windows always render in front of the main BAM window. When this setting is disabled, clicking the main BAM window will bring it to the front and Engine windows will render behind it.
- **Open Engine windows by default** - when adding a new engine or changing an existing engine to a different type, if this setting is active, the main interface of the new engine window will always automatically open
- **Recording Countdown** - the number of ‘count in’ bars before recording starts each time the record button is pressed. This is represented by the metronome playing the respective number of bars, with the first beat of each bar indicated by a higher pitch note.
- **Always select master track when selecting mixer** - when active, switching to the MIXER panel will automatically select the master track.
- **Auto add engine parameters to automations list** - when active, adding a new engine or re-selecting the engine type will automatically add all of its parameters to the automations panel list
- **Auto select tracks when pressing pads** - when active, clicking any of the track pads automatically selects that track.
- **Arm track on selection** - when active, selecting any track number will automatically arm the selected track (and unarm any other currently armed tracks). When used in combination with the ‘Auto select tracks when pressing pads’ setting, clicking any track pad will select and arm the track simultaneously.
- **Autosave Frequency** - enables auto saving of the project state, based on a regular time interval in minutes (a choice of 1, 2, 5 or 10 minute intervals), or disables auto save when set to ‘off’.

### Performance

- **Trigger Quantization** - the time period expressed in units of
bars/note length that triggering a clip or scene synchronizes the start
of playback to (sometimes referred to as onset timing correction of
triggering).
- **Recording Quantization** - when recording MIDI notes they will automatically quantize (snap) to the closest note position to the specified note length division. When set to off, no quantization is applied.
- **Select clip on trigger -** when active, triggering a clip will also select it.
- **Select clips when scene is triggered by follow action -** when active, any scene triggered by a follow action will automatically select all of the scene’s clips when playback of the scene commences.
- **Change clip properties on beat time -** when active, properties of the clip that can be changed on the TIMELINE and AUTOMATIONS panel wait for the next beat to take effect.
