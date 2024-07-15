// Funtion defination
function sayMyName(params) {
    console.log('P');
    console.log('R');
    console.log('A');
    console.log('F');
    console.log('U');
    console.log('L');
}

// sayMyName; // Function reference
// sayMyName(); // Function execution

// num1 and num2 are params
function sum(num1, num2) {
    //console.log(num1 + num2);
    // let result = num1 + num2;

    return num1 + num2;
}

// arguments
const sumResult = sum(3, 10);
// console.log(sumResult);

function logginUserMessage(username = 'Test') {
    if(!username) {
        return console.log('Please enter username');
    }
    return `${username} just logged in`;
}

// console.log(logginUserMessage());

// ... is rest and spread operator
function calculateCartPrice(...num) {
    return num;
}

// console.log(calculateCartPrice(2, 3, 8, 5));

const user = {
    id: 10,
    name: 'Praful',
}

function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.name} and id is ${anyObject.id}`);
}

// handleObject(user);

handleObject({
    id: 10,
    name: 'Praful',
});

const myArr = [300, 430, 222, 333, 100];

function returnSecondArrayElement(getArray) {
    return getArray[1];
}

console.log(returnSecondArrayElement(myArr));