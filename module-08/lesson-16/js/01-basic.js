/**
 * Деструктуризація об'єкта
 */

// const js = {
//   language: "JavaScript",
//   version: '1.0.1'
// }

// const { 
//   skills: { 
//     css, 
//     html, 
//     js: userSkillJS,
//     vue = false,
//     ...rest
//   }, 
//   username 
// } = {
//   username: "Jacob",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//     react: false,
//     nodeJS: false,
//     java: true,
//   },
// }; // Jacob know html and js, and css

// let skillsInfo = `
//   HTML: ${html ? "Know" : "Don't know"};
//   CSS: ${css ? "Know" : "Don't know"};
//   JS: ${userSkillJS ? "Know" : "Don't know"};
//   Vue: ${vue ? "Know" : "Don't know"};
// `;

// console.log(vue);


// Html: Know
// CSS: Don't know


// const userInfo = `${username} know: ${skillsInfo}`

// console.log(skillsInfo); 

/**
 * Глибока деструктуризація об'єкта
 */

// const { skills } = user;

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

/**
 * Деструктуризація масива
 */


// const [, , ...numbers] = [undefined, 2, 3, 4, 5];


// console.log(first, second);
// console.log(numbers);

// const third = arr[2]


// const [key, value] = ["name", "Oleh"];

// console.log(thirdNumber);


// const user = {
//   name: "Oleh",
//   age: 23,
//   position: "teacher"
// }

// Object.entries(user).forEach((arr) => {
//   const [key, value] =  arr;
//   console.log(key + ": " + value);
// })