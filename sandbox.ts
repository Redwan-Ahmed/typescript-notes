/**
 * Types Basics - how TS uses types
 * EXAMPLE: firstName is now assigned to be a string, we can change the value but not the type.
 */

// TS automatically assigns types to variables
let firstName = 'Redz'
let age = 23
let isWhiteBelt = true

// this will not work because age is assigned type number not string
//age = '30'

// passing specific type params inside a function
const circum = (diameter: number) => {
    return diameter * Math.PI
}

// This will not work since we passed in a string
//console.log(circum('12'))
