import { BaseWorld } from './BaseWorld';
import { Camera } from '../camera/Camera';
import { CreateWorldRenderData } from './CreateWorldRenderData';
import { ICamera } from '../camera/ICamera';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorld } from './IWorld';
import { IWorldRenderData } from './IWorldRenderData';
import { RectangleToRectangle } from '../geom/intersects';

export class World extends BaseWorld implements IWorld
{
    camera: ICamera;

    enableCameraCull: boolean = true;

    constructor (scene: IScene)
    {
        super(scene);

        this.type = 'World';

        this.camera = new Camera();

        this.renderData = CreateWorldRenderData(this.camera);
    }

    buildRenderList (root: IGameObject, renderData: IWorldRenderData): void
    {
        const stack = [ root ];

        const cull = this.enableCameraCull;

        while (stack.length > 0)
        {
            const node = stack.shift();

            if (node.isRenderable())
            {
                if (!node.dirty.pendingRender && (!cull || (cull && RectangleToRectangle(root.bounds.get(), this.camera.bounds))))
                {
                    renderData.numRendered++;
                    renderData.numRenderable++;

                    if (node.dirty.frame >= renderData.gameFrame)
                    {
                        renderData.dirtyFrame++;
                    }
                }

                node.dirty.setPendingRender();

                renderData.renderList.push(node);
            }

            const numChildren = node.numChildren;

            if (!node.dirty.postRender && node.visible && node.willRenderChildren && numChildren > 0)
            {
                //  Inject postRender hook
                node.dirty.setPostRender();

                stack.unshift(node);

                for (let i = numChildren - 1; i >= 0; i--)
                {
                    const child = node.children[i];

                    stack.unshift(child);
                }
            }
        }
    }

    /*
    buildRenderList (root: IGameObject, renderData: IWorldRenderData): void
    {
        if (root.isRenderable())
        {
            const cull = this.enableCameraCull;

            if (!cull || (cull && RectangleToRectangle(root.bounds.get(), this.camera.bounds)))
            {
                renderData.numRendered++;
                renderData.renderList.push(root);

                if (root.dirty.frame >= renderData.gameFrame)
                {
                    renderData.dirtyFrame++;
                }
            }

            renderData.numRenderable++;
        }

        if (root.visible && root.willRenderChildren && root.numChildren)
        {
            this.scanChildren(root, renderData);
        }
    }
    */

    sceneRender (sceneRenderData: ISceneRenderData): void
    {
        super.sceneRender(sceneRenderData);

        this.camera.dirtyRender = false;
    }

    shutdown (): void
    {
        super.shutdown();

        this.camera.reset();
    }

    destroy (reparentChildren?: IGameObject): void
    {
        this.camera.destroy();

        super.destroy(reparentChildren);
    }
}
