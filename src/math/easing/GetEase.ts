import { Back } from './Back';
import { Bounce } from './Bounce';
import { Circular } from './Circular';
import { Cubic } from './Cubic';
import { Elastic } from './Elastic';
import { Expo } from './Expo';
import { Linear } from './Linear';
import { Quadratic } from './Quadratic';
import { Quartic } from './Quartic';
import { Quintic } from './Quintic';
import { Sine } from './Sine';
import { Stepped } from './Stepped';

const EaseMap = new Map([
    [ 'power0', Linear ],
    [ 'power1', Quadratic.Out ],
    [ 'power2', Cubic.Out ],
    [ 'power3', Quartic.Out ],
    [ 'power4', Quintic.Out ],
    [ 'linear', Linear ],
    [ 'quad', Quadratic.Out ],
    [ 'cubic', Cubic.Out ],
    [ 'quart', Quartic.Out ],
    [ 'quint', Quintic.Out ],
    [ 'sine', Sine.Out ],
    [ 'expo', Expo.Out ],
    [ 'circ', Circular.Out ],
    [ 'elastic', Elastic.Out ],
    [ 'back', Back.Out ],
    [ 'bounce', Bounce.Out ],
    [ 'stepped', Stepped ],
    [ 'quad.in', Quadratic.In ],
    [ 'cubic.in', Cubic.In ],
    [ 'quart.in', Quartic.In ],
    [ 'quint.in', Quintic.In ],
    [ 'sine.in', Sine.In ],
    [ 'expo.in', Expo.In ],
    [ 'circ.in', Circular.In ],
    [ 'elastic.in', Elastic.In ],
    [ 'back.in', Back.In ],
    [ 'bounce.in', Bounce.In ],
    [ 'quad.out', Quadratic.Out ],
    [ 'cubic.out', Cubic.Out ],
    [ 'quart.out', Quartic.Out ],
    [ 'quint.out', Quintic.Out ],
    [ 'sine.out', Sine.Out ],
    [ 'expo.out', Expo.Out ],
    [ 'circ.out', Circular.Out ],
    [ 'elastic.out', Elastic.Out ],
    [ 'back.out', Back.Out ],
    [ 'bounce.out', Bounce.Out ],
    [ 'quad.inout', Quadratic.InOut ],
    [ 'cubic.inout', Cubic.InOut ],
    [ 'quart.inout', Quartic.InOut ],
    [ 'quint.inout', Quintic.InOut ],
    [ 'sine.inout', Sine.InOut ],
    [ 'expo.inout', Expo.InOut ],
    [ 'circ.inout', Circular.InOut ],
    [ 'elastic.inout', Elastic.InOut ],
    [ 'back.inout', Back.InOut ],
    [ 'bounce.inout', Bounce.InOut ]
]);

//  Allows GetEase('Back'), GetEase('Expo.InOut'), GetEase('Export.easeOut') or lower-case

export function GetEase (name: string): Function
{
    name = name.toLowerCase();
    name = name.replace('ease', '');

    if (EaseMap.has(name))
    {
        return EaseMap.get(name);
    }
    else
    {
        return Linear;
    }
}
