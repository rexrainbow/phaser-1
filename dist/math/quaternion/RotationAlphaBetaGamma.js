import {Quaternion as Quaternion2} from "./Quaternion";
export function RotationAlphaBetaGamma(alpha, beta, gamma, out = new Quaternion2()) {
  const halfGammaPlusAlpha = (gamma + alpha) * 0.5;
  const halfGammaMinusAlpha = (gamma - alpha) * 0.5;
  const halfBeta = beta * 0.5;
  return out.set(Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta), Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta), Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta));
}
