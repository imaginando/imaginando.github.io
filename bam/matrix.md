# Matrix Panel

<img src="/bam/images/matrix/matrix-panel.png" width="675" alt="Matrix panel" />

The MATRIX panel is the heart of the BAM project structure, displayed as
a grid of cells containing colored MIDI clips for each numbered track,
and white scene launcher buttons on the Master track (M).

## Triggering a clip

To trigger a single clip simply click the clip you want to trigger. This
action also selects the clip which is shown by a white border around the
clip’s cell. A clip that is in a trigger state is shaded brighter than
non-trigger state clips. As a clip plays a visual indication of its
playback position is represented by a progressive horizontal shading
graduating from left to right. When the end of the clip is reached, it
will automatically loop back to the start of the clip and playback will
continuously loop until the clip is stopped.

Clicking a different clip on the same track will select and trigger the
new clip (synchronizing the start of playback based on the ‘Trigger
quantisation’ project settings - accessed via the cog icon on the bottom
toolbar.)

Clicking a clip from a different track will select and trigger the new
clip, synchronizing the playback with currently playing clips. You can
see that both clips are now selected because they both have a white
border, and both clips will also have brighter shading to show they are
currently in triggered state.

## Selecting a clip without triggering

To select a clip without triggering it, click the clip while SHIFT is
active, this will give the clip a white border which signals the clip is
selected, but the shading of the clip will not change as the clip is not
triggered.

## Triggering a scene

Clicking a scene launcher button on the master channel will trigger
playback of all clips on the same horizontal row, adhering to the
project ‘Trigger quantisation’ setting.

## Selecting a scene without triggering

To select a scene without triggering it, click the scene while SHIFT is
active.

## MATRIX clip and scene context menus

Clicking and holding a clip or empty cell reveals this pop-up context
menu to perform relevant actions:

<img src="/bam/images/matrix/matrix-cell-context-menu.png" width="125" alt="Matrix cell context menu" />

(Note: import/export of MIDI clips is not currently present in desktop
versions of BAM yet)

Clicking and holding a scene button reveals this pop-up context menu to
perform relevant actions:

<img src="/bam/images/matrix/matrix-scene-context-menu.png" width="150" alt="Matrix scene context menu" />

## Scene Follow Actions

For automatic transitions between scenes and song arrangement purposes,
scenes can be assigned a Follow Action event to occur after a specified
number of bars and beats from the moment the Scene is triggered. To
assign a Follow Action, select the scene and then use the follow action
settings above the clip matrix. Scenes that have a follow action
assigned show a two-letter abbreviation of the follow action type.
Follow actions are only applied when the scene is triggered (by pressing
it).

If the song is stopped while a scene is running, the scene launcher and
all playing clips will remain in the triggered state. Pressing the play
button will launch the scene from the beginning, and continue follow
actions if present. If you want to clear the trigger states, you must
press the stop button of the master track. This is useful for example if
you want to play just one clip (for example) just press the stop button
on the master track and then click on the clip you want to reproduce.
This will not trigger follow actions, to trigger them after pressing the
stop button on the master track, the launch button must be clicked. The
different types of follow actions are detailed below as part of the
MATRIX UI overview

<img src="/bam/images/matrix/matrix-panel-overview.png" width="675" alt="Matrix panel overview"/>

- **A.**  Move selected Scene one position up
- **B.**  Move selected Scene one position down
- **C.**  Delete selected Scene
- **D.**  Duplicate selected Scene
- **E.**  Create a new Scene. Created scenes will be added directly under the currently selected scene.
- **F.**  Select Scene Follow Action:
    - None - No follow action will be applied at the end of the Scene
    - Next - Play next Scene
    - Previous - Play previous Scene
    - First - Play first Scene
    - Last - Play last Scene
    - RND (Any) - Play a random Scene
    - RND (Other) - Play a random Scene excluding the currently playing scene
    - Last Playing - Play last playing Scene
    - Stop - Stop playback of project
- **G.**  Number of bars before follow action event occurs
- **H.**  Additional number of beats before follow action event occurs
- **I.**  Scene launch buttons
- **J.**  Track and Scene stop buttons

Clicking a track stop button will stop any currently playing clips on
that track only. Clicking the scene stop button stops playback of the
scene (and therefore all clips currently playing)

You can access additional functions for some tools by using them with
the SHIFT button engaged, which is located at the bottom right corner of
the app.

SHIFT functions:
-   Duplicate single clips by dragging
-   Select Clips/Scenes without triggering
