import * as THREE from 'three'
import Experience from '../Experience'

export default class MouseInput {
  constructor() {
    this.pointer = new THREE.Vector2()
    this.experience = new Experience()
    this.raycaster = new THREE.Raycaster()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera.perspectiveCamera
    this.previouslySelected = []
    this.meshesSelected = []
    window.addEventListener('mousemove', () => this.onPointerMove(event))
  }

  onPointerMove(event) {
    this.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1
	  this.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1
  }

  update() {
    this.raycaster.setFromCamera( this.pointer, this.camera );
    this.previouslySelected = JSON.parse(JSON.stringify(this.meshesSelected))
    this.meshesSelected = this.raycaster.intersectObjects( this.scene.children )
  }
}