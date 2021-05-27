# Layer Controls

The layer control panel provides access to the parameters of the currently selected layer.
The number of controls that appear for each layer varies depending on the layer’s active material, specifically the amount of custom parameters the material contains. When a layer is selected, the available controls automatically change.

All material layers have the following common controls:

- Enabled - Turns the layer on/off.
- Solo - Turns off all other layers and displays only this layer
- Alpha - alpha (aka transparency) controls the transparency of black (absence of color). This allows a material that only paints a certain area of the screen (with everything else black), to be perfectly blended with the layer below, without compromising its brightness.
- Brightness - controls the brightness component of the layer’s color. It is the same as the slider present in the color panel.
- Speed - Controls the movement speed of the layer material. Value can be positive, negative or zero (static)
- Mono - restricts the layer to a single visual voice.
- Trigger - when set to ‘MIDI’, the layer will be triggered on and off by MIDI note data. Multiple simultaneous notes will generate a layer of polyphonic visual voices. When this mode is active, it is important to ensure that brightness is being modulated by the EG, the default behaviour.
- Trigger Channel - specifies the MIDI channel that will trigger this layer. This can be useful to have different layers reacting to different midi voices.
- Glide - This works like a portamento. When glide is greater than zero and KBD (notes pitch) is being used as a modulation source in the modulation matrix, the frequency of these notes will be interpolated (only available in midi mode).

Tip: if you get no noticeable effect when triggering with midi, make sure that the midi is being sent / received on the same channel
Tip: double click a parameter knob to set it to default
Tip: long press a material parameter knob to highlight it in the modulation matrix
Tip: this controls are midi mappable. To assign them to a midi controller knob, enable midi learn in the status bar, click the desired control, move the knob/button on your controller and disable midi learn

## Background Layer

The background layer has its own set of parameters, since it deals with image and video. The background layer honours the color panel selection if no image or video is set.

- Enabled - Turn the layer on/off.
- Alpha - controls the transparency
- Scale - resizes the media
- Rotate - Rotates the media
- X - Changes the horizontal position of the media.
- Y - Changes the vertical position of the media.
- Rate - Defines playback speed (video only)
- Mode - Defines the playback mode of the video (video only)
- Loop - In this mode video playback continuously repeats
- Still - In this mode the video remains paused on a single frame.
- Position - select the frame used for still mode. This parameter is only enabled when mode is STILL. (video only)
- End - Defines the end point of the video (video only)
- Fill Mode - Defines how media fill mode:
- Fit - the media will fit in the screen without being cropped. Can lead to empty or black spaces
- Crop - Media will occupy all the available display area. Cropping can occur.

**Tip: to reset the background, long press the background button and choose clear from the context menu.**
