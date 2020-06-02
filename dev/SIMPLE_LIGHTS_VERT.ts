export const SIMPLE_LIGHTS_VERT =
`#define SHADER_NAME vert

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;

uniform vec3 uLightColor;
uniform vec3 uLightDirection;

varying vec4 vColor;

void main (void)
{
    // normalize the length
    vec3 normal = normalize(aVertexNormal.xyz);

    // Dot product of the light direction and the orientation of a surface (the normal)
    float nDotLight = max(dot(uLightDirection, normal), 0.0);

    // Calculate the color due to diffuse reflection
    vec4 aColor = vec4(0.0, 0.0, 1.0, 1.0);
    vec3 diffuse = uLightColor * aColor.rgb * nDotLight;

    vColor = vec4(diffuse, aColor.a);

    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);
}`;
