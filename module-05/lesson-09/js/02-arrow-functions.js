/**
 * Стрілочні функції
 * - Оголошення
 * - Явне та не явне повернення
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow =

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */
// function fnA() {
//   return {
//     a: 5,
//   };
// }

// console.log(fnA());

// const arrowFnA =

// console.log(arrowFnA());

/**
 * Функцiя add(a, b, callback)
 */

function add(a, b, callback) {
  callback(a + b);
}

add(2, 3, function (result) {
  console.log(result);
});

add(10, 8, function (result) {
  console.log(result);
});
