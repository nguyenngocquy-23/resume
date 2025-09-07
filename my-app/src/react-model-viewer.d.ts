// src/types/react-model-viewer.d.ts
declare module "react-model-viewer" {
  import { ComponentType, CSSProperties } from "react";

  export interface ModelViewerProps {
    src: string;
    alt?: string;
    autoRotate?: boolean;
    cameraControls?: boolean;
    ar?: boolean;
    style?: CSSProperties;
    [key: string]: any;
  }

  export const ModelViewer: ComponentType<ModelViewerProps>;
  export default ModelViewer;
}
