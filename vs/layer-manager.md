# Layer Manager

<img alt="VS Layer Manager" align="center" src="/vs/images/layer-manager@2x.png" style="padding: 40px;"/>

The Layer Manager allows you to select layers, load materials via the material browser and set the Z index (stacking order) of the layers.

There are 8 numbered material layers, plus one background layer, ‘B’. The background layer can use either a video or image file; it cannot load materials. 

Each layer item has a live preview of its current material. If the layer is disabled, the preview changes to black. This helps you keep track of your project, as you can see the contents of all layers simultaneously.

Layers are rendered in a stack; the leftmost layer is top, and the very bottom layer is the background layer on the right. To reorder the layers, click and drag each layer to the new desired position.

**Note: The background layer cannot be moved.**

Clicking and holding a layer open it’s additional options:

- Copy - copy the layer that is in the selected slot to memory
- Paste - paste the layer that is in memory into the selected slot
- Reset - open the reset dialog

The reset button has two options:

- Reset Material - resets the current material to its default state (does not affect the color as color is a layer property
- Reset Modulation Matrix - resets all values in the modulation matrix.

## Modulations toggle

Toggles between the audio modulators panel and the modulation matrix panel. If the modulations section is collapsed, it will be expanded.

## Color Panel

<img alt="VS Color Panel" align="center" src="/vs/images/color-panel@2x.png" style="padding: 40px;"/>

Clicking on the circle on the left will open the color panel that will let you manage the color of the selected layer. This button will have the color of the selected layer 

On top you can choose the blend mode that will be applied. Normal is the default option. There are also the following modes: Screen, Hard Light, Soft Light, Overlay, Difference, Exclusion and Subtract (these are explained below).

The circle button changes the primary color’s hue and saturation values, and the bottom slider changes the color’s brightness.

Blend modes alter how a stack of layers is rendered by changing the way that layers interact based on different operations on color information from the layers.

- Normal - The default mode is ‘Normal’ - where pixels are drawn ‘on top of each other’, effectively covering up the pixels of any layers below
- Screen - Looks at each channel’s color information and multiplies the inverse of the blend and base colors. The effect is similar to projecting multiple photographic slides on top of each other.
- Hard Light - Multiplies or screens the colors, depending on the blend color. This is useful for adding shadows to an image.
- Soft Light - Darkens or lightens the colors, depending on the blend color.
- Overlay - a gentle multiplication of colors, both layers preserve details
- Difference - a kind of psychedelic 70’s effect, with high contrast, inverted colors
- Exclusion - similar to difference, but desaturated/washed out colors
- Subtract - creates a darker image by subtracting brightness

**Tip: if you are tweaking existing presets by playing with their layers and are getting unexpected results, perhaps check the current blend mode setting and try changing modes.**

## Material Browser

To open the material browser, double click any numbered layer.

Materials are presented in a scrollable grid, with an animated preview for each material.

The currently loaded material is indicated by a yellow outline. Click any material to load it into the selected layer. When a new material is loaded, the layer’s colour property does not change, the new material will use the layer’s currently selected colour.

**Note: loading a new material resets all layer material parameters. If the same material is reloaded, material parameters are preserved.**
 
To exit the material browser without loading a new material, click the ‘X’ button located at the bottom right of the screen.

<img alt="VS Material Browser" align="center" src="/vs/images/material-browser.jpg" style="padding: 40px;"/>

## Background browser

To open the background file browser, double click the background layer ‘B’. You can then navigate your local filesystem for supported file types.

**Note: support files extensions are: jpg, png, mp4, mov.**

Select any file to display a preview, then choose to either load the selection into the background layer, or cancel the operation using the close button.

**Note: the in-app file browser has a file delete function. Use it carefully as it deletes the file from your file system.**

**Note: the iOS version opens the native file browser**

<img alt="VS File Browser" align="center" src="/vs/images/file-browser.jpg" style="padding: 40px;"/>

[In the next chapter we will look at layer controls](layer-controls)