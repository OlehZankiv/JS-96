/**
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

const createRequest = async (endpoint, config = {}) => {
    config.headers = {
        "Content-Type": "application/json",
        ...config.headers,
    }

    const response = await fetch(BASE_URL + endpoint, config);

    if (!response.ok) {
      throw new Error("Request is not ok: " + response.statusText);
    }

    return response.json();
}



/**
 * Read (GET)
 */

const getBooks = () => {
  return createRequest("book");
}

/**
 * Create (POST)
 */

const createBook = (book) => {
  return createRequest("book", {
    method: "POST",
    body: JSON.stringify(book),
  });
}


/**
 * Update (PUT/PATCH)
 */


const updateBook = (book) => {
  return createRequest("book/" + book.id, {
    method: "PUT",
    body: JSON.stringify(book),
  });
}
/**
 * Delete (DELETE)
 */

const deleteBook = (id) => {
  return createRequest("book/" + id, {
    method: "DELETE",
  });
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


const render = () => {
    getBooks()
        .then((books) => {
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
        })
}

render();


// Delete book

const handleCloseButton = (element) => {
    if (!element.classList.contains("delete")) return;

    const bookId = element.dataset.id;

    deleteBook(bookId)
        .then(({ id }) => {
            if (id) {
                allBooks = allBooks.filter(book => book.id !== id);
                document.querySelector(`.book[data-bookid="${id}"]`).remove();
            }
        });
}

// Update Book

const handleSaveButton = (element) => {
    if (!element.classList.contains("save-pointer")) return;

    const bookId = element.dataset.id;
    const book = allBooks.find((book) => book.id === bookId);

    const pointerInput = document.querySelector(`.book[data-bookid="${bookId}"] .pointer`);

    updateBook({
        ...book,
        pointer: pointerInput.value,
    })
        .then(() => {
            alert("Book is updated succesfully")
        })
}

booksList.addEventListener("click", (event) => {
    const element = event.target;

    handleCloseButton(element);
    handleSaveButton(element);
})


// Create Book

createBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData =  new FormData(e.currentTarget);

  const book = {};

  formData.forEach((value, key) => book[key] = value);
  
  createBook(book).then(render)
})