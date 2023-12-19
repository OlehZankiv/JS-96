/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {
  #timerElement = null;
  #intervalId = null;

  #localTime = 0;

  set #time(newTime) {
    this.#localTime = newTime;
    this.#render();
  }

  get #time() {
    return this.#localTime;
  }


  constructor(selector) {
    this.#timerElement = document.querySelector(selector);
    this.#render();
  }

  start() {
    this.#intervalId = setInterval(() => {
      this.#time += 1000;
    }, 1000);
  }

  stop() {
    if (this.#intervalId) {
      clearInterval(this.#intervalId);
      this.#intervalId = null;
    }
  }

  reset() {
    this.#time = 0;
  }

  /*
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщається годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   */
  #getTimeComponents() {
    const hours = this.#pad(
      Math.floor((this.#time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.#pad(Math.floor((this.#time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.#pad(Math.floor((this.#time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  #render() {
    if (!this.#timerElement) return;

    const {hours, mins, secs} = this.#getTimeComponents();

    this.#timerElement.textContent = `${hours}:${mins}:${secs}`
  }

  /*
   * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
   */
  #pad(value) {
    return String(value).padStart(2, "0");
  }
}

const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const resetBtn = document.querySelector("button[data-action-reset]");

const timer = new Timer(".clockface");

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));
resetBtn.addEventListener("click", timer.reset.bind(timer));


// const user = {
//   nickname: "Oleh",
//   showName() {
//     console.log(this.nickname);
//   }
// }

// user.showName()


// function foo(callback) {
//   callback();
// }

// foo(user.showName.bind(user))

// function counterCreator() {
//   let count = 0;

//   return () => {
//     count++;
//     return count;
//   }
// }


// const counter = counterCreator();

// counter();
// counter();
// counter();
// counter();
// console.log(counter());

// const counter2 = counterCreator();

// console.log(counter2());