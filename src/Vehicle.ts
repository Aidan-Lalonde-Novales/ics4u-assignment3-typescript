/**
 * This class creates a vehicle with parameters concerning the
 * speed, color, and max speed.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-11-01
 */

class Vehicle {
  // declares all variables
  private speed = 0
  private readonly maxSpeed: number
  private color: string

  // Vehicle Constructor - allows index.ts to initialize values
  constructor(maxSpeed: number, color: string) {
    this.maxSpeed = maxSpeed
    this.color = color
  }

  // color Getter - returns current color value
  getColor(): string {
    return this.color
  }

  // color Setter - allows user to change color
  setColor(colorInput: string): void {
    this.color = colorInput
  }

  // speed getter - returns current speed value
  getSpeed(): number {
    return this.speed
  }

  // speed setter - needed to change speed from Bike.ts
  setSpeed(speedInput: number): void {
    this.speed = speedInput
  }

  // maxSpeed getter - returns current doorCount value
  getMaxSpeed(): number {
    return this.maxSpeed
  }

  // accelerate method - increases speed by power * time
  accelerate(accelPower: number, accelTime: number): void {
    this.speed += accelPower * accelTime
    if (!(this.speed < this.maxSpeed)) {
      this.speed = this.maxSpeed
    }
  }

  // break method - decreases speed by power * time
  braking(accelPower: number, accelTime: number): void {
    this.speed -= accelPower * accelTime
    if (!(this.speed >= 0)) {
      this.speed = 0
    }
  }
}

export = Vehicle
