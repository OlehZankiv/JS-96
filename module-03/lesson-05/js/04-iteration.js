/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Відмінність у використанні for і for...of
 */


// if (friends.includes("Oleh")) {
//     for (let i = 0; i < friends.length; i++) { // 0 (friends[0]) -> 1 (friends[1])
//         console.log("HELLO " + friends[i]);    
//     }
// }








// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// for (const friend of friends) {
//     console.log(friend);
// }

// for (let i = 0; i < friends.length; i++) {
//     const friend = friends[i];

//     console.log(friend);
// }

// for (let friend of friends) {
//   console.log(friend);
//   console.log(friends);
// }


// const nums = [1,2,3,4,5]


// let sum = 0;

// for (const number of nums) {
//     sum += number;
// }

// console.log(sum);

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами
 * значення, яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = "8 11";

// const area = values.split(' ');

// console.log(area[0] * area[1]);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];


// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }