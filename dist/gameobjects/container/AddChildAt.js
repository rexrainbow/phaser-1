import SetParent from './SetParent';
export default function AddChildAt(parent, index, ...child) {
    const children = parent.children;
    if (index >= 0 && index <= children.length) {
        child.reverse().forEach(entity => {
            SetParent(parent, entity);
            children.splice(index, 0, entity);
            entity.updateTransform();
        });
    }
}
//# sourceMappingURL=AddChildAt.js.map