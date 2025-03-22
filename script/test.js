// console.log("Hello, World!");

// Variables

// let a = 4;

// let b;

// b = 5;

// let counter = 0;

// counter = 5;
// counter += 5;

// const number = 56;

// // Primitive data types

// // Numbers

// let a = 12;
// let b = 23;

// let sum = 12 % 5;

// // console.log(sum);
// // console.log(12 / 0);
// // console.log(12 * "sad");

// // String

// let name = "tom";
// // console.log(`user name: ${name}`);
// // console.log(name.length);
// console.log(name[name.length - 1]);
// let testCounter = 0;
// testCounter++;
// testCounter--;
// const number1 = 0;
// console.log(number1.toFixed(2));
// //
// // Undefined

// let test = undefined;

// // console.log(test);

// // null

// let test1 = null;

// Boolean

// const isActive = false;

// const testValue = "14";
// const newValue = Number(testValue);

// console.log(typeof newValue);
// console.log(typeof null);

// console.log(Boolean());

// Statements

// if (number1 > 5 && number1 < 10) {
// console.log(true);
// } else if (number1 > 5 || number1 < 10) {
// } else {
// }

// switch (nightMode) {
//   case "day":
//     console.log("day");
//     break;
//   case "night":
//     console.log("night");
//     break;
//   default:
//     console.log("system");
//     break;
// }

// const num = 12 + 3;

// const result = num > 0 ? "positive" : "negative";

// if (test[0] === "t") {
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//   }
// }

// const userName = "tom";

// for (let i = 0; i < userName.length; i++) {
//   if (userName[i] === "t") {
//     console.log("success");
//     break;
//   }
// }

// const arr = [1, 2, 3];
// function sumTwo(num1, num2) {
//   // параметры
//   return num1 + num2;
// }

// sumTwo(1, 2); // передаем аргументы

// const sumTwo = function () {};

// // sumTwo();
// const users = [1, 2, 3];

// console.log(users.length);
// console.log(users[0]);
// users[1] = "b";
// console.log(users);

// let a = 1;
// let b = a;

// console.log(a);
// console.log(b);

// a = 5;
// console.log(a);
// console.log(b);

// // Arrays

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr1[1] = "b";
// console.log(arr1);
// console.log(arr2);

// arr2[0] = "a";
// console.log(arr1);
// console.log(arr2);

// arr1.push("b");
// arr1.unshift(1);
// arr1.pop();
// arr1.shift();
// arr1.push(4);

// console.log(arr2);
// const arr3 = [];

// arr3[50] = 4;

// console.log(arr3.length);
// const filteredArr = arr2.filter(function (num) {
//   if (num % 2 === 0) {
//     return true;
//   }
// });

// console.log(filteredArr);

// // Objects

// const obj = {
//   name: "Tom",
//   age: 32,
//   hobbies: [],
//   getName: function () {
//     return this.name;
//   },
//   "last name": "banan",
// };

// const word = "name";
// const obj2 = obj;
// obj[word];
// obj.name = "An";
// delete obj.age;
// console.log(obj);
// console.log(obj.getName());

// obj.lastName = "Banan";
// console.log(obj);

// 1
// let array = [];

// for (let i = 1; i <= 10; i++) {
//   array.push(i);
// }

// console.log(array);

// 2
// let array = [];

// for (let i = 0; i < 10; i++) {
//   array.push("x");
// }

// console.log(array);

// 3
// let array = [3, 34, 7, 8, -9, 0, -8];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 0) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

let user = {
  name: "an",
  surname: "banan",
  patronymic: "panama",
};

let date = {
  year: "2025",
  month: "02",
  day: "24",
};
console.log(date.year + "-" + date.month + "-" + date.day);
