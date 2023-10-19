/**
 * Оператор switch
 */

// const username = "Banana";



// if (username === "Mango") {
//   console.log("Hello Mango");
// } else if (username === "Banana") {
//   console.log("Welcome Banana");
// } else if (username === "Apple") {
//   console.log("Nice to see you, Apple");
// }

// switch(username) {
//   case "Mango":
//     console.log("Hello, Mango");
//     break;
//   case "Banana":
//     console.log("Welcome, Banana");
//     break;
//   case "Apple":
//     console.log("Nice to see you, Apple");
//     break;
// }

// const color = "red"

// switch (color) {
//   case "black":
//   case "brown":
//     console.log("Dark");
//     break;
//   case "white":
//   case "yellow":
//     console.log("Light");
//     break;
//   default:
//     console.log("Some color");
//     break;
// }


/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 3;

// if (daysUntilDeadline === 0) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Overmorrow");
// } else {
//   console.log("Date in the future");
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Tomorrow");
//     break;
//   case 2:
//     console.log("Overmorrow");
//     break;
//   default:
//     console.log("Date in the future");
//     break;
// }

/*
 * Написати скрипт вибору опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Замовлення буде відправлено сьогодні'
 * - 'Вам передзвонить менеджер'
 */

// const option = 5;
// let message = "";

// switch (option) {
//   case 1:
//     message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
//     break;
//   case 2:
//     message = 'Кур\'єр доставить замовлення завтра з 9:00 до 18:00';
//     break;
//   case 3:
//     message = 'Замовлення буде відправлено сьогодні';
//     break;
//   default:
//     message = 'Вам передзвонить менеджер';
//     break;
// }

// console.log(message);
