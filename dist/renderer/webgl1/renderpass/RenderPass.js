import {CreateTempTextures as CreateTempTextures2} from "./CreateTempTextures";
import {GetBatchSize as GetBatchSize2} from "../../../config/batchsize/GetBatchSize";
import {IndexedVertexBuffer as IndexedVertexBuffer2} from "../buffers/IndexedVertexBuffer";
import {Matrix4 as Matrix42} from "../../../math/mat4/Matrix4";
import {MultiTextureQuadShader} from "../shaders";
import {Ortho as Ortho2} from "../../../math/mat4/Ortho";
import {QuadShader as QuadShader2} from "../shaders/QuadShader";
import {SetDefaultBlendMode as SetDefaultBlendMode2} from "./SetDefaultBlendMode";
import {SetDefaultFramebuffer as SetDefaultFramebuffer2} from "./SetDefaultFramebuffer";
import {SetDefaultShader as SetDefaultShader2} from "./SetDefaultShader";
import {SetDefaultVertexBuffer as SetDefaultVertexBuffer2} from "./SetDefaultVertexBuffer";
import {SetDefaultViewport as SetDefaultViewport2} from "./SetDefaultViewport";
import {StaticCamera} from "../../../camera";
export class RenderPass {
  constructor(renderer) {
    this.count = 0;
    this.prevCount = 0;
    this.flushTotal = 0;
    this.maxTextures = 0;
    this.currentActiveTexture = 0;
    this.startActiveTexture = 0;
    this.tempTextures = [];
    this.textureIndex = [];
    this.framebufferStack = [];
    this.currentFramebuffer = null;
    this.defaultFramebuffer = null;
    this.vertexBufferStack = [];
    this.currentVertexBuffer = null;
    this.defaultVertexBuffer = null;
    this.shaderStack = [];
    this.currentShader = null;
    this.defaultShader = null;
    this.viewportStack = [];
    this.currentViewport = null;
    this.defaultViewport = null;
    this.blendModeStack = [];
    this.currentBlendMode = null;
    this.defaultBlendMode = null;
    this.renderer = renderer;
    this.projectionMatrix = new Matrix42();
    this.reset();
  }
  reset() {
    const gl = this.renderer.gl;
    const indexLayout = [0, 1, 2, 2, 3, 0];
    this.quadShader = new QuadShader2();
    this.quadBuffer = new IndexedVertexBuffer2({isDynamic: false, indexLayout});
    this.quadCamera = new StaticCamera();
    CreateTempTextures2(this);
    SetDefaultFramebuffer2(this);
    SetDefaultBlendMode2(this, true, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    SetDefaultVertexBuffer2(this, new IndexedVertexBuffer2({batchSize: GetBatchSize2(), indexLayout}));
    SetDefaultShader2(this, new MultiTextureQuadShader());
  }
  resize(width, height) {
    Ortho2(0, width, height, 0, -1e3, 1e3, this.projectionMatrix);
    this.quadCamera.reset();
    SetDefaultViewport2(this, 0, 0, width, height);
  }
}
