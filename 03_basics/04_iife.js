// Immediately invoked function expression

// Named iife
(function test(params) {
    console.log(`DB is connected`);
}) ();

((name) => {
    console.log(`${name}, DB is connected`);
}) ('Praful');