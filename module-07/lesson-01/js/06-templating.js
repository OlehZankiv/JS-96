/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

// const titleEl = document.querySelector('.title');

// titleEl.innerHTML = `
//     <div class="actions">
//     <button type="button" data-action="add">Create</button>
//     <button type="button" data-action="remove">Delete</button>
//     <button type="button" data-action="edit">Edit</button>
//     </div>
// `

// console.log(titleEl.innerHTML);

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */


// titleEl.insertAdjacentHTML("afterbegin",
//     `
//     <div class="actions">
//     <button type="button" data-action="add">Create</button>
//     <button type="button" data-action="remove">Delete</button>
//     <button type="button" data-action="edit">Edit</button>
//     </div>
// `)