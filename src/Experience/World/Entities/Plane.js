import * as THREE from 'three'
import Entity from './Entity'

export default class Plane extends Entity  {

  //this is an example of an Entity
  //copy the code in here and make your own custom entity
  constructor(position, rotation, width = 1, height = 1, color) {
    super(position,rotation)

    this.color = color ?? this.color 
    this.width = width
    this.height = height
    this.geometry = new THREE.PlaneGeometry(this.width,this.height)
    this.material = new THREE.MeshStandardMaterial({color:this.color, side:THREE.DoubleSide})
    this.mesh = new THREE.Mesh(this.geometry,this.material)
    this.scene.add(this.mesh)
    this.setEntity()
    this.mesh.castShadow = false
  }

  update() {
  }

  resize() {

  }
}