import * as THREE from 'three'
import Entity from './Entity'

export default class Cube extends Entity  {

  //this is an example of an Entity
  //copy the code in here and make your own custom entity
  constructor(position, rotation, size, color) {
    super(position,rotation)

    this.color = color ?? this.color
    this.size = size
    this.geometry = new THREE.BoxGeometry(this.size,this.size,this.size)
    this.material = new THREE.MeshStandardMaterial({color:this.color})
    this.mesh = new THREE.Mesh(this.geometry,this.material)
    console.log(this.mesh)
    this.scene.add(this.mesh)
    this.setEntity()
  }

  update() {
  }

  resize() {

  }
}