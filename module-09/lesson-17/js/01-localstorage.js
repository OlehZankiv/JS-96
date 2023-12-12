/**
 * JSON
 */


const user = {
  name: "Oleh",
  age: 23
}

// const strUser = JSON.stringify(user);

// console.log(JSON.parse(strUser));

/**
 * LocalStorage
 */

const STORAGE_KEYS = {
  USER: "USER",
  RANDOM: "RANDOM"
}


localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user)) 

const savedUser = localStorage.getItem(STORAGE_KEYS.USER);

try {
  JSON.parse(savedUser)
} catch(error) {
  // console.log(error, "JSON ERROR");
}

const random = localStorage.getItem(STORAGE_KEYS.RANDOM) 
console.log(Number(random), "FROM LS");

if (!localStorage.getItem(STORAGE_KEYS.RANDOM)) {
  localStorage.setItem(STORAGE_KEYS.RANDOM, Math.random());
}

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

/**
 * Видалення
 */

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }


// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };
