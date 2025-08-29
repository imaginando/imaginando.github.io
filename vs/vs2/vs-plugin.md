# VS as a plug-in in your DAW

VS can run inside your DAW as an AU, VST, or VST3 plug-in. There are three common ways to use it:

## 1. Use VS as an instrument and receive MIDI

This lets you trigger visuals with MIDI from other tracks.

- Load VS (instrument) on its own instrument track.
- In your DAW, route MIDI from other tracks to this one.
- VS can receive MIDI on up to 16 separate channels, letting you trigger different layers independently. For information on how to use MIDI in VS, see [Setting up MIDI reactive visuals](midi-reactive-visuals).

**Note:** Your DAW must support MIDI routing to Instrument tracks, or to the plug-in directly. Check your DAW's documentation if you're unsure.

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/plugin-midi-route.png" alt="Routing MIDI to VS in Ableton Live 12" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">Example of MIDI routing set up in Ableton Live 12. The 'From Synth' and 'From Drums' tracks are created to aid sending the MIDI from the synth and drums tracks to VS.</figcaption>
</figure>
</div>
<br>

## 2. Use VS as an instrument and receive audio

Lets you send audio from other tracks to VS for audio-reactive visuals.

- Load VS (Instrument) on its own track.
- Route audio from another track into the VS track. The audio will come through the **1/2 stereo bus**, available in the **Audio Modulators** (A) and **Layer Properties → Input** (B). **\***

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/plugin-audio-route.png" alt="Routing audio to VS in Ableton Live 12" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">Example of audio routing in Ableton Live 12. The 'Audio to VS' track is created to aid sending the audio from the banjo track to VS. You could route the audio from the Main track instead, feeding VS your whole song. Note that the VS2 output is set to 'Sends Only' to avoid duplicating the audio signal.</figcaption>
</figure>
</div>
<br>

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/plugin-audio-route-input.png" alt="Routing audio to VS in Ableton Live 12" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">Your signal will be available in the Audio Modulators and in Layer Properties → Input as the '1/2' stereo bus.</figcaption>
</figure>
</div>
<br>

## 3. Use VSfx (effect version)

VSfx is the Effect version of VS. It can be placed directly on an audio track as an insert effect.

- Load VSfx on an audio or instrument track.
- The audio from that track is automatically sent into VS. Access the incoming signal via **Bus 1/2** in the **Audio Modulators** and **Layer Properties → Input**. **\***

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/plugin-vsfx.png" alt="Using VSfx in Ableton Live" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">VSfx in an instrument track in Ableton Live 12.</figcaption>
</figure>
</div>
<br>

**\*** For information on how to use audio in VS, see [Loading your track and making visuals react to it](audio-reactive-visuals) and [Using the Visualizers](visualizers).

---

[Previous: Setting up MIDI reactive visuals](midi-reactive-visuals)<br>
[Next: Material Editor: Making your own shaders](material-editor)
