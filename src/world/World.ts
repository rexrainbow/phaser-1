import Camera from '../camera/Camera';
import ICamera from '../camera/ICamera';
import IContainer from '../gameobjects/container/IContainer';
import IParent from '../gameobjects/container/IParent';
import IGameObject from '../gameobjects/gameobject/IGameObject';
import ISprite from '../gameobjects/sprite/ISprite';
import RectangleToRectangle from '../geom/intersects/RectangleToRectangle';
import Matrix2D from '../math/matrix2d/Matrix2D';
import IScene from '../scenes/IScene';
import IWorld from './IWorld';

export interface IWorldRenderResult {
    camera: ICamera;
    rendered: ISprite[];
    numRendered: number;
}

export default class World implements IWorld
{
    scene: IScene;

    children: IGameObject[] = [];

    camera: ICamera = new Camera();

    //  How many Game Objects were made dirty this frame?
    dirtyFrame: number = 0;

    //  How many Game Objects will be rendered this frame? (are in-bounds)
    numRendered: number = 0;

    //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
    numRenderable: number = 0;

    //  A list of Game Objects that will be rendered in the next pass
    rendered: ISprite[] = [];

    forceRefresh: boolean = false;

    enableCameraCull: boolean = true;

    worldTransform: Matrix2D = new Matrix2D();

    constructor (scene: IScene)
    {
        this.scene = scene;
    }

    private scanChildren (root: IContainer | World, gameFrame: number)
    {
        const children = root.children;

        for (let i = 0; i < children.length; i++)
        {
            this.buildRenderList(children[i], gameFrame);
        }
    }

    private buildRenderList (root: IGameObject, gameFrame: number)
    {
        if (root.isRenderable())
        {
            const cull = this.enableCameraCull;

            if (!cull || (cull && RectangleToRectangle(root.getBounds(), this.camera.bounds)))
            {
                this.numRendered++;
                this.rendered.push(root as ISprite);

                if (root.dirtyFrame >= gameFrame)
                {
                    this.dirtyFrame++;
                }
            }

            this.numRenderable++;
        }

        if (root.isParent && root.visible)
        {
            this.scanChildren(root as IContainer, gameFrame);
        }
    }

    update (delta?: number, time?: number)
    {
        const children = this.children;

        for (let i = 0; i < children.length; i++)
        {
            let child = children[i];

            if (child && child.willUpdate)
            {
                child.update(delta, time);
            }
        }
    }

    render (gameFrame: number): number
    {
        this.dirtyFrame = 0;
        this.numRendered = 0;
        this.numRenderable = 0;

        this.scanChildren(this, gameFrame);

        if (this.forceRefresh)
        {
            this.dirtyFrame++;
            this.forceRefresh = false;
        }

        return this.dirtyFrame;
    }

    shutdown ()
    {
        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage

        // this.removeChildren();

        this.rendered = [];

        this.camera.reset();
    }

    destroy (reparentChildren?: IParent)
    {
        this.camera.destroy();

        this.camera = null;
        this.rendered = null;
    }

    get numChildren (): number
    {
        return this.children.length;
    }
}
