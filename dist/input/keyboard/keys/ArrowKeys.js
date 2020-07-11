import {Key as Key2} from "../Key";
export class ArrowKeys {
  constructor(keyboardManager, config) {
    const {
      left = true,
      right = true,
      up = true,
      down = true,
      space = true
    } = config;
    const keys = keyboardManager.keys;
    if (left) {
      this.left = new Key2("ArrowLeft");
      keys.set(this.left.value, this.left);
    }
    if (right) {
      this.right = new Key2("ArrowRight");
      keys.set(this.right.value, this.right);
    }
    if (up) {
      this.up = new Key2("ArrowUp");
      keys.set(this.up.value, this.up);
    }
    if (down) {
      this.down = new Key2("ArrowDown");
      keys.set(this.down.value, this.down);
    }
    if (space) {
      this.space = new Key2(" ");
      keys.set(this.space.value, this.space);
    }
  }
}
