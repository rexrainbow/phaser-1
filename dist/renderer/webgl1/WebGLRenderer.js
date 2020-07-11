import {GetHeight, GetResolution, GetWidth} from "../../config/size/";
import {End as End2} from "./renderpass/End";
import {GL as GL2} from "./GL";
import {GetBackgroundColor as GetBackgroundColor2} from "../../config/backgroundcolor/GetBackgroundColor";
import {GetRGBArray as GetRGBArray2} from "./colors/GetRGBArray";
import {GetWebGLContext as GetWebGLContext2} from "../../config/webglcontext/GetWebGLContext";
import {ProcessBindingQueue as ProcessBindingQueue2} from "./renderpass/ProcessBindingQueue";
import {RenderPass as RenderPass2} from "./renderpass/RenderPass";
import {Start} from "./renderpass";
import {WebGLRendererInstance as WebGLRendererInstance2} from "./WebGLRendererInstance";
export class WebGLRenderer {
  constructor() {
    this.clearColor = [0, 0, 0, 1];
    this.clearBeforeRender = true;
    this.optimizeRedraw = false;
    this.autoResize = true;
    this.contextLost = false;
    this.width = GetWidth();
    this.height = GetHeight();
    this.resolution = GetResolution();
    this.setBackgroundColor(GetBackgroundColor2());
    const canvas = document.createElement("canvas");
    canvas.addEventListener("webglcontextlost", (event) => this.onContextLost(event), false);
    canvas.addEventListener("webglcontextrestored", () => this.onContextRestored(), false);
    this.canvas = canvas;
    this.initContext();
    WebGLRendererInstance2.set(this);
    this.renderPass = new RenderPass2(this);
    this.resize(this.width, this.height, this.resolution);
  }
  initContext() {
    const gl = this.canvas.getContext("webgl", GetWebGLContext2());
    GL2.set(gl);
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
      canvas.style.width = width.toString() + "px";
      canvas.style.height = height.toString() + "px";
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
    GetRGBArray2(color, this.clearColor);
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
    ProcessBindingQueue2();
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
      const {world} = worlds[i];
      world.renderGL(renderPass);
      world.postRenderGL(renderPass);
    }
    End2(renderPass);
  }
  destroy() {
    WebGLRendererInstance2.set(void 0);
  }
}
