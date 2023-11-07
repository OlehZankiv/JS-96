/**
 * Метод forEach(callback)
 * - Перебір масиву
 * - Повернення forEach
 * - Порівняння між звичайним for. (перерив циклу)
 */

// const createDefaultUser = (name) => {
//   const user = { name }

//   if (10 > 20) {
//     user.age = 23;
//   }


//   if (!user.name) {
//     user.name = "default"
//   }

//   return user;
// }


// const clickOnButton = () => {
//   console.log("Clicked on button");

//   const user = createDefaultUser("Oleh")

//   console.log(user);
// }

// clickOnButton()

// const numbers = [5, 10, 15, 20, 25];


// let total = 0;

// numbers.forEach((value) => {
//   total += value;
// })

// console.log(total);






// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//   console.log(items);
//   console.log("_____");

//   items.forEach((item, i) => {
//     console.log(`${i + 1} - ${item}`);
//   })
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// /**
//  * Виконайте рефакторинг коду за допомогою методу forEach та стрілочних функцій.
//  */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   nameList.forEach((name, i) => {
//     console.log(`${name}: ${phoneList[i]}`);
//   });
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочний функцій.
 */
// const calculateAverage = (...args) => {
//   let total = 0;

//   args.forEach((number) => total += number)
  
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2



// const numbers = [1,2,3,4,45,3,3,3,3,12323,23,1232,2,32];


// let moreThanHundred;

// for (const number of numbers) {
//   if (number >= 100) {
//     moreThanHundred = number;
//     break;
//   }
// }

// numbers.forEach((number) => {
//   if (moreThanHundred)return;

//   if (number >= 100) {
//     moreThanHundred = number;
//   }
// })

// console.log(moreThanHundred);



// function name(callback) {
  
// }
