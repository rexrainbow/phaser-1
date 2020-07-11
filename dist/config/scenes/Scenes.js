import {SetScenes as SetScenes2} from "./SetScenes";
export function Scenes(scenes) {
  return () => {
    SetScenes2(scenes);
  };
}
