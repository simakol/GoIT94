// ******************** CRUD ******************** \\

// Create - POST - створює новий ресурс на сервері, не є ідемпотентним
// Read   - GET - запит, який отримує дані з ресурсу, є ідемпотентним
// Update -
/*
    - PUT - запит, який повністю оновлює дані на сервері, тобто, якщо на сервері у вас був обʼєкт типу { name: "Oleg", age: 28}, ви послали PUT запит з тілом {name: "Vika"} -> в результаті цієї дії на сервері буде обʼєкт {name: "Vika"}, є ідемпотентним
    - PATCH - запит, який частково оновлює дані на сервері, тобто, якщо на сервері у вас був обʼєкт типу { name: "Oleg", age: 28}, ви послали PATCH запит з тілом {name: "Vika"} -> в результаті цієї дії на сервері буде обʼєкт {name: "Vika", age: 28}, не є ідемпотентним

 */
// DELETE - DELETE - запит, що повністю видаляє ресурс на сервері, [{1}, {2}, {3}] -> DELETE 2 -> [{1}, {3}] є ідемпотентним

// ідемпотентний метод це метод, який не буде змінювати стан серверу при однакових повторних запитах
/*
DB: [{1}, {2}, {3}]

GET 2 -> response {2} | DB: [{1}, {2}, {3}]
GET 2 -> response {2} | DB: [{1}, {2}, {3}]
GET 2 -> response {2} | DB: [{1}, {2}, {3}]
GET 2 -> response {2} | DB: [{1}, {2}, {3}]

DELETE 2 -> responce 200 {2} | DB: [{1}, {3}]
DELETE 2 -> responce 404 | DB: [{1}, {3}]
DELETE 2 -> responce 404 | DB: [{1}, {3}]
DELETE 2 -> responce 404 | DB: [{1}, {3}]

=============================================
DB: [{1}, {2}, {3}]

POST {4} -> responce 201 | DB: [{1}, {2}, {3}, {4}]
POST {4} -> responce 201 | DB: [{1}, {2}, {3}, {4}, {4}]
POST {4} -> responce 201 | DB: [{1}, {2}, {3}, {4}, {4}, {4}]
POST {4} -> responce 201 | DB: [{1}, {2}, {3}, {4}, {4}, {4}, {4}]


*/

// API https://jsonplaceholder.typicode.com/posts

// const URL = "https://jsonplaceholder.typicode.com/posts";

// // ******************** POST - CREATE ******************** \\

// const newPost = {
//   userId: 101,
//   title: "My new Post",
//   body: "lsdkjfkdlsjfsdlkfj lskdjflskdjfsdlkfj lskdjfldksfj",
// };

// // fetch(URL, {
// //   method: "POST",
// //   body: JSON.stringify(newPost),
// //   headers: {
// //     "Content-type": "application/json",
// //   },
// // })
// //   .then((res) => {
// //     if (!res.ok) {
// //       throw new Error(res.statusText);
// //     }

// //     return res.json();
// //   })
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error(err));

// axios
//   .post(URL, newPost)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// // ******************** GET - READ ******************** \\

// // fetch(URL)
// //   .then((res) => {
// //     if (!res.ok) {
// //       throw new Error(res.statusText);
// //     }

// //     return res.json();
// //   })
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error(err));

// axios
//   .get(URL)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// // ******************** PATCH - UPDATE ******************** \\

// const updatedPost1 = {
//   userId: 101,
//   title: "My new Post updated 1",
// };

// // fetch(`${URL}/${1}`, {
// //   method: "PATCH",
// //   body: JSON.stringify(updatedPost1),
// //   headers: {
// //     "Content-type": "application/json",
// //   },
// // })
// //   .then((res) => {
// //     if (!res.ok) {
// //       throw new Error(res.statusText);
// //     }

// //     return res.json();
// //   })
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error(err));

// axios
//   .patch(`${URL}/${1}`, updatedPost1)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// // ******************** PUT - UPDATE ******************** \\

// const updatedPost2 = {
//   userId: 102,
//   title: "My new Post updated PUT",
// };

// // fetch(`${URL}/${1}`, {
// //   method: "PUT",
// //   body: JSON.stringify(updatedPost2),
// //   headers: {
// //     "Content-type": "application/json",
// //   },
// // })
// //   .then((res) => {
// //     if (!res.ok) {
// //       throw new Error(res.statusText);
// //     }

// //     return res.json();
// //   })
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error(err));

// axios
//   .put(`${URL}/${1}`, updatedPost2)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// // ******************** DELETE ******************** \\

// // fetch(`${URL}/${2}`, {
// //   method: "DELETE",
// // })
// //   .then((res) => {
// //     if (!res.ok) {
// //       throw new Error(res.statusText);
// //     }

// //     return res.json();
// //   })
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error(err));

// axios
//   .delete(`${URL}/${2}`)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

//  http://127.0.0.1:3000/api

const form = document.querySelector(".js-question");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { userName, phone, email, question } = event.currentTarget.elements;

  const userData = {
    name: userName.value,
    phone: phone.value,
    email: email.value,
    comment: question.value,
  };

  console.log(userData);
  createQuestionService(userData)
    .then((data) => {
      console.log(data);
      alert("Thank you!");
    })
    .catch((err) => console.error(err))
    .finally(() => form.reset());
}

function createQuestionService(data) {
  const URL = "http://127.0.0.1:3000/api";
  const ENDPOINT = "question";
  return axios.post(`${URL}/${ENDPOINT}`, data).then(({ data }) => data);
}
