/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

class User {
  #login;
  #email;

  constructor(config) {
    this.#login = config.login ?? '';
    this.#email = config.email ?? '';
  }


  get login() {
    return this.#login;
  }

  set login(value) {
    if (typeof value === "string" && value.length > 5) {
      this.#login = value;
    }
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    if (typeof value === 'string' && value.length > 8 && value.includes("@")) {
      this.#email = value;
    }
  }
}




// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge


// mango.email = "hello"

// console.log(mango.email);
