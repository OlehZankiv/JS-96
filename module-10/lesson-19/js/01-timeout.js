/*
 * Що таке асинхронність?
 * Що таке багатопоточність?
 * Асинхронний код vs багатопоточний код
 */

/*
 * Метод window.setTimeout(callback, delay, args)
 */


// setTimeout(() => {
//   console.log("HELLO");
// }, 1000);


// for (let i = 0; i < 3000000000; i++) {
//   const x = 8;
//   const y = x + 100 / 2;
// }

// console.log("Wdwd");


// console.log(`До виклику setTimeout`);


// setTimeout(() => {
//    console.log("1 - Всередині зворотного виклику для setTimeout");
// });


// setTimeout(() => {
//   console.log("2 - Всередині зворотного виклику для setTimeout");
// });

// console.log("Після виклику setTimeout");

/*
 * Що таке Event Loop
 */


// const id = setTimeout(() => {
//   console.log("Hello");
// }, 1000);


// clearTimeout(id);


// const id2 = setTimeout(() => {
//   console.log("Hello");
// }, 1000);

// console.log(id2);
/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
// const logger = (time) => {
//   console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
// };

/**
 * Можливість передати параметри для колбеку
 */
// const id = setTimeout((name, country) => {
//   console.log(`Hello, my name is ${name}, I'm from ${country}`);
// }, 1000);
