export class TweenProperty {
  constructor(name, end) {
    this.name = name;
    if (typeof end === "string") {
      this.modifier = end.substr(0, 1);
      this.end = parseFloat(end.substring(1));
    } else {
      this.end = end;
    }
  }
  getEnd(start) {
    const modifier = this.modifier;
    const end = this.end;
    if (modifier === "+") {
      return start + end;
    } else if (modifier === "-") {
      return start - end;
    } else {
      return end;
    }
  }
  to(target) {
    const current = target[this.name];
    const end = this.getEnd(current);
    this.start = current;
    this.end = end;
  }
  from(target) {
    const current = target[this.name];
    const end = this.getEnd(current);
    this.start = end;
    this.end = current;
    target[this.name] = end;
  }
  update(target, v) {
    target[this.name] = this.start + (this.end - this.start) * v;
  }
}
