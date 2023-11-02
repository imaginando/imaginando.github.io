# Export menu (mixdown)

The export menu provides two functions:
- Mixdown the current song as an audio file
- Export MIDI or audio from specific scenes

The EXPORT menu is accessed via this icon on the bottom toolbar:

<img src="/bam/images/export-menu/export-menu-icon.png" width="" alt="BAM Export menu icon" />

## Export SONG

<img src="/bam/images/export-menu/export-song-menu.png" width="" alt="BAM Export menu" />

SONG export uses the project’s follow actions to render the master
channel output to disk.

You can specify an additional ‘tail’ length (in seconds) to add to the
end of the audio file; this allows you to give extra time for effects
like reverb and delay to fade out rather than abruptly end when the BAM
stop event occurs.

The total duration of the audio file that will be created is shown
including the tail length. Tip: if the duration time is shorter than
expected, double check your scene follow actions.

When you are ready to continue, select EXPORT and you will see BAM
generate the audio file by playing through the scene order. When the
song has follow actions in a loop mode, a warning message will show
telling the user that the length of the song could not be calculated,
prompting the user to select the length of the export. After the
progress bar has reached 100%, the file is saved to your personal folder
in the following location: '**Documents\Imaginando\BAM\Exports’**. In
iOS it is up to the user to select where to save the export.

## Export SCENE

<img src="/bam/images/export-menu/export-scene-menu.png" width="" alt="BAM export scene menu" />

The SCENE tab enables export of the MIDI or audio of single scenes if
the “ALL” option is selected, but for the individual tracks, the render
will be done out of the selected Clip. The “ALL” option will render the
audio coming from the master track.

For each scene there are three options:
- MIDI - export MIDI as a single MIDI file
- RAW - renders as a WAV file with FX processing disabled
- POST FX - renders as a WAV to an audio file
