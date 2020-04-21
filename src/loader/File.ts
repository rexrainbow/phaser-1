import { Loader } from './Loader';

export class File
{
    key: string;
    url: string;
    responseType: XMLHttpRequestResponseType = 'text';
    crossOrigin: string | undefined = undefined;
    data: unknown;
    error: ErrorEvent | undefined;
    config: unknown;
    skipCache: boolean = false;
    hasLoaded: boolean = false;
    loader: Loader;
    load: () => Promise<File>;

    constructor (key: string, url: string, config?: unknown)
    {
        this.key = key;
        this.url = url;
        this.config = config;
    }
}
