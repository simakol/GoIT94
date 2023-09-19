// ****************Об'єкт**************** \\

// const user = {
//   name: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };

// console.log(user);
// const arr = ["Alice", "Max", "Oleg"];
// console.log(arr);

// const users = {
//   0: "Alice",
//   1: "Max",
//   2: "Oleg",
// };

// console.log(users);

// ****************Звернення до властивостей об'єкта**************** \\

// const user = {
//   name: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };

// console.log(user.name);
// console.log("css", user.skills.css);

// const objectKey = "name";

// console.log(user[objectKey]); // user.name
// console.log(user["name"]);

// ****************Зміна значення властивості**************** \\

// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// user.city = "Lviv";
// user["age"] = 28;
// console.log(user);

// user.city = "Odessa";
// user["age"] = 38;
// console.log(user);

// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// Object.freeze(user);
// user.name = 'Kate';
// user.city = 'Lviv';
// console.log(user);

// ****************Методи об'єкта**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     console.log(city);
//     console.log(this);
//     console.log(`Hello my name ${this.name}`);
//   },
// };

// user.sayHello("Kyiv");

/*
! 1. під час опису функції ви не знаєте на що посилається this, ви дізнаєтесь це тільки тоді, коли ф-ція буде викликана
! 2. this посилається на той обʼєкт, який викликає функцію
*/

// ****************Цикл for...in**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     }
// }

// for(const key in user){
//     console.log(`${key}: ${user[key]}`);
// }

// ****************Метод Object.keys()**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const keys = Object.keys(user);

// for(const key of keys){
//     console.log(key, user[key]);
// }

// console.log(keys);

// ****************Метод Object.values()**************** \\

// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const valuesUser = Object.values(user);
// const values = Object.values(user.skills);

// console.log(values.length);

// ****************Метод Object.entries()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

//! ========================================

// const user = {
//   name: "Oleg",
//   age: 34,
// };

// const user2 = Object.create(user);

// user2.status = "premium";

// console.log(user2);
// console.log(user2.age);
// console.log(Object.hasOwn(user2, "age"));

// for (const key in user2) {
//   if (Object.hasOwn(user2, key)) {
//     console.log(`${key}: ${user2[key]}`);
//   }
// }

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(name, quantity, price) {
//   const totalPrice = price * quantity;
//   //   const productObj = {
//   //     name, // name: name
//   //     quantity,
//   //     price,
//   //     totalPrice,
//   //   };
//   //   return productObj;

//   return {
//     name,
//     quantity,
//     price,
//     totalPrice,
//   };
// }
// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("aplle", 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   const times = Object.values(obj);

//   let total = 0;

//   for (const time of times) {
//     total += time;
//   }

//   return `Count of players ${times.length}, average time ${
//     total / times.length
//   }`;
// }

// console.log(getTime(players));

// Task - 3
//* 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// function getUsers(arr, bookName) {
//   /*
// 1. створюємо масив, у який будемо додавати імена тих, хто читав книжку
// 2. перебираємо масив з обʼєктів за допомогою for of
//     2.1. перевіряємо, якщо в масиві books є потрібна нам нижка (includes) - то пушимо це імʼя в масив
// 3. повернути строку з імен (використовуємо join(", "))
// */

//   const names = [];

//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       names.push(user.name);
//     }
//   }

//   return names.join(", ");
// }
// console.log(getUsers(friends, "Romeo and Juliet"));

//* 2 Порахувати вік всіх юзерів у яких є ключ age.

// function getTotalAge(arr) {
//   /*
//     1. створюємо змінну totalAge для накопичення віку користувачів
//     2. перебираємо масив всіх користувачів
//         2.1. перевіряємо чи взагалі є така властивість age (Object.hasOwn()), якщо є - накопичуємо
//     3. повертаємо totalAge
//     */

//   let totalAge = 0;

//   for (const user of arr) {
//     if (Object.hasOwn(user, "age")) {
//       totalAge += user.age;
//     }
//   }

//   return totalAge;
// }
// console.log(getTotalAge(friends));
