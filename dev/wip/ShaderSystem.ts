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

    isDefaultBound: boolean = false;

    constructor (renderer: IWebGLRenderer, defaultShader: IShaderConstructor)
    {
        this.renderer = renderer;

        const stackEntry = {
            shader: new defaultShader()
        };

        this.stack = [ stackEntry ];
        this.currentEntry = stackEntry;
        this.current = stackEntry.shader;

        this.singleQuadShader = new SingleTextureQuadShader();
    }

    //  ✔️
    add (shader: IShader, textureID?: number): ShaderStackEntry
    {
        const stackEntry = { shader, textureID };

        this.stack.push(stackEntry);

        return stackEntry;
    }

    //  ✔️
    set (shader: IShader, textureID?: number): boolean
    {
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

    setDefault (): void
    {
        // if (!this.isDefaultBound)
        // {
            const renderer = this.renderer;
            const projectionMatrix = renderer.projectionMatrix;
            const cameraMatrix = renderer.currentCamera.matrix;
            const entry = this.stack[0];

            const success = entry.shader.bind(projectionMatrix, cameraMatrix, entry.textureID);

            if (success)
            {
                this.isDefaultBound = true;

                this.currentEntry = entry;
                this.current = entry.shader;
            }
        // }
    }

    setSingleQuadShader (textureID: number): void
    {
        this.set(this.singleQuadShader, textureID);
    }

    //  ✔️
    pop (): void
    {
        const stack = this.stack;

        if (stack.length > 1)
        {
            //  We never pop the default shader off the stack
            stack.pop();
        }

        this.currentEntry = stack[stack.length - 1];
        this.current = this.currentEntry.shader;

        this.isDefaultBound = false;
    }

    reset (): void
    {
        this.pop();
        this.rebind();
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
