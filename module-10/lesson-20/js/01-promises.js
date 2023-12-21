/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const getUser = () => new Promise((resolve, reject) => {
//     const hasUser = Math.random() > 0.5;

//     setTimeout(() => {
//         if (hasUser) {
//             resolve({ name:"Oleh", age: 23 })
//         } else {
//             reject({ error: "User was not found" })
//         }
//     }, 1000);
// });



// setTimeout(() => {
//     console.log("SET TIMEOUT"); 
//  }, 0);

 
// new Promise((res) => {
//      res("PROMISE")
// }).then(res => {
//     console.log(res);
// })
 


// let isLoading = true;

// 1. Якщо колбек then повертає дані, то вони попадають в наступний then
// 2. Якщо колбек catch повертає дані, то вони попадають в наступний then
// 3. В колбек finally нічого не попадає

// getUser()
//     .then((user) => {
//         console.log(user);
//     })
//     .catch(() => {
//         console.log("One more time");
//     })


/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */



// const getUser = () => {
//     const hasUser = Math.random() > 0.5;
    
//     if (hasUser) {
//        return Promise.resolve({ name:"Oleh", age: 23 })
//     } else {
//        return Promise.reject({ error: "User was not found" })
//     }
// }

// getUser().then(res => {
//     console.log(res);
// })


// const p1 = new Promise((res) => {
//     setTimeout(() => {
//         res("HELLO")
//     }, 500);
// });

// const p2 = new Promise((res) => {
//     setTimeout(() => {
//         res("HELLO 2")
//     }, 1000);
// });

// const p3 = new Promise((_, rej) => {
//     setTimeout(() => {
//         rej("ERROR 3")
//     }, 750);
// });

// Promise.all([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// Promise.allSettled([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Promise.race([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Promise.race([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });