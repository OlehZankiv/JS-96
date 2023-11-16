/**
 * Напиши клас Bloger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який повертає рядок: Bloger ${email} is ${age} years old and has ${numPosts} posts.
 * - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

class Bloger {
  email;
  age;
  numberOfPosts;
  topics;

  constructor(params) {
    this.email = params.email ?? "";
    this.age = params.age ?? 0;
    this.numberOfPosts = params.numberOfPosts ?? 0;
    this.topics = params.topics ?? [];
  }

  getInfo() {
    return `Bloger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Bloger({
  email: "mango@mail.com",
  age: 18,
  numberOfPosts: 24,
  topics: ["tech", "cooking"]
})




console.log(mango.getInfo()); // Bloger mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // Bloger mango@mail.com is 24 years old and has 25 posts
