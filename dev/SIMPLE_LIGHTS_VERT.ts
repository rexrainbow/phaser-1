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
// uniform vec3 uLightPosition;

// varying vec3 vColor;
varying vec4 vColor;

void main (void)
{
    vec3 ambientLight = vec3(0.3, 0.3, 0.3);
    vec3 directionalVector = normalize(uLightDirection);

    vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);

    vec3 diffuse = uLightColor * aVertexColor.rgb * directional;

    // vColor = ambientLight + (uLightColor * directional * aVertexColor.rgb);
    vColor = vec4(diffuse, aVertexColor.a);

    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);
}`;
