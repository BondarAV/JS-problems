"use strict";

//Функция выводящая только неповторяющиеся элементы массива

//-----------------------------Первое решение--------------------------

// const numbers2 = [12, 10, 6, 83, 11, 10, 17, 6, 10, 27, 83, "a", "b", "a"];

// const getUniqueNumbers = (numbers) =>
//   numbers.filter(
//     (num, _, arr) => arr.filter((number) => number === num).length === 1
//   );

// console.log(getUniqueNumbers(numbers2));

//-----------------------------Второе решение--------------------------

// function uniqueNumbers(numbers) {
//   return numbers.reduce((uniqueArr, number, index) => {
//     if (numbers.indexOf(number) === numbers.lastIndexOf(number)) {
//       uniqueArr.push(number);
//     }

//     return uniqueArr;
//   }, []);
// }

//-----------------------------Третье решение--------------------------

// // const uniqueNumbers = (numbers) =>
// //   numbers.filter(
// //     (number) => numbers.indexOf(number) === numbers.lastIndexOf(number)
// //   );

// const numbers = [2, 10, 2, 47, 13, 10, 18, 18];
// const uniqueNumbersArr = uniqueNumbers(numbers);
// console.log(uniqueNumbersArr); // [47, 13]
