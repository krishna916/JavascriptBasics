// for-in
const person = {
    name: 'Krishna',
    age: 24
};

for(let key in person){
    console.log(key, person[key]);
}

// const colors = ['red', 'blue', 'green'];

// for(let index in colors){
//     console.log(index, colors[index]);
// }


//for-of
const colors = ['red', 'blue', 'green'];
for(let color of colors){
    console.log(color);
}

//objects

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw(){
//         console.log('Draw');
//     }
// };

//Factory function
function createCircle(radius){
    return {
        radius: radius,
        
        draw(){
            console.log('Draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);


//Consturctor Function - Use Capital CamelCase
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('Draw'); 
    }
}

const circle = new Circle(1)

