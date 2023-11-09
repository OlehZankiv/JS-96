/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * По замовчуванню:
 *  - сортує від найменшого до найбільшого
 *  - приводить елементи до стрічки і суртує по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 12, 2, 3];


// const sorted = numbers.toSorted((a, b) => a - b);


// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"];
// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються у відповідності до поверненого значення у callback
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сотрування масиву об'єктів
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// По ігровому часі
// const sortedByBestPlayers = players.toSorted((a, b) => b.timePlayed - a.timePlayed);
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players.toSorted((a, b) => {
// //    let isABetterOnline = a.online && !b.online ? 1 : -1;

// //    if (a.online && b.online) isABetterOnline = 0;

//    const timeSort = a.timePlayed - b.timePlayed;

// //    return timeSort + isABetterOnline
//    return timeSort
// });
// console.table(sortedByWorstPlayers);

// По першій букві імені
// const byName = players.toSorted((a, b) => {
//     return a.name[0] > b.name[0] ? 1 : -1;
// });
// console.table(byName);
