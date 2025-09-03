# Playlist

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/main-panel-playlist.png" alt="Playlist" style="padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>

VS offers a way to create custom preset playlists, useful in live situations or for automatically changing presets.

By default, the playlist is empty. You can freely add presets to it, and each slot is MIDI mappable, making it easy to trigger specific presets via MIDI messages. This makes the playlist panel not only a performance tool but also a convenient MIDI mapping interface for swapping presets.

It is also a way of having a list of presets which can be selected using the arrow buttons.
Once you have a prepared playlist, you can define the duration of each one along with fade in and fade out times for smooth transitions. The fade times are applied when a preset is selected manually (via mouse click), triggered through MIDI, or when the current preset’s time is up and it moves on to the next one.

### Top Bar

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/main-panel-playlist-top.png" alt="Playlist Top Bar" style="padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>

- **+** - Adds the current preset to the list. The entry will be added next to the selected entry.
- **Play** - Starts the playlist.
- **Stop** - Stop the playlist.
- **Loop** - Turns loop on/off. When off, once the playlist reaches the final entry, it will stop.
- **Top Arrow** - Triggers the preset of the previous entry.
- **Bottom Arrow** - Triggered the preset of the next entry.
- **Pencil** - When active, lets you edit general duration and fade times.
- **Time** - Default preset duration in minutes and seconds. Changing this will overwrite the settings on every entry.
- **Fade in** - Default preset fade in in seconds. Changing this will overwrite the setting on every entry.
- **Fade out** - Default preset fade out in seconds. Changing this will overwrite the setting on every entry.

### Playlist Entry

<div style="text-align: center;">
<figure style="text-align: center;">
  <img src="/vs/vs2/images/main-panel-playlist-item.png" alt="Playlist Entry" style="padding: 0px" />
  <figcaption></figcaption>
</figure>
</div>

- **Index** - Entry position index.
- **Name** - Name of the preset of the entry.
- **Pencil** - Edit MIDI mapping configuration.
- **Channel** - MIDI channel of the MIDI mapping.
- **CC/Note** - CC value or Note number of the MIDI mapping.
- **Pencil** - When active lets you change the entry duration.
- **Time** - Entry duration in minutes and seconds.
- **Bin** - Remove the current entry.
- **Drag indicator** - Press and drag to change the entry's position in the Playlist.

---

[Previous: Modulation Sources](modulation-sources)<br>
[Next: Media Manager](media-manager)
