import Camera from './Camera';
import Container from './Container';
import IContainer from './IContainer';
import Scene from '../scenes/Scene';
import IGameObject from './IGameObject';
import RectangleToRectangle from '../geom/intersection/RectangleToRectangle';

export default class World extends Container
{
    //  How many Game Objects were made dirty this frame?
    dirtyFrame: number = 0;

    //  How many Game Objects will be rendered this frame? (are in-bounds)
    totalFrame: number = 0;

    //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
    visibleFrame: number = 0;

    //  How many Game Objects were out of bounds this frame?
    boundsFrame: number = 0;

    //  A list of Game Objects that will be rendered in the next pass
    renderList: IGameObject[];

    camera: Camera;

    forceRefresh: boolean = false;

    enableCameraCull: boolean = true;

    constructor (scene: Scene, key: string)
    {
        super(scene);

        this.setType('World');
        this.setName(key);

        this.renderList = [];

        this.camera = new Camera(scene, 0, 0);
    }

    private scanChildren (root: IContainer, gameFrame: number)
    {
        const children = root.getChildren();

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

        this.removeChildren();

        this.renderList = [];

        this.camera.reset();
    }

    destroy ()
    {
        super.destroy();

        this.camera.destroy();

        this.camera = null;
        this.renderList = null;
    }
}
