export default function SetType(type, ...child) {
    child.forEach(entity => {
        entity.type = type;
    });
}
//# sourceMappingURL=SetType.js.map