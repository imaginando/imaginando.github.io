# Loading your track and making visuals react to it

Let’s start with something simple — loading your own audio file and making the visuals respond to it.

### Load your music

- Open the **Audio Player** by clicking its icon in the left sidebar.
- Load your music file (wav, mp3, etc.) by dragging it onto the panel or loading through the browser.
- Start playback by clicking the Play icon or tapping the waveform.
- Your song should now be playing.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-load-audio.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Load a Shader Material onto a Layer

- Open the **Mixer** panel.
- Select **Layer 1** — this layer uses the Wobbly Ring shader by default, which we’ll be using for this example. You can right click the layer thumbnail to open the context menu and select **Materials** to browse other materials.
- Make sure Layer 1 is **enabled**. You should be seeing your material on the render display.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-1-layer.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Set up an Audio Modulator

- In the bottom-right corner, find and open Modulation Sources → AMs (Audio Modulators). Select AM 1.
- Make sure the AM is in Gate mode. Set Input to ‘Player’ so it listens to your music.
- Adjust the Threshold — this controls when the modulator activates. Set it so the waveform crosses the line at the peaks, the loudest parts of the song.
- This creates an envelope follower — basically, a signal that goes up and down with the energy of the music. This is the signal that your shader will react to.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-1-am.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Connect the Sound to a Visual Parameter

- With the Mixer still open and your Layer 1 selected, look for a parameter you want to modulate. Let’s use Glow.
- Click and hold on the Glow knob. The Matrix will open in the Layer Properties panel on the right.
- In the Matrix, find the column for AM 1, and follow it to the row labeled Glow. Click and drag that cell to set the modulation amount. Drag right for Glow to increase with the music. Drag left for Glow to decrease with the music.
- You should now see the Glow effect pulsing with your track.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-1-matrix.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

Play around with the modulation amount and the AM 1 settings (especially Threshold and Gain). You’ll get a feel for how to make the reaction tighter or smoother.

Explore the other modulators as well to understand how they work. The **LFOs** are low frequency oscillators that constantly move, while the **EGs** generate envelopes from MIDI input. The method for setting up a visual modulation is the same: open the Matrix, find the proper column and row for your source and target, and set a modulation amount.

---

[Previous: Getting Started: Basic Examples](getting-started)<br>
[Next: Using the visualizers](visualizers)
