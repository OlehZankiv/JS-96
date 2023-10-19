/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

// const a = 20;
// const b = 100;

// for(let i = a; i <= b; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

/*
 * Напиши скрипт, який рахує суму всіх парних чисел,
 * які входять у діапазон змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
 * і у ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 7;
// const max = 155;
// let total = 0;

// for (let i = min; i <= max; i++) {
//     if (i % 2 === 1) continue;
    
//     total += i;
// }




// 11 % 2 -> 1
// 17 % 2 -> 1
// 111 % 2 -> 1
// 6 % 2 -> 0
// 1000 % 2 -> 0

// console.log(total);


// Функція findNumber(start, end, divisor) приймає три параметра,
// які є цілими числами.
// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно,
// яке ділиться на divisor без остачі
// не використовуй оператор break


// function findNumber(start, end, divisor) {

//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
        
//             return i;
//         }
//     }
// }

// const result = findNumber(5, 60, 4);

// console.log(result);




// function calculateDeposit(amount, percent, period) {
//     let sum = amount;

//     for (let i = 0; i < period; i++) {
//         sum += sum * (percent / 100);
//     }

//     return Math.round(sum * 100) / 100;
// }

// const deposit = calculateDeposit(10000, 4, 3);

// console.log(deposit);