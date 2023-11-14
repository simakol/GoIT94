// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\

// fetch(URL, options) - функція яка робить запит на сервер, приймає посилання(ресурс) і обʼєкт налаштувань(туди можна передавати всяку інформацію про запит, наприклад, заголовки, тіло, тип запиту і тд). Фетч за замовчуванням робить GET (запит для отримання інформації з ресурсу). Завжди повертає проміс!!!!

// const URL = "https://rickandmortyapi.com/api/character";

// fetch(URL)
//   .then((response) => console.log(response))

// *********Обробка помилок та парсинг відповіді********* \\

// fetch(URL)
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error("404 not found!");
//     }

//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(`Fetch error: ${err}`));

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// http://api.weatherapi.com/v1/forecast.json?key=66f9e81543404d02beb160521230808&q=Paris&days=3&lang=uk

/*
1. отримаємо рефси
2. вішаємо слухач подій на форму по сабміт
  2.1. превент дефолт 
  2.2. збираємо дані з полів(велью міста і днів)
  2.3. робимо запит на сервер (в окремій функції п.3)
  2.4. малюємо карточки погоди (в окремій функції для створення розмітки п.4)
3. напишемо функцію для запиту на сервер(вона буде приймати місто та дні)
  3.1. створюємо константу для посилання і формуємо параметри запиту
  3.2. посилаємо запит і отримаємо дані(оброблюємо помилки)
4. напишемо ф-цію для створення розмітки карточок
*/

const refs = {
  form: document.querySelector(".js-search-form"),
  list: document.querySelector(".js-list"),
  cityName: document.querySelector(".js-city-name"),
};

refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { city, days } = form.elements;

  serviceWeather(city.value, days.value)
    .then(({ forecast, location: { name, country } }) => {
      refs.list.innerHTML = createMarkup(forecast.forecastday);
      refs.cityName.textContent = `${name}, ${country}`;
    })
    .catch((err) => {
      console.log(err);
      Notiflix.Notify.failure(err.message);
      refs.list.innerHTML = "";
      refs.cityName.textContent = "";
    })
    .finally(() => form.reset());
}

function serviceWeather(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const ENDPOINT = "forecast.json";
  const API_KEY = "66f9e81543404d02beb160521230808";

  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days,
    lang: "uk",
  });

  return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then((response) => {
    if (!response.ok) {
      throw new Error("404 not found!");
    }

    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `
      <li class="weather-card">
        <img src="${icon}" alt="${text}" class="weather-icon">
        <h2 class="date">${date}</h2>
        <h3 class="weather-text">${text}</h3>
        <h3 class="temperature">${avgtemp_c} °C</h3>
      </li>
      `
    )
    .join("");
}
