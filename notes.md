# Notes

## Cameras

**PerspectiveCamera** FOV (first param) is vertical angle. Recomendation is to have between 45 and 75.

## Fullscreen and resizing

When page is resized width and height changes so new `camera.aspect` should be set (width / height). After making changes to most of these properties you will have to call `.updateProjectionMatrix` for the changes to take effect `renderer.setPixelRatio` should also be updated.

### Pixel ratio

Do not set pixel ratio higher than 2 (or 3) to avoid possible performance issues. When pixel ratio is 2, GPU has to handle 4 physical px per 1 software px. If ratio is 3 - 9px and so on.
`renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));`

## Geometries
