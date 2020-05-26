import { IGameObject } from '../gameobjects/IGameObject';
export declare type SearchEntry = {
    node: IGameObject;
    children: SearchEntry[];
};
export declare function DepthFirstSearchRecursiveNested(parent: IGameObject, output?: SearchEntry[]): SearchEntry[];
//# sourceMappingURL=DepthFirstSearchRecursiveNested.d.ts.map