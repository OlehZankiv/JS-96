/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
//  */



// class Enemy {
//     health = 100;
//     speed = 100;
//     damage = 0;

//     constructor(health, speed, damage) {
//         if(this.__proto__ === Enemy.prototype) {
//             console.error("You can't create just enemy, it's abstract");
//             return;
//         }

//         this.health = health;
//         this.speed = speed;
//         this.damage = damage;
//     }
// }



// class Orc extends Enemy {
//     axeModification = 1;

//     constructor(health, speed, damage, axeModification) {
//         super(health, speed, damage);

//         this.axeModification = axeModification;
//     }

//     get hitDamage() {
//        return this.damage * this.axeModification;
//     }
// }

// const urukHai = new Orc(100, 100, 50, 1.25);


// class DarkElph extends Enemy {
//     arrowModification = 1;

//     constructor(health, speed, damage, arrowModification) {
//         super(health, speed, damage);

//         this.arrowModification = arrowModification
//     }


//     get shotDamage() {
//         return this.damage * this.arrowModification;
//     }

//     get hitDamage() {
//         return this.damage;
//     }
// }

// const legolas = new DarkElph(50, 120, 30, 1.5);
