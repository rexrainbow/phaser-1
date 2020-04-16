import GetElement from './GetElement';
export default function AddToDOM(element, parent) {
    const target = GetElement(parent);
    target.appendChild(element);
    return element;
}
//# sourceMappingURL=AddToDOM.js.map