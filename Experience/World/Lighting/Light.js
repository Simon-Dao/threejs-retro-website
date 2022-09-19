import * as THREE from "three";
import { Vector3 } from "three";
import Object from "../Object";
import LightType from "../../Utils/LightType";

export default class Light extends Object {

  constructor(type = LightType.POINT, position, rotation, color) {
    super(position, rotation)

    let colorObj = {
      color: color ?? this.color
    }

    switch (type) {
      case LightType.POINT:
        this.light = new THREE.PointLight(colorObj)
      case LightType.DIRECTION:
        this.light = new THREE.DirectionalLight(colorObj)
      case LightType.AMBIENT:
        this.light = new THREE.AmbientLight(colorObj)
    }

    this.light.position.set(position[0],position[1],position[2])
    this.light.rotation.set(rotation[0],rotation[1],rotation[2])
    this.scene.add(this.light);
  }

  setPosition(x, y, z) {
    this.light.position.set(x, y, z)
  }
}