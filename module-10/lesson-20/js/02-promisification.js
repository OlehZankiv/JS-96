/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//     }

//     onError("❌ Упс, y нас закінчилися продукти");
//   }, 1000);
// };


// const makeOrder = (dish) => new Promise((res, rej) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       res(`✅ Ваше замовлення: ${dish}`);
//     }

//     rej("❌ Упс, y нас закінчилися продукти");
//   }, 1000);
// })


// makeOrder("пиріжок")
//   .then((result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   })


/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */


// const prepareDish = (dish) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     return Promise.resolve(`✅ Ваше замовлення: ${dish}`);
//   }

//   return Promise.reject("❌ Упс, у нас закінчилися продукти");
// };


// prepareDish("пиріжок")
//   .then((result) => {
//     console.log("onPrepareDishSuccess");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("onPrepareDishError");
//     console.log(error);
//   })
