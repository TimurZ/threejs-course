import './style.css';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const canvas = document.querySelector('.webgl');

const scene = new Scene();

const geometry = new BoxGeometry(1, 1, 1);
const basicMaterial = new MeshBasicMaterial({ color: 'red' });
const mesh = new Mesh(geometry, basicMaterial);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
scene.add(camera);

const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
