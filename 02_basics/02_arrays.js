const marvelHeroes = ['ironman', 'spiderman', 'hulk'];
const dcHeroes = ['batman', 'superman', 'flash'];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes[3][2]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// spread operator
const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

// flat
const anotherArr = [3, 1, 2 , [44, 55], 9, 5, [8, 4, [10, 98, 44]]];

// console.log(Array.isArray('Praful'));
// console.log(Array.isArray(dcHeroes));
// console.log(Array.from('Praful'));
// console.log(Array.from({name: 'Praful'})); // Interesting

customer1 = 101;
customer2 = 201;
customer3 = 301;

console.log(Array.of(customer1, customer2, customer3)); // Returns a new array from a set of elements