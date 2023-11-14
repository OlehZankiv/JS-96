/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

// const showThis = function (preffix, b) {
//   console.log(preffix, b);
//   console.log(this);
// }

// const obj = {
//     name: "HELLO",
// }



// const saySomething = (onSay) => {
//     onSay()
// }


// saySomething(showThis.bind(obj, "Wdw", 232))

// showThis.call(obj, "HELLO", 12323);
// showThis.apply(obj, ["HELLO", 12323]);


/**
 * -------------------------------
 */
// const counter = {
//   value: 0,
//   increment() {
//     console.log("increment -> this", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement -> this", this);
//     this.value -= 1;
//   },
// };

// const updateCounter = function (operation) {
//   operation();
// };


// updateCounter(counter.decrement.bind(counter));
// updateCounter(counter.increment.bind(counter));
// updateCounter(counter.increment.bind(counter));
// updateCounter(counter.increment.bind(counter))