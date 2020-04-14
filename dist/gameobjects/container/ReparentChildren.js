import RemoveChildren from './RemoveChildren';
import SetParent from './SetParent';
export default function ReparentChildren(parent, newParent, beginIndex = 0, endIndex) {
    const moved = RemoveChildren(parent, beginIndex, endIndex);
    moved.forEach(child => {
        SetParent(newParent, child);
    });
    return moved;
}
//# sourceMappingURL=ReparentChildren.js.map