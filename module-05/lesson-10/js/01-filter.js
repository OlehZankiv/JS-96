//
//

// Умови чистої функції:
// 1. Повертає очікуваний результат;
// 2. Якщо її викликати декілька раз з одинаковими параметрами,
//      то вона має працювати ідентично;
// 3. Функція не має використовувати або змінювати глобальні змінні.
// 4. Не змінює параметри, які у неї приходять, а працює з копіями.

// const user = {
//   name: "Oleh"
// }


// const sayHi = (additionWord = "") => {
//   console.log("Hi" + additionWord);
//   return null;
// }

// const result1 = sayHi("hello");
// const result2 = sayHi("hello");



/**
 * Метод filter
 *
 * - Перебирає поелементно масив
 * - Повертає новий масив (з елементами або ж пустий)
 * - Створює новий масив з елементами, які задовільняють умову колбек-функції
 *    - якщо колбек повертає true, то добавляється елемент у новий масив
 *    - якщо колбек повертає false, то елемент НЕ добавляється у новий масив
 */

// const numbers = [5, 10, 15, 20, 25];

// let filteredNumbers = numbers.filter((value) => value > 5);

// console.log(filteredNumbers);


// const users = [
//   {id: 1},
//   {id: 2},
//   {id: 3},
//   {id: 4},
//   {id: 5},
// ]

// const userIdToDelete = 3;

// console.log(users.filter(user => user.id !== 12))

/**
 * ---------------------------
 */
const allCars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

// const filterByPrice = (cars, threshold) => {
//     return cars.filter((car) => car.price <= threshold)
// };

// console.log(filterByPrice(allCars, 30000));
// console.log(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale);

// console.table(getCarsWithDiscount(allCars));


// const users = [
//   {id: 1},
//   null,
//   NaN,
//   undefined,
//   {id: 2},
//   {id: 3},
//   null,
//   {id: 5}
// ]

// const reallyUser = users.filter(Boolean);

// console.log(reallyUser);

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

// const getCarsWithType = (cars, type) => {
//   return cars.filter(car => car.type === type);
// }

// console.table(getCarsWithType(allCars, "suv"));
// console.table(getCarsWithType(allCars, "sedan"));
