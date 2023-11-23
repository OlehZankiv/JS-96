//

// Колбеки). 1. Одне із питань, можливо будуть ще.
// А саме: інлайн колбек, як її зрозуміти цю функцію,
// в чому різниця в записі і роботі порівняно зі звичайною колбек-фунцією?


// Backend

// const server = {
//     dataBase: {
//         users: [], // { name: string, id: number }
//     },

//     createUser(user) {
//         const dbUser = this.dataBase.users.find(dbUser => dbUser.id === user.id);
        
        
//         if (dbUser) {
//             return false;
//         }

//         if (user.name.length > 7) {
//             return false;
//         }



//         this.dataBase.users.push(user);
//         return true;
//     }
// }


// Frontend

// const createUserOnServer = (user, onSuccess, onError) => {
//     const isGoodRequest = server.createUser(user);

//     isGoodRequest ? onSuccess() : onError();
// }

// const goToLoginPage = () => {
//     console.log("-> Move to Login.");
// }

// const showNewUserInTable = () => {
//     console.log("-> Show new user.");
// }

// const showErrorMessage = () => {
//     console.error("Everything is bad.");
// }


// Registration Page
// createUserOnServer({ name: "Oleh", id: 1 }, goToLoginPage, showErrorMessage);
// createUserOnServer({ name: "Ivan", id: 1 }, goToLoginPage, showErrorMessage);

// createUserOnServer(
//     { name: "Ivan", id: 1 },
//     () => console.log("-> Go to login"), 
//     showErrorMessage
// );


// Admin -> Users Page
// createUserOnServer({ name: "Andriy", id: 2 }, showNewUserInTable, showErrorMessage);


// Наприкад, ось тут
// function registerGuest(name, callback) {
//         console.log(`Registering ${name}!`);
//         callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest('Mango', function greet(name) {
//         console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest('Poly', function notify(name) {
//         console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });
// Виходить для того аби інлайн-колбек працював потрібно вище прописати функуцію в викоританням колбека?




// numbers.forEach((number, index) => {
//     console.log(`Index ${index}, value ${number}`);
//   }) 
//   колбеком є (number, index) ?
// Але   ж це звернення до елементів масиву з яким будуть відбуватися
// якісь дії в цій функції numbers.forEach((number, index) =>.
// Сам колбек це ж звернення до іншої функції, шо тоді є іншою функією в цьому разі?

// const numbers = [1,2,3,4,5];

// numbers.forEach((number, index) => {
//     console.log(`Index ${index}, value ${number}`);
// })

// const customForEach = (array, callback) => {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array);
//     }
// }

// customForEach(numbers, (item, index) => {
//     console.log(item, index);
// })


// const users = [
//     {name: "Oleh"},
//     {name: "Anna"},
//     {name: "Ivan"},
//     {name: "Petro"},
//     {name: "Sergiy"},
// ]; // Hello Oleh, Anna, Ivan, Petro and Sergiy. Welcome to the room;

// const welcomeText = users.reduce((fullString, user, i) => {
//     let separator = "";

//     if (i === users.length - 2) {
//         separator = " and "
//     } else if(i <= users.length - 3) {
//         separator = ", "
//     }

//     return fullString + user.name + separator;
// }, "");


// console.log(`Hello ${welcomeText}. Welcome to the room`);


// a();


// function a() { 
//     console.log("a");
// }


// const b = function() {
//     console.log("b");
// }


// const c = () => console.log("c");


// const users = [
//     {name: "Oleh", id: 1},
//     {name: "Ivan", id: 2},
//     {name: "Petro", id: 3},
//     {name: "Anna", id: 4},
// ]


// const newUsers = users.filter(user => user.id !== 3);

// console.log(newUsers);



// const foundUserIndex = users.findIndex((user) => user.name === "Anna");
// console.log(foundUserIndex + 1);


// 1. Знати як працюють більшість методів масиву;
// 2. Задатись запитанням, що саме я маю зробити з масивом;
// 3. Використати необхідний метод масиву для реалізації.