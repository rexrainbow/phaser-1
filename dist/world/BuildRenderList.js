import {CalculateTotalRenderable as CalculateTotalRenderable2} from "./CalculateTotalRenderable";
import {UpdateCachedLayers as UpdateCachedLayers2} from "./UpdateCachedLayers";
import {WorldDepthFirstSearch as WorldDepthFirstSearch2} from "./WorldDepthFirstSearch";
export function BuildRenderList(world) {
  const cachedLayers = [];
  const stack = [];
  const entries = WorldDepthFirstSearch2(cachedLayers, world, stack);
  const renderData = world.renderData;
  if (cachedLayers.length > 0) {
    UpdateCachedLayers2(cachedLayers, world.camera.dirtyRender);
  }
  entries.forEach((entry) => {
    if (entry.children.length > 0) {
      CalculateTotalRenderable2(entry, renderData);
    } else {
      renderData.numRendered++;
      renderData.numRenderable++;
      if (entry.node.dirtyFrame >= renderData.gameFrame) {
        renderData.dirtyFrame++;
      }
    }
  });
  world.renderList = entries;
  if (world.forceRefresh) {
    renderData.dirtyFrame++;
    world.forceRefresh = false;
  }
}
