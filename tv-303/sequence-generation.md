# TV-303 Help - Sequence Generation

Pressing **Generate** will prompt our algorithm to create and play a unique bassline.

- **Complexity** - Set the complexity factor of generated sequences. A low value will generate simpler melodies with fewer notes, while high complexity will create more complex and note laden patterns.

- **Length** - Set the length of the generated sequence. Ranges from 2 to 8 beats.

- **Scale** - Set the scale of the generated sequence. The following scales are available:
    - **Major and minor**, as well as the remainder of the seven **modal scales** 
    - **Chromatic**
    - **Major and minor blues**
    - **Diminished**
    - **Major and minor pentatonic**
    - **Spanish**
    - **Minor Gypsy**
    - **Arabian**
    - **Egyptian**
    - **Ryukyo**
    - **Whole Tone**
    - **Major and minor 3rd**

- **Key** - Base key of the generated sequence.

- **Play Mode** - Toggle between playing internal (generated) or external (incoming) MIDI. When set to **INT**, the generated sequence will play synched to the host DAW's transport. In **EXT** mode, the plug-in will listen exclusively to MIDI provided by the host.

- **Start/Stop** - Starts and stops the internal sequence playback.

##### **Drag area**

The **drag area** becomes active once a sequence is generated for the first time. Generated sequences can be exported as MIDI clips by dragging from here. The internal playback stops and the **Play Mode** changes to **external** upon doing this.

[Previous: Parameters](parameters)