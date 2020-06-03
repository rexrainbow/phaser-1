export const SIMPLE_LIGHTS_VERT =
`#define SHADER_NAME vert

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec4 aVertexColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;
uniform mat4 uNormalMatrix;

uniform vec3 uLightColor;
uniform vec3 uLightDirection;

varying vec3 vColor;

void main (void)
{
    vec3 ambientLight = vec3(0.3, 0.3, 0.3);
    vec3 directionalVector = normalize(uLightDirection);

    vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);

    vColor = ambientLight + (uLightColor * directional * aVertexColor.rgb);

    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);
}`;
