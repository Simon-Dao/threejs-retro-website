import * as THREE from 'three'
import Renderer from '../Renderer'
import Experience from '../Experience'
import { EventEmitter } from 'events'

export default class Time extends EventEmitter{
  constructor() {
    super()
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
    this.emit('update')
    window.requestAnimationFrame(() => this.update())
  }
}