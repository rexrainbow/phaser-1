export const AMBIENT_LIGHT_FRAG =
`#define SHADER_NAME AMBIENT_LIGHT_FRAG

precision highp float;

varying vec2 vTextureCoord;
varying float vN;

uniform vec3 uLightColor;
uniform vec3 uLightAmbient;
uniform sampler2D uTexture;

void main (void)
{
    vec4 color = texture2D(uTexture, vTextureCoord);

    vec3 diffuse = uLightColor * color.rgb * vN;
    vec3 ambient = uLightAmbient * color.rgb;

    gl_FragColor = vec4(diffuse + ambient, color.a);
}`;
