import * as GL_CONST from '../GL_CONST';

import { GORAUD_LAMBERT_VERT } from '../glsl/GORAUD_LAMBERT_VERT';
import { IShader } from './IShader';
import { SINGLE_QUAD_FRAG } from '../glsl/SINGLE_QUAD_FRAG';
import { Shader } from './Shader';

export class GoraudLambertShader extends Shader implements IShader
{
    constructor ()
    {
        super();

        const config = {
            fragmentShader: SINGLE_QUAD_FRAG,
            vertexShader: GORAUD_LAMBERT_VERT,
            attributes: {
                aVertexPosition: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 0 },
                aVertexNormal: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 12 },
                aTextureCoord: { size: 2, type: GL_CONST.FLOAT, normalized: false, offset: 24 },
                aTextureId: { size: 1, type: GL_CONST.FLOAT, normalized: false, offset: 32 }
            },
            uniforms: {
                uProjectionMatrix: new Float32Array(),
                uCameraMatrix: new Float32Array(),
                uNormalMatrix: new Float32Array(),

                uTexture: 0,
                uShininess: 10.10,
                uLightDirection: [ 0, -1, 1 ],

                uLightAmbient: [ 0.75, 0.75, 0.75, 1 ],
                uLightDiffuse: [ 0.5, 0.5, 0.5, 1 ],
                uLightSpecular: [ 0.4, 0.4, 0.4, 1 ],

                uMaterialAmbient: [ 0.2, 0.2, 0.2, 1 ],
                uMaterialDiffuse: [ 0.2, 0.2, 0.2, 1 ],
                uMaterialSpecular: [ 0.91, 0.91, 0.91, 1 ]
            }
        };

        this.fromConfig(config);
    }


}
