# Material Browser

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/material-browser.png" alt="Material Browser" style="padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>
<br>

You can change a Layer’s material in the Material Browser. As previously mentioned, you can open it by either double clicking the Layer thumbnail or by opening the Layer context menu (right click) and clicking ‘Materials’.
Once open, you’ll be able to select the material type using the providers on the left. The remainder of the interface shows the materials themselves.

The material type is divided into categories:

- **Shaders** - VS offers a range of shaders. The ones from the Factory bank are available by default, while other banks can be acquired as expansions. Each shader has its own set of unique parameters.
- **Visualizers** - These are a special kind of shader, capable of receiving audio information directly. Here you’ll find various visualizers and an oscilloscope, each one with its own set of parameters.
- **User Materials** - Your custom materials. See [Material Editor: Making your own shaders](material-editor).
- **Media**
  - **Image / Video** - Load images and videos from VS’s resources or from your disk.
  - **Text** - Insert text in a Layer. Text can be edited in [Layer Properties → Text](layer-properties#text).
- **Input** - Live input feeds.
  - **Render Output** - The output of all Layers combined. This can be used for feedback effects, achieving unique visuals even with few materials.
  - **Syphon** (macOS only) - If a Syphon server is active, receive its video feed in the Layer — useful for integrating video from other media applications. Note that Syphon must be enabled in the [Settings](settings).
  - **Spout** (Windows only) - If a Spout server is active, receive its video feed in the Layer — useful for integrating video from other media applications. Note that Spout must be enabled in the [Settings](settings).
  - **Camera** - If a camera is connected to your computer, this option receives its live feed in the Layer.

The search bar, located on top, can be used to search through all the available materials.
Materials can be loaded by clicking the Load button located on the bottom. Shaders, Visualizers and Media can also be loaded by double clicking the desired material.

All shaders have an **Options** button which will open the context menu.

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/material-browser-context-menu.png" alt="Material Browser" style="padding: 0px" />
  <figcaption style="font-size: 0.9em;">Context menu of a shader material from User Materials.</figcaption>
</figure>
</div>
<br>

- **Edit** (user materials only) - Edit the material in the [Material Editor](material-editor).
- **Clone** - Create a copy of the material, move it to User Materials and open the Material Editor.
- **Export** (user materials only) - Export the material.
- **Delete** (user materials only) - Delete the material.
- **Rename** (user materials only) - Rename material.

---

[Previous: Mixer Panel](mixer-panel)<br>
[Next: Layer Properties](layer-properties)
