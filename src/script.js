import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AxesHelper,
  Clock,
  BufferAttribute,
  BufferGeometry,
} from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GUI from 'lil-gui';

import './style.css';
import handleFullScreen from './utils/requestFullScreen';

const gui = new GUI();
const debugState = {
  subdivision: 2,
  color: '#cb55f0',
};

/**
 * CURSOR
 */
const cursor = {
  x: 0,
  y: 0,
};
const handleMouseMove = (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = -(e.clientY / sizes.height - 0.5);
};
const handleResize = () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(sizes.width, sizes.height);
  // update pixel ratio for multiple screens with different pixel ratio
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};
const handleDblClick = () => {
  handleFullScreen(canvas);
};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
window.addEventListener('dblclick', handleDblClick);

const canvas = document.querySelector('.webgl');
const scene = new Scene();

const count = 10 * 3 * 3;
const vertices = new Float32Array(count);

for (let i = 0; i < count; i++) {
  vertices[i] = (Math.random() - 0.5) * 2;
}

// BoxGeometry: width, height, depth, widthSegments, heightSegments, depthSegments
const geometry = new BoxGeometry(
  1,
  1,
  1,
  debugState.subdivision,
  debugState.subdivision,
  debugState.subdivision
);
// const geometry = new BufferGeometry();
// geometry.setAttribute('position', new BufferAttribute(vertices, 3));

const material = new MeshBasicMaterial({ color: debugState.color, wireframe: true });

const mesh = new Mesh(geometry, material);
scene.add(mesh);

gui.add(mesh.position, 'y').name('elevation').min(-3).max(3).step(0.01);
gui.add(mesh, 'visible');
gui.add(material, 'wireframe');
gui.addColor(debugState, 'color').onChange(() => {
  material.color.set(debugState.color);
});

debugState.spin = () => {
  gsap.to(mesh.rotation, { y: mesh.rotation.y + Math.PI * 2 });
};
gui.add(debugState, 'spin');

gui
  .add(debugState, 'subdivision')
  .min(1)
  .max(40)
  .step(1)
  .onFinishChange((value) => {
    mesh.geometry.dispose();
    mesh.geometry = new BoxGeometry(1, 1, 1, value, value, value);
  });

/**
 * AXES HELPER
 */
const axesHelper = new AxesHelper(3);
scene.add(axesHelper);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * CAMERA
 */
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

/**
 * CONTROLS
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * RENDERER
 */
const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
// this will prevent pixelRatio to go above 3
// due to possible performance issues
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new Clock();

/* ANIMATIONS */
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);

  controls.update();

  /**
   * RENDER
   */
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
