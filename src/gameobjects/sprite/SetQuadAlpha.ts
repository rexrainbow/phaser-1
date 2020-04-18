import PackColors from '../../renderer/webgl1/PackColors';
import IRenderable from './IRenderable';

export default function SetQuadAlpha (topLeft: number, topRight: number, bottomLeft: number, bottomRight: number, ...sprite: IRenderable[])
{
    sprite.forEach(entity => {

        let alpha = entity.vertexAlpha;

        alpha[0] = topLeft;
        alpha[1] = topRight;
        alpha[2] = bottomLeft;
        alpha[3] = bottomRight;
    
        PackColors(entity);
    
    });
}
