declare module "three" {
  export const SRGBColorSpace: any;
  export const DoubleSide: any;

  export class WebGLRenderer {
    constructor(parameters?: any);
    outputColorSpace: any;
    setPixelRatio(value: number): void;
    setClearColor(color: any, alpha?: number): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
  }

  export class Object3D {
    position: any;
    rotation: any;
    traverse(callback: (object: Object3D) => void): void;
    add(...objects: Object3D[]): void;
    clear(): this;
  }

  export class Group extends Object3D {
    constructor();
  }

  export class Scene extends Group {
    constructor();
  }

  export class PerspectiveCamera extends Object3D {
    constructor(fov: number, aspect: number, near: number, far: number);
    aspect: number;
    updateProjectionMatrix(): void;
    lookAt(x: number, y: number, z: number): void;
  }

  export class AmbientLight extends Object3D {
    constructor(color?: any, intensity?: number);
  }

  export class BufferGeometry {
    dispose(): void;
  }

  export class PlaneGeometry extends BufferGeometry {
    constructor(width: number, height: number);
  }

  export class TorusGeometry extends BufferGeometry {
    constructor(radius: number, tube: number, radialSegments?: number, tubularSegments?: number);
  }

  export class EdgesGeometry extends BufferGeometry {
    constructor(geometry: BufferGeometry);
  }

  export class Material {
    map?: Texture | null;
    dispose(): void;
  }

  export class MeshBasicMaterial extends Material {
    constructor(parameters?: any);
  }

  export class LineBasicMaterial extends Material {
    constructor(parameters?: any);
  }

  export class Mesh extends Object3D {
    constructor(geometry?: BufferGeometry, material?: Material);
    geometry: BufferGeometry;
    material: Material | Material[];
  }

  export class LineSegments extends Object3D {
    constructor(geometry?: BufferGeometry, material?: Material);
    geometry: BufferGeometry;
    material: Material | Material[];
  }

  export class Texture {
    image: { width?: number; height?: number };
    colorSpace: any;
    dispose(): void;
  }

  export class TextureLoader {
    load(url: string, onLoad: (texture: Texture) => void): Texture;
  }
}
