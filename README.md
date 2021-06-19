# Typescript 

## Installing TS
* Inside the terminal do `npm install -g typescript`

## Compiling TS
* Inside the terminal do `tsc sandbox.ts -w`
* NOTE (if there is NOT a .js file): if there is no .js file to compile to TS will create one with the same file name.
* NOTE (if we do have a .js file): if the file name (in this case sandbox) is the same as the .js file we don't need to do `tsc sandbox.ts sandbox.js -w`
* NOTE: `-w` allows us to watch the file so when we do make a change to the file it automatically updates the compiler to compile the changes.


