import { GetWidth, GetHeight, GetResolution } from '../../../config/Size.js';
import '../../BindingQueue.js';
import '../GL.js';
import { CreateFramebuffer } from '../fbo/CreateFramebuffer.js';
import '../textures/CreateGLTexture.js';
import '../fbo/DeleteFramebuffer.js';
import '../textures/DeleteGLTexture.js';
import '../../../math/pow2/IsSizePowerOfTwo.js';
import '../textures/SetGLTextureFilterMode.js';
import '../textures/UpdateGLTexture.js';
import { GLTextureBinding } from '../textures/GLTextureBinding.js';
import { IndexedBuffer } from '../buffers/IndexedBuffer.js';
import '../../../textures/Frame.js';
import { Texture } from '../../../textures/Texture.js';
import { WebGLRendererInstance } from '../WebGLRendererInstance.js';

const shaderSource = {
    fragmentShader: `
#define SHADER_NAME SINGLE_QUAD_FRAG

precision highp float;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

uniform sampler2D uTexture;

void main (void)
{
    vec4 color = texture2D(uTexture, vTextureCoord);

    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
}`,
    vertexShader: `
#define SHADER_NAME SINGLE_QUAD_VERT

precision highp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute float aTextureId;
attribute vec4 aTintColor;

uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

void main (void)
{
    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vTintColor = aTintColor;

    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 0.0, 1.0);
}`
};
class SingleTextureQuadShader {
    constructor(config = {}) {
        this.attribs = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };
        this.uniforms = { uProjectionMatrix: 0, uCameraMatrix: 0, uTexture: 0, uTime: 0, uResolution: 0 };
        this.renderToFBO = false;
        this.renderer = WebGLRendererInstance.get();
        const { batchSize = 4096, dataSize = 4, indexSize = 4, vertexElementSize = 6, quadIndexSize = 6, fragmentShader = shaderSource.fragmentShader, vertexShader = shaderSource.vertexShader, width = GetWidth(), height = GetHeight(), resolution = GetResolution(), renderToFBO = false } = config;
        this.buffer = new IndexedBuffer(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize);
        this.createShaders(fragmentShader, vertexShader);
        this.count = 0;
        this.renderToFBO = renderToFBO;
        const texture = new Texture(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding(texture);
        texture.binding = binding;
        binding.framebuffer = CreateFramebuffer(binding.texture);
        this.texture = texture;
        this.framebuffer = binding.framebuffer;
    }
    createShaders(fragmentShaderSource, vertexShaderSource) {
        const gl = this.renderer.gl;
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);
        let failed = false;
        let message = gl.getShaderInfoLog(fragmentShader);
        if (message.length > 0) {
            failed = true;
            console.error(message);
        }
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);
        message = gl.getShaderInfoLog(fragmentShader);
        if (message.length > 0) {
            failed = true;
            console.error(message);
        }
        if (failed) {
            return;
        }
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        this.program = program;
        for (const key of Object.keys(this.attribs)) {
            const location = gl.getAttribLocation(program, key);
            gl.enableVertexAttribArray(location);
            this.attribs[key] = location;
        }
        for (const key of Object.keys(this.uniforms)) {
            this.uniforms[key] = gl.getUniformLocation(program, key);
        }
    }
    bind(projectionMatrix, cameraMatrix, textureID) {
        if (!this.program) {
            return false;
        }
        const renderer = this.renderer;
        const gl = renderer.gl;
        const uniforms = this.uniforms;
        gl.useProgram(this.program);
        gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);
        gl.uniform1i(uniforms.uTexture, renderer.textures.textureIndex[textureID]);
        gl.uniform1f(uniforms.uTime, performance.now());
        gl.uniform2f(uniforms.uResolution, renderer.width, renderer.height);
        this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);
        return true;
    }
    bindBuffers(indexBuffer, vertexBuffer) {
        const gl = this.renderer.gl;
        const stride = this.buffer.vertexByteSize;
        const attribs = this.attribs;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.vertexAttribPointer(attribs.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
        gl.vertexAttribPointer(attribs.aTextureCoord, 2, gl.FLOAT, false, stride, 8);
        gl.vertexAttribPointer(attribs.aTextureId, 1, gl.FLOAT, false, stride, 16);
        gl.vertexAttribPointer(attribs.aTintColor, 4, gl.UNSIGNED_BYTE, true, stride, 20);
        this.count = 0;
    }
    draw(count) {
        const renderer = this.renderer;
        const gl = renderer.gl;
        const buffer = this.buffer;
        if (count === buffer.batchSize) {
            gl.bufferData(gl.ARRAY_BUFFER, buffer.data, gl.DYNAMIC_DRAW);
        }
        else {
            const view = buffer.vertexViewF32.subarray(0, count * buffer.quadElementSize);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        }
        if (this.renderToFBO) {
            renderer.fbo.add(this.framebuffer, true);
        }
        gl.drawElements(gl.TRIANGLES, count * buffer.quadIndexSize, gl.UNSIGNED_SHORT, 0);
        if (this.renderToFBO) {
            renderer.fbo.pop();
        }
    }
    flush() {
        const count = this.count;
        if (count === 0) {
            return false;
        }
        this.draw(count);
        this.prevCount = count;
        this.count = 0;
        return true;
    }
}

export { SingleTextureQuadShader };
