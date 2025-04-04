# Modulator Rack

<figure style="margin:0; text-align: left;">
<img src="/grfx/images/modulator-rack.png" alt="Modulator Rack" style="padding: 0px; bottom-padding: 0px" />
<figcaption>Modulator panel with draggable Waveform Display. LFO selectors on the left side.</figcaption>
</figure>
<br>

**GRFX has 4 independent LFO modulators** which can modulate almost all available parameters. 

**To modulate a parameter, simply drag the LFO waveform display area and drop it on a modulatable parameter**. Modulatable parameters show a brighter background when you initiate the drag interaction. This way you’ll know which parameters can be modulated.

<div style="margin: 0; display: flex; justify-content: left; gap: 20px;">
  <figure style="margin: 0; text-align: center;">
    <img src="/grfx/images/modulator-waveform-display.png" height="120" alt="Waveform Display" style="padding: 0px; margin-bottom: 0px;" />
    <figcaption>LFO Waveform Display</figcaption>
  </figure>

  <figure style="margin: 0; text-align: center;">
    <img src="/grfx/images/modulatable-param.png" height="120" alt="Modulatable Parameter" style="padding: 0px; margin-bottom: 0px;" />
    <figcaption>Modulatable Parameter</figcaption>
  </figure>
</div>
<br>

**Once you drop the modulator on a parameter** you’ll be able to control the amount of modulation to give it. **You’ll enter the Quick Modulation mode**, shown by a blinking state of the LFO waveform display. When in this mode, **rather than setting the base parameter, you’ll be setting the amount of modulation from the selected LFO**.

<figure style="margin:0; text-align: left;">
<img src="/grfx/images/quick-modulation-overlay.png" alt="Quick Modulation Overlay" style="padding: 0px; bottom-padding: 0px" />
<figcaption>Modulated parameter in Quick Modulation mode. In this mode, touching the knob will edit the amount of modulation applied to the parameter.</figcaption>
</figure>
<br>

Quick Modulation mode places a white outline overlay over modulated parameters with the selected LFO index in the top left. Selecting other LFOs will show their respective modulation targets.

You’ll see the amount of modulation in the knob in the inside arc, and current value of  the base parameter plus its modulation in the outside arc.

To exit this mode, click the LFO waveform display area. You can click it again to return to this mode and adjust modulation values.

### Modulations Panel
<figure style="margin:0; text-align: left;">
<img src="/grfx/images/modulations-panel.png" width=800 alt="Modulations Panel" style="padding: 0px; bottom-padding: 0px" />
</figure>
<figcaption>The Modulations Panel lets you manage all active modulations.</figcaption>
<br>

You can also access the **Modulations Panel** for a general view of the current modulations by clicking the bottom right icon of the waveform display <img src="/grfx/images/show-modulations-panel.png" alt="Show Modulations" style="padding: 0px; bottom-padding: 0px" />.

You can see which parameters are being modulated by each LFO and change the corresponding amounts. If you wish to **delete modulations, press the bin icon and then the modulations you want to remove**.

### Parameters

- **LFO Selector**
- **Waveform Display** - Visual display of the LFO. To add a modulation, drag and drop it on a modulatable parameter. The bottom right button opens the modulations panel, showing all active modulations.
- **Shape** - LFO waveshape.
    - **Sine**
    - **Square**
    - **Saw**
    - **Triangle**
    - **Sample & Hold**
    - **Filtered Sample & Hold**
- **Phase** - Starting phase of the LFO. When **Sync** is enabled, LFOs reset on the playback start.
- **Offset** - Change the bias of the values of the waveform. This allows the LFO to gradually change from bipolar to unipolar.
- **Rate** - Control the frequency of the wave cycle.
- **Sync** - Synchronize the LFO to the host tempo.

<br>

[Previous: Harmonic Triangle](harmonic-triangle)

[Next: Effect Rack](effect-rack)