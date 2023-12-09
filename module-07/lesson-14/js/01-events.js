/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me"
 * зробити квадратик зеленим і змістити його на 24px вправо
 */


const button = document.querySelector('.js-click');
const box = document.querySelector('.js-box');


const onButtonClick = () => {
    box.style.backgroundColor = "green";
    box.style.margin = "8px 24px 0 24px";
}

button.addEventListener("click", onButtonClick, { once: true });