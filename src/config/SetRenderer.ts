import { IRendererConstructor } from '../renderer/IRendererConstructor';

class SetRendererConfig
{
    instance: IRendererConstructor;

    set (renderer: IRendererConstructor): void
    {
        this.instance = renderer;
    }

    get (): IRendererConstructor
    {
        return this.instance;
    }
}

const config = new SetRendererConfig();

const SetRenderer = (renderer: IRendererConstructor) => config.set(renderer);
const GetRenderer = () => config.get();

export {
    GetRenderer,
    SetRenderer
};
