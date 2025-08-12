# Audio Player

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/main-panel-audio-player.png" alt="Audio Player" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>

The Audio Player can be selected in the **Main Panel selection**, located in the left sidebar. It allows **loading and playing audio and MIDI**.

To load an audio or MIDI file, drag it onto the Audio Player, or click the browser icon <img src="/vs2/images/player-browser.png" alt="Audio Player Browser Icon" style="height: 20px" /> to open the file browser and load from disk. Loading any of the files from the Demos folder will load both the audio and the respective MIDI. You can load **.wav**, **.flac**, **.mp3**, **.aif**, **.aiff**, **.mid**, and **.midi** files.

- **Audio settings**
    - **Auto play on record** - If enabled, the player automatically begins playback when a recording starts.
    - **On stop, end recording** - If enabled, any ongoing recording stops when the player reaches the end and doesn’t loop.
- **Transport time** - Clicking anywhere on the audio waveform lets you jump to that exact point in the track and start playback from there.
- **Play** - Begin playback from the start.
- **Stop** - Stop playback.
- **Loop** - If enabled, loops the playback.
- **Gain** - Gain control for the audio.
- **Open browser** - Open the built-in browser for loading audio and MIDI files.

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/main-panel-audio-player-midi.png" alt="Audio Player with MIDI loaded" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">Audio Player with a MIDI file loaded. Channels are displays in rows, and the notes as dots.</figcaption>
</figure>
</div>

The player output is available as an input in the [Audio Modulators](modulation-sources#audio-modulators) and [Layer Properties → Input](layer-properties#input). If you want to set up audio reactivity to a recorded song or an audio file, start by loading it into the player. Then handle it in the AMs and/or in the Layer Properties. See [Loading your track and making visuals react to it](audio-reactive-visuals) and [Using the Visualizers](visualizers).

***
[Previous: MIDI Mapping](midi-mapping)<br>
[Next: Patch Manager](patch-manager)