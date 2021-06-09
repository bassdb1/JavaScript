const numbers = [1,2,3];

// .map is a built in array 'method'
// .map allows me to get 'elements' out of the array, instead of using a for/loop, and stores them in a new array
const doubleNumArray = numbers.map((num) => {
    return num *2;
})
// check the differences of each array


console.log(numbers);
console.log(doubleNumArray);

