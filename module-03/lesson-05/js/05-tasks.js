/**
 * Напиши скрипт, який рахує суму всіх парних та непарних чисел в масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let totalOdd = 0;
// let totalEven = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         totalEven += numbers[i];
//     } else {
//         totalOdd += numbers[i];
//     }   
// }

// for (const number of numbers) {
//     if (number % 2 === 0) totalEven += number;
//     else totalOdd += number;
// }

// console.log(totalOdd);
// console.log(totalEven);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');

// console.log(namesArray);
// console.log(phonesArray);

// for (let i = 0; i < namesArray.length; i++) {
//     console.log(`${namesArray[i]} number is ${phonesArray[i]}`);

// }

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "   Welcome    to the  hello future   ";

// const arr = string.trim().split(' ')
// arr.pop();
// arr.shift();

// console.log(arr.join(" ").trim());

// SLICE
// const arr = string.trim().split(' ');

// const newString = arr.slice(1, arr.length - 1).join(" ");

// console.log(newString.trim());


/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [2, 17, 94, 1, 23, 37];
// let min = values[0];


// for (const value of values) {
//     if (min > value) {
//         min = value;
//     }
// }

// console.log(min); // 1


// console.log(Math.min(...values));