# Typescript 

# Table of Contents
1. [Installing TS](#installing-TS)
2. [Compiling TS](#compiling-TS)
3. [Types Basics](#types-basics)

## Installing TS <a name="installing-TS"></a>
* Inside the terminal do `npm install -g typescript`

## Compiling TS <a name="compiling-TS"></a>
* Inside the terminal do `tsc sandbox.ts -w`
* NOTE (if there is NOT a .js file): if there is no .js file to compile to TS will create one with the same file name.
* NOTE (if we do have a .js file): if the file name (in this case sandbox) is the same as the .js file we don't need to do `tsc sandbox.ts sandbox.js -w`
* NOTE: `-w` allows us to watch the file so when we do make a change to the file it automatically updates the compiler to compile the changes.

## Types Basics <a name="types-basics"></a>
The main difference between JS and TS is; TS uses STRICT TYPES and JS does NOT.

* TS automatically assigns 'types' to variables, **we can change the value to a variable but not type**:
    * `let firstName = 'Redz'`
    * firstName is now assigned type String, (let firstName: String)

    * `let age = 23`
    * If we change `age = '30'` this will not work since age will only accept type number.

* Assigning a function a type parameter, so we can avoid errors.
```typescript 
const circum = (diameter: number) => {
    return diameter * Math.PI
} 
```
*  If we call `circum` we can only pass in type number, hence `console.log(circum('12'))` will not work since we passed in a string.
    
    



