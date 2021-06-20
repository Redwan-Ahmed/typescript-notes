/**
 * TS Types (Basic)
 * EXAMPLE: firstName is now assigned to be a string, we can change the value but not the type.
 */
// 1. TS automatically assigns types to variables
var firstName = 'Redz';
var age = 23;
var isWhiteBelt = true;
// this will not work because age is assigned type number not string
//age = '30' 
// 2. Initialising empty string (Explicit Types)
var x;
x = 'hello';
console.log(x);
// 3. Initialising 'any' type (Explicit Types)
var anyType;
anyType = 'can set any type of value';
// 4. Union Types
var canBeTwoTypes;
canBeTwoTypes = 'string';
canBeTwoTypes = 2;
// 5. Passing specific type params inside a function
var circum = function (diameter) {
    return diameter * Math.PI;
};
// This will not work since we passed in a string
//console.log(circum('12'))
/**
 * TS Objects & Arrays
 */
/** Arrays: */
// 1. creating an Array with one type string.
var onlyStringArray = ['string1', 'string2', 'string3'];
// we can ONLY push strings inside this array
onlyStringArray.push('newString');
// 1.1. creating empty array type string (Explicit Types)
var emptyStringArr;
emptyStringArr.push('only strings allowed');
// 2. creating an Array with just type numbers
var onlyNumbersArray = [1, 2, 3, 4];
// we can only push numbers inside the array
onlyNumbersArray.push(5);
// 2.1. creating empty array type string (Explicit Types)
var emptyNumArr;
emptyNumArr.push(2, 10);
// 3. creating a mixed type array
var mixedArray = ['string', 1];
// we can push both number types or string types
mixedArray.push('string 2', 2);
// 3.1. creating empty mixed type array (Union Types Array)
var emptyMixedArr;
emptyMixedArr.push('only strings allowed', 1);
// 4. creating any type of array
var anyArray;
anyArray.push(1, false, 'string');
/** Objects:
 * With objects once we create an object, we cannot add new properties.
 * We cannot change the property type, BUT we can change thier values.
*/
// 1. Creating objects
var player = {
    name: 'Messi',
    age: 30,
    isPlaying: true
};
// 1.1 Changing object property values (CANNOT change types)
player.name = 'Ronaldo';
// 1.2  We can change the entire object property values, MUST INCLUDE all properties.
player = {
    name: 'Lampard',
    age: 37,
    isPlaying: false
};
// 2. Setting a variable an Object type (Explicit Type)
var thisIsAnObject;
thisIsAnObject = { name: 'Redz', age: '23' };
// 3. Creating an object with EXPLICIT property types (Semi-Colon)
var newObj;
