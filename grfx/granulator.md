# Granulator

The union of various simultaneous fragments made from incoming sound is the basis of this effect. The left half of the Granulator panel contains controls for the speed and number of grains being fired, providing control over the general "density" of the sound. **Each grain reads from a buffer continuously recording the input audio**, displayed in the top left corner of the granulator along with each grain’s position. 

<figure style="margin:0; text-align: left;">
<img src="/grfx/images/granulator-left.png" width=250 alt="Granulator (left half)" style="padding: 0px; bottom-padding: 0px" />
<figcaption>Left side of the granulator.</figcaption>
</figure>
<br>

GRFX’s granulator engine fires the grains in cycles. The length of each cycle is determined by the **Frequency** parameter (located in the left half), meaning that a lower time will make grains fire faster. Every active grain is fired sequentially throughout one cycle; 5 grains with a Frequency of 100 milliseconds will result in a grain firing every 20 milliseconds. Toggling the switch underneath will **synchronize the Frequency parameter to the host’s transport**, letting you create patterns and rhythms.

Next to Frequency is the **Offset** parameter, which determines how far from the writing position the grains will start reading. Reading farther back will introduce an effect similar to a pre-delay. This parameter can be synchronized as well.

Both Frequency and Offset have dedicated **Random** controls. The **Frequency’s Random control will randomize the trigger time of the grains**, making them erratic rather than periodic. **The Offset’s Random control randomizes the position in the buffer that grains will start from**. A value of 50% will make grain play up to half of the buffer size back, while a value of 0% will start the grains as close as possible to the write position. Introducing randomness to the Offset is efficient in capturing different bits of audio from the buffer, making the output less homogeneous.

The **Grains** parameter determines the number of grains that will play per cycle. By controlling the Grains, Frequency and Offset parameters, and making use of their Random functionalities, you can easily meander between **sparse, periodic sequences and dense sonic clouds**.

<figure style="margin:0; text-align: left;">
<img src="/grfx/images/granulator-buffer.png" alt="Granulator Buffer" style="padding: 0px; bottom-padding: 0px" />
<figcaption>Buffer display and controls.</figcaption>
</figure>
<br>

The buffer display has the current position that input is writing to, represented by a brighter green line, and the multiple playing grains, shown by slightly dimmer lines. Under them is the waveform, continuously drawn as audio enters the plug-in.

This section is accompanied by four controls: **Sync**, **Size**, **Division** and a **Freeze** button. **Size** determines the **buffer size** - how long the buffer can record for until it wraps around - while **Sync will synchronize the buffer size to a tempo-aware beat time**, such as a beat or a bar. This proves useful for rhythmic material, such as drums.

**Division** slices the buffer into a number of regions and snaps the grain’s start position to those positions, creating rhythmic stuttering effects.

**Freeze** - represented by the snowflake icon - will stop the buffer writing, holding its current material until unfrozen.

<figure style="margin:0; text-align: left;">
<img src="/grfx/images/granulator-right.png" alt="Granulator (right half)" width=250 style="padding: 0px; bottom-padding: 0px" />
<figcaption>Right side of the granulator.</figcaption>
</figure>
<br>

The right side of the granulator is reserved for controls related to the individual properties of the grains. The **Window** and **Shape** parameters work together to **shape the amplitude window of the grains**, making them more abrupt, plucky, soft or ascending. **Stereo** introduces randomness in the location of each grain in the stereo image, creating a totally mono or wide soundscape.

**Size** is a synchronizable parameter that controls the grain’s play length. Note that a grain’s Size can not be larger than the Frequency, as that would cause the same grain to fire before finishing its playback.

The **Route** parameter is a unique **probability-based routing control that determines the chance of each grain going down route A or route B**. **Route A goes through the Multi-effect slots, while Route B goes directly to the Mixer**. Using the available effect engines and Mixer controls, this enables a variety of creative effects, such as mixing processed grains with unprocessed grains, introducing very sporadic effects, routing A and B to different sends, and creating a chance for grains to not fire.

**Rev. Prob** (Reverse Probability) introduces a chance for the grains to read from the buffer in reverse.

### Parameters
- **Frequency** - Grain cycle rate. Every grain will fire once per cycle.
    - **Random** - Randomization of the grains' firing times.
    - **Sync** - Synchronizes the parameter to tempo-aware beat times.
- **Offset** - Grain reading position offset from the write position. Similar to a pre-delay.
    - **Random** - Randomization of the grains' read positions in the buffer.
    - **Sync** - Synchronizes the parameter to tempo-aware beat times.
- **Grains** - Number of playing grains.

- **Buffer Size** - Size of the input buffer that grains read from. A short size will result in grains always reading recent material, while a large buffer allows grains to read very far back.
    - **Buffer Sync** - Synchronizes the buffer size to a tempo-aware beat time.
- **Buffer Division** - Slices the buffer into a number of regions. When enabled, the grains can only start reading from these pre-defined positions. The Offset's Randomp control will make grains snap to positions farther back in the buffer.
- **Buffer Freeze** - Stops buffer input, holding the currently recorded audio indefinitely.

- **Window** - Controls the edges of the amplitude window applied to each grain, making it start and end abruptly or smoothly with fades.
- **Shape** - Skews the amplitude window left and right, turning it into a pluck-like shape or a growing ramp.
- **Stereo** - Randomness of the grains' stereo positions.
- **Size** - Play lenght of the grain.
    - **Sync** - Synchronizes the size to a tempo-aware beat time.
- **Route** - Probability of sending grains to **route A** or **route B**. Route A is processed by the Multi-effect chain, while B bypasses it.
- **Rev. Prob.** - Probability of the grain reading from the buffer in reverse.

<br>

Previous: [Overview](overview)

Next: [Harmonic Triangle](harmonic-triangle)
