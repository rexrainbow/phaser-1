export function GetFrames(texture, frames) {
  const output = [];
  frames.forEach((key) => {
    output.push(texture.getFrame(key));
  });
  return output;
}
