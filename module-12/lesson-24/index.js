/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при сабміті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо спінер поки йде запит
 */


const api = axios.create({
  baseURL: "http://newsapi.org/v2/",
  params: {
    apiKey: "abeb1fead2de446d8cf3c831a721e668",
    language: "en"
  }
});


const searchForm = document.querySelector(".search-form");
const articlesContainer = document.querySelector(".articles");
const loadMoreBtn = document.querySelector('button[data-action="load-more"]');
const loadMoreSpinner = document.querySelector('.load-more-spinner')

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



const getArticles = async (params) => {
  try {  
    const response = await api.get("everything", { params });
    return response.data;
  } catch(error) {
    console.error(error);
  } 
}

const createGetArticlesRequest = (q) => {
  let page = 1;
  let isLastPage = false;
  const pageSize = 1;

  return async () => {
    try {
      if (isLastPage) return [];

      const { articles, totalResults } = await getArticles({ page, pageSize, q });
      
      if (page >= Math.ceil(totalResults / pageSize)) {
        isLastPage = true;
      }

      page += 1;

      return articles;
    } catch(error) {
      console.error(error);
    }
  };
}


let doFetch = null;

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (doFetch != null) {
    loadMoreBtn.removeEventListener("click", doFetch);
    doFetch = null;
  }

  const data = new FormData(event.currentTarget);
  const query = data.get("query");

  articlesContainer.innerHTML = "";

  const fetchArticles = createGetArticlesRequest(query);

  doFetch = async () => {
    const articles = await makePromiseWithSpinner({
      promise: fetchArticles,
      spinner: loadMoreSpinner
    })

    renderArticles(articles);
  }

  await makePromiseWithSpinner({
    promise: doFetch,
    spinner: loadMoreSpinner
  });

  loadMoreBtn.addEventListener("click", doFetch);
});


const makePromiseWithSpinner = async ({ promise, spinner, className = 'is-hidden' }) => {
  spinner.classList.remove(className);

  const response = await promise();

  spinner.classList.add(className);

  return response;
};



// const foo1 = async () => {
//   const response = await fetch("https://www.com");

//   const json = await response.json();

//   console.log(json);

//   return json;
// };

// foo1()


// new Promise((res, rej) => {
//   res("HELLO");
// }).then(res => {
//   console.log(res);
// })


// const foo2 = () => {
//   return fetch("https://www.com")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
