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
import { GetWidth, GetHeight, GetResolution } from '../../config/Size.js';
import '../../renderer/BindingQueue.js';
import '../../renderer/webgl1/renderpass/AddViewport.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/renderpass/BindViewport.js';
import '../../renderer/webgl1/renderpass/SetViewport.js';
import '../../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../../renderer/webgl1/renderpass/PopViewport.js';
import { PopFramebuffer } from '../../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../../renderer/webgl1/renderpass/AddFramebuffer.js';
import { SetFramebuffer } from '../../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../../renderer/webgl1/renderpass/Draw.js';
import { Flush } from '../../renderer/webgl1/renderpass/Flush.js';
import '../../renderer/webgl1/textures/CreateGLTexture.js';
import '../../renderer/webgl1/fbo/DeleteFramebuffer.js';
import '../../renderer/webgl1/textures/DeleteGLTexture.js';
import '../../renderer/webgl1/textures/SetGLTextureFilterMode.js';
import '../../renderer/webgl1/textures/UpdateGLTexture.js';
import { GLTextureBinding } from '../../renderer/webgl1/textures/GLTextureBinding.js';
import { CreateDepthBuffer } from '../../renderer/webgl1/fbo/CreateDepthBuffer.js';
import { CreateFramebuffer } from '../../renderer/webgl1/fbo/CreateFramebuffer.js';
import '../../textures/Frame.js';
import { Texture } from '../../textures/Texture.js';
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
import '../../gameobjects/events/AddedToWorldEvent.js';
import '../../gameobjects/events/DestroyEvent.js';
import '../../gameobjects/events/RemovedFromWorldEvent.js';
import '../../events/Emit.js';
import '../../display/SetWorld.js';
import '../../display/SetParent.js';
import { DIRTY_CONST } from '../../gameobjects/DIRTY_CONST.js';
import '../../display/RemoveChildrenBetween.js';
import '../../display/DestroyChildren.js';
import '../../display/ReparentChildren.js';
import '../../gameobjects/components/transform/GetVertices.js';
import '../../gameobjects/components/bounds/BoundsComponent.js';
import '../../gameobjects/components/input/InputComponent.js';
import '../../gameobjects/components/transform/UpdateLocalTransform.js';
import '../../gameobjects/components/transform/UpdateWorldTransform.js';
import '../../gameobjects/components/transform/TransformComponent.js';
import '../../gameobjects/GameObject.js';
import '../../renderer/webgl1/draw/BatchSingleQuad.js';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad.js';
import { Layer } from '../../gameobjects/layer/Layer.js';

class RenderLayer3D extends Layer {
    constructor() {
        super();
        this.type = 'RenderLayer';
        this.willRender = true;
        this.willRenderChildren = true;
        this.willCacheChildren = true;
        this.setDirty(DIRTY_CONST.CHILD_CACHE);
        const width = GetWidth();
        const height = GetHeight();
        const resolution = GetResolution();
        const texture = new Texture(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding(texture);
        texture.binding = binding;
        binding.framebuffer = CreateFramebuffer(binding.texture);
        binding.depthbuffer = CreateDepthBuffer(binding.framebuffer, texture.width, texture.height);
        this.texture = texture;
        this.framebuffer = binding.framebuffer;
    }
    renderGL(renderPass) {
        if (this.numChildren > 0) {
            Flush(renderPass);
            if (!this.willCacheChildren || this.isDirty(DIRTY_CONST.CHILD_CACHE)) {
                SetFramebuffer(renderPass, this.framebuffer, true);
                this.clearDirty(DIRTY_CONST.CHILD_CACHE);
            }
            else {
                SetFramebuffer(renderPass, this.framebuffer, false);
                this.postRenderGL(renderPass);
            }
        }
    }
    postRenderGL(renderPass) {
        Flush(renderPass);
        PopFramebuffer(renderPass);
        DrawTexturedQuad(renderPass, this.texture);
        this.clearDirty(DIRTY_CONST.TRANSFORM);
    }
}

export { RenderLayer3D };
