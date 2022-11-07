import * as THREE from 'three'

export default class Textures {

  constructor() {
    this.textureLoader = new THREE.CubeTextureLoader()
    this.desktopImg = new THREE.TextureLoader().load('public\\Textures\\desktop.png',)
  }
}