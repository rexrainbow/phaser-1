import '../../GameInstance.js';
import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/Contains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../math/vec2/Vec2.js';
import '../../math/vec2/Vec2Callback.js';
import '../../math/matrix2d/CopyFrom.js';
import '../../math/pow2/IsSizePowerOfTwo.js';
import '../../config/DefaultOrigin.js';
import '../../config/Size.js';
import '../../renderer/BindingQueue.js';
import '../../renderer/webgl1/renderpass/AddViewport.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/renderpass/BindViewport.js';
import '../../renderer/webgl1/renderpass/SetViewport.js';
import '../../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../../renderer/webgl1/renderpass/PopViewport.js';
import { PopFramebuffer } from '../../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../../renderer/webgl1/renderpass/AddFramebuffer.js';
import '../../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../../renderer/webgl1/renderpass/Draw.js';
import { Flush } from '../../renderer/webgl1/renderpass/Flush.js';
import '../../renderer/webgl1/textures/CreateGLTexture.js';
import '../../renderer/webgl1/fbo/DeleteFramebuffer.js';
import '../../renderer/webgl1/textures/DeleteGLTexture.js';
import '../../renderer/webgl1/textures/SetGLTextureFilterMode.js';
import '../../renderer/webgl1/textures/UpdateGLTexture.js';
import '../../renderer/webgl1/textures/GLTextureBinding.js';
import '../../renderer/webgl1/fbo/CreateFramebuffer.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import '../../renderer/webgl1/renderpass/AddShader.js';
import '../../renderer/webgl1/renderpass/AddVertexBuffer.js';
import '../../renderer/webgl1/renderpass/BindShader.js';
import '../../renderer/webgl1/renderpass/BindTexture.js';
import '../../renderer/webgl1/renderpass/BindVertexBuffer.js';
import '../../renderer/webgl1/renderpass/PopVertexBuffer.js';
import '../../renderer/webgl1/renderpass/SetVertexBuffer.js';
import '../../renderer/webgl1/renderpass/GetVertexBufferEntry.js';
import '../../renderer/webgl1/renderpass/PopShader.js';
import '../../renderer/webgl1/renderpass/SetShader.js';
import '../../renderer/webgl1/renderpass/UnbindTexture.js';
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
import '../components/transform/UpdateLocalTransform.js';
import '../components/transform/UpdateWorldTransform.js';
import '../components/transform/TransformComponent.js';
import '../GameObject.js';
import '../../renderer/webgl1/draw/BatchSingleQuad.js';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad.js';
import '../layer/Layer.js';
import { RenderLayer } from '../renderlayer/RenderLayer.js';

class EffectLayer extends RenderLayer {
    constructor(...shaders) {
        super();
        this.shaders = [];
        this.type = 'EffectLayer';
        if (Array.isArray(shaders)) {
            this.shaders = shaders;
        }
    }
    postRenderGL(renderPass) {
        const shaders = this.shaders;
        const texture = this.texture;
        Flush(renderPass);
        PopFramebuffer(renderPass);
        if (shaders.length === 0) {
            DrawTexturedQuad(renderPass, texture);
        }
        else {
            let prevTexture = texture;
            for (let i = 0; i < shaders.length; i++) {
                const shader = shaders[i];
                DrawTexturedQuad(renderPass, prevTexture, shader);
                prevTexture = shader.texture;
            }
            DrawTexturedQuad(renderPass, prevTexture);
        }
        this.clearDirty(DIRTY_CONST.TRANSFORM);
    }
}

export { EffectLayer };
