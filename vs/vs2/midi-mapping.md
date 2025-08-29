# MIDI Mapping

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/main-panel-midi-mapping.png" alt="MIDI Mapping" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>

All your MIDI mappings are displayed in the MIDI Mapping panel. To create a mapping, enable the [MIDI Learn mode located in the Status Bar](overview#status-bar). Clicking a parameter and sending a MIDI message from your controller will establish the mapping. You can also double click a highlighted control to manually enter mapping information. Toggle MIDI Learn off to finish mapping.

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/midi-learn-mode.png" alt="MIDI Learn enabled" style="padding: 0px; bottom-padding: 0px" />
  <figcaption style="font-size: 0.9em;">View of the Mixer panel with MIDI Learn enabled. Controls available for mapping are displayed with a purple overlay. The mapping information is shown in the top left corner.</figcaption>
</figure>
</div>

The **MIDI Mapping** panel displays the mapped **Parameter** name alongside the **Channel**, **Message** (type and number) and **Resolution**. Under **Actions** you can delete the mapping or open the **MIDI Assign** dialog, where you can configure the mapping.

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/midi-assign.png" alt="MIDI Assign dialog" style="padding: 0px; bottom-padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>

- **MIDI Message** - Select between a Note and a CC (control change) message.
- **Channel** (1 - 16)
- **CC/Note** (0 - 127)
- **14-bit MIDI** (CC only) - Enable this if you’re mapping to high resolution MIDI CC messages. Some high-end MIDI controllers may need this.
- **Reset** - Delete the mapping.
- **Cancel**
- **Save**

<br>

The **Link** option is available for mappings of Layer parameters (those displayed in the Mixer panel). When enabled, the MIDI message **will control the parameter in that position for the selected layer**. By MIDI mapping Layer selection and all Layer parameters in Link mode, you can have flexible control of your Layers.

---

[Previous: Media Manager](media-manager)<br>
[Next: Audio Player](audio-player)
