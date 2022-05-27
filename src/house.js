import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load("./textures/door/color.jpg");
const doorAlphaTexture = textureLoader.load("./textures/door/alpha.jpg");
const doorAmbientOcclusionTexture = textureLoader.load(
  "./textures/door/ambientOcclusion.jpg"
);
const doorHeightTexture = textureLoader.load("./textures/door/height.jpg");
const doorNormalTexture = textureLoader.load("./textures/door/normal.jpg");
const doorMetalnessTexture = textureLoader.load(
  "./textures/door/metalness.jpg"
);
const doorRoughnessTexture = textureLoader.load(
  "./textures/door/roughness.jpg"
);

const bricksColorTexture = textureLoader.load("./textures/bricks/color.jpg");
const bricksAmbientOcclusionTexture = textureLoader.load(
  "./textures/bricks/ambientOcclusion.jpg"
);
const bricksNormalTexture = textureLoader.load("./textures/bricks/normal.jpg");
const bricksRoughnessTexture = textureLoader.load(
  "./textures/bricks/roughness.jpg"
);

export const house = new THREE.Group();

// Walls
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(4, 3, 4),
  new THREE.MeshStandardMaterial({
    map: bricksColorTexture,
    aoMap: bricksAmbientOcclusionTexture,
    normalMap: bricksNormalTexture,
    roughnessMap: bricksRoughnessTexture,
  })
);

walls.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
);

walls.position.y = 3 / 2;

walls.castShadow = true;

house.add(walls);

// Roof
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3.5, 1.5, 4),
  new THREE.MeshStandardMaterial({ color: "#b35f45" })
);

roof.position.y = 1.5 / 2 + 3;
roof.rotation.y = Math.PI / 4;
house.add(roof);

// Door
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.2, 2.2, 20, 20),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientOcclusionTexture,
    normalMap: doorNormalTexture,
    displacementMap: doorHeightTexture,
    displacementScale: 0.1,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  })
);

door.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
);

door.position.z = 2.01;
door.position.y = 1;
house.add(door);

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({ color: "#89C854" });
const bushCoords = [
  [1.1, 0.2, 2.2],
  [1.5, 0.2, 2.5],
  [-0.8, 0.2, 2.2],
  [-1, 0.1, 2.6],
];
const bushScale = [0.5, 0.25, 0.4, 0.15];
for (let i = 0; i < 4; i++) {
  const bush = new THREE.Mesh(bushGeometry, bushMaterial);
  bush.position.set(bushCoords[i][0], bushCoords[i][1], bushCoords[i][2]);
  bush.scale.set(bushScale[i], bushScale[i], bushScale[i]);
  bush.castShadow = true;
  house.add(bush);
}

// Graves
const gravesAmount = 50;
const graves = new THREE.Group();
const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
  color: "#b2b6b1",
});

for (let i = 0; i < gravesAmount; i++) {
  const angle = Math.random() * Math.PI * 2; // Circular
  const radius = 4 + Math.random() * 5; // From 4 to 5
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  const grave = new THREE.Mesh(graveGeometry, graveMaterial);
  grave.position.set(x, 0.3, z);
  grave.rotation.y = (Math.random() - 0.5) * 0.6;
  grave.rotation.z = (Math.random() - 0.5) * 0.4;
  grave.castShadow = true;
  graves.add(grave);
}

house.add(graves);
