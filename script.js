//! callback functions

// /**
//  * logResult - функція вищого порядку. Виводить в консоль результат роботи колбек функції
//  * @param {*} a: number
//  * @param {*} b: number
//  * @param {*} callback: function
//  * @return undefined
//  */
// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Результат розрахунків колбек функції: ${result}`);
// }

// logResult(5, 6, add); // add - передача колбек функції. Ні в якому разі не можна викликати цю функцію під час передачі
// logResult(5, 4, mult);

// const arr = [1, 2, 3];
// const newArr = arr.map((el) => el * 2); // інлайн колбек функція, тому що ви створили її і передали в якості аргументу в одному місці
// console.log(newArr);

// // нижче описані колбек функції, які будуть викликатися пізніше у функції вищого порядку logResult
// /**
//  * add - sum of two numbers
//  * @param {*} a: number
//  * @param {*} b: number
//  * @returns sum of a and b
//  */
// function add(a, b) {
//   return a + b;
// }

// /**
//  * mult - multiplication of two numbers
//  * @param {*} a: number
//  * @param {*} b: number
//  * @returns multiplication of a and b
//  */
// function mult(a, b) {
//   return a * b;
// }

//! recursion & clousers

//* ітеративне

// function countToN(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

//* рекурсивне

// function countToN(n) {
//   if (n === 0) return 0;
//   return countToN(n - 1) + n;
// }
/*
1. function countToN(2) {
  if (2 === 0) return 0;
  return countToN(1) = 1 + 2; // 1 + 2 = 3
}
    1.1. function countToN(1) {
        if (1 === 0) return 0;
        return countToN(0) = 0 + 1; // 1
        }
     1.1.1. function countToN(0) {
        if (0 === 0) return 0;
        return countToN(0) + 1;
        }
*/
// console.log(countToN(2));
// console.log(countToN(4)); // 1 + 2 + 3 + 4 = 10
// console.log(countToN(100));

// властивість джсу запамʼятовувати (замикати) лексичне оточнення

// function getCount() {
//   let counter = 1;
//   return function () {
//     console.log(`Мене викликали ${counter} раз!`);
//     return (counter += 1);
//   };
// }

// const fnCounter = getCount();

// fnCounter();
// fnCounter();
// fnCounter();
// fnCounter();
// fnCounter();
// fnCounter();
// fnCounter();
// fnCounter();

//! class

//? публічні властивості і методи: будуть у екземплярах, до них можна звертатися всім (і класу і екземпляру)

//? приватні властивості і методи(#): вони будуть у екземплярах, але до них можна буде звернутися тільки всередині класу, тобто екземпляр класу не зможе викликати приватний метод, або звернутись до приватної властивості, це заборонено і ви отримаєте помилку. Це реалізує принцип ООП інкапсуляції. Але якщо вам все ж таки потрібно до них звертатися з додатковим шаром захисту - ви будете використовувати спеціальні методи аксесори (геттери і сеттери) get and set. Для оголошення приватної властивості потрібно першочергово оголосити її за межами конструктору. Приватні поля при наслідуванні будуть додаватися в екземпляр класу, який наслідує, але звернутися до цих полів за межами батьківського класу ви не зможете.

//? статичні властивості(static): вони не додаються в екземпляр, до них неможливо звернутись з екземпляру, але вони зберігаються всередині самого класу і до них можна звернутись тільки через сам клас(через крапку, як до властивості обʼєкту - SomeClass.staticField)

// class Rectangle {
//   // цей метод викликається тоді, коли ви створюєте екземпляр вашого класу за допомогою оператора new. В параметри конструктору приходить те, що ви передали аргументами під час виклику класу
//   static COLOR = "red";
//   static logColor() {
//     console.log(`All rectangles are ${this.COLOR}`);
//   }

//   static instances = [];
//   static addInstance(instance) {
//     this.instances.push(instance);
//   }

//   #width;
//   #height;
//   constructor({ width, height }) {
//     this.#width = width;
//     this.#height = height;
//     this.name = "Rectangle";
//     Rectangle.addInstance(this);
//   }

//   sayHello() {
//     const aria = this.getAria();
//     const perimetr = this.getPerimetr();
//     console.log(
//       `Hey, I am ${this.name}.\nMy width = ${this.#width} and height = ${
//         this.#height
//       }\nP = ${perimetr}\nS = ${aria}`
//     );
//   }

//   getAria() {
//     return this.#width * this.#height;
//   }

//   getPerimetr() {
//     return this.#width * 2 + this.#height * 2;
//   }

//   get width() {
//     return this.#width;
//   }

//   set width(newWidth) {
//     if (typeof newWidth === "number" && newWidth > 0) {
//       this.#width = newWidth;
//     }
//   }
// }

// class Square extends Rectangle {
//   constructor(a) {
//     super({ width: a, height: a });
//     this.name = "Square";
//   }

//   // для публічних полів
//   //   sayHello() {
//   //     const aria = this.getAria();
//   //     const perimetr = this.getPerimetr();
//   //     console.log(
//   //       `Hey, I am ${this.name}.\nMy side = ${
//   //         this.width
//   //       }\nP = ${perimetr}\nS = ${aria}`
//   //     );
//   //   }
// }

// const rectangle = new Rectangle({ width: 5, height: 10 });
// const square = new Square(10);
// const rectangle2 = new Rectangle({ width: 9, height: 6 });

// // rectangle.width = "sdfksjdf";
// // console.log(rectangle);
// // console.log(rectangle.width);
// // console.log(rectangle.getAria());
// // console.log(rectangle.getPerimetr());
// // rectangle.sayHello();
// // square.sayHello();
// // console.log(square.width);

// Rectangle.logColor();
// console.log(Rectangle.COLOR);

// console.log(Rectangle.instances)


