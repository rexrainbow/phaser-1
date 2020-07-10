import { Vec3 } from './math/vec3/Vec3.js';
import { Backward } from './math/vec3/Backward.js';
import { Down } from './math/vec3/Down.js';
import { Forward } from './math/vec3/Forward.js';
import { Left } from './math/vec3/Left.js';
import { Right } from './math/vec3/Right.js';
import { Up } from './math/vec3/Up.js';
import { Zero } from './math/vec3/Zero.js';
import { BACKWARD, DOWN, FORWARD, LEFT, RIGHT, UP, ZERO } from './math/vec3/const.js';
import { Abs } from './math/vec3/Abs.js';
import { Add } from './math/vec3/Add.js';
import { AddScalar } from './math/vec3/AddScalar.js';
import { Dot } from './math/vec3/Dot.js';
import { Angle } from './math/vec3/Angle.js';
import { Bezier } from './math/vec3/Bezier.js';
import { CatmullRom } from './math/vec3/CatmullRom.js';
import { Ceil } from './math/vec3/Ceil.js';
import { Scale } from './math/vec3/Scale.js';
import { Center } from './math/vec3/Center.js';
import { Clamp } from './math/vec3/Clamp.js';
import { DivideScalar } from './math/vec3/DivideScalar.js';
import { Length } from './math/vec3/Length.js';
import { ClampLength } from './math/vec3/ClampLength.js';
import { ClampScalar } from './math/vec3/ClampScalar.js';
import { Clone } from './math/vec3/Clone.js';
import { CopyFrom } from './math/vec3/CopyFrom.js';
import { Cross } from './math/vec3/Cross.js';
import { CrossNormalize } from './math/vec3/CrossNormalize.js';
import { DistanceSquared } from './math/vec3/DistanceSquared.js';
import { Distance } from './math/vec3/Distance.js';
import { Divide } from './math/vec3/Divide.js';
import { Equals } from './math/vec3/Equals.js';
import { Floor } from './math/vec3/Floor.js';
import { Fract } from './math/vec3/Fract.js';
import { FuzzyEquals } from './math/vec3/FuzzyEquals.js';
import { Hermite } from './math/vec3/Hermite.js';
import { Inverse } from './math/vec3/Inverse.js';
import { IsNonUniform } from './math/vec3/IsNonUniform.js';
import { LengthSquared } from './math/vec3/LengthSquared.js';
import { Lerp } from './math/vec3/Lerp.js';
import { ManhattanDistance } from './math/vec3/ManhattanDistance.js';
import { ManhattanLength } from './math/vec3/ManhattanLength.js';
import { Max } from './math/vec3/Max.js';
import { Min } from './math/vec3/Min.js';
import { Multiply } from './math/vec3/Multiply.js';
import { MultiplyByFloats } from './math/vec3/MultiplyByFloats.js';
import { Negate } from './math/vec3/Negate.js';
import { Normalize } from './math/vec3/Normalize.js';
import { One } from './math/vec3/One.js';
import { TransformMat4 } from './math/vec3/TransformMat4.js';
import { Project } from './math/vec3/Project.js';
import { Vec3Callback } from './math/vec3/Vec3Callback.js';
import { RGBCallback } from './math/vec3/RGBCallback.js';
import { Random } from './math/vec3/Random.js';
import { Subtract } from './math/vec3/Subtract.js';
import { Reflect } from './math/vec3/Reflect.js';
import { RotateX } from './math/vec3/RotateX.js';
import { RotateY } from './math/vec3/RotateY.js';
import { RotateZ } from './math/vec3/RotateZ.js';
import { Round } from './math/vec3/Round.js';
import { RoundToZero } from './math/vec3/RoundToZero.js';
import { ScaleAndAdd } from './math/vec3/ScaleAndAdd.js';
import { SetFromCylindricalCoords } from './math/vec3/SetFromCylindricalCoords.js';
import { SetFromSphericalCoords } from './math/vec3/SetFromSphericalCoords.js';
import { SetLength } from './math/vec3/SetLength.js';
import { SubtractScalar } from './math/vec3/SubtractScalar.js';
import { TransformMat4Zero } from './math/vec3/TransformMat4Zero.js';
import { TransformQuat } from './math/vec3/TransformQuat.js';
import { Unproject } from './math/vec3/Unproject.js';

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Abs: Abs,
    Add: Add,
    AddScalar: AddScalar,
    Angle: Angle,
    Backward: Backward,
    Bezier: Bezier,
    CatmullRom: CatmullRom,
    Ceil: Ceil,
    Center: Center,
    Clamp: Clamp,
    ClampLength: ClampLength,
    ClampScalar: ClampScalar,
    Clone: Clone,
    CopyFrom: CopyFrom,
    Cross: Cross,
    CrossNormalize: CrossNormalize,
    Distance: Distance,
    DistanceSquared: DistanceSquared,
    Divide: Divide,
    DivideScalar: DivideScalar,
    Dot: Dot,
    Down: Down,
    Equals: Equals,
    Floor: Floor,
    Forward: Forward,
    Fract: Fract,
    FuzzyEquals: FuzzyEquals,
    Hermite: Hermite,
    Inverse: Inverse,
    IsNonUniform: IsNonUniform,
    Left: Left,
    Length: Length,
    LengthSquared: LengthSquared,
    Lerp: Lerp,
    ManhattanDistance: ManhattanDistance,
    ManhattanLength: ManhattanLength,
    Max: Max,
    Min: Min,
    Multiply: Multiply,
    MultiplyByFloats: MultiplyByFloats,
    Negate: Negate,
    Normalize: Normalize,
    One: One,
    Project: Project,
    Random: Random,
    Reflect: Reflect,
    RGBCallback: RGBCallback,
    Right: Right,
    RotateX: RotateX,
    RotateY: RotateY,
    RotateZ: RotateZ,
    Round: Round,
    RoundToZero: RoundToZero,
    Scale: Scale,
    ScaleAndAdd: ScaleAndAdd,
    SetFromCylindricalCoords: SetFromCylindricalCoords,
    SetFromSphericalCoords: SetFromSphericalCoords,
    SetLength: SetLength,
    Subtract: Subtract,
    SubtractScalar: SubtractScalar,
    TransformMat4: TransformMat4,
    TransformMat4Zero: TransformMat4Zero,
    TransformQuat: TransformQuat,
    Unproject: Unproject,
    Up: Up,
    Vec3: Vec3,
    Vec3Callback: Vec3Callback,
    Zero: Zero,
    BACKWARD: BACKWARD,
    DOWN: DOWN,
    FORWARD: FORWARD,
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    ZERO: ZERO
});

export { index as i };
