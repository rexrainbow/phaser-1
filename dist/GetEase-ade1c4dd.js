import { In as In$8 } from './math/easing/back/In.js';
import { InOut as InOut$8 } from './math/easing/back/InOut.js';
import { Out as Out$8 } from './math/easing/back/Out.js';
import { In as In$9 } from './math/easing/bounce/In.js';
import { InOut as InOut$9 } from './math/easing/bounce/InOut.js';
import { Out as Out$9 } from './math/easing/bounce/Out.js';
import { In as In$6 } from './math/easing/circular/In.js';
import { InOut as InOut$6 } from './math/easing/circular/InOut.js';
import { Out as Out$6 } from './math/easing/circular/Out.js';
import { In as In$1 } from './math/easing/cubic/In.js';
import { InOut as InOut$1 } from './math/easing/cubic/InOut.js';
import { Out as Out$1 } from './math/easing/cubic/Out.js';
import { In as In$7 } from './math/easing/elastic/In.js';
import { InOut as InOut$7 } from './math/easing/elastic/InOut.js';
import { Out as Out$7 } from './math/easing/elastic/Out.js';
import { In as In$5 } from './math/easing/expo/In.js';
import { InOut as InOut$5 } from './math/easing/expo/InOut.js';
import { Out as Out$5 } from './math/easing/expo/Out.js';
import { In } from './math/easing/quadratic/In.js';
import { InOut } from './math/easing/quadratic/InOut.js';
import { Out } from './math/easing/quadratic/Out.js';
import { In as In$2 } from './math/easing/quartic/In.js';
import { InOut as InOut$2 } from './math/easing/quartic/InOut.js';
import { Out as Out$2 } from './math/easing/quartic/Out.js';
import { In as In$3 } from './math/easing/quintic/In.js';
import { InOut as InOut$3 } from './math/easing/quintic/InOut.js';
import { Out as Out$3 } from './math/easing/quintic/Out.js';
import { In as In$4 } from './math/easing/sine/In.js';
import { InOut as InOut$4 } from './math/easing/sine/InOut.js';
import { Out as Out$4 } from './math/easing/sine/Out.js';
import { a as Linear } from './Linear-8dd9e56a.js';
import { a as Stepped } from './Stepped-b024975a.js';

const EaseMap = new Map([
    ['power0', Linear],
    ['power1', Out],
    ['power2', Out$1],
    ['power3', Out$2],
    ['power4', Out$3],
    ['linear', Linear],
    ['quad', Out],
    ['cubic', Out$1],
    ['quart', Out$2],
    ['quint', Out$3],
    ['sine', Out$4],
    ['expo', Out$5],
    ['circ', Out$6],
    ['elastic', Out$7],
    ['back', Out$8],
    ['bounce', Out$9],
    ['stepped', Stepped],
    ['quad.in', In],
    ['cubic.in', In$1],
    ['quart.in', In$2],
    ['quint.in', In$3],
    ['sine.in', In$4],
    ['expo.in', In$5],
    ['circ.in', In$6],
    ['elastic.in', In$7],
    ['back.in', In$8],
    ['bounce.in', In$9],
    ['quad.out', Out],
    ['cubic.out', Out$1],
    ['quart.out', Out$2],
    ['quint.out', Out$3],
    ['sine.out', Out$4],
    ['expo.out', Out$5],
    ['circ.out', Out$6],
    ['elastic.out', Out$7],
    ['back.out', Out$8],
    ['bounce.out', Out$9],
    ['quad.inout', InOut],
    ['cubic.inout', InOut$1],
    ['quart.inout', InOut$2],
    ['quint.inout', InOut$3],
    ['sine.inout', InOut$4],
    ['expo.inout', InOut$5],
    ['circ.inout', InOut$6],
    ['elastic.inout', InOut$7],
    ['back.inout', InOut$8],
    ['bounce.inout', InOut$9]
]);
function GetEase(name) {
    name = name.toLowerCase();
    name = name.replace('ease', '');
    if (EaseMap.has(name)) {
        return EaseMap.get(name);
    }
    else {
        return Linear;
    }
}

var GetEase$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GetEase: GetEase
});

export { GetEase$1 as G, GetEase as a };
