/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все, що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");
const button = document.querySelector('.js-button');

let username = "";


userName.addEventListener("input", (event) => {
    username = event.target.value;
})

userName.addEventListener("blur", (event) => {
    if (!event.target.value) {
        alert("Please enter something")
    }
})


button.addEventListener("click", () => {
    alert(`Welcome to the home, ${username}!`);

    userName.value = "";
    username = "";
});



/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
