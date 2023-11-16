// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// Кнопка "Load More"

// *********************** Кнопка "Load More" ************************** \\

// https://api.themoviedb.org/3/trending/movie/week?api_key=92a9a9e3708a3e9451b7037d5906879a&page=500

const refs = {
  movieList: document.querySelector(".js-movie-list"),
  loadMoreBtn: document.querySelector(".js-load-more "),
};

const classes = {
  loadMoreHidden: "load-more-hidden",
};

/*
1. стоврюємо змінну для сторінок(page = 1) -> робимо запит на сервер і завантажуємо дані першої сторінки(п.3) -> показуємо кнопку
2. вішаємо слухача подій на кнопку по кліку
  2.1. інкрементуємо нашу сторінку
  2.2. блокуємо кнопку лоад мор
  2.3. викликати функцію для запиту на сервер(п.3) і передали в неї номер сторінки
  2.4. перебрати масив результатів і на його основі створити розмітку(в окремій функції)
  2.5. відмальовуємо розмітку на сторінці
  2.6. розблоковуємо кнопку лоад мор
  2.7. робимо перевірку на те, чи існують ще дані на сервері(перевіряємо номер сторінки), якщо ж ми дійшли до кінця коллекції - ховаємо кнопку
3. описати функцію для запиту на сервер (в якості параметру очікуємо номер сторінки, за дефолтом ставимо 1)
  3.1. повертаємо результат виклику ф-ції фетч(всередині робимо запит і стандартні перевірки)
*/

let page = 1;

serviceMovies()
  .then((data) => {
    refs.movieList.innerHTML = createMarkup(data.results);

    if (data.page < data.total_pages && data.page < 500) {
      refs.loadMoreBtn.classList.remove(classes.loadMoreHidden);
      refs.loadMoreBtn.addEventListener("click", handleLoadMore);
    }
  })
  .catch((err) => {
    console.log(err);
  });

function handleLoadMore() {
  page += 1;
  refs.loadMoreBtn.disabled = true;
  serviceMovies(page)
    .then((data) => {
      refs.movieList.insertAdjacentHTML(
        "beforeend",
        createMarkup(data.results)
      );

      if (data.page >= 500) {
        refs.loadMoreBtn.classList.add(classes.loadMoreHidden);
        refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
        return;
      }

      refs.loadMoreBtn.disabled = false;
    })
    .catch((err) => {
      console.log(err);
    });
}

function serviceMovies(page = 1) {
  const BASE_URL = "https://api.themoviedb.org/3";
  const END_POINT = "trending/movie/week";
  const API_KEY = "92a9a9e3708a3e9451b7037d5906879a";

  const params = new URLSearchParams({
    api_key: API_KEY,
    page,
  });

  // return fetch(`${BASE_URL}/${END_POINT}?${params}`).then((resp) => {
  //   if (!resp.ok) {
  //     throw new Error(resp.statusText);
  //   }
  //   return resp.json();
  // });

  return axios
    .get(`${BASE_URL}/${END_POINT}?${params}`)
    .then(({ data }) => data);
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        poster_path,
        title,
        vote_average,
        release_date,
      }) => `<li class="movie-card">
  <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
    <div class="movie-info">
      <h2>${title}</h2>
      <p>Release date:${release_date}</p>
      <p>Vote average: ${vote_average}</p>
    </div>
  </li>`
    )
    .join("");
}

//! =========================  Observer API ========================= !\\
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// const refs = {
//   container: document.querySelector(".js-movie-list"),
//   guard: document.querySelector(".js-guard"),
// };

// const options = {
//   root: null,
//   rootMargin: "300px",
//   threshold: 0,
// };

// const observer = new IntersectionObserver(handlerPagination, options);
// let page = 1;

// serviceMovie()
//   .then((data) => {
//     selectors.container.insertAdjacentHTML("beforeend",createMarkup(data.results));

//     if (data.page < data.total_pages) {
//       observer.observe(selectors.guard);
//     }
//   })
//   .catch((err) => console.log(err));

// function serviceMovie(page = 1) {
//   const BASE_URL = "https://api.themoviedb.org/3";
//   const END_POINT = "/trending/movie/week";
//   const API_KEY = "345007f9ab440e5b86cef51be6397df1";
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//         <li class="movie-card">
//           <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//           <div class="movie-info">
//               <h2>${original_title}</h2>
//               <p>Release Date: ${release_date}</p>
//               <p>Vote Average: ${vote_average}</p>
//           </div>
//          </li>`
//     )
//     .join("");
// }

// function handlerPagination(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       page += 1;
//       serviceMovie(page)
//         .then((data) => {
//           selectors.container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//           if (data.page >= 500) {
//             observer.unobserve(entry.target);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   });
// }
