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
   
  }

  

  update() {
    super.update()
    /*
    {
            x:,
            y:,
            z:,
            duration: ,
          }*/

    this.meshesSelected.forEach((element, i) => {
      if(element.object.name !== this.mesh.name) return
      if(this.mouseEnter()) {
        switch(this.stage) {
          case 0:
            gsap.to(this.mesh.position, {
              x: this.origPos.x,
              y: this.origPos.y,
              z: this.origPos.z,
              duration: 1
            })
            this.stage = 1
            break
          case 1:
            gsap.to(this.mesh.position, {
              y: this.origPos.y + .4,
              duration: 1,
            })
            this.stage = 0
            break
        }
      }
    })
  }
}