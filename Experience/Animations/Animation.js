import gsap from 'gsap'
import Experience from '../Experience'
import * as THREE from 'three'

export default class Animation {
  constructor(entity) {
    this.entity = entity
    if (entity.mesh) {
      this.mesh = entity.mesh
      this.origPos = {x:this.mesh.position.x, y:this.mesh.position.y, z:this.mesh.position.z}
      this.origRot = {x:this.mesh.rotation.x, y:this.mesh.rotation.y, z:this.mesh.rotation.z}
    } else {
      let cam = this.entity.perspectiveCamera
      
      this.origPos = {x:cam.position.x, y:cam.position.y, z:cam.position.z}
      this.origRot = {x:cam.rotation.x, y:cam.rotation.y, z:cam.rotation.z}
    }

    this.timeline = gsap.timeline()
    this.experience = new Experience()
    this.mouseInput = this.experience.mouseInput
    this.previouslySelected = this.mouseInput.previouslySelected
    this.meshesSelected = this.mouseInput.meshesSelected
    this.stage = 0
    this.time = this.experience.time
    this.instances = []
  }

  update() {
    this.previouslySelected = this.meshesSelected
    this.meshesSelected = this.mouseInput.meshesSelected
  }
  mouseOver() {
    let result = false

    this.previouslySelected.forEach((selected, i) => {

      if(selected.object?.uuid === this.mesh.uuid) result = true
    })
    
    return result
  }

  mouseEnter() {
    return !this.mouseOver()
  }

  // mouseLeave() {
  //   let prev = false
  //   let cur = false
  //   this.previouslySelected.forEach((selected, i) => {

  //     if(selected.object?.uuid === this.mesh.uuid) prev = true
  //   })
  //   this.meshesSelected.forEach((selected, i) => {

  //     if(selected.object?.uuid === this.mesh.uuid) cur = true
  //   })
  //   console.log(cur)
  //   return prev && !cur
  // }
}