import * as THREE from 'three'
import Object from '../Object'
import Animation from '../../Animations/Animation'
export default class Entity extends Object {
  constructor(position, rotation) {
    super(position,rotation)
    
    this.geometry = new THREE.BoxGeometry(this.size,this.size,this.size)
    this.material = new THREE.MeshBasicMaterial({color: this.color})
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.setPosition(position)
    this.setRotation(rotation)
  }

  setEntity() {
    this.setPosition(this.position)
    this.setRotation(this.rotation)
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    this.animation = new Animation(this.mesh)
  }

  setPosition(position) {

    if(position.length != 3) return

    this.mesh.position.set(position[0],position[1],position[2])
  }

  setRotation(rotation) {
    if(rotation.length != 3) return

    this.mesh.rotation.set(rotation[0],rotation[1],rotation[2])
  }

  update() {
    this.animation.update()
  }
}