import { IGLTextureBindingConfig } from './webgl1/textures/IGLTextureBindingConfig';
import { ITexture } from '../textures/ITexture';

export type BindingQueueEntry = {
    texture: ITexture,
    glConfig: IGLTextureBindingConfig
};

const queue: BindingQueueEntry[] = [];

export const BindingQueue =
{
    add: (texture: ITexture, glConfig?: IGLTextureBindingConfig): void =>
    {
        queue.push({ texture, glConfig });
    },

    get: (): BindingQueueEntry[] =>
    {
        return queue;
    },

    clear: (): void =>
    {
        queue.length = 0;
    }
};
