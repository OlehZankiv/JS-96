/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 * apiKey = abeb1fead2de446d8cf3c831a721e668
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при сабміті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо спінер поки йде запит
 */


const api = axios.create();


const searchForm = document.querySelector(".search-form");
const articlesContainer = document.querySelector(".articles");
const loadMoreBtn = document.querySelector('button[data-action="load-more"]');

function renderArticles(articles = []) {
  const markup = articles.reduce((html, { url, urlToImage, title, author, description }) => html + `
      <li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <article>
            <img src="${urlToImage}" alt="${title}" width="480">
            <h2>${title}</h2>
            <p>Posted by: ${author}</p>
            <div class="description-wrapper">
              <p class="description">${description}</p>
            </div>
          </article>
        </a>
      </li>`
    , "");

  articlesContainer.insertAdjacentHTML("beforeend", markup);
}