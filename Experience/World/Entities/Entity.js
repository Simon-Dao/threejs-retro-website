import * as THREE from 'three'
import Object from '../Object'

export default class Entity extends Object {
  constructor(position, rotation) {
    super(position,rotation)

    this.geometry = new THREE.BoxGeometry(this.size,this.size,this.size)
    this.material = new THREE.MeshBasicMaterial({color: this.color})
    this.mesh = new THREE.Mesh(this.geometry, this.material)
  }

  setPosition(position) {

    if(position.length != 3) return

    this.mesh.position.set(position[0],position[1],position[2])

  }

  setRotation(rotation) {
    if(rotation.length != 3) return

    this.mesh.rotation.set(rotation[0],rotation[1],rotation[2])
  }
}