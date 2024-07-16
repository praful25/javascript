// global and local scope

var a = 100;

if (true) {
    var a = 1; // a scope is global
    // console.log('Inner: ', a);
    // let b = 2; // b scope is local scope
    // const c = 3; // c scope is local scope
}

// console.log('Outer: ', a);
// console.log(b);
// console.log(c);

function one() {
    let username = 'Praful';

    function two() {
        let source = 'youtube';
        // console.log(username);
    }
    // console.log(source);

    two();
}

one();

if(true) {
    let username = 'Praful';
    
    if(username === 'Praful') {
        let source = ' youtube';
        // console.log(username + source);
    }
    // console.log(source);
}
// console.log(username);


// Interesting //

console.log(addOne(4));

function addOne(num) {
    return num + 1;
}

// Cannot access 'addTwo' before initialization
// console.log(addTwo(8)); 

const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(8));