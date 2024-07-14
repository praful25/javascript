// singleton obj
// const user = new Object();
// Object.create;

const testSymbol = Symbol('key');

// non singleton obj
// object literals
const user = {
    id: 1,
    fname: 'Praful',
    lname: 'Bagde',
    "full name": 'Praful Bagde',
    email: 'praful@gmail.com',
    isLoogedIn: false,
    phone: 987654321,
    lastLogginDays: ['mon', 'sat'],
    // kSymbol: testSymbol
}

// can access in two ways
// console.log(user.fname);
// console.log(user["full name"]);
// console.log(user);
// console.log(user.kSymbol);

// console.log(user.fname = "YO");
// console.log(user["full name"] = "Praful S Bagde");

// Object.freeze(user);
// user.fname = 'Kiran';
// console.log(user);

user.greeting = function() {
    console.log('Hello user');
}

user.greetingTwo = function() {
    console.log(`Hello user, ${this.fname}`); // string interpolation
}

console.log(user.greeting());
console.log(user.greetingTwo());