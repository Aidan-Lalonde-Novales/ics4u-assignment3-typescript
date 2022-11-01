/**
 * This is a child class of Vehicle.ts, which contains
 * fields and methods related to a truck.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-11-01
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  // declare new field
  private licensePlate = ''
  private airPressure = 0

  // status method - prints all fields applied to truck object
  status(): void {
    console.log(`
      -> Speed: ${super.getSpeed()}
      -> Max Speed: ${super.getMaxSpeed()}
      -> Color: ${super.getColor()}
      -> License Plate: ${this.licensePlate}
      -> Air Pressure: ${this.airPressure}
    `)
  }

  // setLicensePlate method - licensePlate setter
  setLicensePlate(licensePlateInput: string): void {
    this.licensePlate = licensePlateInput
  }

  // getLicensePlate method - licensePlate getter
  getLicensePlate(): string {
    return this.licensePlate
  }

  // setLicensePlate method - licensePlate setter
  setAirPressure(airPressureInput: number): void {
    this.airPressure = airPressureInput
  }

  // getLicensePlate method - licensePlate getter
  getAirPressure(): number {
    return this.airPressure
  }

  // Braking method - add air pressure and braking parameters to reduces speed
  braking(brakePower: number, brakeTime: number): void {
    super.setSpeed(
      super.getSpeed() - brakePower * brakeTime - this.airPressure * brakeTime
    )
    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck
