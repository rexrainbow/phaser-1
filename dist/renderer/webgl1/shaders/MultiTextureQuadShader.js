import {GetMaxTextures as GetMaxTextures2} from "../../../config/maxtextures/GetMaxTextures";
import {MULTI_QUAD_FRAG as MULTI_QUAD_FRAG2} from "../glsl/MULTI_QUAD_FRAG";
import {QuadShader as QuadShader2} from "./QuadShader";
export class MultiTextureQuadShader extends QuadShader2 {
  constructor(config = {}) {
    if (!config.fragmentShader) {
      config.fragmentShader = MULTI_QUAD_FRAG2;
    }
    super(config);
  }
  create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
    const maxTextures = GetMaxTextures2();
    let src = "";
    for (let i = 1; i < maxTextures; i++) {
      if (i > 1) {
        src += "\n	else ";
      }
      if (i < maxTextures - 1) {
        src += `if (vTextureId < ${i}.5)`;
      }
      src += "\n	{";
      src += `
		color = texture2D(uTexture[${i}], vTextureCoord);`;
      src += "\n	}";
    }
    fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);
    fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);
    super.create(fragmentShaderSource, vertexShaderSource, uniforms, attribs);
  }
  bind(renderPass) {
    this.uniforms.set("uTexture", renderPass.textureIndex);
    return super.bind(renderPass);
  }
}
