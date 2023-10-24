// ******* Додавання прослуховувача подій на кожен елемент ******* \\
// Отримай колір квадратика по якому було здійснено клік
// const boxes = document.querySelectorAll(".js-box");
// console.log(boxes);

// boxes.forEach((box) => {
//   box.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//   console.log("Target:");
//   console.log(event.target);
//   console.log("Current Target:");
//   console.log(event.currentTarget);
//   console.log(`Color: ${event.currentTarget.dataset.color}`);
// }

// ************** Дегегування подій ************** \\
// Отримай колір квадратика по якому було здійснено клік

// const container = document.querySelector(".js-container");

// container.addEventListener("click", handleClick);

// function handleClick(event) {
//   console.log("Target:");
//   console.log(event.target); // посилання на елемент, який викликав подію (або на якому ця подія спрацювала)
//   console.log("Current Target:");
//   console.log(event.currentTarget); // посилання на елемент, на якому висить обробник подій

//   //* var 1
//   // if (event.target.classList.contains("js-box")) {
//   //   console.log(`=== Color: ${event.target.dataset.color} ===`);
//   // }

//   //* var 2

//   if (!event.target.classList.contains("js-box")) {
//     return;
//   }
//   console.log(`=== Color: ${event.target.dataset.color} ===`);
// }

// **************** Занурення і сплиття **************** \\

// const all = document.querySelectorAll("*");

// all.forEach((el) => {
//   el.addEventListener("click", handleClick, true); // addEventListener тепер буде реагувати на занурення
//   el.addEventListener("click", handleClick); // addEventListener на сплиття
// });

// function handleClick(event) {
//   alert(event.currentTarget.nodeName);
// }

// **************** stopPropagation **************** \\

// const red = document.querySelector(".js-box-red");
// const green = document.querySelector(".js-box-green");
// const black = document.querySelector(".js-box-black");

// red.addEventListener("click", handlerClick);
// green.addEventListener("click", handlerClick);
// black.addEventListener("click", handlerClick);

// function handlerClick(evt) {
//   const isConfirm = confirm(
//     `click на елементі ${evt.currentTarget.id} ,викликати метод stopPropagation?`
//   );

//   if (isConfirm) {
//     evt.stopPropagation(); // зупиняє спливання події вище, таким чином ви не будете ціпляти обробники подій які йдуть вище.
//   }
// }

// **************** stopImmediatePropagation **************** \\
// const red = document.querySelector(".js-box-red");

// red.addEventListener("click", firstHandlerClick);
// red.addEventListener("click", secondHandlerClick);
// red.addEventListener("click", thirdHandlerClick);

// function firstHandlerClick(e) {
//   alert("First handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation(); // теж зупиняє спливання події, але при цьому й зупиняє обробку всіх інших обробників на тип події на поточному елементі
//   }
// }

// function secondHandlerClick(e) {
//   alert("Second handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// function thirdHandlerClick(e) {
//   alert("Third handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з детальною інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Монітор",
    price: 3000,
    description: "23-дюймовий монітор з Full HD роздільною здатністю.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Ноутбук",
    price: 20000,
    description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Смартфон",
    price: 8000,
    description: "Оснащений потрійною камерою та багатоядерним процесором.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Планшет",
    price: 12000,
    description:
      "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
  },
];
