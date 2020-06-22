import { IGameObject } from '../gameobjects/IGameObject';

export type SearchEntry = {
    node: IGameObject;
    children: SearchEntry[];
};
