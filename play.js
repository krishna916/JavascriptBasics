const person = {
    name: 'max',
    age: '24',
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => {
//     return 'hobby: ' + hobby; 
// })); an also be wriiten as

console.log(hobbies.map(hobby => 'hobby: ' + hobby));
console.log(hobbies);

const copiedArray = [...hobbies];//spread operator - used pull values
console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

const toArray = (...args) => {//rest operator - used merge or put values 
    return args;
};

console.log(toArray(1,2,3));