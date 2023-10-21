/**
 * Напиши скрипт, який для об'єкта user:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */



// function generateUserId(name, surname) {
//   return {
//     id: Math.random(),
//     name,
//     surname,
//   }
// }


// const user1 = generateUserId("Oleh", "Zankiv");
// const user2 = generateUserId("Ivan", "Petrenko");


// console.log(user1);
// console.log(user2);

// const user = {
//   false: 20,
//   hobby: "html",
//   hasPremium: true,
// };

// console.log(user);

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */


// const teams = [
//   {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   },
//   {
//     John: 200,
//     Ann: 10000,
//     Pete: 1300,
//   },
//   {
//     John: 10,
//     Ann: 10,
//     Pete: 13,
//   },
// ]


// const sums = [];

// for (const team of teams) {
//   let sum = 0;

//   for (const key in team) {
//     sum += team[key];
//   }

//   sums.push(sum);
// }

// console.log(sums);


// let sum = 0;


// const sums = [];

// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }
// sums.push(sum)

// console.log(sums);


// function calculateTotalPrice(order) {
//   let total = 0;

//   for(let i = 0; i < order.length; i++) {
//     total += order[i];

//   }

//   debugger

//   return total;
// }

// const result = calculateTotalPrice([12, 85, 37, 4]);



// console.log(result);



// function showNumbersInfo(a, b) {
//   console.log(a);
//   console.log(b);
// }


// showNumbersInfo(1, 2);



function createUser() {
  return {
    name: "Oleh"
  }
}

const user = createUser();



user.awdwd = "Wdwdj";

console.log(user);