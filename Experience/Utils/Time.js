import * as THREE from 'three'
import Renderer from '../Renderer'
import Experience from '../Experience'

export default class Time {
  constructor() {
    this.experience = new Experience()
    this.start = Date.now()
    this.current = this.start
    this.elapsedTime = 0
    this.delta = 17

    this.update()
  }

  update() {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    console.log(this.delta)
    window.requestAnimationFrame(() => this.update)
  }
}