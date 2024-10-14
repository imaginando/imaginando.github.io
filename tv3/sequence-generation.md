# Sequence Generation

The **sequence generation** controls are located on the left side of 
the interface. Pressing **Generate** prompts our algorithm to create 
and play a unique bassline.

- **Complexity** - Set the complexity factor of generated sequences. 
Lower complexity values produce simpler melodies with fewer notes, 
while higher values create more complex, note-laden patterns.

- **Length** - Set the length of the generated sequence. Ranges from 
2 to 8 beats.

- **Scale** - Set the scale of the generated sequence. The following 
scales are available:
    - **Major and minor**, as well as the remainder of the seven 
    **modal scales** 
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

- **Play Mode** - Toggle between playing **internal** (generated) or 
**external** (incoming) MIDI. When set to **INT**, the generated sequence
 will play synchronized with the host DAW's transport. In **EXT** mode, 
 the plug-in will listen exclusively to MIDI provided by the host.

- **Generate** - Generate a new sequence with the selected properties. 
This automatically starts the internal playback and sets the **Play 
Mode** to **internal**.

- **Start/Stop** - Starts or stops the internal sequence playback.

### **Drag area**

The **drag area** becomes active once a sequence is generated for the 
first time. From here, generated sequences can be exported as MIDI 
clips by dragging and dropping. The internal playback stops and the 
**Play Mode** changes to **external** upon doing this.

<br>

[Previous: Parameters](parameters)