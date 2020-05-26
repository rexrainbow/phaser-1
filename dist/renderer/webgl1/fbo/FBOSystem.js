class FBOSystem {
    constructor(renderer) {
        this.stack = [];
        this.current = null;
        this.renderer = renderer;
    }
    reset() {
        this.stack = [];
        this.current = null;
        const renderer = this.renderer;
        const gl = renderer.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, renderer.width, renderer.height);
    }
    add(framebuffer, clear = true, width = 0, height = 0) {
        this.stack.push({ framebuffer, width, height });
        this.set(framebuffer, clear, width, height);
    }
    set(framebuffer, clear = true, width = 0, height = 0) {
        const renderer = this.renderer;
        const gl = renderer.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        if (clear) {
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        if (width > 0) {
            gl.viewport(0, 0, width, height);
        }
        this.current = framebuffer;
    }
    pop() {
        this.stack.pop();
        const len = this.stack.length;
        if (len > 1) {
            const entry = this.stack[len - 1];
            this.set(entry.framebuffer, false, entry.width, entry.height);
        }
        else {
            this.reset();
        }
    }
    rebind() {
        const gl = this.renderer.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.current);
    }
    destroy() {
        this.stack = [];
    }
}

export { FBOSystem };
