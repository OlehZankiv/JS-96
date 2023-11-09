/**
 * Метод reduce
 *
 * - Перебирає оригінальний масив
 * - Повертає значення, яке залежить від розробника
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, current) => acc + current, 0);

// console.log(total);

/**
 * Вираховуємо загальну заробітню плату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 151,
// };



// const totalSalary = Object.values(salary)
//                         .reduce((total, current) => total + current, 0);
// console.log(totalSalary);

/**
 * Вираховуємо загальну кількість годин
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//    return totalTime + player.timePlayed;
// }, 0);

// console.log(totalTimePlayed);

/**
 * Вираховуємо суму товарів корзини
 */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((totalPrice, product) => {
//     return totalPrice + product.price * product.quantity
// }, 0);
// console.log(totalAmount);