import { FuzzyEqual } from '../fuzzy/FuzzyEqual.js';

function FuzzyEquals(a, b, epsilon = 0.0001) {
    return (FuzzyEqual(a.x, b.x, epsilon) &&
        FuzzyEqual(a.y, b.y, epsilon) &&
        FuzzyEqual(a.z, b.z, epsilon) &&
        FuzzyEqual(a.w, b.w, epsilon));
}

export { FuzzyEquals };
