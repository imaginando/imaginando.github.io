# Using the Visualizers

Visualizers are special shaders designed to directly respond to audio input, unlike regular shaders which can only be controlled by modulators (like AMs or LFOs).

### Load your music
- Open the **Audio Player** by clicking its icon in the sidebar.
- Load your music file (wav, mp3, etc.) by dragging it onto the panel or through the browser.
- Start playback by clicking the **Play** icon or clicking the waveform. 
- Your song should now be playing.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="https://github.com/imaginando/imaginando.github.io/blob/master/vs/vs2/videos/example-load-audio.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Load a visualizer shader onto a layer
- Open the **Mixer** panel and select **Layer 1**. Right click it and open the **Material Browser**.
- Navigate to **Visualizers → Shaders**. You should see a selection of factory visualizers. 
- Select **Bars Spectrum 1** and load it.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="https://github.com/imaginando/imaginando.github.io/blob/master/vs/vs2/videos/example-2-visualizer.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Set the audio input 
- With your layer selected, go to the **Layer Properties** on the right and open the Input tab. 
- Scroll to the **Audio** section and set **Source** to ‘Player’ so it listens to your music.
- Adjust the **Gain** to change how loud the audio appears to the visualizer.
- You should now see your visualizer react to your music.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="https://github.com/imaginando/imaginando.github.io/blob/master/vs/vs2/videos/example-2-layer-input.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

**Important Note:** Some visualizers are **waveform-based**, while others are **spectrum-based**. The factory visualizers are named accordingly, including 'waveform' or 'spectrum' in their names. The difference between them is that waveform visualizers will display the audio waveform, while spectrum visualizers display the frequency data (FFT bins).

The **Buffer Size** control under **Layer Properties → Input** applies only to **waveform shaders**. It controls how much of the waveform is shown, up to 2 seconds. It has no effect on spectrum visualizers. 

Likewise, the **Spectrum Speed** control applies only to **spectrum visualizers**, and controls how quickly the visual reacts to incoming audio. It has no effect on waveform visualizers.

For this example, we’ve used a spectrum-based visualizer. Explore both types and the Buffer Size / Spectrum Speed controls to understand them better.

### Optional: Modulate other parameters 

Visualizers, like regular shaders, may also have additional parameters — position, height, etc. These can still be modulated through the **Matrix**. 
See [Loading your track and making visuals react to it](audio-reactive-visuals) for more details on how to use the Matrix.

***
[Previous: Loading your track and making visuals react to it](audio-reactive-visuals)<br>
[Next: Setting up MIDI reactive visuals](midi-reactive-visuals)