/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 * append vs appendChild
 */

const colorsHTML = options.reduce((html, option) => html + `
  <div 
    data-color="${option.color}"
    title=${option.label} 
    style="background-color: ${option.color}"
    class="color-picker__option"
  ></div>
`, "")

colorPickerContainerEl.insertAdjacentHTML("beforeend", colorsHTML)

console.log(colorsHTML);

// const colorElements = options.map((option) => {
//   const colorElement = document.createElement('div');
//   colorElement.className = "color-picker__option";
//   colorElement.title = option.label;
//   colorElement.style.backgroundColor = option.color;

//   return colorElement;
// })

// colorPickerContainerEl.append(...colorElements);