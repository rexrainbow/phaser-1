import { Quaternion } from './Quaternion';

export function QuatRotationAlphaBetaGamma (alpha: number, beta: number, gamma: number, out: Quaternion = new Quaternion()): Quaternion
{
    // Produces a quaternion from Euler angles in the z-x-z orientation
    const halfGammaPlusAlpha = (gamma + alpha) * 0.5;
    const halfGammaMinusAlpha = (gamma - alpha) * 0.5;
    const halfBeta = beta * 0.5;

    return out.set(
        Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta),
        Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta),
        Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta),
        Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta)
    );
}
