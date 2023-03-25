"use strict";

// Напишите функцию, которая принимает
// на вход массив чисел и возвращает новый массив,
// содержащий только те числа, которые являются простыми.

// const numbers = [12, 11, 13, 15, 16, 8, 97, 123, 100, 0, 222];

// const simleNumbers = (numbers) =>
//   numbers.filter((number) => {
//     if (number < 2) return false;

//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   });

// console.log(simleNumbers(numbers));

// Напишите функцию, которая принимает на вход массив объектов,
// содержащих информацию о покупках(название товара, цена, количество),
// и возвращает общую стоимость всех покупок.

// const purchases = [
//   {
//     name: "Товар 1",
//     price: 100,
//     quantity: 2,
//   },
//   {
//     name: "Товар 2",
//     price: 50,
//     quantity: 3,
//   },
//   {
//     name: "Товар 3",
//     price: 200,
//     quantity: 1,
//   },
// ];

// const totalPrice = (purchases) =>
//   purchases.reduce(
//     (total, purchase) => purchase.price * purchase.quantity + total,
//     0
//   );

// console.log(totalPrice(purchases));

// Напишите функцию, которая принимает на вход
// массив строк и возвращает новый массив,
// содержащий только те строки, которые являются палиндромами
// (читаются одинаково как с начала, так и с конца).

// let strArray = string.split("");

// for (let i = 0; i < strArray.length / 2; i++) {
//   if (strArray[i] !== strArray[strArray.length - i - 1]) return false;
// }

// return true;

// const strings = ["asdffdsa", "lasjkdfn", "sdfoccofds", "asdsa", "asofn"];

// const findPalindromes = (strings) =>
//   strings.filter((string) => string === string.split("").reverse().join(""));

// console.log(findPalindromes(strings));

// Напишите функцию, которая принимает на вход
// два массива чисел и возвращает новый массив,
// содержащий только те элементы, которые есть только в одном из массивов.

// const firstArray = [1, 3, 7, 18, 87, 22, 6, 32];
// const secondArray = [34, 17, 11, 7, 18, 2, 32];

// const getUniqueNumbers = (firstArray, secondArray) =>
//   [...firstArray, ...secondArray].filter(
//     (number) => !(firstArray.includes(number) && secondArray.includes(number))
//   );

// console.log(getUniqueNumbers(firstArray, secondArray));

// Напишите функцию, которая принимает на вход
// строку и возвращает новую строку,
// в которой каждый символ заменен на символ,
// стоящий на том же месте в алфавите, но в обратном порядке.

const string = "abc";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const strangeFunction = (string) =>
  string
    .split("")
    .map((element) => alphabet[alphabet.length - 1 - alphabet.indexOf(element)])
    .join("");

console.log(strangeFunction(string));
