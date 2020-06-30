export const GORAUD_LAMBERT_FRAG =
`#define SHADER_NAME GORAUD_LAMBERT_FRAG

precision highp float;

varying vec2 vTextureCoord;
varying vec4 vTintColor;

uniform sampler2D uTexture;

void main (void)
{
    vec4 tcolor = texture2D(uTexture, vTextureCoord);

    vec4 color = vec4(0.7, 0.0, 0.7, 1.0);

    gl_FragColor = color * vec4(vTintColor.rgb * vTintColor.a, vTintColor.a);
}`;
