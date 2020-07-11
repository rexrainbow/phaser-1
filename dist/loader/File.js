export class File {
  constructor(key, url, config) {
    this.responseType = "text";
    this.crossOrigin = void 0;
    this.skipCache = false;
    this.hasLoaded = false;
    this.key = key;
    this.url = url;
    this.config = config;
  }
}
