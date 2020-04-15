export default function SetName(name, ...child) {
    child.forEach(entity => {
        entity.name = name;
    });
}
//# sourceMappingURL=SetName.js.map