import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AxesHelper,
} from 'three';
import gsap from 'gsap';
import './style.css';

const canvas = document.querySelector('.webgl');
const scene = new Scene();

/**
 * OBJECTS
 */
const mesh = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 'red' })
);
scene.add(mesh);

/**
 * AXES HELPER
 */
const axesHelper = new AxesHelper(3);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

/**
 * CAMERA
 */
const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * RENDERER
 */
const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

/* ANIMATIONS */
const tick = () => {
  /**
   * RENDER
   */
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
