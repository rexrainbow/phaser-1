import { GetHeight, GetResolution, GetWidth } from '../../config/Size';

import { DIRTY_CONST } from '../../gameobjects/DIRTY_CONST';
import { FBOSystem } from './fbo/FBOSystem';
import { GL } from './GL';
import { GetBackgroundColor } from '../../config/BackgroundColor';
import { GetRGBArray } from './colors/GetRGBArray';
import { GetWebGLContext } from '../../config/WebGLContext';
import { IBaseCamera } from '../../camera/IBaseCamera';
import { ISceneRenderData } from '../../scenes/ISceneRenderData';
import { ExactEquals as Matrix2dEqual } from '../../math/matrix2d-funcs/ExactEquals';
import { MultiTextureQuadShader } from './shaders/MultiTextureQuadShader';
import { Ortho } from './cameras/Ortho';
import { ShaderSystem } from './shaders/ShaderSystem';
import { TextureSystem } from './textures/TextureSystem';
import { WebGLRendererInstance } from './WebGLRendererInstance';

export class WebGLRenderer
{
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;

    fbo: FBOSystem;
    textures: TextureSystem;
    shaders: ShaderSystem;

    clearColor = [ 0, 0, 0, 1 ];

    width: number;
    height: number;
    resolution: number;

    projectionMatrix: Float32Array;

    //  TODO - Move to stats object, so we can track texture creation, shader swaps, etc
    flushTotal: number = 0;

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

        this.fbo = new FBOSystem(this);
        this.textures = new TextureSystem(this);

        this.initContext();

        WebGLRendererInstance.set(this);

        //  Shaders need reference to the renderer, so create after the instance is set
        this.shaders = new ShaderSystem(this, MultiTextureQuadShader);
    }

    initContext (): void
    {
        const gl = this.canvas.getContext('webgl', GetWebGLContext());

        GL.set(gl);

        this.gl = gl;

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);

        this.resize(this.width, this.height, this.resolution);

        this.textures.init();
    }

    resize (width: number, height: number, resolution: number = 1): void
    {
        this.width = width * resolution;
        this.height = height * resolution;
        this.resolution = resolution;

        const canvas = this.canvas;

        canvas.width = this.width;
        canvas.height = this.height;

        if (this.autoResize)
        {
            canvas.style.width = this.width / resolution + 'px';
            canvas.style.height = this.height / resolution + 'px';
        }

        this.gl.viewport(0, 0, this.width, this.height);

        this.projectionMatrix = Ortho(width, height);
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

    reset (framebuffer: WebGLFramebuffer = null, width: number = this.width, height: number = this.height): void
    {
        const gl = this.gl;

        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.viewport(0, 0, width, height);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        this.flushTotal = 0;
    }

    render (renderData: ISceneRenderData): void
    {
        if (this.contextLost)
        {
            return;
        }

        //  This is only here because if we don't do _something_ with the context, GL Spector can't see it.
        //  Technically, we could move it below the dirty bail-out below.
        this.reset();

        //  Cache 1 - Nothing dirty? Display the previous frame
        if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0)
        {
            return;
        }

        const gl = this.gl;

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

        this.textures.update();

        this.currentCamera = null;

        const worlds = renderData.worldData;

        for (let i: number = 0; i < worlds.length; i++)
        {
            const { camera, renderList } = worlds[i];

            //  This only needs rebinding if the camera matrix is different to before
            if (!this.currentCamera || !Matrix2dEqual(camera.worldTransform, this.currentCamera.worldTransform))
            {
                this.flush();

                this.currentCamera = camera;

                this.shaders.rebind();
            }

            //  Process the render list
            for (let s: number = 0; s < renderList.length; s++)
            {
                const gameObject = renderList[s];

                if (gameObject.isDirty(DIRTY_CONST.PENDING_RENDER))
                {
                    gameObject.render(this);
                }
                else
                {
                    gameObject.postRender(this);
                }
            }
        }

        //  One final sweep
        this.flush();
    }

    flush (): void
    {
        this.shaders.flush();
    }

    destroy (): void
    {
        WebGLRendererInstance.set(undefined);
    }
}
