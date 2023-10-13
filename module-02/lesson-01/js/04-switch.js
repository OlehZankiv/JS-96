/**
 * Оператор switch
 */

const username = "Mango";

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("Overmorrow");
} else {
  console.log("Date in the future");
}

/*
 * Написати скрипт вибору опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Замовлення буде відправлено сьогодні'
 * - 'Вам передзвонить менеджер'
 */

const option = 1;
let message = "";

console.log(message);
