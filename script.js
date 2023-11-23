// ***************** Конструкція async await ***************** \\

// function serviceCountry(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     return res.json();
//   });
// }

// serviceCountry("Ukraine")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/*
1. async - оголошує асинхронну фукнцію і в цій фукнції можна використовувати оператор await. 
2. Асинхронна фукнція завжди повертає проміс, навіть якщо в return ви написали щось інше
3. await - це оператор який можна використовувати лише всередині асинхронних функцій. Цей оператор заморожує виконання фукнції до тих пір, поки проміс не виконається(стан fullfilled або стан rejected), а коли проміс перейшов у якийсь зі станів цей оператор витягує дані(результат промісу) і ми можемо зберегти цей результат у якусь константу. Це дуже зручно для імітації звичайного послідовного синхронного код, але на справді ми все ще пишемо асинхронний код.
*/

// async function serviceCountry(name) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }

//   const data = await res.json();

//   return data;
// }

// serviceCountry("Ukraine")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//! axios

// async function serviceCountry(name) {
//   const { data } = await axios.get(
//     `https://restcountries.com/v3.1/name/${name}`
//   );

//   return data;
// }

// serviceCountry("Ukraine")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

// async function fn() {
//   return 5;
// }

// console.log(fn());

// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\

// const serviceCountry = async (name) => {
//   const { data } = await axios.get(
//     `https://restcountries.com/v3.1/name/${name}`
//   );

//   return data;
// };

// serviceCountry("Ukraine")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ****** Function expression ****** \\

// const serviceCountry = async function (name) {
//   const { data } = await axios.get(
//     `https://restcountries.com/v3.1/name/${name}`
//   );

//   return data;
// };

// serviceCountry("Ukraine")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ****** Object method ****** \\

// const obj = {
//   countyName: "Ukraine",
//   async serviceCountry() {
//     const { data } = await axios.get(
//       `https://restcountries.com/v3.1/name/${this.countyName}`
//     );

//     return data;
//   },
// };
// obj
//   .serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ************ Обробка за допомогою then та catch ************ \\
// async function serviceCountry(name) {
//   const { data } = await axios.get(
//     `https://restcountries.com/v3.1/name/${name}`
//   );

//   return data;
// }

// serviceCountry("Ukraine")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ************ Обробка за допомогою try та catch ************ \\
//!fetch

// async function serviceCountry(name) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     const data = await res.json();

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// serviceCountry("Ukraine").then((data) => console.log(data));

//!axios
// async function serviceCountry(name) {
//   try {
//     const { data } = await axios.get(
//       `https://restcountries.com/v3.1/name/${name}`
//     );

//     return data;
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// serviceCountry("Ukraine111").then((data) => console.log(data));

// ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\
// async function serviceCountry() {
//   try {
//     const ukraine = await axios.get(
//       "https://restcountries.com/v3.1/name/Ukraine"
//     );
//     console.log(ukraine.data);
//     const france = await axios.get(
//       "https://restcountries.com/v3.1/name/France"
//     );
//     console.log(france.data);

//     const germany = await axios.get(
//       "https://restcountries.com/v3.1/name/Germany"
//     );
//     console.log(germany.data);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// serviceCountry();

// *********** Паралельні *********** \\

// async function serviceCountry() {
//   try {
//     const countryArr = ["Ukraine", "France", "Germany"];

//     const resps = countryArr.map(async (country) => {
//       const { data } = await axios.get(
//         `https://restcountries.com/v3.1/name/${country}`
//       );
//       return data;
//     });

//     const results = await Promise.all(resps);

//     console.log(results);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// serviceCountry();

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/

const refs = {
  form: document.querySelector(".js-search"),
  formContainer: document.querySelector(".js-form-container"),
  addBtn: document.querySelector(".js-add"),
  list: document.querySelector(".js-list"),
};

/*
1. вішаємо слухач на кнопку для додавання поля
    1.1. додаємо розмітку нового інпуту
2. вішаємо слухач на форму по події сабміт
    2.1. зупиняємо перезавантаження сторінки
    2.2. збираємо дані з форми в масив країн (та валідуємо їх)
    2.3. викликаємо функцію для запиту на сервер країн
    2.4 викликаємо функцію для запиту на сервер погоди
    2.5. показуємо розмітку прогнозу на основі відповіді від серверу викликаючи функцію яка створює розмітку
    2.6. робимо ресет для нашої форми
3. описуємо фукнцію для запиту на столиці (+ додати фільтрацію якщо запит неуспішний, то він не попадає в масив результатів)
4. опсисуємо функцію для запиту на погоду
*/

refs.addBtn.addEventListener("click", handleAddField);
refs.form.addEventListener("submit", handleSubmitCountries);

function handleAddField() {
  refs.formContainer.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country" />'
  );
}

async function handleSubmitCountries(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const countries = formData
    .getAll("country")
    .map((value) => value.trim())
    .filter((value) => value);

  try {
    const capitals = await serviceCountries(countries);
    const weather = await serviceWeater(capitals);

    refs.list.innerHTML = createMarkup(weather);
  } catch (err) {
    console.log(err);
  } finally {
    event.target.reset();
  }
}

async function serviceCountries(countries) {
  const resps = countries.map(async (country) => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${country}`
    );
    return data;
  });

  const results = await Promise.allSettled(resps);

  return results
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeater(capitals) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const ENDPOINT = "forecast.json";
  const API_KEY = "66f9e81543404d02beb160521230808";

  const resps = capitals.map(async (capital) => {
    const { data } = await axios.get(
      `${BASE_URL}/${ENDPOINT}?key=${API_KEY}&q=${capital}&lang=uk`
    );
    return data;
  });

  const results = await Promise.allSettled(resps);

  return results
    .filter(({ status }) => status === "fulfilled")
    .map(({ value: { current, location } }) => {
      const {
        temp_c,
        condition: { text, icon },
      } = current;
      const { country, name } = location;

      return { temp_c, text, icon, country, name };
    });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ temp_c, text, icon, country, name }) => `
        <li class="weather-card">
          <img src="${icon}" alt="${text}" class="weather-icon">
          <h2>${name}, ${country}</h2>
          <h3 class="weather-text">${text}</h3>
          <h3 class="temperature">${temp_c} °C</h3>
        </li>
        `
    )
    .join("");
}
