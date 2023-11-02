/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// const startNumbers = [4,5,6];
// const endNumbers = [10,11];


// const numbers = [
//   1,
//   2,
//   3,
//   ...startNumbers,
//   7,
//   8,
//   9,
//   ...endNumbers,
//   12,
//   13
// ];

// const numbers2 = [...numbers];

// numbers2[0] = 10000;

// console.log(numbers);
// console.log(numbers2);

// const firstOptions = {
//   sendEmail: true,
//   autoReload: true,
// }

// const secondOptions = {
//   name: "Oleh",
//   age: 23,
//   year: 2000,
// }


// const wholeInfo = {
//   ...firstOptions,
//   ...secondOptions,
//   year: 2024,
// }

// const wholeInfo2 = {...wholeInfo};

// wholeInfo2.age = 12312323

// console.log(wholeInfo);

/**
 * Пошук найменшої або найбільшої температури (Math)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const x = Math.max(...temps);

// console.log(x);


// function joinInfo(a, b, c) {
//   return a + b + c;
// }

// const infos = ["WD", "WDAWD","WDOWDIUHJ"]

// console.log(joinInfo(...infos));



// function max(...numbers) {
//   let max = numbers[0];

//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }

//   return max;
// }


// console.log(max(1,2,3,5,6,624,23,4,234,2,34,2345,3));

/**
 * Створення масиву і тип за посиланням
 */
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [
  ...lastWeekTemps,
  ...currentTemps,
  ...nextWeekTemps
];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings
};

console.log(finalSettings);
