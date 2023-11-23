
// 1. Функції alert, prompt, confirm;

// 2. Switch (true) і чому це погано;

// 3. Поговоримо трішки додатково про DevTools;
// 3.1. Вкладку Elements;
// 3.2. Функціонал "Store as global variable" і як його використовують;

// 4. Функція splice.

// 5. Написати найпростішу логіку регістрації
//       з використанням функцій (alert, prompt або confirm);
//    Валідації та решта специфіка реалізацій придумати самостійно.

// 6. Бульбашковий алгоритм сортування.


// 1, 3, 4


// console.log("HELLO");

// alert("This site has XXX content? Are you 18+")
// const answer = prompt("This site has XXX content? Are you 18+", "Yes");


// if (answer === "yes") {
//     console.log('Run website');
// } else {
//     console.log('Run website one more time');
// }

// const answer = confirm("This site has XXX content? Are you 18+");

// ========================================================================
// 5. Написати найпростішу логіку регістрації
//       з використанням функцій (alert, prompt або confirm);
//    Валідації та решта специфіка реалізацій придумати самостійно.


// const enterEmailLogic = (onError) => {
//     let email = "";

//     while(true) {
//         email = prompt("Please enter your email: ");

//         if (!email) {
//             onError("Please enter something");
//             continue;
//         } else if (!email.includes("@")) {
//             onError("Please enter correct email");
//             continue;
//         }

//         break;
//    }

//    return email;
// }



// const enterPasswordLogic = (onError) => {
//     let password = "";
    
//     while(true) {
//         password = prompt("Please enter your password: ");
    
//         if (!password) {
//             onError("Please enter something");
//             continue;
//         } else if (password.length < 5) {
//             onError("Please enter more then 4 symbols");
//             continue;
//         }

//         break;
//     }
 
//     return password;
//  }
 


// const correctCredentions = {
//     EMAIL: "oleh@gmail.com",
//     PASSWORD: "12345"
// };


// let email = "";
// let password = "";

// while(true) {
//     email = enterEmailLogic(alert);
//     password = enterPasswordLogic(alert);

//     const isCorrectCredentions =  email === correctCredentions.EMAIL && 
//                                 password === correctCredentions.PASSWORD;

//     alert(isCorrectCredentions ? 
//         "Welcome to home page" :
//         "Your password or email is incorrect"
//     );

//     if (!isCorrectCredentions) continue;
    
    
//     break;
// }

// console.log(email, password);
