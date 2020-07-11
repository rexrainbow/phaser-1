export function BindShader(renderPass, entry) {
  if (!entry) {
    entry = renderPass.currentShader;
  }
  const success = entry.shader.bind(renderPass, entry.textureID);
  if (success) {
    entry.shader.setAttributes(renderPass);
  }
}
