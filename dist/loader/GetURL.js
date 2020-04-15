export default function GetURL(key, url, extension, loader) {
    if (!url) {
        url = key + extension;
    }
    if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)) {
        return url;
    }
    else {
        if (loader) {
            return loader.baseURL + loader.path + url;
        }
        else {
            return url;
        }
    }
}
//# sourceMappingURL=GetURL.js.map