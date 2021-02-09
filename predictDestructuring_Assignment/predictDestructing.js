// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) //randomCar = Tesla 
// console.log(otherRandomCar) //otherRandomCar = Mercedes 

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name); // Elon
// console.log(otherName); // Elon

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); //'12345'
// console.log(hashedPassword); //error

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; // First = 2
// const [,,,second] = numbers; // Second = 5
// const [,,,,,,,,third] = numbers; //Third = 2
// //Predict the output
// console.log(first == second); // False
// console.log(first == third); // True

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // Key = value
const { secondKey } = lastTest; // second key = [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //will this work = [1, 5, 1, 8, 3, 3]
//Predict the output
console.log(key); //value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // [1, 5, 1, 8, 3, 3]