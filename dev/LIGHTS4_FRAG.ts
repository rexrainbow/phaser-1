export const LIGHTS4_FRAG =
`#define SHADER_NAME frag

precision highp float;

uniform float uShininess;        //shininess
uniform vec3 uLightDirection;  //light direction

uniform vec4 uLightAmbient;      //light ambient property
uniform vec4 uLightDiffuse;      //light diffuse property
uniform vec4 uLightSpecular;     //light specular property

uniform vec4 uMaterialAmbient;  //object ambient property
uniform vec4 uMaterialDiffuse;   //object diffuse property
uniform vec4 uMaterialSpecular;  //object specular property

varying vec3 vNormal;
varying vec3 vEyeVec;
varying vec4 vColor;

void main(void)
{
     vec3 L = normalize(uLightDirection);
     vec3 N = normalize(vNormal);

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
        //   Id = uLightDiffuse * uMaterialDiffuse * lambertTerm; //add diffuse term
          Id = uLightDiffuse * vColor * lambertTerm; //add diffuse term

          vec3 E = normalize(vEyeVec);
          vec3 R = reflect(L, N);
          float specular = pow( max(dot(R, E), 0.0), uShininess);

          Is = uLightSpecular * uMaterialSpecular * specular; //add specular term
     }

     //Final color
     vec4 finalColor = Ia + Id + Is;
     finalColor.a = 1.0;

     gl_FragColor = finalColor;
}
`;
