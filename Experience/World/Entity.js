import * as THREE from 'three'
import Experience from '../Experience'

export default class Entity {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera
  }

  resize() {

  }

  update() {

  }
}