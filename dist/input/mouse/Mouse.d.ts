import { EventEmitter } from '../../events';
import { IGameObject } from '../../gameobjects/IGameObject';
import { Vec2 } from '../../math/vec2/Vec2';
export declare class Mouse extends EventEmitter {
    primaryDown: boolean;
    auxDown: boolean;
    secondaryDown: boolean;
    localPoint: Vec2;
    hitPoint: Vec2;
    private target;
    private resolution;
    private mousedownHandler;
    private mouseupHandler;
    private mousemoveHandler;
    private blurHandler;
    private transPoint;
    constructor(target?: HTMLElement);
    private onBlur;
    private onMouseDown;
    private onMouseUp;
    private onMouseMove;
    positionToPoint(event: MouseEvent): Vec2;
    getInteractiveChildren<T extends IGameObject>(parent: T, results: IGameObject[]): void;
    checkHitArea<T extends IGameObject>(entity: T, px: number, py: number): boolean;
    hitTest<T extends IGameObject>(...entities: T[]): boolean;
    hitTestChildren<T extends IGameObject>(parent: T, topOnly?: boolean): IGameObject[];
    shutdown(): void;
}
//# sourceMappingURL=Mouse.d.ts.map