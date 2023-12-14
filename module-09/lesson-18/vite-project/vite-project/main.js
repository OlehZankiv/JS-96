import debounce from 'debounce';
import { homePage } from './src/pages/home'
import { loginPage } from './src/pages/login';
import './style.css'


const app = document.querySelector('#app');

app.innerHTML = homePage;

app.addEventListener("click", (event) => {
  const btnType = event.target.dataset.btn;

  if (btnType === "login") {
    app.innerHTML = loginPage;
  } else if (btnType === "home") {
    app.innerHTML = homePage;
  }
})

debounce(() => {
  console.log("HELLO");
}, 1000)()



// const array = [1, 3, 5, 4, 6, 8, 6];
// const amount = 9;


// // 3 * x = 8; -> 8 / 3 = 5;


// const cash = {
// };

// let result = [];

// for (let i = 0; i < array.length; i++) {

//   if (cash[array[i]] !== undefined) {
//     result = [array[i], cash[array[i]]]
//     break;
//   }


//   cash[amount - array[i]] = array[i]
// }


// console.log(result);


// const layout = [
//   [1,1,1,1,1,1],
//   [1,0,0,1,1,1],
//   [1,0,0,0,1,1],
//   [1,1,0,1,1,0],
//   [1,1,1,1,0,0],
// ]