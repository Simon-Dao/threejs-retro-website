import Experience from "../Experience";
import * as THREE from 'three'
import Sizes from "../Utils/Size";
export default class VideoTexture {
  
  static instances = []

  constructor() {
    this.experience = new Experience()
    VideoTexture.instances.push(this)
    let path = 'public\\Textures\\desktop.mp4'
    //this.desktopVid = new THREE.TextureLoader().load('public\\Textures\\desktop.mp4',)
    var video = document.createElement('video');
    video.src = path;
    video.load();
    video.play();

    //make your video canvas
    var videocanvas = document.querySelector('.experience-canvas');
    //var videocanvasctx = videocanvas.getContext('2d');

    //set its size
    videocanvas.width = window.innerWidth;
    videocanvas.height = window.innerHeight;

    //draw a black rectangle so that your spheres don't start out transparent
   // videocanvasctx.fillStyle = "#000000";
   // videocanvasctx.fillRect(0, 0, 640, 480);

    //add canvas to new texture
    this.texture = new THREE.Texture(videocanvas);

    //add texture to material that will be wrapped around the sphere
    var material = new THREE.MeshBasicMaterial({ map: this.texture, overdraw: 0.5 });


    //Use whatever values you were using for the sizes of the spheres before
    var sphere = new THREE.BoxGeometry(5,5,5)

    //make a mesh from the material and the geometry (the sphere)
    var sphereMesh = new THREE.Mesh(sphere, material);
    sphereMesh.material.color = 'orange'
    sphereMesh.position.set(-5,2,0)
    this.experience.scene.add(sphereMesh)
    //Run your render function, checking the video for data and writing it to the canvas if there is any (this assumes you already have your video on the page and its element saved to the variable 'video'
  }

  update() {
    //check for vid data
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      //draw video to canvas starting from upper left corner
      //videocanvasctx.drawImage(video, 0, 0);
      //tell texture object it needs to be updated
      this.texture.needsUpdate = true;
    }
  }
}