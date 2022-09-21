import EventEmitter from "events"

export default class WebListeners extends EventEmitter {

  constructor() {
    super()
    this.insertButton = document.querySelector('.insert-button')

    this.insertButton.addEventListener('click', () => {
      this.emit('insert-disk')
    })
  }
}