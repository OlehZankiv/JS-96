/*
 - Створення
 - Unix-час -> 1 January 1970
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date = new Date("2024-12-01T20:10:12");

const prevDate = Date.now();

setTimeout(() => {
    const nextDate = Date.now();
    console.log((nextDate - prevDate) / 1000 + " SEC");
}, 3000);


// date.setHours(2);
// const fullYear = date.getFullYear();

// console.log(date.toLocaleString());
// console.log(fullYear);

// console.log(dayjs(date).format("YYYY -- DD of MMMM HH:mm"));