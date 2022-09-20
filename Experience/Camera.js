import Experience from "./Experience";
import * as THREE from 'three'

export default class Camera {
  
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.canvas = this.experience.canvas
    this.scene = this.experience.scene
    this.camera = null
    this.origPos = [0,6,-13]
    this.origRot = [ 20 * Math.PI / 180,Math.PI, 0]

    this.createPerspectiveCamera()
    this.createOrthographicCamera()
  }

  update() {
    this.perspectiveCamera.updateProjectionMatrix()
    this.orthographicCamera.updateProjectionMatrix()
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
    )
    this.scene.add(this.perspectiveCamera)

    this.perspectiveCamera.position.set(0,6,-13)
    this.perspectiveCamera.rotation.set( 20 * Math.PI / 180,Math.PI, 0)
  }
  createOrthographicCamera() {
    this.frustrum = 5
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.frustrum)/2,
      (this.sizes.aspect * this.frustrum)/2,
      this.sizes.frustrum/2,
      -this.sizes.frustrum/2,
      -100,
      100
    )
    this.scene.add(this.orthographicCamera)
  }

  resize() {
    //updating perspective camera on resize
    this.perspectiveCamera.aspect = this.sizes.aspect
    this.perspectiveCamera.updateProjectionMatrix()
    
    //updating orthographic camera on resize
    this.orthographicCamera.left = (-this.sizes.aspect * this.frustrum)/2
    this.orthographicCamera.right = (this.sizes.aspect * this.frustrum)/2,
    this.orthographicCamera.top = this.sizes.frustrum/2
    this.orthographicCamera.bottom = -this.sizes.frustrum/2
    this.orthographicCamera.updateProjectionMatrix()
    
  }
}