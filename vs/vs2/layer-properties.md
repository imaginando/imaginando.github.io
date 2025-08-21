# Layer Properties

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/layer-properties.png" alt="Layer Properties" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">The Layer Properties panel, located on the right side of the interface.</figcaption>
</figure>
</div>
<br>

This panel houses material-specific settings, as well as input settings and the **Matrix**. Only the relevant sections for the current Layer are available to tweak, and the others will be collapsed and disabled. This panel is always linked with the selected Layer.

## Input

Layers can receive both MIDI and audio to trigger the materials and/or feed the visualizer shaders. You can get polyphony in the Layers by sending MIDI note events to a Layer, each note representing a given “voice” that will trigger a material. You can trigger up to 4 voices at a time.

### MIDI

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/properties-input-midi.png" alt="Layer MIDI Input" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

MIDI can be used to trigger the Layer materials, making them appear with note on events and disappear with note off events. The result is that the material will be on screen for the duration of the note.

- **Channels** - MIDI channels which the Layer will be listening to. MIDI events from the other channels won’t be received.
    - **All** - Select all channels.
    - **Reset** - Only select channel 1.
- **Note Range** - The range of notes that will be accepted by the Layer. Notes outside of the range won’t be received.
- **Voice Mode**
    - **Poly** - Layer will be in polyphonic mode, letting you trigger up to 4 voices of the current material. You can change the maximum number of voices in the [Settings](settings).
    - **Mono** - You’ll only be able to play one voice at a time.
- **Glide** - This is related to the KBD source in the Matrix. It's the time it will take for the note to reach its value from the last received note, making a ramp rather than a jump.

### Audio

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/properties-input-audio.png" alt="Layer Audio Input" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

These settings are only relevant when using shader materials which process audio data directly, such as the ones from the Visualizers category. Audio input is required for them to work properly. See [Using the Visualizers](visualizers) for more information.

- **Source** - The source of the audio sent to the material. It can be audio from VS’s Player or one of the input audio device’s channels. When using VS as a plug-in in a DAW, the stereo bus '1/2' contains the audio entering the plug-in.
- **Gain** - Gain applied to the signal fed to the materials. It won’t affect the original source.
- **Buffer Size** - The size of the audio buffer sent to the materials. Only relevant for Visualizers using the waveform information. Larger values will retain more information, often resulting in a larger chunk of audio being displayed.
- **Spectrum Speed** - Spectrum frequency bin decay rate. Only relevant for Visualizers using the spectrum information. Slower values will make smoother spectrums.

## Color

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/properties-color.png" alt="Layer Color" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

When using shader or text materials in a Layer, you can adjust their color. In all Layers except the background Layer, you can also change the **blend mode** applied to the Layer.
Blend modes determine how Layers interact visually by applying different operations to their color information. By default, Layers use the Normal blend mode, meaning upper Layers visually appear above lower ones in the stack.

- **Saturation/Brightness picker** - You can control the saturation (X axis) and brightness (Y axis) of the current color. 
- **Hex Color** - Enter the color in a hex format. (eg: #ffffff)
- **Invert Color** - Inverts the hue of the current color.
- **Hue** - Changes the hue factor of the color.
- **Blend mode** - Sets the blend mode for the current Layer. The available blend modes are: Normal, Soft Add, Overlay, Screen, Lighten, Subtract Soft, Reverse Subtract, Subtract, Add, Multiply, Darken, Exclusion.

## Text

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/properties-text.png" alt="Layer Text" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

These settings will only be available when using the Text material. You can add text items to a pool, which can be scanned through in real time with the **Pool Index** parameter.

- **Font** - Selects the text font.
- **Size** - Selects the font size.
- **Style**
    - **B** – Applies bold styling to the text.
    - **/** – Applies italic styling to the text.
    - **U** – Applies an underline to the text.
- **H. Alignment** – Sets horizontal alignment: Left, Center, or Right. This defines the anchor point from which the text expands horizontally.
- **V. Alignment** – Sets vertical alignment: Top, Center, or Bottom. This defines the anchor point from which the text expands vertically.
- **Width** – Defines the width of the virtual canvas in which the text is drawn, as a proportion of the rendering canvas. This determines where line breaks occur.
- **Pool** -  The pool of texts of the Layer. Pool items can be selected by clicking on them or using the Pool Index parameter of the Layer.
    - **+** - Add a new text entry to the pool.
    - **-** - Remove the selected pool entry.
    - **Drag** - Change the position of the entry in the pool.

## Video

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/properties-video.png" alt="Layer Video Properties" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

These settings will be available when using a video in a Layer.

- **Loop** - Choose whether the video will loop or not.
- **Restart** - When using the MIDI option, video will restart when the Layer receives a MIDI note on message.

## Matrix

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/properties-matrix.png" alt="Layer Modulation Matrix" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

This section is available in all Layers except the background Layer. It lets you modulate both Layer and material parameters, **adding motion and reactivity to your visuals.**

The Modulation Matrix is organized with the target parameters on the left and the modulation sources on top. The white bars under each modulation source show their respective values in real time.

There are two pages, one with the 2 EGs and 4 LFOs, and the other with the 4 Audio Modulators, as well as the Keyboard and Velocity sources.

When using a Layer in **MIDI Trigger Mode**, it will only respond to incoming MIDI note messages. **For this mode to function properly, either EG 1 or EG 2 must be assigned to modulate the Layer's Alpha parameter.** By default, the Matrix starts with EG1 modulating Alpha, so MIDI Trigger Mode works immediately upon activation.

To change a modulation amount, press a cell and drag up/down or left/right. The modulation amount can be positive or negative. To quickly locate a given parameter in the Matrix, simply long press it and the Matrix will be displayed along with the parameter highlighted.

Apart from the EGs, LFOs and AMs, which be explained in the next chapter, you have two other modulation sources:

- **KBD (Keyboard)** - The pitch of the note on events. The MIDI pitch 60 corresponds to the central point of the modulation (0). Higher notes will act as a positive modulation increasing with pitch, and lower notes will likewise act as a negative modulation.
- **VEL (Velocity)** - Velocity of the MIDI note on events.

***
[Previous: Material Browser](material-browser)<br>
[Next: Modulation Sources](modulation-sources)