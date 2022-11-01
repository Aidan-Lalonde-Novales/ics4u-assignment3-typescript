/**
 * This is the main code that runs
 * with the Vehicle Class.
 *
 * By:      Aidan Lalonde-Novales (mostly Mr Coxall)
 * Version: 1.0
 * Since:   2022-11-01
 */

import Bike from './Bike'
import Truck from './Truck'

// new BMX Bike
console.log('Created BMX Bike.')
const bmxBike = new Bike(40, 'Red')

console.log('Bike Status:')
bmxBike.status()

console.log('Set the cadence to 10:')
bmxBike.setCadence(10)
bmxBike.accelerate(0)
bmxBike.status()

console.log('Accelerate by 15:')
bmxBike.accelerate(15)
bmxBike.status()

console.log('Braking, 5 of power for 2 seconds:')
bmxBike.braking(5, 2)
bmxBike.status()

console.log('Ring Bell:')
bmxBike.ringBell()

console.log('')

// new Truck
console.log('Created Truck.')
const truck = new Truck(200, 'Grey')
truck.setLicensePlate('HGC-3456F')

console.log('Truck Status:')
truck.status()

console.log('Accelerating, 10 of power for 10 seconds:')
truck.accelerate(10, 10)
console.log(`\nNew speed (1): ${Number(truck.getSpeed())}\n`)

console.log('Set tire Air Pressure to 5:')
truck.setAirPressure(5)
console.log(`\nNew Air Pressure: ${Number(truck.getAirPressure())}\n`)

console.log('Braking, 10 of power for 2 seconds:')
truck.braking(10, 2)
console.log(`\nNew speed (2): ${Number(truck.getSpeed())}\n`)

console.log('Done.')
