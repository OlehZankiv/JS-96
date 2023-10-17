/**
 * Повторення перетворення логічних операторів
 * Види логічний операторів
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

// const age = 0;
// const isAdmin = false; // !false => true; !true => false


// if (age >= 9 && age <= 18 && isAdmin) {
//     console.log("Child and admin");
// }

// if (age < 9 || age > 70 || isAdmin) {
//     console.log("You can't be registered");
// }

// if (!age) {
//     console.log("You can be registered");
// }

// /**
//  * --------------------------------
//  */

// => && - повертає перший операнд, який не справджується
// або останній, який справдився

// console.log(5 && 100 && 1 && 6 && -100 && 4 && 200);
// console.log(5 && "mango" && NaN && true);

// /**
//  * --------------------------------
//  */

// => || - повертає перший операнд, який справджується
// або останній, який не справдився


// console.log(false || NaN || false || 0 || 1);
// console.log(false || null);

// /**
//  * --------------------------------
//  */

// console.log(!5);
// console.log(!false);

// /**
//  * --------------------------------
//  */

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);


// const name = "";
// const surname = "";
// const nickname = "";


// const avatarInfo = nickname || name || surname || "DEFAULT";

// console.log(avatarInfo);