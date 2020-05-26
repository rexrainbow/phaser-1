import '../../GameInstance.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/Contains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../utils/NOOP.js';
import '../../math/vec2/Vec2Callback.js';
import { GetWidth, GetHeight, GetResolution } from '../../config/Size.js';
import '../../renderer/BindingQueue.js';
import '../../config/DefaultOrigin.js';
import '../../renderer/webgl1/GL.js';
import { CreateFramebuffer } from '../../renderer/webgl1/fbo/CreateFramebuffer.js';
import '../../renderer/webgl1/textures/CreateGLTexture.js';
import '../../renderer/webgl1/fbo/DeleteFramebuffer.js';
import '../../renderer/webgl1/textures/DeleteGLTexture.js';
import '../../math/pow2/IsSizePowerOfTwo.js';
import '../../renderer/webgl1/textures/SetGLTextureFilterMode.js';
import '../../renderer/webgl1/textures/UpdateGLTexture.js';
import { GLTextureBinding } from '../../renderer/webgl1/textures/GLTextureBinding.js';
import '../../textures/Frame.js';
import { Texture } from '../../textures/Texture.js';
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
import '../../renderer/webgl1/draw/BatchSingleQuad.js';
import { DrawTexturedQuad } from '../../renderer/webgl1/draw/DrawTexturedQuad.js';
import { Layer } from '../layer/Layer.js';

class RenderLayer extends Layer {
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
        texture.binding = new GLTextureBinding(texture);
        texture.binding.framebuffer = CreateFramebuffer(texture.binding.texture);
        this.texture = texture;
        this.framebuffer = texture.binding.framebuffer;
    }
    renderGL(renderer) {
        if (this.numChildren > 0) {
            renderer.flush();
            if (this.isDirty(DIRTY_CONST.CHILD_CACHE)) {
                renderer.fbo.add(this.framebuffer, true);
                this.clearDirty(DIRTY_CONST.CHILD_CACHE);
            }
            else {
                renderer.fbo.add(this.framebuffer, false);
                this.postRender(renderer);
            }
        }
    }
    postRender(renderer) {
        const texture = this.texture;
        renderer.flush();
        renderer.fbo.pop();
        const { u0, v0, u1, v1 } = texture.firstFrame;
        renderer.textures.bind(texture);
        DrawTexturedQuad(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);
        renderer.textures.unbind();
        this.clearDirty(DIRTY_CONST.TRANSFORM);
    }
}

export { RenderLayer };
