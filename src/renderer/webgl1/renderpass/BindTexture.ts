import { Texture } from '../../../textures';
import { gl } from '../GL';

//  directly bind a texture to an index slot
export function BindTexture (texture: Texture, index: number = 0): void
{
    const binding = texture.binding;

    binding.setIndex(index);

    gl.activeTexture(gl.TEXTURE0 + index);
    gl.bindTexture(gl.TEXTURE_2D, binding.texture);
}
