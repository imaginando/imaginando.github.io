# MATRIX Module - LK Help

The Matrix module is an Ableton Live remote controller, carefully designed to give you access to most common operations on the Ableton Live Session View, making it easy for you to focus more on your music. Note that using Matrix requires the installation of LK control surface. For more information on LK control surface please visit the [Setup](setup) section.

![LK Matrix Module sequencer overview of Ableton Live's Session view](/lk/images/matrix/overview.png)

As soon as a [connection](setup) is established, you will instantly find similarities with your current Live Set. The module is composed of several subsections and hidden menus, as listed and explained next. At the top of the screen, in the status bar, you will find different fields:

- **MODE** - currently only Live mode is available for this module.
- **POSITION** - shows the current arrangement position.
- **TEMPO** - allows BPM adjustments for the Live session currently in use.
- **METRONOME** - controls Live's metronome sound on/off during playback or recording.
- **TRIGGER QUANTIZE** - allows the adjustment of the clip triggering quantization.
- **RECORD QUANTIZE** - allows the adjustment of the clip recording quantization.
- **PITCH** - displays the pitch value and toggles pitch slider visibility.

## TRANSPORT CONTROLS MENU BAR

At the bottom of the screen you will find the transport bar:

- **PLAY** - starts playback.
- **STOP** - stops the playback.
- **RECORD** - sets the recording on and starts playback.
- **JUMP BACK** - jumps the song position back, one beat.
- **JUMP FORWARD** - jumps the song position forward, one beat.
- **LOOP** - toggles between on and off the loop function on the arrangement view.
- **OVERDUB** - activates the overdub recording on the currently armed clips.
- **UNDO/REDO** - tap to undo last change (can be repeated for preceding commands), proceed with shift for redo.
- **MIXER** - hides or shows the mixer section on the Matrix module.
- **RETURN** - hides or shows the return tracks section on the Matrix module.
- **CROSSFADER** - hides or shows the crossfader section on the Matrix module.
- **SHIFT** - alternates function of certain buttons on the Matrix module, allowing the creation or deletion of Live tracks or Live session clips, as well as duplicates. It also toggles the undo button between undo and redo and allows for non-exclusive selection of the tracks arm and solo buttons.Double-tapping the shift button holds the shift function, double-tapping again disables hold.

## Clip Grid

Occupying most of the screen is the clip grid of the Matrix module that corresponds to the session view on Ableton Live.

On the right side of the grid you have the scene launch buttons and it's corresponding label disposed vertically, while the rest of the buttons correspond to the session clips of the corresponding channel. A series of visual mechanisms will help you while working with the grid: a vertical and horizontal highlight of the selected track and scene, plus clip color/name matching the color/name on the Ableton Live session view.

Note: It is possible to change the size of the clip grid by going to Settings menu on the Main Menu and adjusting accordingly to your preferences.

### Playing and recording clips

The clips on Matrix have the same behavior as the session clips on Ableton Live, meaning that tapping on an existing clip will play it, while tapping again on the clip will relaunch it. Similarly, tapping on the scene launch will trigger the corresponding row of clips and tapping it again will relaunch the exact same row.

The stop button for the clips or scenes can be found at the clips zone in the corresponding channel, represented by a black square on a grey background or as the first button of the Mixer.

If a track is armed on the Mixer section (either if it is a MIDI or an audio track), tapping on a blank clip will automatically create a new clip and start the recording process, while tapping on a pre-existing clip will record on said clip, depending if the overdub function is activated or not.

## Mixer and return tracks

Tapping on the Mixer button on the Transport bar menu will show you the mixer details on the Matrix module, including the tracks Stop Clip, Mute, Solo, Arm and select track buttons.

By default, the Return tracks are hidden. Tap the Return button on the function menu to toggle their visibility. The number of return tracks is limited to four. However, its display area is scrollable.

To stop the track's clip playback, Mute, Solo, Arm or just select a track, tap on the corresponding buttons on each channel. Remember that the shift button allows for non-exclusive selection of the Solo and Arm buttons.

All changes on LK or Live will be mirrored: muting or soloing a track on Matrix will have effect on the Live session view and vice-versa.

Tapping the track label selects the respective track. Opening the Inspector panel will open the channel’s subsection of devices, sends and the track Composer.

## Shift View

On the bottom right corner of the Matrix module there is an upward arrow button which changes the Matrix module into the Shift view.
In the Shift view, some of the buttons in view are replaced. Pressing the plus (+) buttons adds new tracks as well as pressing the trash icon button deletes the corresponding tracks.

## Inspector panel

Right above the transport bar there is a split view bar which allows the Inspector panel to be opened. This can be done by either dragging the middle green line of the bar up, or tapping anywhere else over this bar. The Inspector panel is divided into three parts and provides access to critical display and tools to work with the Matrix module

- **DEVICES** - allows browsing and editing of the selected track devices
- **SENDS** - edit the selected track sends.
- **COMPOSER** - allows visualization and edit of the selected clip contents
  **Tip:** to get an enhanced experience using the Inspector panel, maximize it by tapping on the left or right of the drag line of the split view bar.

### Devices

The first tab of the Inspector panel is the Devices panel, which allows you to browse and tweak the selected track devices. Start by selecting a track with devices (if there are no devices available on the track, the tab will display a message). By default all devices appear collapsed.

![LK Matrix Module devices inspector of Ableton Live Devices](/lk/images/matrix/inspect-devices.png)

When opened, a device will fill the whole tab, while the next devices ahead will break to the next line. Drag the detail area up to scroll down and view the other devices.

![LK Matrix Module devices inspector detail scroll of Ableton Live Devices](/lk/images/matrix/inspect-devices-scroll.png)

Each device container is scrollable, allowing horizontal navigation of all the screen control parameters and subdevices. If the device has only a small set of parameters then the rest of the tab will be represented by empty space, except when the device has a device chain (i.e. a Drum Rack or Instrument Rack). Let’s look at this example:

When browsing a Kit-Core 909 on Matrix you will see that this device has a device chain for each drumpad assigned. You will also see that the first parameters correspond to the chain instrument default parameters, followed by the list of devices on the chain, as represented on this image:

![LK Matrix Module devices inspector detail of intrument rack of Ableton Live Devices](/lk/images/matrix/inspect-devices-instrument-rack.png)

When you select a different device on the chain list, the selected device will be loaded at its right. You can access the respective device parameters by dragging the device label to the left. This browsing will give you theoretically unlimited access (your mobile device resources are not limited and excessive memory can make operating system cause a forced shutdown to LK) to your device chain, independently of its complexity.

![LK Matrix Module devices inspector detail of intrument full rack of Ableton Live Devices](/lk/images/matrix/inspect-devices-instrument-rack-full.png)

### Sends

Sends tab is really simple and straightforward. It will list the select track sends. To change the send value, touch the slider and move it to the desired position.

![LK Matrix Module sends inspector of Ableton Live Sends](/lk/images/matrix/inspect-sends.png)

### Composer

The Composer view displays a Piano Roll environment which allows you to edit the contents of the midi clips. Composer will always reflect the selected clip on Live. The selected clip is usually the intersection between the selected track and select scene on Live. There are however a few exceptions, per instance, when you have a return track or the master track selected. In this case, composer will keep showing you the last selected clip. If that last position does not have a clip or the clip is audio, it will clearly state you that and therefore composer will not be available.
The composer features a toolbar at its top with the following functions:

- **LISTEN** - determines if the midi note will be sent and heard when you touch the composer's piano roll (track must be armed).
- **SELECTION TOOL** - allows you to select an area for grouped notes operations.
- **DRAW TOOL** - allows you to create and delete notes.
- **DUPLICATE** - duplicates the selected note or the selected group of notes.
- **SNAP GRID** - defines the grid snap resolution.
- **SNAP ON/OFF** - toggles the grid snap on or off.
- **CLIP SIZE** - displays the clip's size in bars.
- **CLIP LENGTH x2** - doubles the clip length by two.
- **CLIP LENGTH /2** - divides the clip length by two.
- **CLIP PLAY** - playback the selected clip.
- **CLIP STOP** - stops the current clip playback.
- ** CLIP LOOPING** - determines the looping state of the clip
- **ZOOM FIT** - enclosures the viewport to the area occupied by all the notes in the clip. If the clip is empty, this button sets a predefined viewport
- **CREATE/DELETE NOTE** - located at the right side of the toolbar, allows you to create/delete a clip on the selected slot (only available since Ableton Live 9)

#### Piano Roll

The Piano roll is where you can view and edit the contents of the each of the sessions clips.
Just like in Ableton Live, zooming and panning of the Piano Roll are available. So for vertical zooming, touch down on the blank area located at composer’s piano roll left side, dragging it left or right to zoom in or out, respectively. For Horizontal zooming, touch the dark area between composer’s timeline and dragging down/up, depending if you want to zoom in or out, respectively. Panning the view is achieved by pressing and dragging left and right on the composer’s timeline.

#### Drawing notes

To draw notes, select the draw tool and tap on the desired note location. Note length will be dependent on the grid snap resolution. If you press the screen and slide the finger to the right, a note will be created for each length of the snap resolution, allowing you to easily create a series of sequential notes. To create a custom length note, tap to create a note, press on the same note and drag to the right. The note length will be increased in steps of the snap resolution size.

#### Deleting notes

To delete a note you just have to tap it. To delete a group of notes, choose the selection tool to select a group of notes and then switch again to draw tool. Tap on any grouped note to delete them all.

#### Move notes

To move a note choose the selection tool, touch down and drag the note to the desired location. The note will always snap to the grid resolution. To move a group of notes, create a grouping that enclosures all the desired notes, then touch on any selected note to move them.

Note: When Inspector is open and a clip slot is selected, Ableton Live will always be reporting changes to the clip. This allows you to have a continuous linking between both sides. Unfortunately, when this happens, if you drag a note in Ableton Live, the action will produce an awkward behavior by creating copies of the note along the drag movement. If you need to interact with the clip in Ableton Live, you will need to close the Inspector view.

#### Changing the velocity

By maximizing the inspector view, the velocity editor will appear at the composer’s bottom. You can increase the velocity editor resolution by dragging its top bar up and down.

To avoid conflict between notes located at the same time position, the velocity editor will only show the notes on the selected key track, visually indicated by a red bounding box on the currently selected key track. To change the key track, press a note on the piano roll.

To edit a note’s velocity, simply press and drag up and down the velocity editor’s grey area, below the note you wish to edit. The notes will have a different color intensity depending on its velocity value.

![LK Matrix Module composer inspector detail of velocity of an Ableton Live clip](/lk/images/matrix/inspect-notes-velocity.png)

[Learn all about the MIDI Pads module.](midi-pads)
