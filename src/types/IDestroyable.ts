import IParent from "../gameobjects/container/IParent";

export interface IDestroyable {
	destroy: (reparentChildren?: IParent) => void;
}