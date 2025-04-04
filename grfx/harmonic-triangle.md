# Harmonic Triangle

<figure style="margin:0; text-align: left;">
<img src="/grfx/images/harmonic-triangle.png" alt="Harmonic Triangle" style="padding: 0px; bottom-padding: 0px" />
</figure>
<br>

Here is where the tonal magic happens. Welcome to the **Harmonic Triangle**, where ordinary sounds come to life.

The Harmonic Triangle lets you define a given probability for each grain’s pitch, which means you’re able to transpose grains up or down according to user-defined intervals.

The nucleus of this panel is the center triangle and its respective inner node. **Each of the triangle’s vertices can transpose the grains within a range of -12 to +12 semitones**. The **node** will determine a three-way probability where **the closer the vertex, the greater the chance of a grain picking that vertex’s interval**. If the node is in the center of the triangle, all vertices will have the same probability of being picked by the grain for its transposition. Since this is a triangle, **you can make triads by setting different intervals on each vertex**. This will introduce tonality to the sound, letting you create harmony from simple single note sounds, or even arpeggiated melodic lines from your input.

For a quick triad selection we have added a **chord list**, with 32 available options, which automatically sets the pitches of the vertexes to match it. You can change them using the **list above** or **by dragging the outer, dashed circle up and down**.

**If you’re into microtonal sounds or detuning, you can use the free pitch mode which will let you choose continuous values for the transposition.**

On the bottom left you can select the pitch quantization mode:
- **Quantized** - The pitch knobs will be quantized to semitones.
- **Free** - The pitch knobs will be continuous, letting you fine tune and set microtones.

On the bottom right you can select the interval selection mode:
- **Random** - Every time a grain is fired, a new interval will be chosen according to the probability of each vertex.
- **Fixed** - When moving the node, each grain will be assigned an interval according to its proximity to the vertices. These intervals are calculated deterministically and persist until the node is moved to a different position. 

The pitch knobs and the X/Y position of the node can be modulated by the LFOs for melodic variation and even more organic and unique results.

**Note:** The animation underneath the Harmonic Triangle can be disabled in the **Settings**.

<br>

Previous: [Granulator](granulator)

Next: [Modulator Rack](modulator-rack)