let maxTextures = 0;
function MaxTextures(max = 0) {
    return () => {
        maxTextures = max;
    };
}
function SetMaxTextures(max) {
    maxTextures = max;
}
function GetMaxTextures() {
    return maxTextures;
}

export { GetMaxTextures, MaxTextures, SetMaxTextures };
