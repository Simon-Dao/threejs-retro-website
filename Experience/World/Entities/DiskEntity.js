import * as THREE from 'three'
import DiskAnim from '../../Animations/DiskAnim'
import Entity from './Entity'
import World from '../World'

export default class DiskEntity extends Entity  {

  //this is an example of an Entity
  //copy the code in here and make your own custom entity
  constructor(position, rotation, size = [1,1,1], color) {
    super(position,rotation)

    this.color = color ?? this.color
    this.geometry = new THREE.BoxGeometry(size[0],size[1],size[2])
    this.material = new THREE.MeshStandardMaterial({color:this.color})
    this.mesh = new THREE.Mesh(this.geometry,this.material)
    this.mesh.name = World.DISK
    this.scene.add(this.mesh)
    this.setEntity()
    this.animation = new DiskAnim(this)
  }

  update() {
  }

  resize() {

  }
}