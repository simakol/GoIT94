/***** Інструкція if та її варіації *****/

// const value = 10;

// if (value === 10) {
//   console.log("Value is 10!!!");
// }

// if (value === 10) {
//   console.log("Value is 10!!!");
// } else {
//   console.log("Value isn't 10!!!");
// }

// const value = 10;

// if (value === 1) {
//   console.log(1);
// } else if (value > 10 && value <= 20) {
//   console.log(2);
// } else if (value === 10) {
//   console.log(3);
// } else {
//   console.log(4);
// }

/***** Інструкція switch *****/

// const value = 5;

// switch (value) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console.log(3);
//     break;
//   case 4:
//     console.log(4);
//     break;
//   default:
//     console.log("Нічого не спрацювало :(");
// }

/*
if(2 === 1)  console.log(1); - !
if(2 === 2) console.log(2);
 console.log(3);
 console.log(4);


*/

/***** Тернарний оператор *****/

// condition ? true : false

// const age = 19;
// let msg = "";

// if (age >= 18 && age <= 30) {
//   msg = "Ви допущені!";
// } else {
//   msg = "У вас немає доступу!";
// }

// console.log(msg);

// const age = 15;
// let msg = age >= 18 && age <= 30 ? "Ви допущені!" : "У вас немає доступу!";

// console.log(msg);

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

// let a = 5;

// if (true) {
//   a = 10;
//   let b = 15;
// }

// console.log(a);
// console.log(b);

// let number = 10;

// if (true) {
//   let number = 20;
//   if (true) {
//     number = 30;
//   }
//   console.log("inside", number);
// }

// console.log("outside", number);

// let number = 10;

// if (true) {
//   if (true) {
//     number = 30;
//   }
//   let number = 20;
// }

// console.log(number);

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = -10; i <= 10; i += 1) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 1) {
//   //   if (i === 5) {
//   //     // continue;
//   //     break;
//   //   }

//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/***** Цикл while *****/

// while (condition) {
//   // (statement)
// }

// const PASSWORD = "12345";
// let userPassword = prompt("Enter a password");

// if (PASSWORD === userPassword) {
//   alert("Welcome");
// } else {
//   alert("Wrong password");
// }

// let attempts = 1;

// while (PASSWORD !== userPassword) {
//   userPassword = prompt("Wrong password! Try again");
//   attempts += 1;
//   if (attempts === 3) {
//     break;
//   }
// }
// if (PASSWORD === userPassword) {
//   alert("Welcome");
// }

/***** Цикл do while *****/

// do {
//   // statement
// } while (condition);

// let i = 0;

// do {
//   console.log(i);
//   i += 1;
// } while (i < 10);

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// const message = prompt("Enter color").toLowerCase();
// let action = "";

// switch (message) {
//   case "red":
//     action = "stop";
//     break;
//   case "yellow":
//     action = "ready";
//     break;
//   case "green":
//     action = "go";
//     break;
//   default:
//     action = "be careful";
// }

// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(question, answer) {
//   console.log(question, answer);
//   const userAnswer = prompt(question).toLowerCase();
//   return userAnswer === answer;
// }

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(
//   check("Через воду він проводить, А сам з місця вік не сходить", "міст")
// );
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//   /*
//     1. створюємо дві константи (1 - швидкість за день, 2 - швидкість за ніч)
//     2. змінні для прогресу(1 - кількість подоланих метрів, 2 - кількість днів)
//     3. запускаємо цикл з умовою допоки прогрес < глибину
//         3.1. додаємо 7м(шв за день) до прогресу та додаємо 1 до кількості днів
//         3.2. якщо равлик ще не виліз (прогрес < глибину) то віднімаємо 2м(шв за ніч) від прогресу
//     4. виводимо в консоль
//     */
//   const DAY_SPEED = 7;
//   const NIGHT_SPEED = 2;
//   let total = 0;
//   let days = 0;

//   while (total < deps) {
//     total += DAY_SPEED;
//     days += 1;

//     if (total < deps) {
//       total -= NIGHT_SPEED;
//     }
//   }

//   console.log(days);
// }
// getDays(42); // 8
// getDays(17); // 3
// getDays(18); // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

function countVowel(str) {
  /*
    1. створити змінну в якій будемо рахувати кількість голосних (лічильник)
    2. привести речення до нижнього регістру
    3. запускаємо цикл фор для переребору всіх літер (починаємо з 0, продовжуємо цикл до тих пір, поки ітератор меншний за довжину речення, крок 1)
        3.1. якщо в списку голосних є поточна буква речення, то додаємо одиницю до лічильника (includes)
    4. повернути кількість голосних
*/

  const vowels = "aeiou";
  let counter = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i])) {
      counter += 1;
    }
  }

  return counter;
}
console.log(countVowel("HELLO WORLD")); // 3
console.log(countVowel("Junior Web Developer")); // 8
