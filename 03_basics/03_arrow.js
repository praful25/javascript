const user = {
    username: 'Praful',
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welocme to website`);
        console.log(this); // will log the current context
    }
}

// console.log(user.username);
// user.welcomeMessage();
// user.username = 'Sam';
// user.welcomeMessage();

// console.log(this); // will log {} empty bcs we are in node env

// if we console.log(this); on browser it will return Window {window: Window, self: Window, document: document, name: '', location: Location, …} 

// function test() {
//     let name = 'Praful';
//     // console.log(this);
//     console.log(this.name); // will log undefined
// }

// test();

// const test = function () {
//     let name = 'Praful';
//     // console.log(this);
//     console.log(this.name); // will log undefined
// }

// test();

// Arrow function
const test = () => {
    let name = 'Praful';
    // console.log(this);
    console.log(this.name); // will log undefined
}
// test();

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;

// Another way. Usually used in react
const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(3, 4));