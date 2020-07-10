import { Frame } from '../../textures/Frame';
import { GameObject3D } from '../GameObject3D';
import { Geometry } from '../geometry/Geometry';
import { IGameObject3D } from '../IGameObject3D';
import { IRenderPass } from '../../renderer/webgl1/renderpass/IRenderPass';
import { Material } from '../material/Material';
import { Texture } from '../../textures/Texture';
export declare class Mesh extends GameObject3D {
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    geometry: Geometry;
    material: Material;
    cullFaces: boolean;
    constructor(x?: number, y?: number, z?: number, geometry?: Geometry, material?: Material);
    setTexture(key: string | Texture, frame?: string | number): this;
    setFrame(key?: string | number | Frame): this;
    setMaterial(material: Material): this;
    renderGL<T extends IRenderPass>(renderPass: T): void;
    destroy(reparentChildren?: IGameObject3D): void;
}
//# sourceMappingURL=Mesh.d.ts.map