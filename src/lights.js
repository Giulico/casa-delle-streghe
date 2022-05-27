import * as THREE from "three";

export const ambientLight = new THREE.AmbientLight("#b9d5ff", 0.12);

export const moonLight = new THREE.DirectionalLight("#ffffff", 0.5);
moonLight.position.set(4, 5, -2);

export const doorLight = new THREE.PointLight("#ff7d46", 1, 5);
doorLight.position.set(0, 2.9, 2.7);

doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.far = 7;

// Fog
export const fog = new THREE.Fog("#262837", 1, 10);
