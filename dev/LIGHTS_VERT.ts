export const LIGHTS_VERT =
`#define SHADER_NAME vert

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;
// uniform mat4 uNormalMatrix;

uniform float uShine;
uniform vec3 uLightDirection;

uniform vec4 uLightAmbient;
uniform vec4 uLightDiffuse;
uniform vec4 uLightSpecular;

uniform vec4 uMaterialAmbient;
uniform vec4 uMaterialDiffuse;
uniform vec4 uMaterialSpecular;

varying vec4 vColor;

void main (void)
{
    vec4 vertex = uCameraMatrix * vec4(aVertexPosition, 1.0);

    // vec3 N = normalize(vec3(uNormalMatrix * vec4(aVertexNormal, 1.0)));
    // vec3 N = normalize(aVertexNormal);

    vec3 L = normalize(uLightDirection);

    float lambert = clamp(dot(aVertexNormal, -L), 0.0, 1.0);

    vec4 ambientTerm = uLightAmbient * uMaterialAmbient;
    vec4 diffuseTerm = vec4(0.0, 0.0, 0.0, 1.0);
    vec4 specularTerm = vec4(0.0, 0.0, 0.0, 1.0);

    diffuseTerm = uLightDiffuse * uMaterialDiffuse * lambert;

    vec3 eye = -vec3(vertex.xyz);
    vec3 E = normalize(eye);
    vec3 R = reflect(L, aVertexNormal);

    float specular = pow(max(dot(R, E), 0.0), uShine);

    specularTerm = uLightSpecular * uMaterialSpecular * specular;

    vColor = ambientTerm + diffuseTerm + specularTerm;
    vColor.a = 1.0;
    gl_Position = uProjectionMatrix * vertex;

    // vColor = vec4(0.0, 1.0, 0.0, 1.0);
    // gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);
}`;
