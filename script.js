// ******************************Lazy Loading****************************** \\

// Тестовий масив для lazy-loading
// const cats = [
//   "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//   "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//   "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//   "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//   "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//   "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//   "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//   "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//   "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
// ];

// const list = document.querySelector(".js-cats");

// list.insertAdjacentHTML("beforeend", createMarkup(cats));

// function createMarkup(arr) {
//   return arr
//     .map(
//       (link) => `
//   <li>
//     <img src="${link}" alt="cat" width="300" loading="lazy">

//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iusto quis repudiandae a officiis repellat, illo, nihil fugiat temporibus inventore dolorum eaque explicabo ratione est ipsum soluta molestias tempora at necessitatibus sunt voluptate recusandae. Nostrum repellat veniam suscipit magnam vitae assumenda eius facilis iure voluptate, obcaecati dolores, cupiditate delectus! Illo.</p>
//     </li>
//   `
//     )
//     .join("");
// }

// *****************************Throttle & Debounce***************************** \\

// Throttle - спеціальний метод бібліотеки lodash який контролює виклики функції обробника подій і викликає її раз на якусь кількість мілісекунд поки відбувається подія
// третім аргументом тротл приймає обʼєкт з налаштуваннями, де можна вказати дві опіції: leading(спрацьовує на початку події) і trailing(спрацьовує в кінці події)

// const input = document.querySelector(".js-search");

// input.addEventListener(
//   "input",
//   _.throttle(handleSearch, 300, {
//     leading: true,
//     trailing: false,
//   })
// );

// function handleSearch(event) {
//   console.log(event.target.value);
// }

// Debounce - спеціальний метод бібліотеки lodash який спрацьовує на паузу після події. Якщо відбувається якась подія і після кінця цієї події була пауза в N мілісекунд - запускається функція обробника.

// const input = document.querySelector(".js-search");

// input.addEventListener(
//   "input",
//   _.debounce(handleSearch, 300, {
//     leading: false,
//     trailing: true,
//   })
// );

// function handleSearch(event) {
//   console.log(event.target.value);
// }

// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

/*
1. отримаємо рефси
2. створюємо масиви історій для гравця Х і О + створюємо змінну для поточного гравця
3. намалюємо поле з 9 клітинок (+ додати дата айді)
4. вішаємо слухача подій на контейнер
  4.1. Робимо перевірку чи зайнята клітика або що ми клікнули саме на клітинку(що не клікнули по полю). Якщо промазали або клітинка зайнята - вийти з функції обробника подій.
  4.2. Визначити з яким гравцем я взаємодію + створити змінну isWinner = false
  Якщо Х:
    4.2.1. пушимо айді клітинки в масив історії ходів для Х
    4.2.2. якщо довжина масиву історії Х >= 3, то робимо перевірку на переможця. (Переможець визначається якщо масив історій містить переможну комбінацію) якщо виграли isWinner = true
  Якщо О: 
    4.2.3. пушимо айді клітинки в масив історії ходів для О
    4.2.4. якщо довжина масиву історії О >= 3, то робимо перевірку на переможця. (Переможець визначається якщо масив історій містить переможну комбінацію) якщо виграли isWinner = true
  4.3. якщо isWinner === true - то виводимо модальне вікно з переможцем і закінчуємо гру, очистивши всі поля(очистити масиви історії)
  4.4. якщо isWinner === false і сума довжин історій двох гравців === 9 то показуємо нічию і закінчуємо гру
  4.5. показуємо текст контект клітики і змінюємо гравця на іншого (якщо був Х то наступний О, і навпаки)

*/

const content = document.getElementById("content");

const combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

const historyX = [];
const historyO = [];

let currentPlayer = "X";

content.innerHTML = createMarkup();

content.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target === event.currentTarget || event.target.textContent) {
    return;
  }

  let isWinner = false;
  const id = Number(event.target.dataset.id);

  if (currentPlayer === "X") {
    historyX.push(id);
    isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
  } else {
    historyO.push(id);
    isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
  }

  event.target.textContent = currentPlayer;

  if (isWinner) {
    const instance = basicLightbox.create(`
    <div class="box">
        <h1>Player ${currentPlayer} is winner!</h1>
    </div>
    `);

    instance.show();
    resetGame();
    return;
  }

  if (!isWinner && historyX.length + historyO.length === 9) {
    const instance = basicLightbox.create(`
    <div class="box">
        <h1>Tie!</h1>
    </div>
    `);

    instance.show();
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner(history) {
  // перевірка на те що в масиві комбінацій є ХОЧА Б одна комбінація УСІ айді якої є в нашій історії
  return combinations.some((combination) =>
    combination.every((id) => history.includes(id))
  );
}

function resetGame() {
  content.innerHTML = createMarkup();
  currentPlayer = "X";
  historyX.splice(0);
  historyO.splice(0);
}

function createMarkup() {
  let markup = "";

  for (let i = 1; i <= 9; i += 1) {
    markup += `<div data-id="${i}" class="item"></div>`;
  }

  return markup;
}
