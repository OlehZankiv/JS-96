/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */



// fetch("telegram.com/send-message", {
//   method: "POST",
//   headers: {
//     "Authorization": "awidawoidjowijdwoidjihwd"
//   },
//   body: JSON.stringify({
//     message:"WDuhawiduhwoauhdouawhduawhdiuhw"
//   }
// });

// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "128326aawdwdwdwdwd82-dawd"

// const getBaseUrl = () => {
//   const url = new URL(BASE_URL);
//   url.searchParams.append("key", API_KEY)

//   return url;
// }


// const url = getBaseUrl();
// url.searchParams.append("q", "black")


// fetch(url)
//   .then(res => res.json())
//   .then(images => {
//     document.body.insertAdjacentHTML("beforeend", `
//       <img src="${images.hits[0].largeImageURL}"/>
//     `)
//   })