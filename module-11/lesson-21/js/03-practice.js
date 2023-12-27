/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

const BASE_URL = "https://pokeapi.co/api/v2/";

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value;

  if (query.length < 3) {
    alert("Your length is not enough. Min 4 letters");
  } else {
    renderPokemons(query.toLowerCase());
  }
});


const getPokemon = (query = "") => {
  return fetch(BASE_URL + "pokemon/" + query)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request is not ok");
      }
    });
}




const getPokemonHTML = ({sprites, name, weight, height, abilities}) => `
        <div class="card">
          <div class="card-img-top">
            <img src="${sprites.front_default}" alt="${name}">
          </div>
          <div class="card-body">
            <h2 class="card-title">Ім'я: ${name}</h2>
            <p class="card-text">Вага: ${weight}</p>
            <p class="card-text">Ріст: ${height}</p>
        
            <p class="card-text"><b>Уміння</b></p>
            <ul class="list-group">
              ${abilities.reduce((html, {ability}) => html + `
                <li class="list-group-item">${ability.name}</li>
              `, "")}
            </ul>
          </div>
        </div>
`


function renderPokemons(query) {
  getPokemon(query)
    .then(pokemon => {
      cardContainer.insertAdjacentHTML("afterbegin", getPokemonHTML(pokemon))
      console.log(pokemon);
    })
    .catch(error => alert(error))
}



fetch('https://pokeapi.co/api/v2/ability/31/', {
  method: "GET",
  headers: {
    "Content-Type": "application/pdf",
  }
})