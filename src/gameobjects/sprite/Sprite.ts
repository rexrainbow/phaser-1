import { BatchTexturedQuad } from '../../renderer/webgl1/draw/BatchTexturedQuad';
import { Container } from '../container/Container';
import { DIRTY_CONST } from '../DIRTY_CONST';
import { DrawTexturedQuad } from '../../renderer/canvas/draw/DrawTexturedQuad';
import { Frame } from '../../textures/Frame';
import { ICanvasRenderer } from '../../renderer/canvas/ICanvasRenderer';
import { IGameObject } from '../IGameObject';
import { ISprite } from './ISprite';
import { IWebGLRenderer } from '../../renderer/webgl1/IWebGLRenderer';
import { PackColors } from '../../renderer/webgl1/colors/PackColors';
import { SetFrame } from './SetFrame';
import { SetTexture } from './SetTexture';
import { Texture } from '../../textures/Texture';
import { UpdateVertices } from './UpdateVertices';
import { Vertex } from '../components/Vertex';

export class Sprite extends Container implements ISprite
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean = false;
    vertices: Vertex[];

    protected _tint: number = 0xffffff;

    constructor (x: number, y: number, texture: string | Texture, frame?: string | number)
    {
        super(x, y);

        this.type = 'Sprite';

        this.vertices = [ new Vertex(), new Vertex(), new Vertex(), new Vertex() ];

        this.setTexture(texture, frame);
    }

    setTexture (key: string | Texture, frame?: string | number): this
    {
        SetTexture(key, frame, this);

        return this;
    }

    setFrame (key?: string | number | Frame): this
    {
        SetFrame(this.texture, key, this);

        return this;
    }

    isRenderable (): boolean
    {
        return (this.visible && this.willRender && this.hasTexture && this.alpha > 0);
    }

    preRender (): void
    {
        if (this.isDirty(DIRTY_CONST.COLORS))
        {
            PackColors(this);

            this.clearDirty(DIRTY_CONST.COLORS);
        }

        if (this.isDirty(DIRTY_CONST.TRANSFORM))
        {
            UpdateVertices(this);

            this.clearDirty(DIRTY_CONST.TRANSFORM);
        }
    }

    renderGL <T extends IWebGLRenderer> (renderer: T): void
    {
        this.preRender();

        BatchTexturedQuad(this, renderer);
    }

    renderCanvas <T extends ICanvasRenderer> (renderer: T): void
    {
        this.preRender();

        DrawTexturedQuad(this, renderer);
    }

    get alpha (): number
    {
        return this._alpha;
    }

    set alpha (value: number)
    {
        if (value !== this._alpha)
        {
            this._alpha = value;

            this.vertices.forEach(vertex =>
            {
                vertex.setAlpha(value);
            });

            this.setDirty(DIRTY_CONST.COLORS);
        }
    }

    get tint (): number
    {
        return this._tint;
    }

    set tint (value: number)
    {
        if (value !== this._tint)
        {
            this._tint = value;

            this.vertices.forEach(vertex =>
            {
                vertex.setTint(value);
            });

            this.setDirty(DIRTY_CONST.COLORS);
        }
    }

    destroy (reparentChildren?: IGameObject): void
    {
        super.destroy(reparentChildren);

        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
        this.vertices = [];
    }
}
