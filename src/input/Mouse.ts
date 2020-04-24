import { Emit, EventEmitter } from '../events';

import { Append as AppendMatrix2d } from '../math/matrix2d-funcs/Append';
import { GameInstance } from '../GameInstance';
import { GlobalToLocal } from '../math/matrix2d/GlobalToLocal';
import { IGameObject } from '../gameobjects/gameobject/IGameObject';
import { IParent } from '../gameobjects/container/IParent';
import { ITransformGameObject } from '../gameobjects/transformgameobject/ITransformGameObject';
import { Vec2 } from '../math/vec2/Vec2';

export class Mouse extends EventEmitter
{
    primaryDown: boolean = false;
    auxDown: boolean = false;
    secondaryDown: boolean = false;

    localPoint: Vec2;
    hitPoint: Vec2;

    private target: HTMLElement;
    private resolution: number = 1;

    private mousedownHandler: { (event: MouseEvent): void; (this: Window, ev: MouseEvent): any; };
    private mouseupHandler: { (event: MouseEvent): void; (this: Window, ev: MouseEvent): any; };
    private mousemoveHandler: { (event: MouseEvent): void; (this: Window, ev: MouseEvent): any; };
    private blurHandler: { (): void; (this: Window, ev: FocusEvent): any; };

    private transPoint: Vec2;

    targetEvents: any[];

    constructor (target?: HTMLElement)
    {
        super();

        this.mousedownHandler = (event: MouseEvent) => this.onMouseDown(event);
        this.mouseupHandler = (event: MouseEvent) => this.onMouseUp(event);
        this.mousemoveHandler = (event: MouseEvent) => this.onMouseMove(event);
        this.blurHandler = () => this.onBlur();

        this.localPoint = new Vec2();
        this.hitPoint = new Vec2();
        this.transPoint = new Vec2();

        if (!target)
        {
            target = GameInstance.get().renderer.canvas;
        }

        this.target = target;

        this.targetEvents = [
            [ target, 'mousedown', this.mousedownHandler ],
            [ target, 'mouseup', this.mouseupHandler ],
            [ window, 'mouseup', this.mouseupHandler ],
            [ window, 'mousemove', this.mousemoveHandler ],
            [ window, 'blur', this.blurHandler ]
        ];
    }

    start ()
    {
        this.targetEvents.forEach(eventHandler => {

            eventHandler[0].addEventListener(eventHandler[1], eventHandler[2]);

        });
    }

    stop ()
    {
        this.targetEvents.forEach(eventHandler => {

            eventHandler[0].removeEventListener(eventHandler[1], eventHandler[2]);

        });
    }

    private onBlur ()
    {
    }

    private onMouseDown (event: MouseEvent)
    {
        this.positionToPoint(event);

        this.primaryDown = (event.button === 0);
        this.auxDown = (event.button === 1);
        this.secondaryDown = (event.button === 2);

        Emit(this, 'pointerdown', this.localPoint.x, this.localPoint.y, event.button, event);
    }

    private onMouseUp (event: MouseEvent)
    {
        this.positionToPoint(event);

        this.primaryDown = !(event.button === 0);
        this.auxDown = !(event.button === 1);
        this.secondaryDown = !(event.button === 2);

        Emit(this, 'pointerup', this.localPoint.x, this.localPoint.y, event.button, event);
    }

    private onMouseMove (event: MouseEvent)
    {
        this.positionToPoint(event);

        Emit(this, 'pointermove', this.localPoint.x, this.localPoint.y, event);
    }

    positionToPoint (event: MouseEvent): Vec2
    {
        const local = this.localPoint;

        //  if the event has offsetX/Y we can use that directly, as it gives us a lot better
        //  result, taking into account things like css transforms

        if (typeof event.offsetX === 'number')
        {
            local.set(event.offsetX, event.offsetY);
        }
        else
        {
            const rect = this.target.getBoundingClientRect();
            const width = this.target.hasAttribute('width') ? this.target['width'] : 0;
            const height = this.target.hasAttribute('height') ? this.target['height'] : 0;
            const multiplier = 1 / this.resolution;

            local.x = ((event.clientX - rect.left) * (width / rect.width)) * multiplier;
            local.y = ((event.clientY - rect.top) * (height / rect.height)) * multiplier;
        }

        return local;
    }

    getInteractiveChildren (parent: ITransformGameObject & IParent, results: IGameObject[])
    {
        const children = parent.children;

        for (let i = 0; i < children.length; i++)
        {
            let child = children[i] as IGameObject;

            if (child.visible && child.inputEnabled)
            {
                results.push(child);
            }

            if (child.inputEnabledChildren && child.isParent)
            {
                this.getInteractiveChildren(child as ITransformGameObject & IParent, results);
            }
        }
    }

    checkHitArea (entity: ITransformGameObject, px: number, py: number): boolean
    {
        if (entity.inputHitArea)
        {
            if (entity.inputHitArea.contains(px, py))
            {
                return true;
            }
        }
        else
        {
            const left: number = -(entity.width * entity.originX);
            const right: number = left + entity.width;
            const top: number = -(entity.height * entity.originY);
            const bottom: number = top + entity.height;

            return (px >= left && px <= right && py >= top && py <= bottom);
        }

        return false;
    }

    hitTest (...entities: ITransformGameObject[]): boolean
    {
        const localX = this.localPoint.x;
        const localY = this.localPoint.y;
        const point = this.transPoint;

        for (let i: number = 0; i < entities.length; i++)
        {
            let entity = entities[i];

            let mat = AppendMatrix2d(entity.scene.world.camera.worldTransform, entity.worldTransform);

            GlobalToLocal(mat, localX, localY, point);

            if (this.checkHitArea(entity, point.x, point.y))
            {
                this.hitPoint.set(point.x, point.y);
                return true;
            }
        }

        return false;
    }

    hitTestChildren (container: ITransformGameObject & IParent, topOnly: boolean = true): ITransformGameObject[]
    {
        const output = [];

        if (!container.visible)
        {
            return output;
        }

        //  Build a list of potential input candidates
        const candidates: ITransformGameObject[] = [];

        if (container.inputEnabled)
        {
            candidates.push(container);
        }

        if (container.inputEnabledChildren && container.numChildren > 0)
        {
            this.getInteractiveChildren(container, candidates);
        }

        for (let i: number = candidates.length - 1; i >= 0; i--)
        {
            let entity = candidates[i];

            if (this.hitTest(entity))
            {
                output.push(entity);

                if (topOnly)
                {
                    break;
                }
            }
        }

        return output;
    }

    shutdown ()
    {
        this.stop();
    }

}
