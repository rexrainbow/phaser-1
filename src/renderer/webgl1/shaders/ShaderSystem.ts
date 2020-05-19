import { IShader } from './IShader';
import { IShaderConstructor } from './IShaderConstructor';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { SingleTextureQuadShader } from './SingleTextureQuadShader';

export type ShaderStackEntry = {
    shader: IShader;
    textureID?: number;
};

export class ShaderSystem
{
    renderer: IWebGLRenderer;

    singleQuadShader: SingleTextureQuadShader;

    currentEntry: ShaderStackEntry;
    current: IShader;

    stack: ShaderStackEntry[];

    constructor (renderer: IWebGLRenderer, currentShader: IShaderConstructor)
    {
        this.renderer = renderer;

        const stackEntry = {
            shader: new currentShader()
        };

        this.stack = [ stackEntry ];
        this.currentEntry = stackEntry;
        this.current = stackEntry.shader;

        this.singleQuadShader = new SingleTextureQuadShader();
    }

    add (shader: IShader, textureID?: number): ShaderStackEntry
    {
        const stackEntry = { shader, textureID };

        this.stack.push(stackEntry);

        return stackEntry;
    }

    set (shader: IShader, textureID?: number): boolean
    {
        this.flush();

        const renderer = this.renderer;
        const projectionMatrix = renderer.projectionMatrix;
        const cameraMatrix = renderer.currentCamera.matrix;

        const success = shader.bind(projectionMatrix, cameraMatrix, textureID);

        if (success)
        {
            const entry = this.add(shader, textureID);

            this.currentEntry = entry;
            this.current = shader;
        }

        return success;
    }

    setDefault (textureID: number): void
    {
        this.set(this.singleQuadShader, textureID);
    }

    pop (): void
    {
        this.flush();

        const stack = this.stack;

        if (stack.length > 1)
        {
            //  We never pop the default shader off the stack
            stack.pop();
        }

        this.currentEntry = stack[stack.length - 1];
        this.current = this.currentEntry.shader;
    }

    reset (): void
    {
        this.pop();
        this.rebind();
    }

    flush (): boolean
    {
        if (this.current.flush())
        {
            this.renderer.flushTotal++;

            return true;
        }

        return false;
    }

    rebind (): void
    {
        const renderer = this.renderer;
        const projectionMatrix = renderer.projectionMatrix;
        const cameraMatrix = renderer.currentCamera.matrix;

        const current = this.currentEntry;

        current.shader.bind(projectionMatrix, cameraMatrix, current.textureID);
    }

    popAndRebind (): void
    {
        this.pop();
        this.rebind();
    }

    clear (): void
    {
        //  TODO
    }

    destroy (): void
    {
        //  TODO
    }
}
