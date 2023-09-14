// Function expression (функціональний вираз)


// const foo = function (){
//     console.log("Hello world!")
// }

// foo()



// Function declaration (оголошення функції)
// hoisting https://codeguida.com/post/199



// foo()

// function foo() {
//     console.log("Hello world!!!")
// }

// foo()



// Псевдомасив arguments

// function sum(a = 0, b = 0){ // a = 0, b = 0 - значення за замовчуванням - якщо ми не передамо аргумент під час виклику функції, то параментр отримає значення undefined, якщо ж ми не хочемо отримувати undefined, ми можемо задати значення за замовчуванням, тобто якщо параметр не отримав значення з аргументу, ми можемо задати своє, наприклад a = 0

// console.log(`a: ${a} | b: ${b}`)
// //a ,b - два параметри, які отримають свої значення під час виклику функції з аргументів

// // a, b - локальні змінні, під капотом просто створюються дві змінні let a, b всередині функції

// return a + b; // return - оператор, який моментально завершує виконання функції і в якості результату її роботи повертає якесь значення у зовнішній код
// }

// const result = sum(5, 19) // 5, 19 - це аргументи, тобто, це ті значення, які ми хочемо надати параметрам всередині функції, яку викликаємо (a стане 5, b стане 19)

// console.log(result)

// console.log(sum(49, 167))
// console.log(sum(49))
// console.log(sum())


// function sumAll(){
//     console.log(arguments) // псевдомасив всіх аргументів, його використовують тоді, коли ми не знаємо кількість можливих аргументів, які приходять під час виклику ф-ції (може прийти 2, а може 22)

//     let sum = 0;

//     for(const arg of arguments){
//         sum += arg;
//     }
//     return sum;
// }

// console.log(sumAll(1, 5))
// console.log(sumAll(5, 8, 9, 3, 4, 94, 0, 4))
// console.log(sumAll(5, 7, 99, 74, 65, 94, 22, 98, 77))






// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;

// if (true) {
//     someValue = 11;
// }

// console.log(someValue);



// // Example 2
// let someValue = 4;

// if (true) {
//     let someValue = 11;
// }

// console.log(someValue);



//// Example 3
// let someValue = 4;

// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

// console.log(someValue);



// // Example 4
// let someValue = 2;


// function checkScope(someValue) {
//     // let someValue = 2
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);


// Example 5
// let someValue = 2;


// function checkScope() {
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);



// // Example 6
// let someValue = 2;


// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()

// console.log(someValue);



// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];


// function checkScope(arr) {
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);

// let someArray = ['Hello', 'my', 'name', 'scope'];


// function checkScope(arr) {
//     // let arr = someArray
//     arr = Array.from(arr)
//     arr.splice(0,3)
//     console.log(arr)
// }

// checkScope(someArray)

// console.log(someArray);

// function foo() {
//     console.log(1)
// }

// function boo() {
//     foo()
//     console.log(2)
// }

// console.log(0)
// boo()


// http://latentflip.com/loupe - погратися з call stack
// call stack - стек викликів, він слідкує за порядком виконання функцій
// стек - структура даних (стопка книжок, або корзина тарілок) - перша увійшла - остання вийшла (First In Last Out - FILO)






// Практика
//* Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, number) {
// /*
// 1. створити змінну message для зберігання повідомлення "Success ✅"
// 2. перебрати весь масив (for of)
//     2.1. перевіряти якщо поточний елемент менший ніж значення number - то змінюємо змінну message на повідомлення  "Fail ❌"
// 3. повертаємо значення змінної message
// */

// let message = "Success ✅";

// for(const num of arr){
//     if(num < number){
//         message =  "Fail ❌"
//     }
// }
// return message;
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));




//* Застосування функції + патерн раннє повернення


// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, number) {
//     for(const num of arr){
//         if(num < number){
//         return "Fail ❌";
//         }
//     }
//     return "Success ✅";
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));



//* Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів. Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
// /*
//     1. створити пустий масив, куди ми будемо додавати нові пари
//     2. запускаємо звичайний цикл на перебір оригінального масиву
//         2.1. робимо копію частинки оригінального масиву за допомогою slice(i, i + count)
//         2.2. додаємо копію в новий масив результату
//     3. повертаємо результат
// */

// const result = [];

// for(let i = 0; i < arr.length; i += count){
//     const combination = arr.slice(i, i + count);
//     if(combination.length === count){ 
//         result.push(combination);
//     }
// }
// return result;
// }

// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]




// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// /*
//     1. розбити строку на масив з двома значеннями (за допомогою split(" ")) 
//     2. створити змінні для кожної сторони і зберегти значення з масиву по індексу + перевести значення у числовий тип даних
//     3. перемножити їх і повернути в якості результату роботи функції
// */

//     const arr = dimensions.split(" ")

//     const a = Number(arr[0])
//     const b = Number(arr[1])

//     return a * b;
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));






