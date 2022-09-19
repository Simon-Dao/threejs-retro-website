import * as THREE from 'three'
import Experience from '../Experience'
import Object from './Object'
import Cube from './Entities/Cube'
import Light from './Lighting/Light'
import LightType from '../Utils/LightType'
import Plane from './Entities/Plane'
import Rectangle from './Entities/Rectangle'
import { degToRad } from 'three/src/math/MathUtils'

export default class World extends Object {
  constructor() {
    super()

    let table = new Rectangle([0,-2,4],[Math.PI/2,0,0], [17,10,0.6],'#765341')
    let computer = new Rectangle([-3.5,0,6],[0,degToRad(-3),0], [4,6,5], 'green')
    let mouse = new Rectangle([-6.5,-1.5,2],[0,degToRad(25),0], [.7,.5,1], 'green')
    let keyboard = new Rectangle([-3.1,-1.5,1],[0,degToRad(-5),0], [4,.4,2], 'green')
    let sunLight = new Light(LightType.DIRECTION, [0,5,0],[0,0,0], !true)
    let ambientLight = new Light(LightType.AMBIENT, [2,3,0], [0,0,0]) 
    let ambientLight2 = new Light(LightType.AMBIENT, [5,-3,0], [0,0,0]) 
    
    let disk1 = new Rectangle([3,-1.6,1],[0,degToRad(15),0],[1.5,0.2,1.5],'#4e3816')
    let disk2 = new Rectangle([0,-1.6,.7],[0,degToRad(-5),0],[1.5,0.2,1.5],'#4e3816')
    let disk3 = new Rectangle([6,-1.6,1],[0,degToRad(-10),0],[1.5,0.2,1.5],'#4e3816')
    
    this.objects = [
      computer,
      sunLight,
      table,
      ambientLight,
      ambientLight2,
      mouse,
      keyboard,
      disk1,
      disk2,
      disk3
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