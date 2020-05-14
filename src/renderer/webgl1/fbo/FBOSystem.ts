import { IWebGLRenderer } from '../IWebGLRenderer';
import { frame } from '../../../GameInstance';

export type FBOStackEntry = {
    framebuffer: WebGLFramebuffer;
    width: number;
    height: number;
};

export class FBOSystem
{
    renderer: IWebGLRenderer;

    stack: FBOStackEntry[] = [];

    current: WebGLFramebuffer = null;

    constructor (renderer: IWebGLRenderer)
    {
        this.renderer = renderer;
    }

    reset (): void
    {
        this.stack = [];

        this.current = null;

        const renderer = this.renderer;
        const gl = renderer.gl;

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, renderer.width, renderer.height);
    }

    add (framebuffer: WebGLFramebuffer, clear: boolean = true, width: number = 0, height: number = 0): void
    {
        this.stack.push({ framebuffer, width, height });

        this.set(framebuffer, clear, width, height);
    }

    set (framebuffer: WebGLFramebuffer, clear: boolean = true, width: number = 0, height: number = 0): void
    {
        const renderer = this.renderer;
        const gl = renderer.gl;

        renderer.flush();

        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

        if (clear)
        {
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

        if (width > 0)
        {
            gl.viewport(0, 0, width, height);
        }

        this.current = framebuffer;
    }

    pop (): void
    {
        this.stack.pop();

        const len = this.stack.length;

        if (len > 1)
        {
            const entry = this.stack[len - 1];

            this.set(entry.framebuffer, false, entry.width, entry.height);
        }
        else
        {
            this.reset();
        }
    }

    rebind (): void
    {
        const gl = this.renderer.gl;

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.current);
    }

    destroy (): void
    {
        this.stack = [];
    }
}
