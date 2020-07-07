import '../../GameInstance.js';
import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../../math/mat4/Matrix4.js';
import '../../math/mat4/Identity.js';
import '../../math/mat4/Ortho.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/Contains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../camera/StaticCamera.js';
import '../../math/pow2/IsSizePowerOfTwo.js';
import { GetBackgroundColor } from '../../config/BackgroundColor.js';
import '../../config/BatchSize.js';
import { GetWidth, GetHeight, GetResolution } from '../../config/Size.js';
import '../BindingQueue.js';
import '../../config/MaxTextures.js';
import { GetWebGLContext } from '../../config/WebGLContext.js';
import './renderpass/AddViewport.js';
import { GL } from './GL.js';
import './renderpass/BindViewport.js';
import './renderpass/SetViewport.js';
import './renderpass/BindFramebuffer.js';
import './renderpass/PopViewport.js';
import './renderpass/PopFramebuffer.js';
import './renderpass/AddFramebuffer.js';
import './renderpass/SetFramebuffer.js';
import './renderpass/Draw.js';
import './renderpass/Flush.js';
import { End } from './renderpass/End.js';
import { GetRGBArray } from './colors/GetRGBArray.js';
import './textures/CreateGLTexture.js';
import './fbo/DeleteFramebuffer.js';
import './textures/DeleteGLTexture.js';
import './textures/SetGLTextureFilterMode.js';
import './textures/UpdateGLTexture.js';
import './textures/GLTextureBinding.js';
import { ProcessBindingQueue } from './renderpass/ProcessBindingQueue.js';
import './shaders/CheckShaderMaxIfStatements.js';
import './renderpass/CreateTempTextures.js';
import './buffers/DeleteGLBuffer.js';
import './buffers/VertexBuffer.js';
import './buffers/IndexedVertexBuffer.js';
import './shaders/CreateAttributes.js';
import './shaders/DeleteShaders.js';
import './shaders/CreateProgram.js';
import './shaders/CreateShader.js';
import './shaders/CreateUniformSetter.js';
import './shaders/CreateUniforms.js';
import './GL_CONST.js';
import './shaders/DefaultQuadAttributes.js';
import './shaders/DefaultQuadUniforms.js';
import './fbo/CreateDepthBuffer.js';
import './fbo/CreateFramebuffer.js';
import './glsl/SINGLE_QUAD_FRAG.js';
import './glsl/SINGLE_QUAD_VERT.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import './shaders/Shader.js';
import './shaders/QuadShader.js';
import './glsl/MULTI_QUAD_FRAG.js';
import './shaders/MultiTextureQuadShader.js';
import './renderpass/SetDefaultBlendMode.js';
import './renderpass/SetDefaultFramebuffer.js';
import './renderpass/SetDefaultShader.js';
import './renderpass/SetDefaultVertexBuffer.js';
import './renderpass/SetDefaultViewport.js';
import { RenderPass } from './renderpass/RenderPass.js';
import './renderpass/BindBlendMode.js';
import './renderpass/BindVertexBuffer.js';
import { Start } from './renderpass/Start.js';
import { WebGLRendererInstance } from './WebGLRendererInstance.js';

class WebGLRenderer {
    constructor() {
        this.clearColor = [0, 0, 0, 1];
        this.clearBeforeRender = true;
        this.optimizeRedraw = false;
        this.autoResize = true;
        this.contextLost = false;
        this.width = GetWidth();
        this.height = GetHeight();
        this.resolution = GetResolution();
        this.setBackgroundColor(GetBackgroundColor());
        const canvas = document.createElement('canvas');
        canvas.addEventListener('webglcontextlost', (event) => this.onContextLost(event), false);
        canvas.addEventListener('webglcontextrestored', () => this.onContextRestored(), false);
        this.canvas = canvas;
        this.initContext();
        WebGLRendererInstance.set(this);
        this.renderPass = new RenderPass(this);
        this.resize(this.width, this.height, this.resolution);
    }
    initContext() {
        const gl = this.canvas.getContext('webgl', GetWebGLContext());
        GL.set(gl);
        this.gl = gl;
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
    }
    resize(width, height, resolution = 1) {
        const calcWidth = width * resolution;
        const calcHeight = height * resolution;
        this.width = calcWidth;
        this.height = calcHeight;
        this.resolution = resolution;
        const canvas = this.canvas;
        canvas.width = calcWidth;
        canvas.height = calcHeight;
        if (this.autoResize) {
            canvas.style.width = width.toString() + 'px';
            canvas.style.height = height.toString() + 'px';
        }
        this.renderPass.resize(calcWidth, calcHeight);
    }
    onContextLost(event) {
        event.preventDefault();
        this.contextLost = true;
    }
    onContextRestored() {
        this.contextLost = false;
        this.initContext();
    }
    setBackgroundColor(color) {
        GetRGBArray(color, this.clearColor);
        return this;
    }
    reset() {
    }
    render(renderData) {
        if (this.contextLost) {
            return;
        }
        const gl = this.gl;
        const renderPass = this.renderPass;
        ProcessBindingQueue();
        if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
            return;
        }
        if (this.clearBeforeRender) {
            const cls = this.clearColor;
            gl.clearColor(cls[0], cls[1], cls[2], cls[3]);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        const worlds = renderData.worldData;
        Start(renderPass);
        for (let i = 0; i < worlds.length; i++) {
            const { world } = worlds[i];
            world.renderGL(renderPass);
            world.postRenderGL(renderPass);
        }
        End(renderPass);
    }
    destroy() {
        WebGLRendererInstance.set(undefined);
    }
}

export { WebGLRenderer };
