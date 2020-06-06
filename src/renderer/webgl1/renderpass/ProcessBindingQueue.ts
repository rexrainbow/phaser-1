import { BindingQueue } from '../../BindingQueue';
import { GLTextureBinding } from '../textures/GLTextureBinding';

export function ProcessBindingQueue (): void
{
    const queue = BindingQueue.get();

    queue.forEach(texture =>
    {
        if (!texture.binding)
        {
            texture.binding = new GLTextureBinding(texture);
        }
    });

    BindingQueue.clear();
}
