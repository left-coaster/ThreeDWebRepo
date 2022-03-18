
//import * as THREE from './three/src/Three.js';
import *  as THREE from "three";

//import {GLTFLoader} from "./three/examples/jsm/loaders/GLTFLoader.js";
import {GLTFLoader} from "https://cdn.jsdelivr.net/npm/three@0.138.3/examples/jsm/loaders/GLTFLoader.js";


//import {OrbitControls} from "./three/examples/jsm/controls/OrbitControls.js";
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.138.3/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


const loader = new GLTFLoader();
loader.load('./scene/OakTree_LP_TexPaint.gltf', function (gltf)
{
	scene.add(gltf.scene);
}, undefined, function (error)
{
	console.log(error);
}
);

const mylight = new THREE.AmbientLight(0xffffff);
scene.add(mylight);


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 5;
controls.update();
var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};
animate();
