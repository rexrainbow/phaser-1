export default function RemoveChild(parent, ...child) {
    const children = parent.children;
    child.forEach(entity => {
        let index = children.indexOf(entity);
        if (index > -1) {
            children.splice(index, 1);
            entity.parent = null;
        }
    });
}
//# sourceMappingURL=RemoveChild.js.map