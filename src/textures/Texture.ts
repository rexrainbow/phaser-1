import Frame from './Frame';
import SetGLTextureFilterMode from '../renderer/webgl1/SetGLTextureFilterMode';
import DeleteGLTexture from '../renderer/webgl1/DeleteGLTexture';
import DeleteFramebuffer from '../renderer/webgl1/DeleteFramebuffer';
import CreateGLTexture from '../renderer/webgl1/CreateGLTexture';
import UpdateGLTexture from '../renderer/webgl1/UpdateGLTexture';

export default class Texture
{
    //  Unique identifier of this Texture, if stored in the Texture Manager
    key: string = '';

    width: number;
    height: number;

    image: TexImageSource;

    glTexture: WebGLTexture;
    glIndex: number = 0;
    glIndexCounter: number = -1;
    glFramebuffer: WebGLFramebuffer;

    firstFrame: Frame;

    frames: Map<string | number, Frame>;

    data: any;

    constructor (image?: TexImageSource, width?: number, height?: number)
    {
        if (image)
        {
            width = image.width;
            height = image.height;
        }

        this.image = image;

        this.width = width;
        this.height = height;

        this.frames = new Map();

        this.data = {};

        this.add('__BASE', 0, 0, width, height);
    }

    add (key: string | number, x: number, y: number, width: number, height: number): Frame
    {
        if (this.frames.has(key))
        {
            return null;
        }

        let frame = new Frame(this, key, x, y, width, height);

        this.frames.set(key, frame);

        if (!this.firstFrame || this.firstFrame.key === '__BASE')
        {
            this.firstFrame = frame;
        }

        return frame;
    }

    get (key?: string | number | Frame)
    {
        //  null, undefined, empty string, zero
        if (!key)
        {
            return this.firstFrame;
        }

        if (key instanceof Frame)
        {
            key = key.key;
        }

        let frame: Frame = this.frames.get(key);

        if (!frame)
        {
            console.warn('Texture.frame missing: ' + key);

            frame = this.firstFrame;
        }

        return frame;
    }

    getFrames (frames: string[] | number[]): Frame[]
    {
        const output: Frame[] = [];

        frames.forEach((key: string | number) => {

            output.push(this.get(key));

        });

        return output;
    }

    getFramesInRange (prefix: string, start: number, end: number, zeroPad: number = 0, suffix: string = ''): Frame[]
    {
        const frameKeys = [];

        const diff: number = (start < end) ? 1 : -1;

        //  Adjust because we use i !== end in the for loop
        end += diff;

        for (let i: number = start; i !== end; i += diff)
        {
            frameKeys.push(prefix + i.toString().padStart(zeroPad, '0') + suffix);
        }

        return this.getFrames(frameKeys);
    }

    setSize (width: number, height: number)
    {
        this.width = width;
        this.height = height;

        const frame = this.frames.get('__BASE');

        frame.setSize(width, height);
    }

    setFilter (linear: boolean)
    {
        SetGLTextureFilterMode(this.glTexture, linear);
    }
    
    createGL ()
    {
        if (this.glTexture)
        {
            DeleteGLTexture(this.glTexture);
        }

        this.glTexture = CreateGLTexture(this.image);
    }

    updateGL ()
    {
        if (!this.glTexture)
        {
            this.glTexture = CreateGLTexture(this.image);
        }
        else
        {
            UpdateGLTexture(this.image, this.glTexture);
        }
    }

    destroy ()
    {
        this.frames.clear();

        this.image = null;
        this.firstFrame = null;
        this.data = null;

        DeleteGLTexture(this.glTexture);
        DeleteFramebuffer(this.glFramebuffer);
    }
}
