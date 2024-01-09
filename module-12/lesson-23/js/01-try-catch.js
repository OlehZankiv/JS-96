/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис;
 * - Помилки парсингу (parsing errors);
 * - Помилки виконання (runtime errors);
 * - Помилки в асинхронному і синхронному коді;
 * - Об'єкт помилки (new Error):
 * - name
 * - message
 * - stack
 * - Блок catch без об'єкта помилки
 */
// const res = '{"name": "Oleh"'

// const user = {
//     name:"Oleh",
//     book: null
// }

// try {
//     // console.log(user.book.name);
//     JSON.parse(res);
// } catch(e) {
//     // alert("You don't book")
//     console.log(e?.name);
// } finally {
//     console.log("Finnaly");
// }


// try {
//     throw "Some error";
// } catch(e) {
//     console.log(e);
// }

// function foo() {
//     const error = new Error("something went wrong");
//     console.log(error.message);
// }

// foo();

// const error = new Error("something went wrong");
// console.log(error);