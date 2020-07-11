import {FuzzyEqual as MathFuzzyEqual} from "../fuzzy/FuzzyEqual";
export function FuzzyEquals(a, b, epsilon = 1e-4) {
  return MathFuzzyEqual(a.x, b.x, epsilon) && MathFuzzyEqual(a.y, b.y, epsilon) && MathFuzzyEqual(a.z, b.z, epsilon) && MathFuzzyEqual(a.w, b.w, epsilon);
}
