import { SceneManager } from './SceneManager';

let managerInstance: SceneManager;

export const SceneManagerInstance =
{
    get: (): SceneManager =>
    {
        return managerInstance;
    },

    set: (manager: SceneManager | null): void =>
    {
        managerInstance = manager;
    }
};
