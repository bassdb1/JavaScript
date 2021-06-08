// const myName = 'David';

// console.log(myName);

// myName = 'Hello';
// console.log(myName);

// ****arrow functions ****

// function printMyName(name){    //'name' is the argument
//     console.log(name)
// }

// const printMyName = (name) => {
//     console.log(name)
// }

// //calling the function, 'function Call

// printMyName('David Bryan');

// **** Classes ****


class Human {
    // Property using a 'constructor'

   // ES6 Way
    // constructor() {
    //     this.gender = 'Male';

   // Es7 Way -  // With ES7 we do not need to use'Constructor or 'This' Keyword
 //  gender = 'Male';


// Es6 Way
    // printGender() {
    //     console.log(this.gender);  // will need the 'this' keyword when we reach out to the 'property'
    // }

// ES7 Way
//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// Inherting from the Parent Class 'Human' using the Keyword 'Extends

// ** ES6 Way **
// class Person extends Human{
//     // Property using a 'constructor'
//     constructor() {
//         // I need 'super()' to call the parent class
//         super();
//         this.name = 'David';
//     }

// ** ES7 Way **

// Inherting from the Parent Class 'Human' using the Keyword 'Extends

// class Person extends Human{
//     name ='David';   // no 'This' needed here



    // adding a Method in this Class

    // ** ES6 Way **
//     printMyName() {
//         console.log(this.name)

//     }
// }

   // adding a Method in this Class

   // ** ES7 Way **
//    printMyName = () => {
//     console.log(this.name)
//    }
}


// making a new instance of 'person' from the 'Person Class', and calling two methods from the clas

// const person = new Person();
// person.printMyName();
// person.printGender();


//  **** Spread Operator with Array****

// const numbers = [1,2,3];   // Numbers array
// const newNumbers = [...numbers, 4];  // newNumbers array, using the spread operator[...]

// console.log(newNumbers);  // prints the array contents to the screen

// // **** Spread Operator with Objects ****

// const person = {
//     firstName: 'David'
// };

// const newPerson = {
//     ...person,         // the spread operator(...) is bringing in the object info of Person and adding to 'newPerson' Object
//     lastName: 'Bass'
// };

// console.log(newPerson);

// **** Rest Operator ****

// const filter = (...args) => {
//     return args.filter(el => el === 1);   // Only returning if the value is equal to '1'
// }

// console.log(filter(1,2,3));

// **** Destructuring ****

// const numbers = [1,2,3];

// // I am using num1 to store the first number in the array, and num2 to store the second number in the array.
// //... this is done in order, if I only wanted the last number I would do this [,,num3] = numbers;

// [num1, num2] = numbers;

// console.log(num1, num2);

// Person Object, objeccta are identified by {}
// const person = {
//     name: 'Max'
// };

// const secondPerson = person;
// person.name = 'Bryan';
// console.log(secondPerson);

// **** Refreshing Array Functions ****//
