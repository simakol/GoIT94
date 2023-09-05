/***** Оголошення змінних *****/

// let;

// let value;
// console.log(value);
// value = 20;
// console.log(value);

// const;

// const value = 5;
// console.log(value);

/***** Примітивні типи даних ****/

// Number

// let value = -5.6;

// console.log(typeof NaN);

// // NaN - not a number

// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(undefined + 1); //NaN
// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0

// String

// let firstName = "Dima"
// let lastName = 'Ivanov'
// let fullName = `${firstName} ${lastName}`

// console.log(firstName)
// console.log(lastName)
// console.log(fullName)

// console.log("Hello, my name is \"Ivan Ivanov\"")

// Типи рядків '' "" ``

// Boolean (true, false)

// let isUserPlayGames = false;
// console.log(isUserPlayGames);

// undefined
// присутність відсутності
// let a;
// console.log(a);

// null
// відсутність присутності

// перевірка типу даних з яким працюємо оператор typeof

// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof Boolean(""))

/***** Комунікація з користувачем та можливість відображення якогось результату *****/
// console.log('Привіт вчи JS');

// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя")
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);

// ==
// console.log("false" == 0);
// /*
// 'false' == '0' -> false
// */
// console.log(false == 0);
/*
1. number
Number(false) -> 0
0 == 0 -> true

2. boolean
Boolean(0) -> false

false == false -> true
*/

// ===

// console.log('25' === 25);

/*
typeof "25" -> string
typeof 25 -> number

string === number -> false
*/

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= 26);

// !=
// console.log("1" != 1);

/*
'1' != '1' - false
*/

// !==
// console.log('1' !== 1);

/*
typeof '1' -> string
typeof 1 -> number

string !== number -> true
*/

// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log("0" == false);

/*
Number("0") -> 0
Number(false) -> 0
0 == 0 -> true
*/

// console.log('0' === false);

// console.log("Papaya" < "papaya");
// // 80 < 112 -> true
// console.log("P".charCodeAt(0));
// console.log("p".charCodeAt(0));

// console.log('a' < 'aAbBc');

// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean("0"));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));

/*
True: будь-яке число, крім 0, будь-який рядок, у якому є хоча б один символ, true

False: 0, пустий рядок(""), NaN, undefined, null, false
*/

/***** Логічні оператори *****/

// ||- логічне АБО (повертає перше значення, яке може бути конвертовано у true, якщо такого значення немає - повертається саме останнє)

// console.log(2 || 0 || 1);
// console.log(false || 0 || "" || null || NaN);

// ?? реагує лише на null та undefined
// оператор нулевого злиття, повертає перше значення, яке не є null або undefined, якщо такого немає - повертає останнє

// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 10);
// console.log(null ?? undefined)
// console.log(false ?? 0)

// && - Логічне І (повертає перше значення, яке може бути конвертовано у false, якщо такого значення немає - повертається саме останнє)

// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(3 || true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

/***** Методи для роботи з числами (тип даних Number) *****/

// const str = "25.7a32px";

// Number.parseInt()
// console.log(Number.parseInt(str));

// Number.parseFloat()
// console.log(Number.parseFloat(str));

// const num = Number(str);
// Number.isNaN()  та метод isNaN()
// console.log(num)
// console.log(isNaN(num));

// const num = Number(str) // NaN
// console.log(Number.isNaN(num));

// Класс Math
// const value = 11.500
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// console.log(Math.round(value));

// console.log(Math.pow(5, 4)); //5^4
// console.log(5 ** 4); // 5^4

/***** Методи та властивості для роботки з рядками (тип даних String) *****/

const str = "Hello world";

// length
// console.log(str.length);

// toLowerCase()
// console.log(str.toLowerCase());

// toUpperCase()
// console.log(str.toUpperCase());

// indexOf()
// const index = str.indexOf("H");
// console.log(str.indexOf(" ")); // 5
// console.log(index); // 0

// console.log(str[4]);

// includes
// console.log(str.includes('world'));

// endsWith()
// console.log(str.endsWith(' world'));

// startsWith()
// console.log(str.startsWith("h"));

// replace()
// console.log(str.replace('l', '🍕'));

// replaceAll()
// console.log(str.replaceAll('l','🍟'));

// slice()
// console.log(str.slice(4, str.length-1)); // [0, 10)
// console.log(str);

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// const apple = "🍎";

// const appleQuantity = 8;

// const applePrice = 34;

// const appleMessage = `${appleQuantity} ${apple} cost ${
//   appleQuantity * applePrice
// }`;

// console.log(appleMessage);

// const cherry = "🍒";

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherryQuantity} ${cherry} cost ${
//   cherryQuantity * cherryPrice
// }`;

// console.log(cherryMessage);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 70;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// // 70 % 60 -> 60 / 60 = 1-> 70 - 60 = 10
// // 11 % 3 -> 9 / 3 = 3 -> 11 - 9 = 2

// const result = `${hours.toString().padStart(2, "0")}:${minutes
//   .toString()
//   .padStart(2, "0")}`;
// console.log(result);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;
// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = NaN;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

//! ============================================
