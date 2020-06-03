export const LIGHTS_FRAG =
`#define SHADER_NAME frag

precision highp float;

varying vec3 vColor;

void main (void)
{
    gl_FragColor = vec4(vColor, 1.0);

    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;
