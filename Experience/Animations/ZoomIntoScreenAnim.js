import gsap from 'gsap'
import Experience from '../Experience'
import Animation from './Animation'
import { degToRad } from 'three/src/math/MathUtils'

export default class ZoomIntoScreenAnim extends Animation {
  constructor(camera) {
    super(camera)
    this.camera = camera.perspectiveCamera
    gsap.to(this.camera.position, {
      x: -3.42,
      y: 1,
      z: -0.5,
      duration: .2
    })
    gsap.to(this.camera.rotation, {
      x: 0,
      y: degToRad(180),
      z: 0,
      duration: .5
    })
  }

  start() {
    
  }

  update() {
    console.log(camera)
    
  }
}