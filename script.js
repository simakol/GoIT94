// *********Подія сlick********* \\
// Натискаючи на кнопку "Click me" змусь червоний квадратик зміщуватись на 50px по діагоналі

// const btn = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");

// btn.addEventListener("click", handleClick);
// box.addEventListener("click", handleClick);

// let step = 0;

// function handleClick() {
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }

// *********Подія input********* \\
// Виводь в консоль все що користувач вводить в input
// input - подія яка спрацьовує на кожний ввід(або видалення) символу в полі вводу
// const input = document.querySelector(".js-user-name");

// input.addEventListener("input", handleInput);

// function handleInput(event) {
//   // event - це обʼєкт події, у якому зберігається вся інформація про поточну подію(яка нам може бути корисна)
//   // event.currentTarget - властивість у якій зберігається посилання на ДОМ елемент, на якому висить обробник подій (те, що в лівої стороні від крапки у addEventListener). Доступний тільки на момент виклику.
//   console.log(event.currentTarget.value);
// }

// *********Подія change ********* \\
// change - подія, яка спрацює на зміну поля вводу і втрату фокусу(якщо ви по новій сфокусуєтесь на полі, не зміните його і втратите фокус - подія не спрацює)

// const input = document.querySelector(".js-user-name");

// input.addEventListener("change", handleInput);

// function handleInput(event) {
//   console.log(event.currentTarget.value);
// }

// *********Подія blur********* \\
// Користувач вводить в input своє ім'я після втрати фокусу отримує alert з вітальним повідомленням
// blur - подія, яка спрацьовує на втрату фокусу з елементу

// const input = document.querySelector(".js-user-name");

// input.addEventListener("blur", handleInput);

// function handleInput(event) {
//   console.log(event.currentTarget.value);
// }

// *********Подія submit********* \\
// Опрацюй форму та збери фідбек користувача в об'єкт
// submit - подія, яка вішається завжди на всю форму, спрацьовує тоді, коли ви натискаєте на кнопку сабміту для відправки форми. За замовчуванням перезавантажує сторінку браузера.

// const form = document.querySelector(".js-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault(); // відміняємо поведінку браузеру за замовчуванням (перезавантаження сторінки)
//   const { comment, email, password } = event.currentTarget.elements;

//   const feedback = {
//     comment: comment.value,
//     email: email.value,
//     password: password.value,
//   };

//   console.log(feedback);
//   event.currentTarget.reset();
// }

// *********Подія keydown  ********* \\

// keydown - подія клавіатури, спрацювує на натискання клавіші

// document.addEventListener("keydown", handlePress);

// function handlePress(event) {
//   //event.code - код клавіші (наприклад "KeyR") - індетифікує позицію клавіші на клавіатурі в не залежності від розкладки клавіатури (тобто, якщо у вас буде украхнаська розкладка, то код клавіші все одно буде таким, як і на англ). Ви будете це використовувати, якщо вам треба завʼязати комбінацію на фізичне розташування клавіші в не залежності від мови.
//   // event.key - символ який було натиснуто (залежить від розкладки на клавіатурі)

//   // console.log(event);

//   if (event.code === "Backspace") {
//     console.log("=)");
//   } else {
//     console.log("=(");
//   }
// }

// *********Обробка комбінацій клавіш********* \\

// document.addEventListener("keydown", handlePress);

// function handlePress(event) {
//   console.log(event);
//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyC") {
//     event.preventDefault();
//   }
// }

// ***************Практика************** \\
// Реалізуй пошук автомобілів по сайту
// Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
// Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
  },
  {
    id: 2,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const list = document.querySelector(".js-list");
const form = document.querySelector(".js-form");

list.insertAdjacentHTML("beforeend", createMarkup(cars)); // відмалювали розмітку усіх машин
form.addEventListener("submit", handleSubmit); // повісили обробник подій по сабміту на форму

function handleSubmit(event) {
  event.preventDefault(); // відключили перезавантаження сторінки

  const { query, options } = event.currentTarget.elements; // витягнули з форми елементи форм (інпут і селект)

  // const {
  //   elements: { query, options },
  // } = event.currentTarget; // витягнули з форми елементи форм (інпут і селект)
  console.log(query.value, options.value);

  const result = cars.filter(
    (car) =>
      query.value.toLowerCase().trim() === car[options.value].toLowerCase()
  ); // car["type"] ||  car["car"] -> car.type || car.car
  // фільтруємо масив з обʼєктами машин, і залишаємо тільки ті, які підходять під пошук, тобто ті, у яких марка або модель співпадає з тим, що ми написали в інпут (порівняння відбувається в залежності від того, що вибере користува, або car або type)

  list.innerHTML = createMarkup(result); // стираємо всі машини залишаючи тільки ті, які підходять під умову пошуку
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) => `
      <li data-id="${id}" class="car-card">
        <h2 class="car-title">${car}</h2>
        <img
          src="${img}"
          alt="${car} ${type}"
          class="car-image"
        />
        <h3 class="car-type">${type}</h3>
        <span class="car-price">${price}</span>
      </li>
  `
    )
    .join("");
}
