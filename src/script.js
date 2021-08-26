import './style.css';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AxesHelper,
  Group,
} from 'three';

const canvas = document.querySelector('.webgl');
const scene = new Scene();

/**
 * OBJECTS
 */
const group = new Group();
scene.add(group);
group.position.y = 1;
group.scale.y = 2;

const cube1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 'red' })
);
group.add(cube1);

const cube2 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 'rebeccapurple' })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 'blue' })
);
cube3.position.x = 2;
group.add(cube3);

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

/**
 * RENDER
 */
renderer.render(scene, camera);
