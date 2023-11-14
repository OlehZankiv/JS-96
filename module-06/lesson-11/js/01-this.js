// const user = {
//     sayThis() {
//         console.log(this);
//     }
// }


// const sayThis2 = user.sayThis;

// sayThis2()



// function sayThis() {
//     console.log(this);
// }


// const sayThis2 = () =>  {
//     console.log(this);
// }



// sayThis();
// sayThis2();


// const account = {
//     balance: 1000,

//     sayThis: () => {
//         console.log(this);
//     }
// }

// const sayBalance = (balance) => {
//     console.log(balance);
// }

// sayBalance(account.balance);

// account.sayThis();

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const maxTimePlayed = Math.max(...players.map((player) => player.timePlayed))

// const sortedByWorstPlayers = players.map(player => ({
//     ...player,
//     online: player.online ? 1 : 0,
//     timePlayed: player.timePlayed / maxTimePlayed
// })).toSorted((a, b) => {
//     const aSortedValue = a.timePlayed + a.online;
//     const bSortedValue = b.timePlayed + b.online;

//     return bSortedValue - aSortedValue
// })

// console.table(sortedByWorstPlayers);




/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */


// function customFn() {
//   console.log(this === window);
// }


// window.customFn();

// const obj = {
//     balance: 1000,

//     sayThis() {
//         console.log(this);
//     }
// }

// obj.sayThis();

// const copyFn = obj.sayThis;

// copyFn();



// function saySomething(onResult) {
//     console.log("Something");
//     onResult();
// }

// saySomething(obj.sayThis)

/**
 * Глобальний контекст
 */
// function foo() {
//   console.log("foo -> this", this);
// }

// foo();

/**
 * Контекст методу об'єкта
 */

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошеня як зовнішня функція.
 */

// function showTag() {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// }

// showTag();

// const mango = {
//   tag: "Mango",
// };

// mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

/**
 * Виклик функції без контексту, яка оголошена як метод об'єкту.
 */

// const poly = {
//   tag: "Poly",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// poly.showTag();

// const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст в callback-функциях
 */

// const jacob = {
//   tag: "Jacob",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// function invokeAction(action) {
//   console.log(action);
//   action();
// }

// invokeAction(jacob.showTag);



// const user = {
//     nickname: "Oleh",

//     sayName() {
//         console.log(this.nickname);
//     }
// }

// user.sayName(); // this === user

// const fn = user.sayName;

// fn() // window

// function meet(onSuccess) {
//     if (true) {
//         console.log("Hello what's your name?");
//         onSuccess();
//     }
// }

// const f = user.sayName;
// meet(f);