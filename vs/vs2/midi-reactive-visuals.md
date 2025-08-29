# Setting up MIDI reactive visuals

MIDI notes trigger the EG (envelope generator) in the **Modulation Sources**, which then control the Layer’s alpha. This makes the visuals appear when notes are played.

In this example, we’ll make a shader respond to MIDI input from a MIDI controller. If you don’t have a MIDI controller, you may use one of the included factory MIDI files instead.

### Load a Shader Material onto a Layer

- Open the **Mixer** panel and select **Layer 1**. Double click it to open the **Material Browser**.
- Navigate to **Shaders → Factory**. You should see a selection of factory visualizers. We’ll use the Wobbly Ring shader for this example.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-3-shader.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Enable MIDI Trigger mode

- In the **Layer Parameters**, change the **Trigger** mode to MIDI. This allows the shader to respond to MIDI note input and display multiple visual “voices.”

**Note:** The shader will disappear from view. This is expected. It only appears when MIDI notes are played.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-3-trigger-mode.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Provide MIDI input

- If you have a MIDI controller: Connect it and play a few notes. You should see the shader react.
- No MIDI controller? Open the **Audio Player**. Open the browser and load one of the factory demo files. These demos include preloaded MIDI tracks that will trigger visuals when played.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-3-midi.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Adjust EGs (Envelope Generators)

- Open the **EGs** tab under **Modulation Sources**.
- Adjust the Attack, Decay, Sustain and Release times to change how the shader appears when you play a note. For instance, high attack and release values will make it fade in slowly while you hold the note, and disappear slowly once you let go. Small values will make it snappy.

**Note:** These envelopes are triggered by the MIDI notes. **EG 1 is assigned to modulate the Layer’s Alpha by default in the Matrix**. Removing this modulation will deactivate the reactivity. There are two separate EGs.

<div style="text-align: center;">
<figure style="text-align: center;">
  <video src="/vs/vs2/videos/example-3-eg.mp4?raw=true" controls></video>
  <figcaption style="font-size: 0.9em;"></figcaption>
</figure>
</div>

### Optional: Adjust Layer Input settings

- With your Layer selected, open the Input tab in the Layer Properties panel (right side of the interface).
- In the MIDI section, you can:
  - Filter by Channel — useful if you want different layers to respond to different MIDI tracks.
  - Set Note Range — limit which notes will trigger the shader.
  - Set Voice Mode to Poly (up to 4 voices shown at once) or Mono (only the most recent note is shown).

---

[Previous: Using the Visualizers](visualizers)<br>
[Next: VS as a plug-in in your DAW](vs-plugin)
