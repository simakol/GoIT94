// ******Пошук HTML елементу за допомогою querySelector****** \\

// За назвою тегу

// const elem = document.querySelector("h1")
// const elem = document.getElementsByTagName("h1")

// За назвою класу
// const elem = document.querySelector(".js-title")
// const elem = document.getElementsByClassName("js-title")[0]

// За ID
// const elem = document.querySelector("#title")
// const elem = document.getElementById("title")

// console.dir(elem);

// ******Пошук HTML елементів за допомогою querySelectorAll****** \\
// const liItems = document.querySelectorAll(".js-item");
// console.log(liItems);

// Перетворення колекції до масиву

// const liItemsArr = [...liItems];
// const liItemsArr = Array.from(liItems);
// console.log(liItemsArr);

// ******Створення HTML елементів за допомогою createElement****** \\
// const list = document.querySelector(".js-list");

// const liEl = document.createElement("li");
// const h2El = document.createElement("h2");

// h2El.textContent = "hello world!";

// liEl.appendChild(h2El);
// // liEl.append(h2El)
// list.appendChild(liEl);

// console.dir(liEl)

// ******Створення HTML елементів за допомогою шаблонної розмітки****** \\
// const list = document.querySelector(".js-list");
// const li = "<li><h2>Hello world!</h2></li>";

// Метод insertAdjacentHTML

// list.insertAdjacentHTML("beforeend", li); // додасть в кінець до існуючого

// Властивість innerHTML

// list.innerHTML = li; // видалить всю розмітку що була і замість неї підставить те, що ми передали

// ******Стилізація за допомогою властивості style****** \\

// const color = Math.random() > 0.5 ? "green" : "yellow";

// list.style.color = color;
// list.style.fontSize = "50px";

// ******Стилізація за допомогою властивості classList****** \\

// console.log(list.classList.contains("js-list"));

// Метод add
// list.classList.add("list");

// Метод remove
// list.classList.remove("list");

// Метод toggle
// list.classList.toggle("list");

// ******Системні атрибути****** \\
// const btn = document.querySelector(".js-btn");

// btn.disabled = true;
// btn.disabled = false;
// btn.hidden = true;
// btn.hidden = false;

// методи для роботи з атрибутами
// btn.setAttribute("disabled", true);
// btn.removeAttribute("disabled");
// console.log(btn.getAttribute("disabled"));
// console.log(btn.hasAttribute("disabled"));

// ******Data атрибути****** \\
// const btn = document.querySelector(".js-btn");

// btn.dataset.id = 1;
// btn.dataset.type = "primary";

// console.log(btn.dataset);
// console.log(btn.dataset.id);
// console.log(btn.dataset.type);

// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const list = document.querySelector(".js-list");
// *******Варіант-1******* \\

// createMarkup(cars);

// function createMarkup(arr) {
//   const nodesArr = arr.map(({ id, model, type, price, img }) => {
//     const liEl = document.createElement("li");
//     const h2El = document.createElement("h2");
//     const h3El = document.createElement("h3");
//     const spanEl = document.createElement("span");
//     const imgEl = document.createElement("img");

//     liEl.dataset.id = id;
//     h2El.textContent = model;
//     h3El.textContent = type;
//     spanEl.textContent = price;

//     imgEl.src = img;
//     imgEl.alt = `${model} ${type}`;
//     imgEl.style.width = "300px";

//     liEl.append(h2El, imgEl, h3El, spanEl);
//     return liEl;
//   });

//   console.log(nodesArr);
//   list.append(...nodesArr);
// }

// *******Варіант-2******* \\

createMarkup(cars);

function createMarkup(arr) {
        const markup = arr
    .map(
      ({ id, model, type, price, img }) => `
      <li data-id="${id}">
        <h2>${model}</h2>
        <img
          src="${img}"
          alt="${model} ${type}"
          style="width: 300px"
        />
        <h3>${type}</h3>
        <span>${price}</span>
      </li>
  `
    )
       .join("");

  console.log(markup);

  list.insertAdjacentHTML("beforeend", markup);
}
