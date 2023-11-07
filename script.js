// ***********setTimeout*********** \\

// setTimeout(callback, time, ...args) - функція для відкладеного виклику колбек-функції. Чекає time мілісекунд і коли проходить цей час викликає callback функцію. args - це аргументи для колбек функції. setTimeout повертає число. Це унікальний індетифікатор цього таймауту, для того, що б в разі необхідності можна було зупинити його викликавши функцію clearTimeout(id) - id - це і є цей індетифікатор.

// const id = setTimeout(() => {
//   console.log("Time is over");
// }, 1000);

// console.log(id)
// Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
//   },
//   1000,
//   "Alice",
//   "Ukraine"
// );

// ***********setInterval*********** \\
// setInterval(callback, time, ...args) - функція для інтервального виклику колбек-функції. Викликає функцію callback раз на time мілісекунд. args - це аргументи для колбек функції. setInterval повертає число. Це унікальний індетифікатор цього інтервалу, для того, що б в разі необхідності можна було зупинити його викликавши функцію clearInterval(id) - id - це і є цей індетифікатор.

// const id = setInterval(() => {
//   console.log("setInterval");
// }, 1000);
// console.log(id);

// Видалення Timeout за необхідністю
// clearInterval(id)
// v1
// setTimeout(() => clearInterval(id), 5000);
// v2
// let counter = 1;
// const id = setInterval(() => {
//   console.log("setInterval");
//   if (counter >= 5) clearInterval(id);
//   counter += 1;
// }, 1000);
// console.log(id);

// Можливість передати параметри для колбеку
// const id = setInterval(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
//   },
//   1000,
//   "Alice",
//   "Ukraine"
// );

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const refs = {
//   content: document.querySelector(".js-content"),
//   time: document.querySelector(".js-text"),
// };

// let counter = 3;
// refs.time.textContent = `Лишилось ${counter} секунд`;

//* v1
// const id = setInterval(() => {
//   counter -= 1;
//   refs.time.textContent = `Лишилось ${counter} секунд`;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   refs.content.style.display = "none";
// }, counter * 1000);

//* v2
// const id = setInterval(() => {
//   counter -= 1;
//   refs.time.textContent = `Лишилось ${counter} секунд`;
//   if (counter <= 0) {
//     clearInterval(id);
//     refs.content.style.display = "none";
//   }
// }, 1000);

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('1');

// setTimeout(() => {
//     console.log("2");
// }, 0)

// console.log('3');

// ***********Class Date*********** \\
// const currentDate = new Date();
// const targetDate = new Date("Nov 25 2023");
// console.log(targetDate);

// console.log(targetDate - currentDate);

//! Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const refs = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
