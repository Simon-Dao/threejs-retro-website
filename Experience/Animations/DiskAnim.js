import gsap from 'gsap'
import Experience from '../Experience'
import Animation from './Animation'
import { degToRad } from 'three/src/math/MathUtils'
import World from '../World/World'

//this is complete spaghetti code, please fix this later  
//preferably at a time when you aren't running off of 2 hours of sleep
export default class DiskAnim extends Animation {
  static instances = []

  constructor(entity) {
    super(entity)

    window.addEventListener('click', () => {
    })
  }
  addInstance() {
    DiskAnim.instances.push(this)
  }
  onMouseEnter() {
    if (this.mouseEnter()) {

      switch (this.stage) {
        case 0:
          this.stage = 1
          break
        case 2:
          this.stage = 3
          break
      }
    }
  }

  update() {

    console.log(this.stage, this.mesh.id)

    super.update()
    switch (this.stage) {
      
      case 1:
        gsap.to(this.mesh.position, {
          y: this.origPos.y+1,
          duration: 1,
        })
        this.stage = 2
        break
      case 2:
        this.mesh.rotation.y -= degToRad(1)
        break
      case 3:
        gsap.to(this.mesh.position, {
          x: this.origPos.x,
          y: this.origPos.y,
          z: this.origPos.z,
          duration: 1
        })
        gsap.to(this.mesh.rotation, {
          x: this.origRot.x,
          y: this.origRot.y,
          z: this.origRot.z,
          duration: 1
        })
        this.stage = 0
        break
    }

    this.meshesSelected.forEach((element, i) => {
      if (element.object.uuid !== this.mesh.uuid) return

      this.onMouseEnter()
    })

    DiskAnim.instances.forEach(diskAnim => {

    })
  }
}