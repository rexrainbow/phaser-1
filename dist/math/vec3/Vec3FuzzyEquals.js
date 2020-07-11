import {FuzzyEqual as FuzzyEqual2} from "../fuzzy/FuzzyEqual";
export function Vec3FuzzyEquals(a, b, epsilon = 1e-4) {
  return FuzzyEqual2(a.x, b.x, epsilon) && FuzzyEqual2(a.y, b.y, epsilon) && FuzzyEqual2(a.z, b.z, epsilon);
}
