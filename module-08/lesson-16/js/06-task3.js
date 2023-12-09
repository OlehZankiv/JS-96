/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

// function calculateHousePerimeter({a, b, c, d, ...rest}) {
//   const perimeter = a + b + c + d + 
//       Object.values(rest).reduce((total, side) => total + side, 0);

//   return perimeter;
// }

// const perimeter = calculateHousePerimeter({ a: 10, b: 15, c: 10, d: 15, leftSideOfRoom: 18, awd: 1});

// console.log(`Периметр будинку: ${perimeter}`);





// (function () {
//   console.log("Something");


// })()


// (() => {
//   console.log("Arrow");
// })()


// let perimeter = (() => {
//     const a  =23;

//     const b = Math.random();

//     return a + b;
// })();

// console.log(perimeter);


// function factorial(num) {
//   if (num === 1) return 1;

//   return num * factorial(num - 1);
// }


function foo({username}) {
  
}

foo();