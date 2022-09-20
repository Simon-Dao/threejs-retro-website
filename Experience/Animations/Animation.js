import gsap from 'gsap'
import Experience from '../Experience'
import * as THREE from 'three'

export default class Animation {
  constructor(entity) {
    this.entity = entity
    if (entity.mesh) {
      this.mesh = entity.mesh
      this.origPos = [this.mesh.position.x, this.mesh.position.y, this.mesh.position.z]
      this.origRot = [this.mesh.rotation.x, this.mesh.rotation.y, this.mesh.rotation.z]
    } else {
      let cam = this.entity.perspectiveCamera
      
      this.origPos = [cam.position.x, cam.position.y, cam.position.z]
      this.origRot = [cam.rotation.x, cam.rotation.y, cam.rotation.z]
    }

    this.timeline = gsap.timeline()
    this.experience = new Experience()
    this.mouseInput = this.experience.mouseInput
    this.previouslySelected = this.mouseInput.previouslySelected
    this.meshesSelected = this.mouseInput.meshesSelected
    this.stage = 0
    this.time = this.experience.time
  }

  update() {
    console.log('updating')
  }
}