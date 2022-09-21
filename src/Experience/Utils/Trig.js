export default class Trig {
  static toRad(deg) {
    return deg * Math.pi/180
  }

  static toDeg(rad){
    return rad * 180 / Math.PI
  }
}