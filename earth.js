
const scene = new THREE.Scene();
// Set up the camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const earthGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const earthMaterial = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( "earth.jpg" ) } );
const earth = new THREE.Mesh( earthGeometry, earthMaterial );
scene.add( earth );

camera.position.z = 20;

function animate() {
    requestAnimationFrame( animate );

    // earth.rotation.x += 0.01;
    earth.rotation.y += 0.01;

    renderer.render( scene, camera );
};
animate();