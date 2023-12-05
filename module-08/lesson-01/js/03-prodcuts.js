/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const container = document.querySelector(".products");

container.innerHTML = products.reduce((html, product) => html + `
      <li class="item product-item" data-productid="${product.id}">
        <img src="${product.img}" alt="${product.name}" width="300"/>
        <h2>${product.name}</h2>
        <p>Price: ${product.price} uah</p>
      </li> 
`, "");


container.addEventListener("click", (event) => {
  const productId = event.target.dataset.productid;

  if (productId) {
    const product = products.find(product => product.id.toString() === productId);
    if (!product) return;

    basicLightbox.create(`
      <div class="modal">
        <img src="${product.img}" alt="${product.name}" width="300"/>
        <h2>${product.name}</h2>
        <h3>${product.price} uah</h3>
        <p>${product.description}</p>
      </div> 
	  `).show();
  }
})