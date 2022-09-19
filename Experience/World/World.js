import * as THREE from 'three'
import Experience from '../Experience'
import Object from './Object'
import Cube from './Entities/Cube'
import Light from './Lighting/Light'
import LightType from '../Utils/LightType'
import Plane from './Entities/Plane'

export default class World extends Object {
  constructor() {
    super()

    let floor = new Plane([0,-2,4],[Math.PI/2,0,0], 15,8)
    let cube = new Cube([0,0,4],[0,0,0], 1, 'orange')
    let sunLight = new Light(LightType.DIRECTION, [0,5,0],[0,0,0])
    let ambientLight = new Light(LightType.AMBIENT, [0,0,0], [0,0,0]) 
    ambientLight.light.intensity = 2
    this.objects = [
      cube,
      sunLight,
      floor,
      ambientLight
    ]
  }

  resize() {
    
  }

  update() {
    this.objects.forEach((object, i) => {
      object.update()
    })
  }
}