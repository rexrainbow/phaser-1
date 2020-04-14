import GetChildAt from './GetChildAt';
export default function RemoveChildAt(parent, ...index) {
    const children = parent.children;
    const removed = [];
    //  Sort into numeric order
    index.sort((a, b) => a - b);
    //  Work through the array in reverse
    index.reverse().forEach(entity => {
        let child = GetChildAt(parent, entity);
        if (child) {
            children.splice(entity, 1);
            child.parent = null;
            removed.push(child);
        }
    });
    return removed;
}
//# sourceMappingURL=RemoveChildAt.js.map