import RemoveChildren from './RemoveChildren';
export default function DestroyChildren(parent, beginIndex = 0, endIndex) {
    const removed = RemoveChildren(parent, beginIndex, endIndex);
    removed.forEach(child => {
        child.destroy();
    });
}
//# sourceMappingURL=DestroyChildren.js.map