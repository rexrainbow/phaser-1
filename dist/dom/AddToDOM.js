import {GetElement as GetElement2} from "./GetElement";
export function AddToDOM(element, parent) {
  const target = GetElement2(parent);
  target.appendChild(element);
  return element;
}
