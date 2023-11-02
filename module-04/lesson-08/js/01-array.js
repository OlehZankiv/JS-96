/**
 * Масив об'єктів
 *
 * - Перебір масиву
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */


// const friendMango = friends[0];
// const secondFriend = friendMango;


// secondFriend.name = "Something"

// console.table(friends);


// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];

//   console.log(friend.name);
// }

// for (const friend of friends) {
//   console.log(friend.name);
// }


// const clickedId = 3;

// for (const friend of friends) {
//   if (friend.id === clickedId) {
//     console.log("Go to friend", friend);
//   }
// }




/**
 * Пошук друга за іменем
 */
// function getFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return friend
//     }
//   }
// }

// console.log(getFriendByName(friends, "Kiwi"));
// console.log(findFriendByName(friends, "Chelsy"));

// function getParameterFromFriend(friend, propName) {
//   if (friend[propName] !== undefined) {
//     return friend;
//   }
// }


// console.log(getParameterFromFriend(friends[0], "online"));


const friends = [
  { id: 1, name: "Mango", online: false },
  { id: 2, name: "Kiwi", online: true },
  { id: 3, name: "Poly", online: false },
  { id: 4, name: "Ajax", online: true },
];

/**
 * Отримуємо імена всіх лрузів
 */
// function getAllNames(allFriends) {
//   let names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }

//   return names;
// }

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }


//   return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */


// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];



// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//         const totalPrice = stone.price * stone.quantity;

//         return totalPrice;
//     }
//   }
// }

// const result = calcTotalPrice(stones, "Діамант");

// console.log(result);