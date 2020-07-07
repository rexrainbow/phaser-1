import './Vec3.js';
import { Backward } from './Backward.js';
import { Down } from './Down.js';
import { Forward } from './Forward.js';
import { Left } from './Left.js';
import { Right } from './Right.js';
import { Up } from './Up.js';
import { Zero } from './Zero.js';

const UP = Up();
const DOWN = Down();
const LEFT = Left();
const RIGHT = Right();
const FORWARD = Forward();
const BACKWARD = Backward();
const ZERO = Zero();

export { BACKWARD, DOWN, FORWARD, LEFT, RIGHT, UP, ZERO };
