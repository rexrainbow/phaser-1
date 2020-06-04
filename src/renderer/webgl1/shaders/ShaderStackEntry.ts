import { IShader } from './IShader';

export type ShaderStackEntry = {
    shader: IShader;
    textureID?: number;
};
