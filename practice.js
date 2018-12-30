

const address = {
    street: 'Maninagar',
    city  : 'Ahemadabad',
    zipCode: '380008',
     
};

function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }
};

showAddress(address);

//factory Function
function addressFactory(street, city, zipCode){
    return {
        street: street,
        city: city,
        zipCode: zipCode

        //can be written as 
        //street,
        //city,
        //zipCode
    };    
};

let add = addressFactory('be', 'ahmedabd', 380008);
console.log(add);

//constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

let add1 = new Address('a', 'b', 'c');
let add2 = new Address('a', 'b', 'c');

console.log(areEqual(add1, add2));
console.log(areSame(add1, add2));

function areEqual(add1, add2){

    return add1.street === add2.street && 
            add1.city === add2.city &&
            add1.zipCode === add2.zipCode;
}

function areSame(add1, add2){
    return add1 === add2;
}

let blogPost = {
    title: 'a',
    body : 'b',
    author: 'c',
    views : 10 ,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'},
    ],
    isAlive: true
};
console.log(blogPost);

function Post(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isAlive = false
};

let post = new Post('a', 'b', 'c');

console.log(post);

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    {averagePerPerson: 5}
];