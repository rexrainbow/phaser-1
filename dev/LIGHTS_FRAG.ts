export const LIGHTS_FRAG =
`#define SHADER_NAME frag

precision highp float;

varying vec4 vColor;

void main (void)
{
    gl_FragColor = vColor;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;
