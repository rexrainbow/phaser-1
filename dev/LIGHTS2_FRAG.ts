export const LIGHTS2_FRAG =
`#define SHADER_NAME frag

precision highp float;

varying vec4 vFinalColor;

void main (void)
{
    gl_FragColor = vFinalColor;

    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;
