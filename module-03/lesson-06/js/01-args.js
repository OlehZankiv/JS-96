

/**
 * - Псевдомасив arguments и Array.from
 * - Значення параметра функції за замовчуванням
 * - Функціональний вираз (Function Declaration, Function Expression)
 */
// function foo(a, b, c) {
//     console.log(arguments);
//     const args = Array.from(arguments);
//     console.log(args);
// }
  
// foo(1, 2, 3, 4, 5);

//   foo(1, 2, 3);
//   foo(1, 2, 3, 4, 5);
//   foo(1, 2, 3, 4, 5, 6, 7);

/**
 * ------------------
 */

// function getName(surname, name = "Anna Ivanenko") {
//     return name.slice(0, 5) + " " + surname;
// }


// sayHello2()
// sayHello()


// function sayHello2() {
//     console.log("Hello");
// }


// let sayHello = function() {
//     console.log("Hello");
// }

// let sayHello2 = sayHello;


// sayHello2 = function() {
//     console.log("World");
// }

// sayHello()

// console.log(typeof(sayHello));
// sayHello()


// const name = etName("Oleh Zankiv");

// console.log(getName("Zankiv"));


// const b = function() {

// }
  
  
/**
 * Напиши функцию add для сум чисел
 * будь-якої кількості аргументів
 */

// const add = function() {
//     let sum = 0;

//     for (const number of arguments) {
//         sum += number;
//     }

//     return sum;
// }
  
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6, 7, 8));
  
/**
 * Напишіть функцію calAverage(), яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення.
 * Усі аргументи будуть лише числами.
 */

//   function calAverage() {
//     let sum = 0;

//     for (const number of arguments) {
//         sum += number;
//     }

//     return sum / arguments.length;
//   }
  
//   console.log(calAverage(1, 2, 3, 4)); // 2.5
//   console.log(calAverage(14, 8, 2)); // 8
//   console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


// function stringConcat() {
    
//     const args = Array.from(arguments);

//     return args.join('');
// }

// console.log(stringConcat("Hello", " ", "how", " ", "are", " ", "you", "!"));
