'use strict';

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${this._maxSpeed}, speed: ${this._speed}, isOn: ${this._isOn}, distance: ${this._distance}, price: ${this._price}`,
    );
  }

  static startSpeed = 0;

  static startDistance = 0;

  static isOn = false;

  constructor({ speed, price, maxSpeed, isOn, distance }) {
    this._speed = Car.startSpeed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = Car.isOn;
    this._distance = Car.startDistance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
    return this._price;
  }

  turnOn() {
    this._isOn = true;
    return this._isOn;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    if (this._speed + value <= this._maxSpeed) {
      this._speed = this._speed + value;
    }
    return this._speed;
  }

  decelerate(value) {
    if ((this._isOn = true)) {
      this._speed = this._speed - value;
    } else this._speed = 0;
    return this._speed;
  }

  drive(hours) {
    if (this._isOn === true) {
      this._distance = this._distance + hours * this._speed;
    }
    return this._distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs.call(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs.call(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
