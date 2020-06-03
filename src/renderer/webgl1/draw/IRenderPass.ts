import { BufferEntry } from './BufferEntry';
import { FBOSystem } from '../fbo/FBOSystem';
import { IShader } from '../shaders/IShader';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { ShaderSystem } from '../shaders/ShaderSystem';
import { Texture } from '../../../textures/Texture';
import { TextureSystem } from '../textures/TextureSystem';
import { VertexBufferSystem } from '../buffers/VertexBufferSystem';

export interface IRenderPass
{
    renderer: IWebGLRenderer;
    buffer: VertexBufferSystem;
    shader: ShaderSystem;
    fbo: FBOSystem;
    textures: TextureSystem;
    count: number;
    prevCount: number;
    flushTotal: number;
    init (): void;
    getBuffer (addToCount: number): BufferEntry;
    reset (): void;
    begin (): void;
    end (): void;
    requestTexture (texture: Texture): number;
    bindTexture (texture: Texture, index?: number): void;
    unbindTexture (index?: number): void;
    setVertexBuffer (buffer: IVertexBuffer): IVertexBuffer;
    popVertexBuffer (): void;
    setShader (shader: IShader, textureID?: number): boolean;
    popShader (): void;
    popShaderAndRebind (): void;
    setFramebuffer (framebuffer: WebGLFramebuffer, clear?: boolean, width?: number, height?: number): void;
    popFramebuffer (): void;
    setBuffers (vertexBuffer: WebGLBuffer, indexBuffer?: WebGLBuffer): void;
    draw (count: number): void;
    flush (rebindShaders?: boolean): boolean;
    destroy (): void;
}
