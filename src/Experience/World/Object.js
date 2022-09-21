import * as THREE from 'three'
import { Object3D } from 'three'
import Experience from '../Experience'
import { degToRad } from 'three/src/math/MathUtils'

export default class Object {
  constructor(position, rotation) {

    this.position = position ?? [0,0,0]
    this.rotation = rotation ?? [0,0,0]
    
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera
    this.color = 'white'
  }
}