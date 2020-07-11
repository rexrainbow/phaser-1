import {BindingQueue as BindingQueue2} from "../../BindingQueue";
import {GLTextureBinding as GLTextureBinding2} from "../textures/GLTextureBinding";
export function ProcessBindingQueue() {
  const queue = BindingQueue2.get();
  queue.forEach((entry) => {
    const {texture, glConfig} = entry;
    if (!texture.binding) {
      texture.binding = new GLTextureBinding2(texture, glConfig);
    }
  });
  BindingQueue2.clear();
}
