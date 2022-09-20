import gsap from 'gsap'
import Experience from '../Experience'
import Animation from './Animation'
import { degToRad } from 'three/src/math/MathUtils'
import InsertAnim from './InsertAnim'
import World from '../World/World'

export default class DiskAnim extends Animation {
  constructor(entity) {
    super(entity)

    window.addEventListener('click', () => {
      if (this.stage === 2) {
        if (this.diskInTransition()) return

        this.stage = 3
        this.time.startTimer()
      } else
        if (this.stage === 4) {
          World.disks.forEach(disk => {

            if (disk.hoverAnim.stage > 3 && disk != World.selectedDisk) {

              disk.hoverAnim.stage = 0
            }
          })
        }
    })
  }

  start() {

    if (this.stage == 0) {
      this.stage = 1
    } else
      if (this.stage == 1) {
        this.stage = 2
      } else
        if (this.stage == 2) {
        } else
          if (this.stage == 3) {

          }
  }

  diskInTransition() {
    let res = false

    World.disks.forEach(disk => {
      if (disk.hoverAnim.stage == 3) res = true
    })

    return res
  }

  update() {

    switch (this.stage) {
      case 0:
        gsap.to(this.mesh.position, {
          x: this.origPos[0],
          y: this.origPos[1],
          z: this.origPos[2],
          duration: .5,
        })
        gsap.to(this.mesh.rotation, {
          x: this.origRot[0],
          y: this.origRot[1],
          z: this.origRot[2],
          duration: .5,
        })


        break
      case 1:
        gsap.to(this.mesh.position, { y: this.origPos[1] + 1, duration: 0.5 })
        break
      case 2:
        this.mesh.rotation.y += degToRad(1)
        break
      case 3:
        gsap.to(this.mesh.position, {
          x: -4,
          y: -0.7,
          z: .8,
          duration: .5,
        })
        gsap.to(this.mesh.rotation, {
          x: 0,
          y: degToRad(-3),
          z: 0,
          duration: .5,
        })

        let elapsed = this.time.elapsedTime()
        if (elapsed > 600) {
          this.stage = 4
        }
        break
      case 4:
        gsap.to(this.mesh.position, {
          x: -4,
          y: -0.7,
          z: 4,
          duration: 1,
        })
        break
    }

  }
}