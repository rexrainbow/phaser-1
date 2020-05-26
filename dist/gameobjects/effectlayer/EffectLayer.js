import '../../GameInstance.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/Contains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../utils/NOOP.js';
import '../../math/vec2/Vec2Callback.js';
import '../../config/Size.js';
import '../../renderer/BindingQueue.js';
import '../../config/DefaultOrigin.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/fbo/CreateFramebuffer.js';
import '../../renderer/webgl1/textures/CreateGLTexture.js';
import '../../renderer/webgl1/fbo/DeleteFramebuffer.js';
import '../../renderer/webgl1/textures/DeleteGLTexture.js';
import '../../math/pow2/IsSizePowerOfTwo.js';
import '../../renderer/webgl1/textures/SetGLTextureFilterMode.js';
import '../../renderer/webgl1/textures/UpdateGLTexture.js';
import '../../renderer/webgl1/textures/GLTextureBinding.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import '../../display/DepthFirstSearch.js';
import '../../display/GetChildIndex.js';
import '../../display/RemoveChildAt.js';
import '../../display/RemoveChild.js';
import '../events/AddedToWorldEvent.js';
import '../events/DestroyEvent.js';
import '../events/RemovedFromWorldEvent.js';
import '../../events/Emit.js';
import '../../display/SetWorld.js';
import '../../display/SetParent.js';
import { DIRTY_CONST } from '../DIRTY_CONST.js';
import '../../display/RemoveChildrenBetween.js';
import '../../display/DestroyChildren.js';
import '../../display/ReparentChildren.js';
import '../components/transform/GetVertices.js';
import '../components/bounds/BoundsComponent.js';
import '../components/input/InputComponent.js';
import '../../math/vec2/Vec2.js';
import '../components/transform/UpdateLocalTransform.js';
import '../../math/matrix2d/Copy.js';
import '../components/transform/UpdateWorldTransform.js';
import '../components/transform/TransformComponent.js';
import '../GameObject.js';
import { BatchSingleQuad } from '../../renderer/webgl1/draw/BatchSingleQuad.js';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad.js';
import '../layer/Layer.js';
import { RenderLayer } from '../renderlayer/RenderLayer.js';

class EffectLayer extends RenderLayer {
    constructor() {
        super();
        this.shaders = [];
        this.type = 'EffectLayer';
    }
    postRender(renderer) {
        const shaders = this.shaders;
        const texture = this.texture;
        renderer.flush();
        renderer.fbo.pop();
        if (shaders.length === 0) {
            const { u0, v0, u1, v1 } = texture.firstFrame;
            renderer.textures.bind(texture);
            DrawTexturedQuad(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);
            renderer.textures.unbind();
        }
        else {
            let prevTexture = texture;
            for (let i = 0; i < shaders.length; i++) {
                const shader = shaders[i];
                const { u0, v0, u1, v1 } = prevTexture.firstFrame;
                if (renderer.shaders.set(shader, 0)) {
                    shader.renderToFBO = true;
                    renderer.textures.bind(prevTexture);
                    BatchSingleQuad(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);
                    renderer.shaders.pop();
                    renderer.textures.unbind();
                    prevTexture = shader.texture;
                }
            }
            const { u0, v0, u1, v1 } = prevTexture.firstFrame;
            renderer.textures.bind(prevTexture);
            DrawTexturedQuad(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);
            renderer.textures.unbind();
        }
        this.clearDirty(DIRTY_CONST.TRANSFORM);
    }
}

export { EffectLayer };
