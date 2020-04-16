import GetElement from '../dom/GetElement';
let _parent = null;
function Parent(parent) {
    return () => {
        //  If this function was called and `null` *wasn't* given as the parent
        //  then we try to figure it out, or fallback to the document body
        if (parent) {
            _parent = GetElement(parent);
        }
    };
}
function GetParent() {
    return _parent;
}
export { Parent, GetParent };
//# sourceMappingURL=Parent.js.map