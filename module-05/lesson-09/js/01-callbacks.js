/**
 * Функція зворотнього виклику (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */



// const user = {
//     name: "Oleh",
//     vip: true
// }



// function clickOnBonus(user, onSuccess, onReject) {
//   const bonus = {
//     id: "afbf-23ab-1aef-3f4b-afb0fbac",
//     name: "Welcome Bonus",
//     money: 1000,
//   }

//   if (user.vip) {
//     onSuccess(bonus);
//   } else {
//     onReject(null)
//   }
// }

// function handleSuccess(bonus) {
//     console.log(bonus);
// }


// function handleError() {
//     console.error("Some error, try again later");
// }

// clickOnBonus(user, handleSuccess, handleError);



// function callback() {
//     console.log("HELLO WORLD");
// }


// function saySomething(onSomething) {
//     onSomething()
// }


// saySomething(callback)


// const button = {
//   listeners: [],

//   click(/* що робити при кліку */) {
//     for (const listener of this.listeners) {
//         listener();
//     }
//   },


//   addListener(callback) {
//     this.listeners.push(callback);
//   }
// }


// function onClick() {
//     console.log("Click 1");
// }


// function onClick2() {
//     console.log("Click 2");
// }


// button.addListener(onClick)
// button.addListener(onClick2)


// button.click();



/**
 * Функцiя add(a, b, callback) => callback(result)
 */

// function addListener(result) {
//     console.error(result);
// }


// function addListener2(result) {
//     console.log(result);
// }

// function add(a, b, callback) {
//     callback(a + b)
// }

// add(2, 3, addListener);
// add(10, 8, addListener2);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
    const newArray = [];


    for (const element of array) {
       const result = callback(element);
      newArray.push(result);
    }

    return newArray;
}

console.log(
  each([64, 49, 36, 25, 16], (value) => value * 2)
); // [64 * 2, 49 * 2]

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
); // [64 - 10, 49 - 10]
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
