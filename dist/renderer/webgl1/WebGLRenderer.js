import { GetBackgroundColor } from '../../config/BackgroundColor.js';
import { GetWidth, GetHeight, GetResolution } from '../../config/Size.js';
import '../BindingQueue.js';
import '../../config/MaxTextures.js';
import { GetWebGLContext } from '../../config/WebGLContext.js';
import { FBOSystem } from './fbo/FBOSystem.js';
import { GL } from './GL.js';
import { GetRGBArray } from './colors/GetRGBArray.js';
import { ExactEquals } from '../../math/matrix2d-funcs/ExactEquals.js';
import './fbo/CreateFramebuffer.js';
import './textures/CreateGLTexture.js';
import './fbo/DeleteFramebuffer.js';
import './textures/DeleteGLTexture.js';
import '../../math/pow2/IsSizePowerOfTwo.js';
import './textures/SetGLTextureFilterMode.js';
import './textures/UpdateGLTexture.js';
import './textures/GLTextureBinding.js';
import './buffers/IndexedBuffer.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import { WebGLRendererInstance } from './WebGLRendererInstance.js';
import './shaders/SingleTextureQuadShader.js';
import { MultiTextureQuadShader } from './shaders/MultiTextureQuadShader.js';
import { Ortho } from './cameras/Ortho.js';
import { ShaderSystem } from './shaders/ShaderSystem.js';
import './shaders/CheckShaderMaxIfStatements.js';
import { TextureSystem } from './textures/TextureSystem.js';

class WebGLRenderer {
    constructor() {
        this.clearColor = [0, 0, 0, 1];
        this.flushTotal = 0;
        this.clearBeforeRender = true;
        this.optimizeRedraw = false;
        this.autoResize = true;
        this.contextLost = false;
        this.currentCamera = null;
        this.width = GetWidth();
        this.height = GetHeight();
        this.resolution = GetResolution();
        this.setBackgroundColor(GetBackgroundColor());
        const canvas = document.createElement('canvas');
        canvas.addEventListener('webglcontextlost', (event) => this.onContextLost(event), false);
        canvas.addEventListener('webglcontextrestored', () => this.onContextRestored(), false);
        this.canvas = canvas;
        this.fbo = new FBOSystem(this);
        this.textures = new TextureSystem(this);
        this.initContext();
        WebGLRendererInstance.set(this);
        this.shaders = new ShaderSystem(this, MultiTextureQuadShader);
    }
    initContext() {
        const gl = this.canvas.getContext('webgl', GetWebGLContext());
        GL.set(gl);
        this.gl = gl;
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        this.resize(this.width, this.height, this.resolution);
        this.textures.init();
    }
    resize(width, height, resolution = 1) {
        this.width = width * resolution;
        this.height = height * resolution;
        this.resolution = resolution;
        const canvas = this.canvas;
        canvas.width = this.width;
        canvas.height = this.height;
        if (this.autoResize) {
            canvas.style.width = (this.width / resolution).toString() + 'px';
            canvas.style.height = (this.height / resolution).toString() + 'px';
        }
        this.gl.viewport(0, 0, this.width, this.height);
        this.projectionMatrix = Ortho(width, height);
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
    reset(framebuffer = null, width = this.width, height = this.height) {
        const gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.viewport(0, 0, width, height);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        this.flushTotal = 0;
        this.currentCamera = null;
        this.textures.update();
    }
    render(renderData) {
        if (this.contextLost) {
            return;
        }
        this.reset();
        if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
            return;
        }
        const gl = this.gl;
        if (this.clearBeforeRender) {
            const cls = this.clearColor;
            gl.clearColor(cls[0], cls[1], cls[2], cls[3]);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        const worlds = renderData.worldData;
        for (let i = 0; i < worlds.length; i++) {
            const { camera, renderList } = worlds[i];
            if (!this.currentCamera || !ExactEquals(camera.worldTransform, this.currentCamera.worldTransform)) {
                this.flush();
                this.currentCamera = camera;
                this.shaders.rebind();
            }
            renderList.forEach(entry => {
                if (entry.children.length) {
                    this.renderNode(entry);
                }
                else {
                    entry.node.renderGL(this);
                }
            });
        }
        this.flush();
    }
    renderNode(entry) {
        entry.node.renderGL(this);
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                this.renderNode(child);
            }
            else {
                child.node.renderGL(this);
            }
        });
        entry.node.postRenderGL(this);
    }
    flush() {
        this.shaders.flush();
    }
    destroy() {
        WebGLRendererInstance.set(undefined);
    }
}

export { WebGLRenderer };
