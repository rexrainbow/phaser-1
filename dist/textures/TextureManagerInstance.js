let instance;
export const TextureManagerInstance = {
  get: () => {
    return instance;
  },
  set: (manager) => {
    instance = manager;
  }
};
