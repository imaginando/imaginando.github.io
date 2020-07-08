# Control Panel

<img src="images/layer-panel.png" style="padding: 0px; bottom-padding: 0px;"/>
<br/>
<br/>

- **ACTIVE** - Activates or deactivates the current layer.

- **SOLO** - Solos the current layer. This is an exclusive button. When soloing a layer, it will unsolo any previously selected solo layer.

- **ENGINE** - Toggles between layer engine. It can be one of the following modes:

  - **Oscillator Mode**

    Despite the main focus of FRMS being the granular engine, it is possible to use each layer as an oscillator source. Subtractive synthesis is based on the sculpting of rich and complex waveforms, through the process of filtering and modulation. The term 'subtractive' comes from the fact that we start with full spectral waveforms, and we can manipulate them with the removal of harmonic content, generating different timbral sounds, all coming from the same source. With this in mind, we offer 4 kinds of waveforms:

    - **Sinusoidal** - The simplest and purest waveform. A sinusoidal is composed of only a single fundamental, having no harmonics.
    - **Sawtooth** - This waveform is the richest, classic periodic waveform because it is composed of all harmonics of its fundamental.
    - **Square and Triangle** - These two waveforms are composed only of odd harmonics
      <br/><br/>

  - **Granulator Mode**

    **_A complex sound may be imagined as a multicolored firework in which each point of light appears and instantaneously disappears against a black sky … A line of light would be created by a sufficiently large multitude of points appearing and disappearing instantaneously. (Xenakis 1992 pp. 43-44)_**

    Granular synthesis consists of combining a large number of tiny audio units (grains) over time, resulting in complex sound structures. Despite the origins of this concept being theoretically present way back, it was only after Dennis Gabor and Iannis Xenakis experiments that this kind of synthesis became better funded. Then, Curtis Roads took granular concepts and applied them with computational models and we were left with a completely new kind of sound synthesis, capable of new timbres and sonic atmospheres.

    With granular, instead of playing a sound file in a continuous linear way, we can divide that same sound file into thousands of micro pieces, modify them (pitch, amplitude and duration) and reorganize them in any way we want. Then we can play them individually at any rate, ranging from slow reading (generating discrete, noisy sounds), to very fast reading (generating very dense sonic atmospheres). From a single audio file we can generate a multitude of sounds with different characteristics, maintaining more or less the timbral characteristics of the original file or even creating completely new and original sounds that have no resemblance with its source.

    This synthesis offers a lot of control to the user, since we’re dealing with individual grains, each one having its own characteristics. Modifying one parameter can have a huge effect on the overall sound.

- **PAN** - Controls panning.

- **KEY/FREE** - In Key mode, the sound’s pitch is related to the pressed notes. In FREE mode, the sound’s pitch is only related to the layer’s tune knobs.

- **LEVEL** - Controls the volume of the layer.

- **CUTOFF** - Controls the cutoff of the layer's filter.

- **RESONANCE** - Controls the resonance of the layer's filter.

- **MODE** - Selects the layer's filter mode. Filter can be a 4 pole low-pass, 2 pole low-pass, high-pass, band-pass or notch.

- **EG 2** - Controls the amount of modulation being applied to filter cutoff by the Envelope generator 2.

  **Note**: It is also possible to apply envelope modulation to filter cutoff using the MATRIX panel (attention: they are accumulative). This is a quick and convenient way of doing it.

- **COARSE** - Selects the tuning of the layer. It has a range of -3/+3 octaves and can be restricted/quantized with the use of quantized mode.

- **QUANTIZED/FREE** - Selects the behaviour of the coarse knob. When in QUANTIZED mode, coarse works with fix steps of 1 semitone. In FREE mode there’s no fixed steps.

- **FINE** - Controls the fine tuning of the layer.

- **WAVEFORM** - Selects the type of oscillator. Wave can be **Sinusoidal (SIN), Sawtooth (SAW), Square (SQR) and Triangular (TRI)**.

- **PULSE WIDTH** - Controls the size of the square wave pulse, if the wave type is square (SQR).

- **WINDOW** - Controls the shape of grain's window.

- **MODE** - Selects the playing mode of the grains.

  - **LOOP** - Grains are being looped within OFFSET+SIZE boundaries.
  - **P.PONG** - Grains go back and forth within OFFSET+SIZE boundaries.
  - **END** - Grains stop when they reach the end of the OFFSET+SIZE boundaries.
    <br/><br/>

- **RAND COLOR** - Controls the type of random that is generated and fed to randomization parameters.

- **OFFSET** - Controls the starting point of the grain.

- **Playing Mode** - Selects grain's reading behaviour.

  - **FORWARD** - Grain is read from the beginning to the end. (Left to right)
  - **BACKWARD** - Grain is read from the end to the beginning. (Right to left)

- **RANDOM (OFFSET)** - Controls the amount of random applied to the grain starting point. Randomization is applied everytime a grain is fired.

- **SIZE** - Controls the size of each grain.

- **SIZE Mode** - Selects the grain size type.

  - **RELATIVE** - The amount of grain size is relative to the size of the sample.
  - **ABSOLUTE** - The amount of grain size is relative to a fixed value of 100 samples.
  - **SYNC** - The amount of grain size is relative to the bpm.
    <br/><br/>

- **RANDOM (SIZE)** - Controls the amount of randomization applied to each grain size. Randomization is applied everytime a grain is fired.

- **DENSITY** - Controls the amount of grains that are being used.

- **Density Mode** - Selects the type of density.

  - **EVEN** - Grains are fired evenly across the grain size.
  - **TIMED** - Grains are fired with a fixed time interval.
  - **SYNC** - Grains are fired with an interval that is in relation with the tempo BPM.
    <br/><br/>

- **RANDOM (DENSITY)** - Controls the amount of random applied to density of grains. Randomization is applied everytime a grain is fired.

- **TUNE** - Controls the pitch/tune of all grains at the same time.

- **RANDOM Tune** - Controls the amount of random adjustment applied to each grain tune. Randomization is applied everytime a grain is fired.

- **AMP SPREAD** - Controls the amount of random applied the amplitude of each grain. Randomization is applied everytime a grain is fired.

- **STEREO SPREAD** - Controls the amount of random applied to the panning position of each each grain. Randomization is applied everytime a grain is fired.

- **GAIN** - Controls the amount of gain applied to the granulator source.

- **FM** - Controls the amount of signal being sent to the next FM operator according to the selected FM mode under [global panel.](global-panel).

- **DELAY** - Controls the amount of signal being sent to the global delay effect.

- **REVERB** - Controls the amount of signal being sent to the global reverb effect.

<br/>

[See next how to use envelope panel.](envelope-panel)
