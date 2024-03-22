# Notes

## Cameras

**PerspectiveCamera** FOV (first param) is vertical angle. Recomendation is to have between 45 and 75.

## Fullscreen and resizing

When page is resized width and height changes so new `camera.aspect` should be set (width / height). After making changes to most of these properties you will have to call `.updateProjectionMatrix` for the changes to take effect `renderer.setPixelRatio` should also be updated.

### Pixel ratio

Do not set pixel ratio higher than 2 (or 3) to avoid possible performance issues. When pixel ratio is 2, GPU has to handle 4 physical px per 1 software px. If ratio is 3 - 9px and so on.
`renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));`

## Geometries
Geometry composed of point coordinates in 3D which is called **vertices** (vertex) and triangles that join those verises to create a surface - **faces**.

`Mesh` represents a 3D object composed of vertices, edges, and faces.
* **Vertices**: These are the points in 3D space that define the shape of the object. Vertices are connected to form edges and faces.
* **Edges**: Edges are the lines connecting pairs of vertices. They define the outline or silhouette of the object.
* **Faces**: Faces are the surfaces enclosed by edges. They represent the visible sides of the object and are typically composed of triangles or quadrilaterals.
* **Material**: A mesh can be assigned a material that determines its appearance, such as color, texture, transparency, or reflectivity.
* **Geometry**: The geometry of a mesh defines its shape, including the positions of its vertices, the connectivity of its edges, and the composition of its faces.
* **Transformation**: Meshes can be translated, rotated, and scaled in 3D space to position them within a scene and orient them as desired.

Using a `Float32Array` for storing vertex positions ensures efficient memory usage, compatibility with WebGL, and seamless integration with Three.js's geometry representation and attribute system

## Debug UI
When applying colors directly via gui and threejs, there's color space differences and color won't be the same if copy-pasted. We need to create an object with color and modify it instead.
```
gui.addColor(debugState, 'color').onChange(() => {
  material.color.set(debugState.color);
});
```
