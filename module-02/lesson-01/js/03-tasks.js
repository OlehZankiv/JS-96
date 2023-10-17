/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 10;

// const timestring = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// const timestring = `${hours} г.` + (minutes > 0 ? ` ${minutes} хв.` : '');


// console.log(timestring);


// function getColor(stringColor) {
//     if (stringColor === "yellow") {
//         return '#fafb31';
//     } else if (stringColor === "green") {
//         return '#ffff31';
//     } else {
//         return "#ffffff"
//     }
// }

// const color = getColor('awdjuwkd');

// console.log(color);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проєкту.
 * Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 0;

if (daysUntilDeadline <= 1) {
    console.log("Today");
} else if (daysUntilDeadline === 1) {
    console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
    console.log("Overmorrow");
} else {
    console.log("Date in the future");
}
