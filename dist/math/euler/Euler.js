import {Vec3Callback} from "../vec3";
export class Euler extends Vec3Callback {
  constructor(onChange, x = 0, y = 0, z = 0, order = "YXZ") {
    super(onChange, x, y, z);
    this.order = order;
  }
  reorder(order) {
    this.order = order;
    this.onChange(this);
    return this;
  }
}
