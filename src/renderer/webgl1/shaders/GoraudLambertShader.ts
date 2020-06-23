import * as GL_CONST from '../GL_CONST';

import { GORAUD_LAMBERT_FRAG } from '../glsl/GORAUD_LAMBERT_FRAG';
import { GORAUD_LAMBERT_VERT } from '../glsl/GORAUD_LAMBERT_VERT';
import { IShader } from './IShader';
import { Shader } from './Shader';

export class GoraudLambertShader extends Shader implements IShader
{
    constructor ()
    {
        super();

        const config = {
            fragmentShader: GORAUD_LAMBERT_FRAG,
            vertexShader: GORAUD_LAMBERT_VERT,
            attributes: {
                aVertexPosition: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 0 },
                aVertexNormal: { size: 3, type: GL_CONST.FLOAT, normalized: false, offset: 12 },
                aTextureCoord: { size: 2, type: GL_CONST.FLOAT, normalized: false, offset: 24 }
            },
            uniforms: {
                uProjectionMatrix: new Float32Array(16),
                uCameraMatrix: new Float32Array(16),
                uNormalMatrix: new Float32Array(16),
                uModelMatrix: new Float32Array(16).fill(0),

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
