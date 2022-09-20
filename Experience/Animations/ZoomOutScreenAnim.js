import gsap from 'gsap'
import Experience from '../Experience'
import Animation from './Animation'
import { degToRad } from 'three/src/math/MathUtils'

export default class ZoomOutScreenAnim extends Animation {
  constructor(cameraEntity) {
    super(cameraEntity)
    this.camera = cameraEntity.perspectiveCamera

    gsap.to(this.camera.position, {
      x: cameraEntity.origPos[0],
      y: cameraEntity.origPos[1],
      z: cameraEntity.origPos[2],
      duration: .2
    })
    gsap.to(this.camera.rotation, {
      x: cameraEntity.origRot[0],
      y: cameraEntity.origRot[1],
      z: cameraEntity.origRot[2],
      duration: .5
    })
  }

  start() {
    
  }

  update() {
    console.log(camera)
    
  }
}