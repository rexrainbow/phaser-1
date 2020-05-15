import { GL } from '../GL';
import { IShader } from './IShader';
import { IShaderAttributes } from './IShaderAttributes';
import { IShaderConfig } from './IShaderConfig';
import { IShaderUniforms } from './IShaderUniforms';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedBuffer } from '../buffers/IndexedBuffer';

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

export class SingleTextureQuadShader implements IShader
{
    gl: WebGLRenderingContext;

    program: WebGLProgram;

    attribs: IShaderAttributes = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };
    uniforms: IShaderUniforms = { uProjectionMatrix: 0, uCameraMatrix: 0, uTexture: 0, uTime: 0, uResolution: 0 };

    buffer: IndexedBuffer;

    /**
     * The total number of quads added to the batch so far.
     * Reset every bind and flush.
     *
     * @type {number}
     */
    count: number;

    /**
     * The total number of quads previously flushed.
     *
     * @type {number}
     */
    prevCount: number;

    constructor (config: IShaderConfig = {})
    {
        this.gl = GL.get();

        const {
            batchSize = 4096,
            dataSize = 4,
            indexSize = 4,
            vertexElementSize = 6,
            quadIndexSize = 6,
            fragmentShader = shaderSource.fragmentShader,
            vertexShader = shaderSource.vertexShader
        } = config;

        this.buffer = new IndexedBuffer(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize);

        this.createShaders(fragmentShader, vertexShader);

        this.count = 0;
    }

    createShaders (fragmentShaderSource: string, vertexShaderSource: string): void
    {
        const gl = this.gl;

        //  Create the shaders

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);

        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        const program = gl.createProgram();

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        gl.useProgram(program);

        this.program = program;

        for (const key of Object.keys(this.attribs) as Array<keyof IShaderAttributes>)
        {
            const location = gl.getAttribLocation(program, key);

            gl.enableVertexAttribArray(location);

            this.attribs[key] = location;
        }

        for (const key of Object.keys(this.uniforms) as Array<keyof IShaderUniforms>)
        {
            this.uniforms[key] = gl.getUniformLocation(program, key);
        }
    }

    bind (renderer: IWebGLRenderer, projectionMatrix: Float32Array, cameraMatrix: Float32Array, textureID: number): void
    {
        const gl = this.gl;
        const uniforms = this.uniforms;

        gl.useProgram(this.program);

        gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);
        gl.uniform1i(uniforms.uTexture, renderer.textures.textureIndex[textureID]);
        gl.uniform1f(uniforms.uTime, performance.now());
        gl.uniform2f(uniforms.uResolution, renderer.width, renderer.height);

        this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);
    }

    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void
    {
        const gl = this.gl;
        const stride = this.buffer.vertexByteSize;
        const attribs = this.attribs;

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        //  attributes must be reset whenever you change buffers

        gl.vertexAttribPointer(attribs.aVertexPosition, 2, gl.FLOAT, false, stride, 0);     // size = 8
        gl.vertexAttribPointer(attribs.aTextureCoord, 2, gl.FLOAT, false, stride, 8);       // size = 8, offset = position
        gl.vertexAttribPointer(attribs.aTextureId, 1, gl.FLOAT, false, stride, 16);         // size = 4, offset = position + tex coord
        gl.vertexAttribPointer(attribs.aTintColor, 4, gl.UNSIGNED_BYTE, true, stride, 20);  // size = 4, offset = position + tex coord + index

        this.count = 0;
    }

    draw (count: number): void
    {
        const gl = this.gl;
        const buffer = this.buffer;

        if (count === buffer.batchSize)
        {
            gl.bufferData(gl.ARRAY_BUFFER, buffer.data, gl.DYNAMIC_DRAW);
        }
        else
        {
            const view = buffer.vertexViewF32.subarray(0, count * buffer.quadElementSize);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        }

        gl.drawElements(gl.TRIANGLES, count * buffer.quadIndexSize, gl.UNSIGNED_SHORT, 0);
    }

    flush (): boolean
    {
        const count = this.count;

        if (count === 0)
        {
            return false;
        }

        this.draw(count);

        this.prevCount = count;

        this.count = 0;

        return true;
    }
}
