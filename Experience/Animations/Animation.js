import gsap from 'gsap'
import Experience from '../Experience'

export default class Animation {
  constructor(entity) {
    this.mesh = entity.mesh
    this.timeline = gsap.timeline()
    this.experience = new Experience()
    this.mouseInput = this.experience.mouseInput
    this.previouslySelected = this.mouseInput.previouslySelected
    this.meshesSelected = this.mouseInput.meshesSelected
    this.stage = 0
    this.origPos = [this.mesh.position.x,this.mesh.position.y,this.mesh.position.z]
    this.origRot = [this.mesh.rotation.x,this.mesh.rotation.y,this.mesh.rotation.z]
    this.time = this.experience.time
  }

  update() {
    console.log('updating')
  }
}