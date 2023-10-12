/**
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */


// const name = "Oleh";


// function sayHello() {
//     console.log("HELLO");
// }


// function makeLogicForUser(initialValue) {
//     let value = initialValue;

//     value += 100;
    
//     console.log(value);
//     console.log(name);
//     sayHello();
// }

// makeLogicForUser(25)

// console.log("HELLO")


// function sum(first, second) {
//     console.log(first + second);
// }


// sum(10, 20)



// function getNumber() {
//     const x = 4;
//     const y = 10;

//     const res = x * y;

//     return res;
// }

// const result = getNumber();


// console.log(result);





// function getHello() {
//  console.log("AAAA");

//   return "HELLO";
// }

// const result = getHello();


// console.log(result === "HELLO");
// console.log(getHello());

// const secondResult = result + " WORLD"

// console.log(secondResult);



// function sum(first, second) {
//     const sumResult = first + second;

//     return sumResult;
// }

// const result = sum(100, 201);

// console.log(result);

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// const str = 'Hallo';
// console.log(
//     str
//       .replace('a', 'e')
//       .replace('H', 'h')
//       .replace('o', 'q')
// );

// function calcBMI(weight, height) {
//     const parcedWeight = parseFloat(weight.replace(',', '.'));
//     const parcedHeight = parseFloat(height.replace(',', '.'));
    
//     const bmi = parcedWeight / parcedHeight**2
    
//     return Math.round(bmi * 10) / 10;
// }


// const result = calcBMI('88,3', '1.75')

// console.log(result)

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8


// function name() {
//     const x = (1 + 2);

//     return (1 + 2);
// }

// const x = 100.231233;
// console.log(x.toFixed(2));