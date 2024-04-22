# Export Menu (mixdown)

The Export Menu allows exporting audio and MIDI from the current project. It is accessed via the icon in the bottom toolbar:

<img src="/bam/images/export-menu/bam-beat-maker-export-menu-icon.png" width="250" alt="BAM Export menu icon" />

<br>

The menu has three panels for exporting the **Song**, a specific **Track** or tracks from the selected **Scene**.

<img src="/bam/images/export-menu/bam-beat-maker-export-menu-tabs.png" width="800" alt="BAM Export menu icon" />

<br>

## Song

<img src="/bam/images/export-menu/bam-beat-maker-export-menu-song.png" width="500" alt="BAM Export menu" />

<br>

Song export uses the project’s follow actions to render the master output.

You can specify an additional tail length in seconds to add to the
end of the audio file; this allows you to give extra time for effects
like reverb and delay to fade out rather than abruptly end.

The total duration of the audio file that will be created is shown
including the tail length. Make sure your project has its follow 
actions set up to export correctly.

If the project has follow actions in an indeterministic sequence 
(such as with random follow actions or in an infinite loop), you must 
manually insert the length of the export.

<img src="/bam/images/export-menu/bam-beat-maker-export-menu-song-indeterministic.png" width="500" alt="BAM Export menu" />

<br>

On desktop, exports are saved to **'Documents\Imaginando\BAM\Exports’**. On iOS, you will be prompted to choose a save directory.

## Track

<img src="/bam/images/export-menu/bam-beat-maker-export-menu-track.png" width="500" alt="BAM export scene menu" />

<br>

Track export allows exporting individual tracks respecting the scene follow actions.

- **Raw** - Export without FX
- **Post FX** - Export with FX
- **Send A** - Export with Send A return
- **Send B** - Export with Send B return
- **Send AB** - Export with Send A and B returns

## Scene

<img src="/bam/images/export-menu/bam-beat-maker-export-menu-scene.png" width="500" alt="BAM export scene menu" />

<br>

Scene export allows exporting the audio and MIDI of the selected scene.

The **ALL** option will export the audio/MIDI for every clip of the selected scene, while the other options allow exporting individual clips from the respective track.

- **MIDI** - Export MIDI data
    - **ALL** will export a multichannel MIDI file
- **Raw** - Export without FX
- **Post FX** - Export with FX

<br>

[Previous: MIDI Mappings](midi-mappings)
