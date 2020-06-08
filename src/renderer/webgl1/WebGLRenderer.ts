import { GetHeight, GetResolution, GetWidth } from '../../config/Size';

import { AddViewport } from './renderpass/AddViewport';
import { Begin } from './renderpass/Begin';
import { CreateTempTextures } from './renderpass/CreateTempTextures';
import { End } from './renderpass/End';
import { Flush } from './renderpass/Flush';
import { GL } from './GL';
import { GetBackgroundColor } from '../../config/BackgroundColor';
import { GetRGBArray } from './colors/GetRGBArray';
import { GetWebGLContext } from '../../config/WebGLContext';
import { IBaseCamera } from '../../camera/IBaseCamera';
import { IRenderPass } from './renderpass/IRenderPass';
import { ISceneRenderData } from '../../scenes/ISceneRenderData';
import { IndexedVertexBuffer } from './buffers/IndexedVertexBuffer';
import { ExactEquals as Matrix2dEqual } from '../../math/matrix2d-funcs/ExactEquals';
import { MultiTextureQuadShader } from './shaders/MultiTextureQuadShader';
import { Ortho } from './cameras/Ortho';
import { ProcessBindingQueue } from './renderpass/ProcessBindingQueue';
import { RenderPass } from './renderpass/RenderPass';
import { SearchEntry } from '../../display/DepthFirstSearchRecursiveNested';
import { SetDefaultBlendMode } from './renderpass/SetDefaultBlendMode';
import { SetDefaultFramebuffer } from './renderpass/SetDefaultFramebuffer';
import { SetDefaultShader } from './renderpass/SetDefaultShader';
import { SetDefaultVertexBuffer } from './renderpass/SetDefaultVertexBuffer';
import { SetDefaultViewport } from './renderpass/SetDefaultViewport';
import { WebGLRendererInstance } from './WebGLRendererInstance';
import { batchSize } from '../../config/BatchSize';

export class WebGLRenderer
{
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;

    renderPass: IRenderPass;

    clearColor = [ 0, 0, 0, 1 ];

    width: number;
    height: number;
    resolution: number;

    projectionMatrix: Float32Array;

    clearBeforeRender: boolean = true;
    optimizeRedraw: boolean = false;
    autoResize: boolean = true;

    contextLost: boolean = false;

    currentCamera: IBaseCamera = null;

    constructor ()
    {
        this.width = GetWidth();
        this.height = GetHeight();
        this.resolution = GetResolution();

        this.setBackgroundColor(GetBackgroundColor());

        const canvas = document.createElement('canvas');

        canvas.addEventListener('webglcontextlost', (event) => this.onContextLost(event), false);
        canvas.addEventListener('webglcontextrestored', () => this.onContextRestored(), false);

        this.canvas = canvas;

        this.initContext();

        //  By this stage the context is available
        WebGLRendererInstance.set(this);

        const renderPass = new RenderPass(this);

        this.renderPass = renderPass;

        const gl = this.gl;

        CreateTempTextures(renderPass);

        SetDefaultFramebuffer(renderPass);
        SetDefaultBlendMode(renderPass, true, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        SetDefaultVertexBuffer(renderPass, new IndexedVertexBuffer(batchSize, 4, 4, 6, 6, 4, [ 0, 1, 2, 2, 3, 0 ]));
        SetDefaultShader(renderPass, new MultiTextureQuadShader());

        this.resize(this.width, this.height, this.resolution);
    }

    initContext (): void
    {
        const gl = this.canvas.getContext('webgl', GetWebGLContext());

        GL.set(gl);

        this.gl = gl;

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
    }

    resize (width: number, height: number, resolution: number = 1): void
    {
        const calcWidth = width * resolution;
        const calcHeight = height * resolution;

        this.width = calcWidth;
        this.height = calcHeight;
        this.resolution = resolution;

        const canvas = this.canvas;

        canvas.width = calcWidth;
        canvas.height = calcHeight;

        if (this.autoResize)
        {
            canvas.style.width = width.toString() + 'px';
            canvas.style.height = height.toString() + 'px';
        }

        SetDefaultViewport(this.renderPass, 0, 0, calcWidth, calcHeight);

        this.projectionMatrix = Ortho(calcWidth, calcHeight);
    }

    onContextLost (event: Event): void
    {
        event.preventDefault();

        this.contextLost = true;
    }

    onContextRestored (): void
    {
        this.contextLost = false;

        this.initContext();
    }

    setBackgroundColor (color: number): this
    {
        GetRGBArray(color, this.clearColor);

        return this;
    }

    //  TODO - Remove?
    reset (): void
    {
        // this.renderPass.reset();
        // this.currentCamera = null;
    }

    render (renderData: ISceneRenderData): void
    {
        if (this.contextLost)
        {
            return;
        }

        const gl = this.gl;
        const renderPass = this.renderPass;

        //  This is only here because if we don't do _something_ with the context, GL Spector can't see it.
        //  Technically, we could move it below the dirty bail-out below.
        // this.reset();

        ProcessBindingQueue();

        this.currentCamera = null;

        //  Cache 1 - Nothing dirty? Display the previous frame
        if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0)
        {
            return;
        }

        if (this.clearBeforeRender)
        {
            const cls = this.clearColor;

            gl.clearColor(cls[0], cls[1], cls[2], cls[3]);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

        //  Cache 2 - Only one dirty camera and one flush? We can re-use the buffers
        //  TODO - Per shader

        /*
        const flushTotal = this.flushTotal;
        if (dirtyCameras === 1 && dirtyFrame === 0 && flushTotal === 1)
        {
            const projectionMatrix = this.projectionMatrix;

            //  Total items rendered in the previous frame
            const count = shader.prevCount;

            shader.bind(projectionMatrix, sceneList[0].matrix);

            shader.draw(count);

            shader.prevCount = count;

            this.flushTotal = 1;

            return;
        }
        */

        const worlds = renderData.worldData;

        for (let i: number = 0; i < worlds.length; i++)
        {
            const { camera, renderList } = worlds[i];

            //  This only needs rebinding if the camera matrix is different to before
            if (!this.currentCamera || !Matrix2dEqual(camera.worldTransform, this.currentCamera.worldTransform))
            {
                if (i > 0)
                {
                    Flush(renderPass);
                }

                this.currentCamera = camera;

                Begin(renderPass, this.projectionMatrix, camera.matrix);
            }

            //  Process the render list
            renderList.forEach(entry =>
            {
                if (entry.children.length > 0)
                {
                    this.renderNode(entry, renderPass);
                }
                else
                {
                    entry.node.renderGL(renderPass);
                }
            });
        }

        End(renderPass);

        // eslint-disable-next-line no-debugger
        // debugger;
    }

    renderNode (entry: SearchEntry, renderPass: IRenderPass): void
    {
        entry.node.renderGL(renderPass);

        entry.children.forEach(child =>
        {
            if (child.children.length > 0)
            {
                this.renderNode(child, renderPass);
            }
            else
            {
                child.node.renderGL(renderPass);
            }
        });

        entry.node.postRenderGL(renderPass);
    }

    destroy (): void
    {
        WebGLRendererInstance.set(undefined);
    }
}
