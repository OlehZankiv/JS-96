/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);

// dog.name = "Sharik"

// console.log(String.prototype === "WODUWODIUHWUI".__proto__);

// console.log(window.__proto__.__proto__.__proto__.__proto__);

// const diselCar = {
//     whells: 4,
//     maxSpeed: 150,
//     typeOfFuel: "Disel",


//     go() {
//         console.log("I'm going");
//     }
// }


// const shkoda = Object.create(diselCar);
// const track = Object.create(diselCar);
// track.weight = 1000;
// track.maxSpeed = 2000;

// for (const key in track) {
//     if (track.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }



// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

/**
 * ----------------------------------------
 */
// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);

// console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);
