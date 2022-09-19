import * as THREE from 'three'
import Entity from './Entity'

export default class Cube extends Entity  {

  constructor(position, rotation, size) {
    super(position,rotation)

    this.size = size
    this.color = 'white'
    this.geometry = new THREE.BoxGeometry(this.size,this.size,this.size)
    this.material = new THREE.MeshBasicMaterial({color:this.color})
    this.mesh = new THREE.Mesh(this.geometry,this.material)
    this.setPosition(position)
    this.setRotation(rotation)
    this.scene.add(this.mesh)
  }

  update() {
    
  }

  resize() {

  }
}