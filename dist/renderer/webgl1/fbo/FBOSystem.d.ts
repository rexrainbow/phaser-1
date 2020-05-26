import { IWebGLRenderer } from '../IWebGLRenderer';
export declare type FBOStackEntry = {
    framebuffer: WebGLFramebuffer;
    width: number;
    height: number;
};
export declare class FBOSystem {
    renderer: IWebGLRenderer;
    stack: FBOStackEntry[];
    current: WebGLFramebuffer;
    constructor(renderer: IWebGLRenderer);
    reset(): void;
    add(framebuffer: WebGLFramebuffer, clear?: boolean, width?: number, height?: number): void;
    set(framebuffer: WebGLFramebuffer, clear?: boolean, width?: number, height?: number): void;
    pop(): void;
    rebind(): void;
    destroy(): void;
}
//# sourceMappingURL=FBOSystem.d.ts.map