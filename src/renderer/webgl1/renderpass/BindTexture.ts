import { GL } from '../GL';
import { Texture } from '../../../textures';

//  directly bind a texture to an index slot
export function BindTexture (texture: Texture, index: number = 0): void
{
    const gl = GL.get();

    const binding = texture.binding;

    binding.setIndex(index);

    gl.activeTexture(gl.TEXTURE0 + index);
    gl.bindTexture(gl.TEXTURE_2D, binding.texture);
}
