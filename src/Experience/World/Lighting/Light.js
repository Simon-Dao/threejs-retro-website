import * as THREE from "three";
import { Vector3 } from "three";
import Object from "../Object";
import LightType from "../../Utils/LightType";

export default class Light extends Object {

  constructor(type = LightType.POINT, position, rotation, helperOn) {
    super(position, rotation)

    let colorObj = {
      color: this.color
    }
    this.helper = 'undefined'

    switch (type) {
      case LightType.POINT:
        this.light = new THREE.PointLight(colorObj)
        if (helperOn) this.helper = new THREE.PointLightHelper(this.light, 5)
        break
      case LightType.DIRECTION:
        this.light = new THREE.DirectionalLight(colorObj)
        if (helperOn) this.helper = new THREE.DirectionalLightHelper(this.light, 5)
        break
      case LightType.AMBIENT:
        this.light = new THREE.AmbientLight(colorObj)
        break
    }

    this.light.castShadow = true
    this.light.intensity = 2
    this.light.position.set(position[0], position[1], position[2])
    this.light.rotation.set(rotation[0], rotation[1], rotation[2])
    
    this.scene.add(this.light);
    if(helperOn) this.scene.add(this.helper)
  }

  update() {
  }
}