import gsap from 'gsap'
import Experience from '../Experience'
import Animation from './Animation'
import { degToRad } from 'three/src/math/MathUtils'
import ZoomIntoScreenAnim from './ZoomIntoScreenAnim'
import ZoomOutScreenAnim from './ZoomOutScreenAnim'
import World from '../World/World'

export default class MouseAnim extends Animation {
  

  constructor(entity) {
    super(entity)
    this.mesh.name = 'hover'
    window.addEventListener('click', () => {
      if(!Experience.zoomedIn) {
        if(!this.mouseOverMesh(this.mesh)) return
        new ZoomIntoScreenAnim(this.experience.camera)
        Experience.zoomedIn = true
      } else {
          if(!this.mouseOverMesh(this.experience.world.computer.mesh)) return
          new ZoomOutScreenAnim(this.experience.camera)
          Experience.zoomedIn = false
        }
    })
  }

  update() {
    super.update()

    this.meshesSelected.forEach((element, i) => {
      if(element.object.name !== this.mesh.name) return
      if(this.mouseEnter()) {
        switch(this.stage) {
          case 0:
            gsap.to(this.mesh.position, {
              x: this.origPos.x,
              y: this.origPos.y,
              z: this.origPos.z,
              duration: .3
            })
            this.stage = 1
            break
          case 1:
            gsap.to(this.mesh.position, {
              y: this.origPos.y + .2,
              duration: .3,
            })
            this.stage = 0
            break
        }
      }
    })
  }
}