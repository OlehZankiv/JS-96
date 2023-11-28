/*
 * Створення та додавання елементів
 */


const newSection = document.createElement("section");
newSection.classList.add("section-class-name");
newSection.textContent = "I'm new section";

newSection.style.backgroundColor = "red";
newSection.style.padding = "8px 16px";

const title = document.createElement("h2");
title.textContent = "I'm title"


// console.log(newSection);

// document.body.appendChild(newSection);
// document.body.appendChild(title);
document.body.append(title, newSection)



const aboutItem = document.querySelector(".site-nav__item:nth-child(1)");
aboutItem.remove();



const newListItem = document.createElement("li");
newListItem.classList.add("site-nav__item");

const newListItemLink = document.createElement("a");
newListItemLink.href = "";
newListItemLink.classList.add("site-nav__link");
newListItemLink.textContent = "New Item";

newListItem.appendChild(newListItemLink);

const navigation = document.querySelector(".site-nav");

navigation.lastChild.before(newListItem);


/*
 * Створюємо заголовок
 */
// const titleEl = document.createElement('h1');

/*;
/*
 * Створюємо та додаємо новий пункт меню
 */