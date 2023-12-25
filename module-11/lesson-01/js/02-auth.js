/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */




/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault;

  const query = event.currentTarget.elements.query.value;

});

