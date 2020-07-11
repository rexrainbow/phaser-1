import {SetBatchSize as SetBatchSize2} from "./SetBatchSize";
export function BatchSize(size) {
  return () => {
    SetBatchSize2(size);
  };
}
