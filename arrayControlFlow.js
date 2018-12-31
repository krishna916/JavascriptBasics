const numbers = [1, 2, 3];

for(let number of numbers){// cannot get index from for-of. use for-in for the same
    console.log(number);
}

// numbers.forEach(function(number){
//     console.log(number);
// });

//can be written as

//numbers.forEach(number => console.log(number));

numbers.forEach((number, index) => console.log(index, number));


//joining arrays 
const joined = numbers.join(',');
console.log(joined);//prints string 1,2,3

//split method - to used on string - returns array after 
//seperating using seperator mentioned

let message = 'this is a string message';
let parts = message.split(' ');//output - [ 'this', 'is', 'a', 'string', 'message' ]
console.log(parts);

const combined = parts.join('-');
console.log(combined);


//sorting array
const testArray = [2, 1, 3];
testArray.sort();

console.log(testArray);

testArray.reverse(testArray);
console.log(testArray);

//sorting array of object
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'Javascript' },
];

//courses.sort() //doesn't work

courses.sort(function(a, b){
    //a < b => -1
    //a > b => 1
    //a === b =>0

    //for comparing fairly convert them to upperCase or lowerCase

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(courses);

//testing errors

const testing = [1, -1, 2, 3];

const allPositive = testing.every(function(value){
    return value >= 0;
});// here if negative number is found then next values are not checked

console.log(allPositive);

const atLeastOnePositive = testing.some(function(value){
    return value >= 0;
});

console.log(atLeastOnePositive);

//filtering an array

const arrayFilter = [1, -1, 2, 3, 4];

const filteredArray = arrayFilter.filter(function(value){
    return value >= 0;//stores the result which satisfies to new array
});
//can be written as using arrow function
//const filteredArray = arrayFilter.filter(value => value >= 0);
console.log(filteredArray);

//mapping an array
const item = filteredArray.map( n => '<li>' + n + '</li>');

const html = '<ul>' + item.join('') + '</ul>';

console.log(item);

console.log(html);

//mapping an array of object
const items = filteredArray.map( n => {
    return { value: n};
    
});


console.log(items);

//reducing an array
const array = [1, 2, 3, 4];

let sum = 0;

for(let n of array){
    sum = sum + n;
}
 
console.log(sum);
//reduce function is used to reduce the array to single element according to logic
let reduceSum = array.reduce((accumalator, currentValue) => {
    return accumalator + currentValue;
}, 0);
console.log(reduceSum);