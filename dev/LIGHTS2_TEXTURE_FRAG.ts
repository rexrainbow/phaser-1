export const LIGHTS2_TEXTURE_FRAG =
`#define SHADER_NAME frag

precision highp float;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vFinalColor;

uniform sampler2D uTexture;

void main (void)
{
    vec4 color = texture2D(uTexture, vTextureCoord);

    // gl_FragColor = color * vec4(vFinalColor.rgb * vFinalColor.a, vFinalColor.a);

    gl_FragColor = vec4(color.rgb * vFinalColor.rgb, color.a);

    // gl_FragColor = color;
}`;
