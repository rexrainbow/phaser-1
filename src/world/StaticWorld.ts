import IGameObject from '../gameobjects/gameobject/IGameObject';
import StaticCamera from '../camera/StaticCamera';
import IContainer from '../gameobjects/container/IContainer';
import StaticScene from '../scenes/StaticScene';
import Matrix2D from '../math/matrix2d/Matrix2D';

//  A Static World is designed specifically to have a bounds of a fixed size
//  and a camera that doesn't move at all (no scrolling, rotation, etc)
//  Because it has a fixed size, there is no camera culling enabled.
//  Games that use this kind of world include Pacman, Bejeweled and 2048.

export default class StaticWorld
{
    scene: StaticScene;

    children: IGameObject[];

    camera: StaticCamera;

    //  How many Game Objects were made dirty this frame?
    dirtyFrame: number = 0;

    //  How many Game Objects will be rendered this frame? (are in-bounds)
    totalFrame: number = 0;

    //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
    visibleFrame: number = 0;

    //  A list of Game Objects that will be rendered in the next pass
    private renderList: IGameObject[];

    forceRefresh: boolean = false;

    worldTransform: Matrix2D;

    constructor (scene: StaticScene)
    {
        this.scene = scene;

        this.children = [];
        this.renderList = [];

        this.worldTransform = new Matrix2D();

        this.camera = new StaticCamera(scene);
    }

    private scanChildren (root: IContainer | StaticWorld, gameFrame: number)
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
            this.renderList.push(root);

            if (root.dirtyFrame >= gameFrame)
            {
                this.dirtyFrame++;
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
