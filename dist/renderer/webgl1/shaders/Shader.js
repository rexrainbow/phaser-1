import {GetHeight, GetResolution, GetWidth} from "../../../config/size/";
import {CreateAttributes as CreateAttributes2} from "./CreateAttributes";
import {CreateDepthBuffer as CreateDepthBuffer2} from "../fbo/CreateDepthBuffer";
import {CreateFramebuffer as CreateFramebuffer2} from "../fbo/CreateFramebuffer";
import {CreateProgram as CreateProgram2} from "./CreateProgram";
import {CreateShader as CreateShader2} from "./CreateShader";
import {CreateUniforms as CreateUniforms2} from "./CreateUniforms";
import {DefaultQuadAttributes as DefaultQuadAttributes2} from "./DefaultQuadAttributes";
import {DefaultQuadUniforms as DefaultQuadUniforms2} from "./DefaultQuadUniforms";
import {DeleteFramebuffer as DeleteFramebuffer2} from "../fbo/DeleteFramebuffer";
import {DeleteGLTexture as DeleteGLTexture2} from "../textures/DeleteGLTexture";
import {DeleteShaders as DeleteShaders2} from "./DeleteShaders";
import {GLTextureBinding as GLTextureBinding2} from "../textures/GLTextureBinding";
import {SINGLE_QUAD_FRAG as SINGLE_QUAD_FRAG2} from "../glsl/SINGLE_QUAD_FRAG";
import {SINGLE_QUAD_VERT as SINGLE_QUAD_VERT2} from "../glsl/SINGLE_QUAD_VERT";
import {Texture as Texture2} from "../../../textures/Texture";
import {gl} from "../GL";
export class Shader {
  constructor(config) {
    this.renderToFramebuffer = false;
    this.renderToDepthbuffer = false;
    if (config) {
      this.fromConfig(config);
    }
  }
  fromConfig(config) {
    const {
      attributes = DefaultQuadAttributes2,
      fragmentShader = SINGLE_QUAD_FRAG2,
      height = GetHeight(),
      renderToFramebuffer = false,
      renderToDepthbuffer = false,
      resolution = GetResolution(),
      vertexShader = SINGLE_QUAD_VERT2,
      width = GetWidth(),
      uniforms = DefaultQuadUniforms2
    } = config;
    this.create(fragmentShader, vertexShader, uniforms, attributes);
    if (renderToFramebuffer) {
      this.renderToFramebuffer = true;
      const texture = new Texture2(null, width * resolution, height * resolution);
      const binding = new GLTextureBinding2(texture);
      texture.binding = binding;
      binding.framebuffer = CreateFramebuffer2(binding.texture);
      if (renderToDepthbuffer) {
        this.renderToDepthbuffer = true;
        binding.depthbuffer = CreateDepthBuffer2(binding.framebuffer, texture.width, texture.height);
      }
      this.texture = texture;
      this.framebuffer = binding.framebuffer;
    }
  }
  create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
    const fragmentShader = CreateShader2(fragmentShaderSource, gl.FRAGMENT_SHADER);
    const vertexShader = CreateShader2(vertexShaderSource, gl.VERTEX_SHADER);
    if (!fragmentShader || !vertexShader) {
      return;
    }
    const program = CreateProgram2(fragmentShader, vertexShader);
    if (!program) {
      return;
    }
    const currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);
    gl.useProgram(program);
    this.program = program;
    this.uniformSetters = CreateUniforms2(program);
    this.uniforms = new Map();
    for (const [key, value] of Object.entries(uniforms)) {
      this.uniforms.set(key, value);
    }
    this.attributes = CreateAttributes2(program, attribs);
    gl.useProgram(currentProgram);
  }
  updateUniforms(renderPass) {
  }
  bind(renderPass) {
    this.updateUniforms(renderPass);
    return this.setUniforms(renderPass);
  }
  setUniform(key, value) {
    const uniforms = this.uniforms;
    if (uniforms.has(key)) {
      uniforms.set(key, value);
      const setter = this.uniformSetters.get(key);
      setter(value);
    }
  }
  setUniforms(renderPass) {
    if (!this.program) {
      return false;
    }
    gl.useProgram(this.program);
    const uniforms = this.uniforms;
    for (const [name, setter] of this.uniformSetters.entries()) {
      setter(uniforms.get(name));
    }
    return true;
  }
  setAttributes(renderPass) {
    if (this.program) {
      const stride = renderPass.currentVertexBuffer.vertexByteSize;
      this.attributes.forEach((attrib) => {
        gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
      });
    }
  }
  destroy() {
    DeleteShaders2(this.program);
    DeleteGLTexture2(this.texture);
    DeleteFramebuffer2(this.framebuffer);
    this.uniforms.clear();
    this.uniformSetters.clear();
    this.attributes.clear();
    this.program = null;
    this.texture = null;
    this.framebuffer = null;
  }
}
