import Experience from "../Experience";
import * as THREE from 'three'
import Sizes from "../Utils/Size";
export default class VideoTexture {

  static instances = []

  constructor() {
    this.experience = new Experience()
    VideoTexture.instances.push(this)
    this.path = 'public\\Textures\\desktop.mp4'
    var video = document.createElement('video');
    video.src = this.path;
    video.load();
    this.updateFcts = []
    this.video;
    this.videoImageContext;
    this.videoImage;
    this.videoTexture;

    this.THREEx = {}
    this.THREEx.VideoTexture = function (url) {
      video = document.createElement('video');

      video.autoplay = true;
      video.loop = true;
      video.src = 'desktop.mp4';
      video.load();
      video.play();

      videoImage = document.createElement('canvas');
      videoImage.width = 320;
      videoImage.height = 240;
      videoImageContext = videoImage.getContext('2d');
      videoImageContext.fillStyle = '#000000';
      videoImageContext.fillRect(0, 0, videoImage.width, videoImage.height);

      this.texture = new THREE.Texture(videoImage);
      this.texture.minFilter = THREE.LinearFilter;
      this.texture.magFilter = THREE.LinearFilter;

      this.destroy = function () {
        video.pause()
      }
    }

    //make your video canvas
    this.videocanvas = document.querySelector('.experience-canvas');

    //set its size
    this.videocanvas.width = window.innerWidth;
    this.videocanvas.height = window.innerHeight;
  }
  createVideo() {
    this.videoTexture = new THREEx.VideoTexture(this.path)
    updateFcts.push(function (delta, now) {
      this.videoTexture.update(delta, now)
    });
    var geometry = new THREE.BoxGeometry(50, 50, 10);
    var material = new THREE.MeshBasicMaterial({
      map: this.videoTexture.texture,
      side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, 2, 0)
    scene.add(mesh);
    updateFcts.push(function (delta, now) {
      mesh.rotation.x += 1 * delta;
      mesh.rotation.y += 2 * delta;
    });
  }

  update() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      videoImageContext.drawImage(video, 0, 0);
      if (videoTexture)
        videoTexture.texture.needsUpdate = true;
    }
  }
}