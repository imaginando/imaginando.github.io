# Mixer Panel

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/main-panel-mixer.png" alt="Mixer Panel" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

In this panel you’ll be able to select and control Layers, edit material parameters, and manage the materials used in the Layers. VS offers a layout already familiar in the audio realm: a set of faders and solo/mute buttons.

You can select layers using the 1 – 9 number keys as shortcuts. See all shortcuts in the [Shortcuts](shortcuts) section.

## Parameters

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/panel-mixer-parameters.png" alt="Mixer Panel" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

- **Speed** - Common to all Layers, it will affect the speed of the shader materials and videos.
- **Custom Parameters** - The following 7 parameters are related to the material in use, so they change with each Layer material.
- **Trigger** - When using the MIDI Trigger Mode, the Layer will only display its content when MIDI note events are received. In this mode, make sure EG 1 or EG 2 are modulating the ALPHA parameter in the Matrix, otherwise you won’t be able to trigger the material.

Let’s dive deeper into the parameters for each material type:
- **Shader** - Each shader will have its own set of parameters which will control the given shader behavior.
- **Video / Image / Input Materials**
    - **Scale** - Scales the material.
    - **Rotation** - Rotates the material.
    - **X** - Changes the position in the x axis.
    - **Y** - Changes the position in the y axis.
    - **Fill Mode** (not available with Render Output)
    - **Fit** - Changes the material size so it can fit in the screen.
    - **Crop** - Crops the material so it can fill the screen.
    - **Start** (Video only) - Defines the starting point of the video.
    - **End** (Video only) - Defines the end point of the video.
- **Text**
    - **Scale** - Scales the text.
    - **Rotation** - Rotates the text.
    - **X** - Changes the x axis anchor point of text.
    - **Y** - Changes the y axis anchor point of the text.
    - **Pool Index** - Changes the current text, picking a new one from the pool (see [Layer Properties → Text](layer-properties#text)).
    - **Length** - Changes the length of the text. This will hide/show characters from the current text.

## Layers

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/panel-mixer-layer-strip.png" alt="Mixer Panel" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">Control strip for a single Layer.</figcaption>
</figure>
</div>
<br>

Here you have 8 Layers plus a Background Layer. Each of the first 8 Layers consists of:

- **Layer thumbnail** - Displays a preview of the material in use. The following interactions can be made:
    - **Press & Drag** - Move the Layer position.
    - **Right click** - Open the Layer context menu.
    - **Double click** - Open the [Material Browser](material-browser) for browsing and selecting the Layer material.
- **Left/Right Arrows** (only visible in the selected Layer) - Selects the previous and next materials.
- **Layer number** - Enables/disables Layer.
- **S** - Solo/unsolo Layer
- **Fader** - Controls the opacity (alpha) of the Layer.

The **background Layer** is fixed underneath all the other layers. Its Material Browser will only let you load media files, such as images and videos. It has the following parameters:

- **Alpha** - Controls the opacity of the material.
- **Scale** - Scales the material.
- **Rotate** - Rotates the material.
- **X** - Changes the X axis position.
- **Y** - Changes the Y axis position.
- **Rate** (Video only) - Changes the playback speed of videos.
- **Mode** (Video only)
    - **Loop** - The video will play and loop.
    - **Still** - The video will be paused at the frame given by the position parameter.
- **Position** (Video only) - Current frame of the video.
- **Start** (Video only) - Starting point of the video.
- **End** (Video only) - Ending point of the video.
- **Fill Mode**
    - **Crop** - Media will scale to fill the screen.
    - **Fit** - Media will scale to fit on the screen.
    
<br>

The **Layer context menu** can be opened by right clicking the Layer thumbnail. For the Background Layer, the **Files** option replaces **Materials**, opening the Media Browser instead.

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs2/images/panel-mixer-context-menu.png" alt="Layer Context Menu" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">Context menu.</figcaption>
</figure>
</div>

- **Materials** (Excluding Background Layer) - Opens the [Material Browser](material-browser).
- **Copy** (Excluding Background Layer) - Copies the Layer state.
- **Paste** (Excluding Background Layer) - Pastes the copied Layer state.
- **Files** (Background Layer only) - Opens the Media Browser.
- **Reset** - Lets you reset the Layer in various ways.
    - **Material** - Clear the material from the Layer.
    - **Material Parameters** - Resets the material to its original state.
    - **Modulation Matrix** - Resets all the Matrix values.

The material previews in the Layer thumbnails are animated, which can consume resources. [You can disable the animation by disabling Animated Layer thumbnails in the Settings.](settings) The preview will be a static snapshot of the material.

***
[Previous: Overview](overview)<br>
[Next: Material Browser](material-browser)