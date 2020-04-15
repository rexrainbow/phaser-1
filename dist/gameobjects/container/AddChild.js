import SetParent from './SetParent';
export default function AddChild(parent, ...child) {
    child.forEach(entity => {
        SetParent(parent, entity);
        parent.children.push(entity);
        entity.updateTransform();
    });
}
//# sourceMappingURL=AddChild.js.map