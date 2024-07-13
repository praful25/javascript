const myNumArr = [4, 19, 5, 9, 6, 90];
// console.log(myNumArr);
// console.log(typeof myNumArr);

const myStrArr = ['Praful', 'Pankaj', 'Raju', 'Pratik', 'Vikas'];
// console.log(myStrArr);

const myArr = new Array('Shaktiman', 'Naagraj', 'Hero');
// console.log(myArr[1]);
// console.log(myArr.length);

// console.log(myNumArr);
// myNumArr.push(2);
// console.log(myNumArr);
// myNumArr.push(15);
// myNumArr.pop();


// console.log(myNumArr);
// myNumArr.unshift(3);
// myNumArr.shift();
// console.log(myNumArr);

// console.log(myNumArr.includes(90));
// console.log(myNumArr);
// console.log(myNumArr.indexOf(6));

// const myNewNumArr = myNumArr.join();
// console.log(typeof myNewNumArr);

// slice
console.log("A ", myNumArr);

// const sliceArr = myNumArr.slice(2, 5);
// console.log("sliceArr ", sliceArr);
// console.log("B ", myNumArr);

// splice
const spliceArr = myNumArr.splice(1, 3); // 1st param is start pos adn 2nd param is delete count
console.log("spliceArr ", spliceArr);
console.log("C ", myNumArr);