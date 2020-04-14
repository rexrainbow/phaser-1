import RemoveChild from './RemoveChild';
export default function SetParent(parent, ...child) {
    child.forEach(entity => {
        if (entity.parent) {
            RemoveChild(entity.parent, entity);
        }
        entity.scene = parent.scene;
        entity.parent = parent;
    });
}
//# sourceMappingURL=SetParent.js.map