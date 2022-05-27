import * as THREE from "three";

export const ghost1 = new THREE.PointLight("#ff00ff", 2, 3);

ghost1.shadow.mapSize.width = 256;
ghost1.shadow.mapSize.height = 256;
ghost1.shadow.camera.far = 7;

export const ghost2 = new THREE.PointLight("#00ffff", 2, 3);

ghost2.shadow.mapSize.width = 256;
ghost2.shadow.mapSize.height = 256;
ghost2.shadow.camera.far = 7;

export const ghost3 = new THREE.PointLight("#ffff00", 2, 3);

ghost3.shadow.mapSize.width = 256;
ghost3.shadow.mapSize.height = 256;
ghost3.shadow.camera.far = 7;
