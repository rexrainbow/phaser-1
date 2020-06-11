export const LIGHTS3_VERT = `
#define SHADER_NAME vert

//  Goraud Shading + Phong Reflection

precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec4 aVertexColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;
uniform mat4 uNormalMatrix;

uniform float uShininess;
uniform vec3 uLightDirection;

uniform vec4 uLightAmbient;
uniform vec4 uLightDiffuse;
uniform vec4 uLightSpecular;

uniform vec4 uMaterialAmbient;
uniform vec4 uMaterialDiffuse;
uniform vec4 uMaterialSpecular;

varying vec4 vFinalColor;

void main(void) {

    //Transformed vertex position
    vec4 vertex = uCameraMatrix * vec4(aVertexPosition, 1.0);

    //Transformed normal position
    vec3 N = vec3(uNormalMatrix * vec4(aVertexNormal, 1.0));

    //Normalize light to calculate lambertTerm
    vec3 L = normalize(uLightDirection);

    //Lambert's cosine law
    float lambertTerm = dot(N,-L);

    //Ambient Term
    vec4 Ia = uLightAmbient * uMaterialAmbient;

    //Diffuse Term
    vec4 Id = vec4(0.0,0.0,0.0,1.0);

    //Specular Term
    vec4 Is = vec4(0.0,0.0,0.0,1.0);

    if(lambertTerm > 0.0) //only if lambertTerm is positive
    {
        // Id = uLightDiffuse * uMaterialDiffuse * lambertTerm; //add diffuse term
        Id = uLightDiffuse * vec4(aVertexColor.bgr, 1.0) * lambertTerm; //add diffuse term

        vec3 eyeVec = -vec3(vertex.xyz);
        vec3 E = normalize(eyeVec);
        vec3 R = reflect(L, N);
        float specular = pow(max(dot(R, E), 0.0), uShininess );

        Is = uLightSpecular * uMaterialSpecular * specular; //add specular term
    }

    //Final color
    vFinalColor = Ia + Id + Is;
    vFinalColor.a = 1.0;

    //Transformed vertex position
    gl_Position = uProjectionMatrix * vertex;
}
`;
