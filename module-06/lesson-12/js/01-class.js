/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */


// class Car {
//     static COLOR_OF_WINDOW = 'TRANSPARENT';

//     static calculateSpeedWithEffect(speed) {
//         return 9.81 * 1.24 * speed;
//     }
    
//     speed = 0;
//     model = "";
//     color = "#000000";

//     #key = "";

//     get key() {
//         return this.#key;
//     }

//     set key(newKey) {
//         if (this.#key) {
//             console.error("You have already have a key");
//             return;
//         }

//         this.#key = newKey;
//     }

//     constructor(speed, model, color, key) {
//         this.speed = speed;
//         this.model = model;
//         this.color = color;

//         this.#key = key;
//     }

//     start() {
//         if (this.#key) {
//             console.log(`${this.model} Started.`);
//         } else {
//             console.log(`${this.model} Started. Had Speed: ${this.speed}`);
//         }
//     }

//     stop() {
//         console.log(`${this.model} Stoped with color ${this.color}`);
//     }
// }




// const bmw = new Car(200, "BMW", "#ffffff");
// const audi = new Car(225, "Audi" , "red");
// const tesla = new Car(80, "Tesla", "gray", "abcd-abfc-123dfc-fadcdf");

// tesla.start();

// audi.key = "NEW KEY";

// console.log(audi.key)




// console.log(bmw);
// console.log(audi);
// console.log(tesla);


// bmw.start();
// audi.start();

// bmw.stop();
