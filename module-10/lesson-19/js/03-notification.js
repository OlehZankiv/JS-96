/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const notification = document.querySelector(".js-alert");
const showButton = document.querySelector(".js-show-alert");

showButton.addEventListener("click", showNotification);
notification.addEventListener("click", onNotificationClick);

/*
 * Функції
 */
function onNotificationClick() {
  if (timeoutId) clearTimeout(timeoutId);
  hideNotification();
}

function showNotification() {
  notification.classList.add("is-visible");

  timeoutId = setTimeout(hideNotification, NOTIFICATION_DELAY);
}

function hideNotification() {
  notification.classList.remove("is-visible");
}