<h1 align="center" style="font-size: 3em;">TypeScript Notes</h1>

# Table of Contents
1. [Installing TS](#installing-TS)
2. [Compiling TS](#compiling-TS)
3. [How to Structure TS files](#ts-files-structure)
4. [Types Basics](#types-basics)
5. [Objects & Arrays](#objects-arrays)

## Installing TS <a name="installing-TS"></a>
* Inside the terminal do `npm install -g typescript`

## Compiling TS <a name="compiling-TS"></a>
* Inside the terminal do `tsc sandbox.ts -w`
* NOTE (if there is NOT a .js file): if there is no .js file to compile to TS will create one with the same file name.
* NOTE (if we do have a .js file): if the file name (in this case sandbox) is the same as the .js file we don't need to do `tsc sandbox.ts sandbox.js -w`
* NOTE: `-w` allows us to watch the file so when we do make a change to the file it automatically updates the compiler to compile the changes.

## How to structure TS Files (creating tsconfig) <a name="ts-files-structure"></a>
1. Create a src folder: this is where we save our .ts files.
2. Create a public folder: this is where the .js files will be compiled and our HTML/CSS files.
3. In the terminal type: `tsc --init` this will create a **tsconfig** file.
4. Inside the **tsconfig** file: un-comment the rootDir and add ./src, `"rootDir": "./src"`
5. Inside the **tsconfig** file: un-comment the outDir and add ./public, `"outDir": "./public"`
6. Inside the **tsconfig** file: go to the bottom of the file, after the second last '}' add a comma and then add; `"include": ["src"]`. This will make sure we only compile .ts files inside the src folder.
7. Inside the terminal type: `tsc -w` 

## Types Basics <a name="types-basics"></a>
The main difference between JS and TS is; TS uses STRICT TYPES and JS does NOT.

* TS automatically assigns 'types' to variables, **we can change the value to a variable but not type**:
    * `let firstName = 'Redz'`
    * firstName is now assigned type String, (let firstName: String)

    * `let age = 23`
    * If we change `age = '30'` this will not work since age will only accept type number.

    * Explicit Type: `let x: string` allows us to initialise an empty variable type string (Semi-colon not '=').
    *  We can then set `x` later on like `x = 'hello'` and this will set the value 'hello' to x.
        * the same can be done for type number, boolean or any: `let y: any` (Dynamic Type) or `let z: number`
    
    * Union Types: allowing a variable to have more than one type.
        * `let canBeTwoTypes: string | number`

* Assigning a function a type parameter, so we can avoid errors.
```typescript 
const circum = (diameter: number) => {
    return diameter * Math.PI
} 
```
*  If we call `circum` we can only pass in type number, hence `console.log(circum('12'))` will not work since we passed in a string.

## Object & Arrays <a name="objects-arrays"></a>
### Arrays
1. Creating an Array with one type
    * `let onlyStringArray = ['string1', 'string2', 'string3']`
        * only can push strings inside this array; `onlyStringArray.push('newString')`

2. EXPLICIT Type Array (empty array)
    * `let emptyStringArr: string[]`
        * can only push strings inside this array: `emptyStringArr.push('only strings allowed')`

3. Union Types Array
    * `let emptyMixedArr: (string | number)[]`
        * NOTE: will need to wrap the union in brackets.
        * This array accepts both types strings and numbers: `emptyMixedArr.push('only strings allowed', 1)`

4. Any Type Array (Dynamic Type)
    * `let anyArray: any[] = []`
        * Can push any types inside this array: `anyArray.push(1, false, 'string')`

### Objects
* NOTE: With objects once we create an object (and declare their properties), we cannot add new properties.
* NOTE: We cannot change the property type, BUT we can change thier values.

1. Creating objects
```typescript 
    let player = {
    name: 'Messi',
    age: 30,
    isPlaying: true
    }
```
* To change the property value we do: `player.name = 'Ronaldo'`.
* If you do change the entire Object you must include ALL properties.

2.  Explicit Object type
    * `let thisIsAnObject: Object`
        * Now to add properties inside the object: `thisIsAnObject = { name: 'Redz', age: '23'}`

3. Creating an object with EXPLICIT property types
```typescript
let newObj: {
    name: string,
    age: number
}
```


 


    
    



