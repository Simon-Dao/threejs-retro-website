import * as THREE from 'three'
import Sizes from './Utils/Size'
import Camera from './Camera'
import Renderer from './Renderer'
import Time from './Utils/Time'
import World from './World/World'
import MouseInput from './Input/MouseInput'
import WebListeners from './Web/WebListeners'
import ZoomIntoScreenAnim from './Animations/ZoomIntoScreenAnim'

export default class Experience {
  static instance

  constructor(canvas) {
    if (Experience.instance) { return Experience.instance }

    Experience.instance = this
    
    this.canvas = canvas
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#ffe9ec')
    this.sizes = new Sizes()
    this.camera = new Camera()
    this.time = new Time()
    this.renderer = new Renderer()
    this.mouseInput = new MouseInput()
    this.webListeners = new WebListeners()

    this.time.on('update', () => {
      this.update()
    })

    this.sizes.on('resize', () => {
      this.resize()
    })

    this.world = new World()

  }
  
  update() {
    this.mouseInput.update()
    this.world.update()
    this.camera.update()
    this.renderer.update()
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }
}