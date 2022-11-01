/**
 * This is a child class of Vehicle.ts that contains
 * fields and methods more appropriate for a bike.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-11-01
 */

import Vehicle from './Vehicle'

class Bike extends Vehicle {
  // declare new field
  private cadence = 0

  // status method - prints all fields applied to bike object
  status(): void {
    console.log(`
      -> Speed: ${super.getSpeed()}
      -> Max Speed: ${super.getMaxSpeed()}
      -> Color: ${super.getColor()}
      -> Cadence: ${this.getCadence()}
    `)
  }

  // setCadence method - cadence setter
  setCadence(cadenceInput: number): void {
    this.cadence = cadenceInput
  }

  // getCadence method - cadence getter
  getCadence(): number {
    return this.cadence
  }

  // accelerate method - accelerates the bike based on cadence
  accelerate(appliedPower: number): void {
    this.cadence += appliedPower
    super.setSpeed(this.cadence * 2)
    if (super.getSpeed() > super.getMaxSpeed()) {
      super.setSpeed(super.getMaxSpeed())
    }
  }

  // ringBell method - prints 'Ding Ding!'
  ringBell(): void {
    console.log('Ding Ding!')
  }
}

export = Bike
