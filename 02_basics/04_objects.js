// singleton obj
const tinderUser = new Object();
// const tinderUser = {}

tinderUser.id = 101;
tinderUser.email = 'testing@gmail.com';
tinderUser.age = 30;
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

// const regUser = new Object();
const regUser = {
    email: 'test@gmail.com',
    fullname: {
        username: {
            'fname': 'Test',
            'lname': 'One'
        }
    },
    phone: 987654321
}

// console.log(regUser.fullname.username.fname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// wrong
// const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2); // first param is target and second param are source
// console.log(obj3);

// spread operator
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // Returns the names of the enumerable string properties and methods of an object.

// console.log(Object.values(tinderUser)); // Returns an array of values of the enumerable properties of an object

// console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable properties of an object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// *** Object destructure *** //

const course = {
    courseName: "Javascript",
    price: 299,
    courseInstructor: 'Praful'
}

const {courseInstructor: cIns} = course;

console.log(cIns);
