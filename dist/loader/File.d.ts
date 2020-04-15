import Loader from './Loader';
export default class File {
    key: string;
    url: string;
    responseType: XMLHttpRequestResponseType;
    crossOrigin: string | undefined;
    data: any;
    error: ErrorEvent | undefined;
    config: any;
    skipCache: boolean;
    hasLoaded: boolean;
    loader: Loader;
    load: () => Promise<File>;
    constructor(key: string, url: string, config?: any);
}
//# sourceMappingURL=File.d.ts.map