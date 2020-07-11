import {Emit} from "../../events";
export class Key {
  constructor(value) {
    this.capture = true;
    this.isDown = false;
    this.enabled = true;
    this.repeatRate = 0;
    this.canRepeat = true;
    this.timeDown = 0;
    this.timeUpdated = 0;
    this.timeUp = 0;
    this.value = value;
    this.events = new Map();
  }
  getValue() {
    return this.value;
  }
  down(event) {
    if (!this.enabled) {
      return;
    }
    if (this.capture) {
      event.preventDefault();
    }
    this.shiftKey = event.shiftKey;
    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    if (this.isDown && this.canRepeat) {
      this.timeUpdated = event.timeStamp;
      const delay = this.timeUpdated - this.timeDown;
      if (delay >= this.repeatRate) {
        Emit(this, "keydown", this);
        if (this.downCallback) {
          this.downCallback(this);
        }
      }
    } else {
      this.isDown = true;
      this.timeDown = event.timeStamp;
      this.timeUpdated = event.timeStamp;
      Emit(this, "keydown", this);
      if (this.downCallback) {
        this.downCallback(this);
      }
    }
  }
  up(event) {
    if (!this.enabled) {
      return;
    }
    if (this.capture) {
      event.preventDefault();
    }
    this.shiftKey = event.shiftKey;
    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    if (this.isDown) {
      this.isDown = false;
      this.timeUp = event.timeStamp;
      this.timeUpdated = event.timeStamp;
      Emit(this, "keyup", this);
      if (this.upCallback) {
        this.upCallback(this);
      }
    }
  }
  reset() {
    this.isDown = false;
    this.timeUpdated = this.timeDown;
    this.timeUp = this.timeDown;
  }
  destroy() {
    this.downCallback = null;
    this.upCallback = null;
    this.events.clear();
  }
}
