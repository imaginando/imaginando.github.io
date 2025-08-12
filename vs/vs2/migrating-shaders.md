# Migrating shaders from VS 1

Due to internal changes from version 1 to 2, shader materials made for VS 1 need to be tweaked to work properly in VS 2. There are two main differences:

1. The previously available 'opacity' variable no longer exists, so your shaders will fail to compile.
2. The fragColor calculation now depends on coloredPixels — a calculation determining how far a pixel is from black.
    - It was previously impossible to make black shaders due to how VS handled color and transparency: black pixels were turned transparent when the alpha decreased. In order to allow black shader materials, we now calculate a new variable (commonly named **coloredPixels**) before applying our Layer’s **color**. The coloredPixels variable calculates the pixel’s intended opacity based on how black it is. It is then used for fragColor’s alpha. Only after all this do we apply our own color to the pixels (which can be black).
    - **Note:** If your shaders use the **color** variable before the **coloredPixels** and **fragColor** calculations, the Layer’s color choice may cause unintended effects. If so, try replacing these usages of color with vec3(1.0) — a fully white pixel.

For the simplest cases, migrating your shader may consist of simply replacing the **fragColor** calculation:

````glsl
fragColor = vec4(final * color.rgb * opacity, alpha);
````

with

````glsl
vec3 finalColor = vec3(final)
float coloredPixels = dot(clamp(finalColor, 0., 1.), vec3(1.0));
fragColor = vec4(finalColor * color.rgb, alpha * coloredPixels);
````

Here, **final** is a placeholder name for your **vec3** variable representing the color of your pixel after the shader calculations; substitute with your own. Note that it may also be a **float**, in which case **you must convert it to a vec3 for the coloredPixels calculation**.

There may be nuances depending on the complexity of the shader. You can always clone a shader material from the factory and see how it was done.

***
[Previous: Material Editor: Making your own shaders](material-editor)<br>
[Back to Contents](contents)