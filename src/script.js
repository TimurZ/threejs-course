import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AxesHelper,
  Clock,
} from 'three';
// import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';
import handleFullScreen from './utils/requestFullScreen';

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
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
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

/**
 * OBJECTS
 */
const mesh = new Mesh(new BoxGeometry(1, 1, 1, 5, 5, 5), new MeshBasicMaterial({ color: 'red' }));
scene.add(mesh);

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
camera.position.z = 2;
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
