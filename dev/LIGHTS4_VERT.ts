export const LIGHTS4_VERT = `
#define SHADER_NAME vert

//  Phong Shading

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec4 aVertexColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;
uniform mat4 uNormalMatrix;

varying vec3 vNormal;
varying vec3 vEyeVec;
varying vec4 vColor;

void main(void) {

    vColor = vec4(aVertexColor.bgr, 1.0);

    //Transformed vertex position
    vec4 vertex = uCameraMatrix * vec4(aVertexPosition, 1.0);

    //Transformed normal position
    vNormal = vec3(uNormalMatrix * vec4(aVertexNormal, 1.0));

    //Vector Eye
    vEyeVec = -vec3(vertex.xyz);

    //Final vertex position
    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 1.0);

}
`;
