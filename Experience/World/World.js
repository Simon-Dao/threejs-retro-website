import * as THREE from 'three'
import Experience from '../Experience'
import Object from './Object'
import Cube from './Entities/Cube'
import PointLight from './Lighting/Light'
import LightType from '../Utils/LightType'

export default class World extends Object {
  constructor() {
    super()

    this.cube = new Cube([0,0,10],[0,0,0], 2)
    let light = new PointLight(LightType.AMBIENT, [1,2,3],[0,0,0])

    // this.geometry = new THREE.BoxGeometry(this.size,this.size,this.size)
    // this.material = new THREE.MeshBasicMaterial({color:this.color})
    // this.mesh = new THREE.Mesh(this.geometry,this.material)
    // this.mesh.position.set(0,0,-10)
    // this.scene.add(this.mesh)
  }

  resize() {
    
  }

  update() {

  }
}