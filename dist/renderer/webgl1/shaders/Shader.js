import '../../../math/pow2/IsSizePowerOfTwo.js';
import '../../../config/const.js';
import '../../../config/ConfigStore.js';
import { GetHeight } from '../../../config/size/GetHeight.js';
import { GetResolution } from '../../../config/size/GetResolution.js';
import { GetWidth } from '../../../config/size/GetWidth.js';
import '../../BindingQueue.js';
import { gl } from '../GL.js';
import '../textures/CreateGLTexture.js';
import { DeleteFramebuffer } from '../fbo/DeleteFramebuffer.js';
import { DeleteGLTexture } from '../textures/DeleteGLTexture.js';
import '../textures/SetGLTextureFilterMode.js';
import '../textures/UpdateGLTexture.js';
import { GLTextureBinding } from '../textures/GLTextureBinding.js';
import { CreateAttributes } from './CreateAttributes.js';
import { DeleteShaders } from './DeleteShaders.js';
import { CreateProgram } from './CreateProgram.js';
import { CreateShader } from './CreateShader.js';
import './CreateUniformSetter.js';
import { CreateUniforms } from './CreateUniforms.js';
import '../GL_CONST.js';
import { DefaultQuadAttributes } from './DefaultQuadAttributes.js';
import { DefaultQuadUniforms } from './DefaultQuadUniforms.js';
import { CreateDepthBuffer } from '../fbo/CreateDepthBuffer.js';
import { CreateFramebuffer } from '../fbo/CreateFramebuffer.js';
import { SINGLE_QUAD_FRAG } from '../glsl/SINGLE_QUAD_FRAG.js';
import { SINGLE_QUAD_VERT } from '../glsl/SINGLE_QUAD_VERT.js';
import '../../../textures/Frame.js';
import { Texture } from '../../../textures/Texture.js';

class Shader {
    constructor(config) {
        this.renderToFramebuffer = false;
        this.renderToDepthbuffer = false;
        if (config) {
            this.fromConfig(config);
        }
    }
    fromConfig(config) {
        const { attributes = DefaultQuadAttributes, fragmentShader = SINGLE_QUAD_FRAG, height = GetHeight(), renderToFramebuffer = false, renderToDepthbuffer = false, resolution = GetResolution(), vertexShader = SINGLE_QUAD_VERT, width = GetWidth(), uniforms = DefaultQuadUniforms } = config;
        this.create(fragmentShader, vertexShader, uniforms, attributes);
        if (renderToFramebuffer) {
            this.renderToFramebuffer = true;
            const texture = new Texture(null, width * resolution, height * resolution);
            const binding = new GLTextureBinding(texture);
            texture.binding = binding;
            binding.framebuffer = CreateFramebuffer(binding.texture);
            if (renderToDepthbuffer) {
                this.renderToDepthbuffer = true;
                binding.depthbuffer = CreateDepthBuffer(binding.framebuffer, texture.width, texture.height);
            }
            this.texture = texture;
            this.framebuffer = binding.framebuffer;
        }
    }
    create(fragmentShaderSource, vertexShaderSource, uniforms, attribs) {
        const fragmentShader = CreateShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        const vertexShader = CreateShader(vertexShaderSource, gl.VERTEX_SHADER);
        if (!fragmentShader || !vertexShader) {
            return;
        }
        const program = CreateProgram(fragmentShader, vertexShader);
        if (!program) {
            return;
        }
        const currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);
        gl.useProgram(program);
        this.program = program;
        this.uniformSetters = CreateUniforms(program);
        this.uniforms = new Map();
        for (const [key, value] of Object.entries(uniforms)) {
            this.uniforms.set(key, value);
        }
        this.attributes = CreateAttributes(program, attribs);
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
            this.attributes.forEach(attrib => {
                gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
            });
        }
    }
    destroy() {
        DeleteShaders(this.program);
        DeleteGLTexture(this.texture);
        DeleteFramebuffer(this.framebuffer);
        this.uniforms.clear();
        this.uniformSetters.clear();
        this.attributes.clear();
        this.program = null;
        this.texture = null;
        this.framebuffer = null;
    }
}

export { Shader };
