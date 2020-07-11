import {Key as Key2} from "../Key";
export class WASDKeys {
  constructor(keyboardManager, config) {
    const {
      W = true,
      A = true,
      S = true,
      D = true,
      space = true
    } = config;
    const keys = keyboardManager.keys;
    if (W) {
      this.W = new Key2("w");
      keys.set(this.W.value, this.W);
    }
    if (A) {
      this.A = new Key2("a");
      keys.set(this.A.value, this.A);
    }
    if (S) {
      this.S = new Key2("s");
      keys.set(this.S.value, this.S);
    }
    if (D) {
      this.D = new Key2("d");
      keys.set(this.D.value, this.D);
    }
    if (space) {
      this.space = new Key2(" ");
      keys.set(this.space.value, this.space);
    }
  }
}
