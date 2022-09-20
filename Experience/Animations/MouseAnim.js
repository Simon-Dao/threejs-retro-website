import gsap from 'gsap'
import Experience from '../Experience'
import Animation from './Animation'
import { degToRad } from 'three/src/math/MathUtils'
import ZoomIntoScreenAnim from './ZoomIntoScreenAnim'
import ZoomOutScreenAnim from './ZoomOutScreenAnim'

export default class MouseAnim extends Animation {
  constructor(entity) {
    super(entity)
    this.mesh.name = 'hover'
    console.log(this.mesh.name)

    window.addEventListener('click', () => {
      if(this.stage == 2) {
        console.log('2')
        new ZoomIntoScreenAnim(this.experience.camera)

        if(this.time.elapsedTime() > 500)
          this.stage = 3
      }
      if(this.stage == 3) {
        console.log('3')
        new ZoomOutScreenAnim(this.experience.camera, this)

      }
    })
  }

  start() {
    if(this.stage == 0) {
      this.time.startTimer()
      this.stage = 1
    } else 
    if (this.stage == 1) {
      this.stage = 2
    } else 
    if(this.stage == 2) {
      this.time.startTimer()
    } else
    if(this.stage == 3) {
      let elapsed = this.time.elapsedTime()
      if(elapsed > 200) {
        this.stage = 0
      }
    }
  }

  update() {
    switch(this.stage)
    {
      case 1:
        gsap.to(this.mesh.position, {y:this.origPos[1] + .3, duration:0.5})
      break
      case 2:
        //this.mesh.rotation.y += degToRad(1)
      break
      case 3:
        gsap.to(this.mesh.rotation, {y:this.origRot[1], duration:0.5})
        gsap.to(this.mesh.position, {y:this.origPos[1], duration:0.5})
      break
    }

  }
}