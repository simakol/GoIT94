// Тестовий масив для теоретичного блоку

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   {
//     id: 3,
//     name: "Bob",
//     age: 24,
//     skills: ["JavaScript", "React", "Node.js", "Python"],
//   },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#", "Java"] },
// ];

// ********map******** \\
// .map((element, index, arr) => )
// повертає новий масив тієї ж довжини кожен елемент якого було змінено за умовою колбек ф-ції (те, що ф-ція повертає на кожній ітерації)

// імперативний метод
// const names = [];

// for (const { name } of users) {
//   names.push(name);
// }

// console.log(names);

// декларативний метод
// const names = users.map(({ name }) => name);
// console.log(names);

// ********flat******** \\
// .flat(depth = 1) - приймає глибину вкладеностей(цифра), повертає новий масив, де вкладені підмасиви були записані в один вимір на нашу глибину

// const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// const result = arr.flat(3);
// console.log(result);

// const arr = [1, 2, [3, 4, [5, 6, [7, 8, [[[[[[[9, [[[[[[10]]]]]]]]]]]]]]]]];
// const result = arr.flat(Infinity);
// console.log(result);

// ********flatMap******** \\

// const skills = users.map(({ skills }) => skills).flat();
// console.log(skills);

// const skills = users.flatMap(({ skills }) => skills);
// console.log(skills);

// ********filter******** \\
//.filter((element, index, arr) => ) - повертає новий масив який складається тільки з тих елементів, які пройшли перевірку умовою колбек ф-ції (якщо ф-ція повернула true - елемент буде у новому масиві, якщо ж повернула false - елемент відкидається). Якщо ж не було знайдено ні одного підходящого елементу - повертається пустий масив!

// const filteredUsers = users.filter(({ age }) => age >= 30);
// console.log(filteredUsers);

// const skills = users.flatMap(({ skills }) => skills);
// console.log(skills);

// ['JavaScript', 'HTML', 'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'Spring', 'C++', 'C#', 'Java']
// const uniqueSkills = skills.filter((skill, i, arr) => arr.indexOf(skill) === i);

// const uniqueSkills = [...new Set(skills)];
// console.log(uniqueSkills);

/*
1. (skill = JavaScript, i = 0, arr) => arr.indexOf(JavaScript) === 0 -> 0 === 0 - true // ["JavaScript"]
2. (skill = HTML, i = 1, arr) => arr.indexOf(HTML) === 1 -> 1 === 1 - true // ["JavaScript", "HTML"]
3. (skill = JavaScript, i = 2, arr) => arr.indexOf(JavaScript) === 2 -> 0 === 2 - false // "JavaScript", "HTML"]
*/

// ********find******** \\
// .find((element, index, arr) => ) - повертає перший знайдений елемент, який пройшов умову колбек ф-ції (ф-ція повернула true). Якщо ж ні один елемент не пройшов - повернеться undefined!

// const user = users.find(({ skills }) => skills.includes("Java"));
// console.log(user);

// ********findIndex********\\
// .findIndex((element, index, arr) => ) - повертає індекс першого знайденого елементу, який пройшов умову колбек ф-ції (ф-ція повернула true). Якщо ж ні один елемент не пройшов - то повернеться -1

// const index = users.findIndex(({ skills }) => skills.includes("Java"));
// console.log(index);
// console.log(users[index]);

// ********some********\\
// .some((element, index, arr) => ) - повертає true якщо хоча б один з елементів масиву пройшов перевірку умовою колбек функції. Якщо ні один елемент не пройшов - повертає false (дуже схожий на логічне АБО ||)

// const isKnow = users.some(({ skills }) => skills.includes("Python"));
// const isKnow = users.some(({ skills }) => skills.includes("Pascal"));

// console.log(isKnow);

// ********every ********\\
// .every((element, index, arr) => ) - повертає true якщо кожен з елементів масиву пройшов перевірку умовою колбек функції. Якщо хоча б один елемент не пройшов - повертає false (дуже схожий на логічне І &&)

// const result = users.every(({ age }) => age >= 20 && age <= 40);
// console.log(result);

// ********sort********\\
// .sort((a, b) => ) - мутує і повертає вихідний масив(масив, на якому викликався) всі елементи якого були відсортовані за зростанням або за спаданням

// const arr = [5, 34, 6, 2, 553, 2, 445, 22, 1, 12, 54, 2];
// const result = [...arr].sort((a, b) => a - b); // сортування за зростанням
// const result = [...arr].sort((a, b) => b - a); // сортування за спаданням
// console.log(arr);
// console.log(result);

// const sortedUsers = [...users].sort((a, b) => b.age - a.age)
// console.log(sortedUsers)

// const sortedUsers = [...users].sort(
//   (a, b) => b.skills.length - a.skills.length
// );
// console.log(sortedUsers);

// const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name)); // за алфавітним порядком
// const sortedUsers = [...users].sort((a, b) => b.name.localeCompare(a.name)); // за зворотнім алфавітним порядком
// console.log(sortedUsers);

// ********reduce********\\
// .reduce((acc, element, index, arr) => {}, inititalAcc) - повертає все що ви напишите, залежить від логіки і початкового значення аккумулятору. Аккумулятор - це зовнішня змінна за межами циклу, яка доступна до редагування на кожній ітерації. На кожній ітерації аккумулятор стає тим, що ви повернули на попередній ітерації. Якщо ви не задасте початкове знаяення inititalAcc, то аккумулятор стане першим елементом масиву і пропуститься перша ітерація. Результат роботи цього методу - це тей аккумулятор, який функція повернула на останній ітерації

// const arr = [1, 2, 3, 4, 54, 6, 45, 4323, 543, 5, 5, 2];

// let sum = 0;
// for (const num of arr) {
//   sum += num;
// }
// console.log(sum);

// const sumAll = arr.reduce((sum, num) => sum + num, 0);
// console.log(sumAll);

/*
1. arr.reduce((sum = 0, num = 1) => 1 + 0 = 1, 0);
2. arr.reduce((sum = 1, num = 2) => 2 + 1 = 3, 0);
3. arr.reduce((sum = 3, num = 3) => 3 + 3 = 6, 0);
4. arr.reduce((sum = 6, num = 4) => 4 + 6 = 10, 0);
...
n. arr.reduce((sum = 4991, num = 2) => 4991 + 2 = 4993, 0);
*/

// const sumAll = arr.reduce((sum, num) => sum + num);
// console.log(sumAll);

/*
1. пропускається
2. arr.reduce((sum = 1, num = 2) => 1 + 2 = 3);
3. arr.reduce((sum = 3, num = 3) => 3 + 3 = 6);
4. arr.reduce((sum = 6, num = 4) => 4 + 6 = 10);
*/

// const ageSum = users.reduce((acc, { age }) => acc + age);
// console.log(ageSum);

// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   const result = arr.map(({ name, grades }) => {
//     const sum = grades.reduce((acc, grade) => acc + grade, 0);
//     const newStudent = {
//       name,
//       average: Math.round(sum / grades.length),
//     };
//     return newStudent;
//   });

//   return result;
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({ age }) => age > 20);
//   //   const newArr = [];
//   //   for (const student of arr) {
//   //     if (student.age > 20) {
//   //       newArr.push(student);
//   //     }
//   //   }
//   //   return newArr;
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   const book = arr.find((book) => book.title === title);
//   return book || "Not found";
// }

// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));
