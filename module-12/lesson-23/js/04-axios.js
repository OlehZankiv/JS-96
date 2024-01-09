/**
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */


const instance = axios.create({
  baseURL: "https://658db3c37c48dce94739a017.mockapi.io/api/v1/",
  headers: {
    "Content-Type": "application/json"
  }
});


instance.interceptors.request.use(
  (config) => {
    
    return config;
  }
)

instance.interceptors.response.use(
  (response) => {
    return response;
  }
)


// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


const getAxiosData = (res) => res.data;

/**
 * Read (GET)
 */

const getBooks = async () => {
  return getAxiosData(await instance.get("book"));
}

/**
 * Create (POST)
 */

const createBook = async (book) => {
  return getAxiosData(await instance.post("book", book));
}


/**
 * Update (PUT/PATCH)
 */


const updateBook = async (book) => {
  return getAxiosData(await instance.put(`book/${book.id}`, book));
}
/**
 * Delete (DELETE)
 */

const deleteBook = async (id) => {
  return getAxiosData(await instance.delete(`book/${id}`));
}



/**
 * ЗАДАЧА:
 * 
 * Написати власну бібліотеку за допомогою https://mockapi.io/.
 * На сторінці відображаються згенеровані книги у певному списку.
 * 
 * Користувач має мати можливість користуватись наступним функціоналом:
 * 1. Переглядати список книг;
 * 2. Відкривати форму, вводити дані про книгу і добавляти її список.
 * 3. Видаляти книгу зі списку;
 * 4. Оновлювати закладку в книжці,
 * тобто змінювати в інпуті сторінку, де користувач зупинився при читанні.
 * 
 * Всі дані повинні зберігатись і оброблятись за допомогою сервера.
 * Сторінка повинна працювати за методологією AJAX.
 */

const booksList = document.querySelector(".books-list")
const createBookForm = document.querySelector(".create-book-form")

let allBooks = [];


const render = async () => {
    const books = await getBooks();

    allBooks = books;

    const booksHTML = allBooks.reduce((html, {id, titleImage, name, author, price, pointer }) => html + `
        <div class="book" data-bookid="${id}" >
            <img src="${titleImage}"/>
            <p class="name">${name}</p>
            <p class="author">${author}</p>
            <p class="price">$${Number(price)}</p>
            <div class="pointer-block">
                <input name="pointer" type="number" value="${pointer}" class="pointer" placeholder="Book pointer"/>
                <button type="submit" class="save-pointer" data-id="${id}">Save</button>
            </div>
            <button type="button" class="delete" data-id="${id}">X</button>
        </div>
    `, "")

    booksList.innerHTML = booksHTML;
}

render();


// Delete book

const handleCloseButton = async (element) => {
    if (!element.classList.contains("delete")) return;

    const bookId = element.dataset.id;

    try {
      const { id } = await deleteBook(bookId);
      
      if (id) {
          allBooks = allBooks.filter(book => book.id !== id);
          document.querySelector(`.book[data-bookid="${id}"]`).remove();
      }
    } catch(error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data)
      }
    }
}

// Update Book

const handleSaveButton = async (element) => {
    if (!element.classList.contains("save-pointer")) return;

    const bookId = element.dataset.id;
    const book = allBooks.find((book) => book.id === bookId);

    const pointerInput = document.querySelector(`.book[data-bookid="${bookId}"] .pointer`);

    const updatedBook = await updateBook({
        ...book,
        pointer: pointerInput.value,
    })

    alert(`Book ${updatedBook.name} is updated succesfully`);
}

booksList.addEventListener("click", (event) => {
    const element = event.target;

    handleCloseButton(element);
    handleSaveButton(element);
})


// Create Book

createBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData =  new FormData(e.currentTarget);

  const book = {};

  formData.forEach((value, key) => book[key] = value);
  
  const createdBook = await createBook(book);
  
  render(createdBook)
})
