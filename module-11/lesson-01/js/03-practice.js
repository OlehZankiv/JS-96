/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault;

  const query = event.currentTarget.elements.query.value;

});



fetch('https://pokeapi.co/api/v2/ability/31/', {
  method: "GET",
  headers: {
    "Content-Type": "application/pdf",
  }
})