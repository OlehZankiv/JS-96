/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const notification = document.querySelector(".js-alert");

/*
 * Функції
 */
function onNotificationClick() {
  console.log(
    "Логіка при кліку на нотифікацію, потрібно її закрити"
  );
}

function showNotification() {
  console.log(
    "Відкрити нотифікацію, та закрити її автоматично після NOTIFICATION_DELAY"
  );
}

function hideNotification() {
  console.log(
    "Закрити нотифікацію"
  );
}
