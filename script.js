
// Що таке масив
// const array = ["Hello world", null, true, 15];
// console.log(array)


// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray("hello")); // false




// Перший та останій елемент масиву
// const firstEl = array[0];
// console.log(firstEl)
// console.log(array.length)
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl)


// Перебір масиву
const array = ["Hello world", null, true, 15];


// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(`${i}: ${item}`);
// }


// Цикл for of
// for(const item of array){
//     console.log(item);
// }




// Присвоєння за посиланням та за значенням
// Примітивні типи даних - за значенням

// console.log(1 === 1)
// console.log([1] === [1]) // масиви порівнюються не за значеннями - а за посиланням. Це означає, що не важливо, які значення знаходяться у масивах, що порівнюються. Тому що вони не грають ніякої ролі під час порівняння. Квадратні дужки створюють новий масив - під який резервується окреме місце у памʼяті. Коли ви порівнюєте два окремих масиви - порівнюється посилання на місце у памʼяті. Якщо воно різне - ви будете отримувати false.

// Складні типи даних - за посиланням


// const arr = [1];
// console.log(arr === arr)


// const arr1 = [1,2,3,4,5];
// const arr2 = arr1;

// arr2[2] = 10302004;

// console.log(arr1) 
// console.log(arr2) 

// console.log(arr1 === arr2)



// const arr1 = [1,2,3,4,5];
// // const arr2 = Array.from(arr1);
// const arr2 = arr1.slice(0);

// arr2[2] = 10302004;

// console.log(arr1) 
// console.log(arr2) 

// console.log(arr1 === arr2)






// Методи для роботи з масивом

// push pop
// push - додає один або декілька елементів у кінець масиву - повертає довжину масиву після додавання

// const arr = [1,2,3]

// const a = arr.push(4,5);
// console.log(a)

// console.log(arr)

// // pop - видаляє з кінця масиву 1 елемент - повертає тей елемент, який було видалено

// arr.pop()
// const b = arr.pop()
// console.log(b)

// console.log(arr)



// unshift shift

// const arr = [1,2,3]
// // unshift - додає один або декілька елементів на початок масиву

// console.log(arr)

// arr.unshift(-1, 0)

// console.log(arr)

// shift - видаляє один елемент з початку масиву

// arr.shift()

// console.log(arr)


//slice - повертає новий масив з копією частинки іншого(на якому викликався). Приймає 2 аргументи (індекс початку, індекс кінця не включно)

// const arr = [1,2,3,4,5];
// const arrCopy = arr.slice(1, 4)
// console.log(arr)
// console.log(arrCopy)


//splice - змінює оригінальний масив (мутація). Цей метод вміє робити 3 дії: 
// 1 - вирізати якісь частинки масиву
// 2 - замінювати один елемент масиву на інший елемент
// 3 - вставляти елементи в будь-яке місце масиву
// аргументи (індекс початку, скільки елементів ми будемо видаляти, що ми будемо вставляти на це місце)

// const fruits = ["apple", "pineapple", "carrot", "potato", "watermelon", "mango",  "cherry"]

// console.log(fruits)

// // const vegs = fruits.splice(2, 2) // починаючи з 2го індексу видалив 2 елементи
// // console.log(vegs)

// fruits.splice(2, 2, "banana", "peach") // починаючи з 2го індексу видалив 2 елементи та замість них вставив інші 2

// fruits.splice(5, 0, "melon") // на місце 5го індексу поставили новий елемент, при цьому ми нічого не вирізали

// console.log(fruits)




//includes - повертає true, якщо елемент є в масиві, і false - якщо його немає. Приймає два аргументи (елемент що хочемо перевірити, індекс з якого я хочу почати перевірку)

// const letters = ["a", "b", "c", "d", "e"]

// console.log(letters.includes("a", 3))

//indexOf - повертає індекс елементу, що ми хочемо знайти, якщо такого елементу в масиві немає - повертає -1. Приймає два аргументи (елемент що хочемо знайти, індекс з якого я хочу почати пошук)

// const letters = ["a", "b", "c", "d", "e"]

// console.log(letters.indexOf("c", 3))

// concat - повертає новий масив, поєднуючи в собі значення інших масивів, які приходять в якості аргументів (порядок зберігається)

// const letters = ["a", "b"]

// const newLetters = letters.concat(["c", "d", "e"], ["f", "g"])

// console.log(newLetters)






// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, 'Hello', null, 42, false];

// for(let i = 0; i < arr.length; i += 1){
//   if(typeof arr[i] !== "number"){
//       arr.splice(i, 1)
//       i -= 1 // компенсуємо переіндексацію, для того, щоб не пропустити елементи, тому що після того, як ми вирізали, індекси наступних елементів стали на одиницю меншими
//   }
// }

// console.log(arr)



// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
// /*
//   1. створити пустий масив для результату
//   2. перебираємо масив за допомогою for
//   3. робимо перевірку на те, чи є поточний елемент у масиві далі (тобто, після поточного елементу)
//   4. Якщо перевірка істина: додаємо цей елемент у новий масив
//   5. повертаємо результат
// */

// const result = [];

// for(let i = 0; i < arr.length; i += 1){
//   if(arr.includes(arr[i], i + 1)){
//     // && !result.includes(arr[i]) - це якщо ми хочемо щоб у result не було дублікатів
//     result.push(arr[i])
//   }
// }

// return result
// }

// console.log(getCommonElements([1, 17, 2, 3, 2, 1, 2, 17, 19])); // [1, 17, 2]




// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
// /*
// 1. створити новий масив для жіночих імен
// 2. перебираємо масив усіх юзерів - використовуємо фор оф
//   2.1. якщо в масиві чоловіків немає поточного імені - то це імʼя жіноче
//     2.1.1. якщо перевірка істинна - пушимо в масив жіночих імен
// 3. повертаємо результат
// */

// const women = [];
// for(const user of users){
//   if(!men.includes(user)){
//     women.push(user)
//   }
// }

// return women;
// }

// console.log(getWomen(users, men));




// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';

// const result = string.split("").reverse().join("")

// //chaining

// console.log(result)


//! =======================================


// // префіксний інкремент ++i - спочатку додає, а потім повертає

// let i = 5;
// console.log(++i)


// // постфіксний інкремент i++ - спочатку повертає, а потім додає

// let j = 5;
// console.log(j++)
// console.log(j)


//! =======================================


