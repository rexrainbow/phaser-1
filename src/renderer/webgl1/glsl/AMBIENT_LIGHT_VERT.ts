export const AMBIENT_LIGHT_VERT = `
#define SHADER_NAME AMBIENT_LIGHT_VERT

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uModelMatrix;
uniform mat4 uNormalMatrix;

uniform vec3 uLightColor;
uniform vec3 uLightDirection;

varying vec2 vTextureCoord;
varying float vN;

void main(void)
{
    vTextureCoord = aTextureCoord;

    vec3 normal = normalize(vec3(uNormalMatrix * vec4(aVertexNormal, 1.0)));

    vN = max(dot(normalize(uLightDirection), normal), 0.0);

    gl_Position = uViewProjectionMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
}
`;
