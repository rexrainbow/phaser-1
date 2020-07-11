let instance;
export const SceneManagerInstance = {
  get: () => {
    return instance;
  },
  set: (manager) => {
    instance = manager;
  }
};
