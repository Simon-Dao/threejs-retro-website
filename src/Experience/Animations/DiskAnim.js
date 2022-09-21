import gsap from 'gsap'
import Experience from '../Experience'
import Animation from './Animation'
import { degToRad } from 'three/src/math/MathUtils'
import World from '../World/World'

//this is complete spaghetti code, please fix this later  
//preferably at a time when you aren't running off of 2 hours of sleep
export default class DiskAnim extends Animation {
  static instances = []
  static START = 0
  static UP = 1
  static ROTATION = 2
  static DOWN = 3
  static ALMOST_INSERT = 4
  static INSERTED = 5
  static EXTRACT = 6

  constructor(entity) {
    super(entity)
    this.duration = 0.4

    window.addEventListener('click', () => {
      if(!this.mouseOver()) return

      DiskAnim.instances.forEach(diskAnim => {
        if (diskAnim.stage == DiskAnim.INSERTED) {
          this.time.startTimer()
          diskAnim.stage = DiskAnim.EXTRACT
        }
      })

      if (this.stage == DiskAnim.ROTATION) {
        this.stage = DiskAnim.ALMOST_INSERT
      }
    })
  }
  addInstance() {
    DiskAnim.instances.push(this)
  }
  onMouseEnter() {
    if (this.mouseEnter()) {

      switch (this.stage) {
        case DiskAnim.START:
          DiskAnim.instances.forEach(diskAnim => {
            if (diskAnim.stage == DiskAnim.ROTATION || diskAnim.stage == DiskAnim.ALMOST_INSERT) {
              diskAnim.stage = DiskAnim.DOWN
            }
          })
          this.stage = DiskAnim.UP
          break
        case DiskAnim.UP:
          this.stage = DiskAnim.DOWN
          break
        case DiskAnim.ROTATION:
          break
      }
    }
  }

  update() {

    super.update()
    switch (this.stage) {

      case DiskAnim.UP:
        gsap.to(this.mesh.position, {
          y: this.origPos.y + 1,
          duration: this.duration,
        })
        this.stage = DiskAnim.ROTATION
        break
      case DiskAnim.ROTATION:
        this.mesh.rotation.y -= degToRad(1)
        break
      case DiskAnim.DOWN:
        gsap.to(this.mesh.position, {
          x: this.origPos.x,
          y: this.origPos.y,
          z: this.origPos.z,
          duration: this.duration
        })
        gsap.to(this.mesh.rotation, {
          x: this.origRot.x,
          y: this.origRot.y,
          z: this.origRot.z,
          duration: this.duration
        })
        this.stage = DiskAnim.START
        break
      case DiskAnim.ALMOST_INSERT:
        this.time.startTimer()
        gsap.to(this.mesh.position, {
          x: -3.8,
          y: -0.7,
          z: 2,
          duration: this.duration
        })
        gsap.to(this.mesh.rotation, {
          x: this.origRot.x,
          y: degToRad(-3),
          z: this.origRot.z,
          duration: this.duration
        })

        this.stage = DiskAnim.INSERTED
        break
      case DiskAnim.INSERTED:
        if (this.time.elapsedTime() < 600) break
        gsap.to(this.mesh.position, {
          x: -3.8,
          y: -0.7,
          z: 4,
          duration: this.duration
        })
        break
      case DiskAnim.EXTRACT:
        gsap.to(this.mesh.position, {
          x: -3.8,
          y: -0.7,
          z: 2,
          duration: this.duration
        })
        if (this.time.elapsedTime() > 300) {
          gsap.to(this.mesh.position, {
            x: -3.8,
            y: -1,
            z: 2,
            duration: this.duration
          })
          this.stage = DiskAnim.DOWN
        }
    }

    this.meshesSelected.forEach((element, i) => {
      if (element.object.uuid !== this.mesh.uuid) return

      this.onMouseEnter()
    })
  }
}