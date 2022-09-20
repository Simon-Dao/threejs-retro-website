import * as THREE from 'three'
import Experience from '../Experience'
import Object from './Object'
import Cube from './Entities/Cube'
import Light from './Lighting/Light'
import LightType from '../Utils/LightType'
import Plane from './Entities/Plane'
import Rectangle from './Entities/Rectangle'
import { degToRad } from 'three/src/math/MathUtils'
import DiskAnim from '../Animations/DiskAnim'
import DiskEntity from './Entities/DiskEntity'
import { DiscreteInterpolant } from 'three'
import MouseEntity from './Entities/MouseEntity'

export default class World extends Object {

  static DISK = 'disk'
  static HOVER = 'hover'
  static selectedDisk = null
  static insertedDisk = null
  static disks = []

  constructor() {
    super()

    let table = new Rectangle([0, -2, 4], [Math.PI / 2, 0, 0], [17, 10, 0.6], '#765341')
    let computer = new Rectangle([-3.5, 0, 6], [0, degToRad(-3), 0], [4, 6, 5], 'green')
    this.mouse = new MouseEntity([-6.5, -1.5, 2], [0, degToRad(25), 0], [.7, .5, 1], 'green')

    let keyboard = new Rectangle([-3.1, -1.5, 1], [0, degToRad(-5), 0], [4, .4, 2], 'green')
    let sunLight = new Light(LightType.DIRECTION, [0, 5, 0], [0, 0, 0], !true)
    let ambientLight = new Light(LightType.AMBIENT, [2, 3, 0], [0, 0, 0])
    let ambientLight2 = new Light(LightType.AMBIENT, [5, -3, 0], [0, 0, 0])
    this.entitiesSelected = this.experience.mouseInput.meshesSelected

    World.disks = [
      new DiskEntity([3, -1.6, 1], [0, degToRad(15), 0], [1.5, 0.2, 1.5], '#4e3816'),
      new DiskEntity([0, -1.6, .7], [0, degToRad(-5), 0], [1.5, 0.2, 1.5], '#4e3816'),
      new DiskEntity([6, -1.6, 1], [0, degToRad(-10), 0], [1.5, 0.2, 1.5], '#4e3816'),
    ]

    this.objects = [
      computer,
      sunLight,
      table,
      ambientLight,
      ambientLight2,
      this.mouse,
      keyboard,
      World.disks
    ]
  }

  resize() {

  }

  update() {
    this.entitiesSelected = this.experience.mouseInput.meshesSelected

    this.entitiesSelected.forEach((entity, i) => {

      if (entity.object.name == World.DISK) {
        let disk = World.disks.filter(disk => disk.mesh === entity.object)[0]
        World.selectedDisk = disk

        World.disks.forEach(disk => {
          
          if(disk != World.selectedDisk && disk.hoverAnim.stage < 3) {
            disk.hoverAnim.stage = 0
          }
        })

        disk.hoverAnim.start()
      } else
      if(entity.object.name == World.HOVER) {
        
        this.mouse.hoverAnim.start()
      }
    })

    this.objects.forEach((object, i) => {
      if(Array.isArray(object)) {
        object.forEach((element, i) => {
          element.update()
          element.hoverAnim.update()
        })
      } else {
        object.update()
      }
    })
  }
}