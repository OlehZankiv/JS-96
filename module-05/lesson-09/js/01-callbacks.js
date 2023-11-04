/**
 * Функція зворотнього виклику (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */


// function getUserBonus(hasVip, onSuccess, onReject) {
//   const bonus = {
//     id: "afbf-23ab-1aef-3f4b-afb0fbac",
//     name: "Welcome Bonus",
//     money: 1000,
//   }

//   return hasVip ? bonus : null;
// }

// const button = {
//   click(/* що робити при кліку */) {
//   }
// }

/**
 * Функцiя add(a, b, callback) => callback(result)
 */

function add(a, b, callback) {}

add(2, 3);

add(10, 8);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {}

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
