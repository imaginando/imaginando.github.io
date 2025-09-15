# VS Help - Overview

VS is an additive synthesizer in which oscillators do not produce sound, but visuals. These oscillators are called materials. Just like an audio oscillator will produce a distinct sound, a material produces a unique visual output. A material can have one or more parameters that can alter its characteristics. Materials are loaded into layers.

A layer is a polyphonic synthesis engine which means that the same material can be played by multiple voices. Different voices have different characteristics and this could affect particularites of a material assigned to a layer, resulting in increased expressiveness. Layers play an important role in VS, as you can stack them in order to create your visual composition. In VS there are 8 layers. Additionally there is a background layer with special characteristics.

## User Interface

<img src="/vs/vs1/images/overview@2x.png" alt="VS overview" width="1024" height="768" />

VS’ interface consists of the following elements:

**1) Help** - This launches a set of quickstart tool tips to guide you through your first steps of navigating the VS interface

**2) Frame Rate Counter** - This is useful for you to see if you are achieving your target frame rate. If your frame rate is too low, you can try reducing the quality to achieve better performance

**3) Undo/Redo** - allows you to undo / redo changes

**4) Layer manager** - view, select, edit and reorder your layers here

**5) Expand window** - resizes the render area to fit the entire window and hides all overlays and controls, for a performance mode experience. To return to the interface mode, double click anywhere inside the window

**6) Launch external display** - this opens an additional separate render area window, containing no overlays and controls, which can be toggled fullscreen with the ‘F’ key. This mode is suitable for live performance and VJ use, to generate a clean feed of the render output for projection or video capture, while being able to use VS controls on another screen. This option is only available in the desktop version of VS.

**7) Record button** - records VS' render output to disk as a video file. Press once to start recording, then press again to stop recording. The file will be saved to your VS 'Recordings' Folder. (note: check the 'Recording Quality' option in the settings menu, prior to recording)

**8) Layer Controls** - access the current layer’s parameter controls

**9) Layer Modulations** - edit LFOs, envelope generators and audio modulators here

**10) Show/hide Layer Modulations** - increases size of render area by collapsing the modulation section

<br/>

The status bar across the top of VS' window includes the following labelled elements:

- **MIDI Learn** - Assign VS parameter control to a MIDI controller. Select to toggle on/off. Once on, press the desired parameter to make the mapping
- **Clock source** - select timing/tempo source
- **Tempo** - shows VS current tempo BPM (this value is editable using the + and - buttons which appear when tempo is selected, if clock source is set to ‘Internal’ or ‘Link’
- **Patch** - show/hide VS patch manager

The status bar also contains four icon buttons (from left to right):

- **Disk icon** - save current patch state
- **Revert icon** - revert current patch to its last saved/original state
- **Up arrow** - select the current bank’s previous patch
- **Down arrow** - select the current bank’s next patch

<br/>

---

**Note: you can also navigate through presets in the current bank by swiping up/down in the render area.**

---

<br/>

[**Now let's look at the Layer Manager in detail**](layer-manager)
