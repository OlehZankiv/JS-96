/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з romise-Pами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

startBtn.addEventListener("click", spin);

function spin() {
    startBtn.disabled = true;

    const slotPromises = Array.from(container.children).map((element, i) => new Promise((res, rej) => {
        const isGoodMoney = Math.random() > 0.5;
        const slotSymbol = isGoodMoney ? "🤑" : "👿";
        element.textContent = "";
        result.textContent = "";


        setTimeout(() => {
            element.textContent = slotSymbol;
            (isGoodMoney ? res : rej)(slotSymbol);
        }, 1000 + i * 1000);
    }));


    
    Promise.allSettled(slotPromises)
        .then((res) => {
            const isWin = new Set(res.map(({ value, reason }) => value || reason)).size === 1;
            startBtn.disabled = false;
            result.textContent = isWin ? "Winner" : "Loser";
        })
}

// console.log("A");

// new Promise((res) => {
//     console.log("C");

//     res("D")
// }).then(res => {
//     console.log(res);
// })

// console.log("B");


// new Promise((res)=>{
//     res("HELLO")
// }).then(res => {
//     console.log(res);


//     new Promise(res => {
//         res("WORLD");
//     });
// }).then((res) => {
//     console.log(res);
// })