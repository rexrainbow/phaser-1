import Camera from '../camera/Camera';
import Scene from '../scenes/Scene';
import RectangleToRectangle from '../geom/intersection/RectangleToRectangle';
import IGameObject from '../gameobjects/gameobject/IGameObject';
import IContainer from '../gameobjects/container/IContainer';

export default class World
{
    scene: Scene;

    children: IGameObject[];

    camera: Camera;

    //  How many Game Objects were made dirty this frame?
    dirtyFrame: number = 0;

    //  How many Game Objects will be rendered this frame? (are in-bounds)
    totalFrame: number = 0;

    //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
    visibleFrame: number = 0;

    //  How many Game Objects were out of bounds this frame?
    boundsFrame: number = 0;

    //  A list of Game Objects that will be rendered in the next pass
    private renderList: IGameObject[];

    forceRefresh: boolean = false;

    enableCameraCull: boolean = true;

    worldTransform: Float32Array;

    constructor (scene: Scene)
    {
        this.scene = scene;

        this.children = [];
        this.renderList = [];

        this.worldTransform = new Float32Array([ 1, 0, 0, 1, 0, 0 ]);

        this.camera = new Camera();
    }

    private scanChildren (root: IContainer | World, gameFrame: number)
    {
        const children = root.children;

        for (let i: number = 0; i < children.length; i++)
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
                this.renderList.push(root);

                if (root.dirtyFrame >= gameFrame)
                {
                    this.dirtyFrame++;
                }
            }

            this.visibleFrame++;
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
        this.boundsFrame = 0;
        this.visibleFrame = 0;
        this.renderList.length = 0;

        this.scanChildren(this, gameFrame);

        this.totalFrame = this.renderList.length;

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

        this.renderList = [];

        this.camera.reset();
    }

    destroy ()
    {
        this.camera.destroy();

        this.camera = null;
        this.renderList = null;
    }

    get numChildren (): number
    {
        return this.children.length;
    }
}
