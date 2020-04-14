import IGameObject from '../gameobject/IGameObject';
import TransformGameObject from '../transformgameobject/TransformGameObject';
import IParent from './IParent';
export default class Container extends TransformGameObject {
    children: IGameObject[];
    private _alpha;
    constructor(x?: number, y?: number);
    update(delta?: number, time?: number): void;
    destroy(reparentChildren?: IParent): void;
    get numChildren(): number;
    get alpha(): number;
    set alpha(value: number);
}
//# sourceMappingURL=Container.d.ts.map