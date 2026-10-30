declare module "three" {
  export const SRGBColorSpace: string;
  export const DoubleSide: number;

  export interface Vector3 {
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): this;
    setScalar(value: number): this;
  }

  export interface Euler {
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): this;
  }

  export interface RendererParameters {
    canvas?: HTMLCanvasElement;
    alpha?: boolean;
    antialias?: boolean;
    powerPreference?: "high-performance" | "low-power" | "default";
  }

  export class WebGLRenderer {
    constructor(parameters?: RendererParameters);
    outputColorSpace: string;
    setPixelRatio(value: number): void;
    setClearColor(color: number | string, alpha?: number): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
  }

  export class Object3D {
    position: Vector3;
    scale: Vector3;
    rotation: Euler;
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
    constructor(color?: number | string, intensity?: number);
  }

  export class BufferGeometry {
    dispose(): void;
  }

  export class PlaneGeometry extends BufferGeometry {
    constructor(width: number, height: number);
  }

  export class IcosahedronGeometry extends BufferGeometry {
    constructor(radius?: number, detail?: number);
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

  export interface MaterialParameters {
    [key: string]: unknown;
  }

  export class MeshBasicMaterial extends Material {
    constructor(parameters?: MaterialParameters);
  }

  export class LineBasicMaterial extends Material {
    constructor(parameters?: MaterialParameters);
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
    colorSpace: string;
    dispose(): void;
  }

  export class TextureLoader {
    load(url: string, onLoad: (texture: Texture) => void): void;
  }
}
