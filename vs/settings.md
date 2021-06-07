# Settings

- **Profile** - Login to Imaginando account
- **MIDI** - configure MIDI input and output ports
- **Settings**
    - **Input audio device** - Select your desired input device to be used as an audio modulation source
    - **Output audio device** - Select your desired output device for playback of VS’ demos
    - **Sample rate** - Select the sample rate to be used in VS audio engine
    - **Buffer size** - Select the buffer size to be used in VS audio engine
- **Frame rate** - The target refresh rate of VS render output (frames per second). Currently two options are available, 30 and 60 fps. For a smoother output try the 60 option
- **Quality** - The resolution at which each layer is rendered. The lower the value, the smoother the visual output. For a more detailed visual output try a higher resolution
- **Voices** - number of simultaneous polyphonic visual voices. Ex: With 4 polyphonic voices, each layer can display 4 simultaneous materials at once

<br/>

***
**Note: If the frames per second counter is below the target frame rate, it means that your GPU is not capable of delivering the frame rate you request. If that is the case, you should lower the quality setting until fps reaches your target frame rate.**
***