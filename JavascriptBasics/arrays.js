const numbers = [3,4];

//End
numbers.push(5, 6);
console.log(numbers);

//Beginning
numbers.unshift(1,2);
console.log(numbers);

//Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

//finding numbers

//primitive types

const num = [1, 2, 3, ,1, 4];

//console.log(num.indexOf('a'));  --will return -1

console.log(num.indexOf(3)); // will return index of value if found or else -1

console.log(num.lastIndexOf(1));

console.log(num.indexOf(1) !== -1);//checks if element exists.
// if exists return true else false

console.log(num.includes(1));//checks if elements exists



//referenece types
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

const course = courses.find(function(course){
    return course.name === 'a'; 
});

console.log(course);

const course1 = courses.findIndex(function(course){
    return course.name === 'b'; 
});

//arrow function
const arrowCourse = courses.find(course => course.name === 'a');
console.log(course1);

//Removing elements from arrays
const number = [1, 2, 3, 4, 5, 6];

//from End 
const last = number.pop();
console.log(number);
console.log(last);

//Beginning
const first = number.shift();
console.log(number);
console.log(first);

//middle
number.splice(2, 1);
console.log(number);

//emptying an array

let emptyArray = [1, 2, 3, 4];//cant empty const array
let another = emptyArray;

//solution1
// emptyArray = [];

// console.log(emptyArray);
// console.log(another);//it is not emptied

//solution 2 - MOST recommended
// emptyArray.length = 0;

// console.log(emptyArray);
// console.log(another);

//solution 3
// emptyArray.splice(0, emptyArray.length);
// console.log(emptyArray);
// console.log(another);

//solution 4 - not recomended
while(emptyArray.length > 0){
    emptyArray.pop();
}
console.log(emptyArray);
console.log(another);


//Combining and Slicing the arrays 
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combined = firstArray.concat(secondArray);
console.log(combined);

//slicing the array
const slice = combined.slice(1, 4);
console.log(slice);

//using spread operator
const spreadCombined = [...firstArray, ...secondArray];
console.log(spreadCombined);