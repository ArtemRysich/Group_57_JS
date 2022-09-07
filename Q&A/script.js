// https://learn.javascript.ru/operators
// https://uk.javascript.info/object-copy ..рекурсія для копії об'єкта
// https://forum.jscourse.com/t/rekursiya-obekta-kak-sdelat-polnuyu-kopiyu-obekta/2751 ..рекурсія для копії об'єкта 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set   Клас Set
// https://monsterlessons.com/project/lessons/singleton-pattiern-v-javascript приклад реалізації патерна за рахунок замкнення

// https://bookflow.ru/kak-nazyvat-peremennye/
// https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a


// let a = [10];
// let b = a;
// console.log(b);






// Функція findUnique повертає єдине унікальне число із масиву. Всі числа в несортованому масиві 
// знаходяться двічі, за винятком того, що вам потрібно знайти.
//  function findUnique(numbers) { return numbers.reduce((a, b) => a ^ b); }
// //  Об'ясніть будь ласка як працює метод reduce у даному випадку

// console.log(4 ^ 56 ^ 45 ^ 4 ^ 45);
// const a =  4 ^ 56;

//  цей вислів робить теж саме що і reduce - повертає унікальне значення, як працює Оператор 
// побитового ИСКЛЮЧАЮЩЕГО ИЛИ теж  зрозуміло)
//  незрозуміло як відбувається ця магія
//   UPD: Знайшов пояснення)    ^ является XOR, и когда вы выполняете XOR двух чисел, только биты,
//  которые отличаются между ними, становятся 1 в результате, поэтому XOR числа с самим собой
//  всегда будет приводить к 0. Метод сокращения уменьшает массив до одного значения,
//  применяя предоставленную функцию для каждого элемента в массиве, например,
//  если функция складывала два числа вместе, результатом будет сумма массива.
//  Если вы выполняете операцию XOR для всех чисел в массиве вместе, и все числа,
//  кроме одного, являются дубликатами, то каждый дубликат аннулируется в процессе,
//  и остается только уникальный номер.


// function findUnique(numbers) {
//    const resp = numbers.reduce((a, b) => {
//         console.log(a ^ b);
//         const c = a ^ b;
//         return a ^ b;
//     });
//     return resp
// }

// findUnique([4 ^ 56 ^ 45 ^ 4 ^ 45])




// const arr = [4, 56, 45, 4, 45];



// const index = arr.indexOf(22)
// console.log(index);
// console.log(-(-0 + 1));
// console.log(~index);

// if (~index) {
//     console.log('yes item in array');
// }




// const value = true; //+   1
// const value1 = '12' //+   12
// // console.log(Number(value));
// console.log(+value);
// // console.log(Number(value1));
// console.log(Number(value) + Number(value1));
// console.log(+value + +value1);









// Напишите функцию , persistence которая принимает положительный параметр num и возвращает его multiplicative persistence, то есть количество раз, которое вы должны умножить на цифры num, пока не получите одну цифру.
// Например (Ввод --> Вывод) :
//  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//  999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)


// Це рекурсія ??? Поясніть будь ласка як це працює




// const persistence = num => {
//     if (`${num}`.length > 1) {
//         return 1 + persistence(`${num}`.split('').reduce((a, b) => a * b))
//     } else {
//         return 0
//     }
// }
// console.log(persistence(999));





// const obj = {
//     name: 'Name',
//     value : {
//         value:{
//             age: 25
//         }
//     }
// }





// Це приклад з freecodecamp

// Напишіть рекурсивну функцію, sum(arr, n), що повертає суму перших n елементів масиву arr.

// function sum(arr, n) {
//   // Змініть код лише під цим рядком
// if (n <= 0) {
//   return 0;
// } else {
//   return sum(arr, n - 1) + arr[n - 1];
// }
//   // Змініть код лише над цим рядком
// }

// console.log(sum([1], 0)); // 0
// console.log(sum([2, 3, 4], 1)); // 2
// console.log(sum([2, 3, 4, 5], 3)); // 9

// Чи могли б Ви пояснити, що таке рекурсивна функція, як вона працює та її застосування?



// function sum(arr, n) {
//   // Змініть код лише під цим рядком
// if (n <= 0) {
//   return 0;
// } else {
//   return sum(arr, n - 1) + arr[n - 1];
// }
//   // Змініть код лише над цим рядком
// }

// console.log(sum([1], 0)); // 0
// console.log(sum([2, 3, 4], 1)); // 2
// console.log(sum([2, 3, 4, 5], 3)); // 9




// const str = 'sdfsdhfgjagfuiagkjasgfka';
// // {
// //     "s": 3,
// //     "d": 2,
// //     "f": 4
// // }


// console.log(str.split('').reduce((acc, item) => {
//     if (acc.hasOwnProperty(item)) {
//         acc[item] += 1
//     } else {
//         acc[item] = 1
//     }
//     return acc
// }, {}));



// const arr = [2, 3, 4, 5];


// const newArr = arr.reduce((acc, value) => {
//     acc.push(`${value}`);
//     return acc;
// }, []);
// console.log(newArr);

// function init() {
//     let x;

//     function add(a) {
//         if (!x) {
//             boo();
//         } else {
//             x += 100500;
//         }
//         return a + x;
//     };

//     function boo() {
//         x = 10 + 10
//         return x
//     };
//     return add
// }
// const response = init()
// console.log(response(2));
// console.log(response(5));



// function init() {
//     const x = 20

//     function add(a) {
//         return a + x;
//     };

//     return add
// }

// console.log(init()(2)); =>  init() повертає посилання на add => викликається функція з передачою аргументу(2)

// 'use strict';

// function foo() {
//     this.name = 'Hello my name'
//     console.log(this);
// }
// foo()





// Можете, будь ласка, пояснити, коли у циклах for та for...of ставиться при ініціалізації variable "const", а коли "let"?
// А то здається, наче завжди мало б бути let, так як при кожній ітерації перезаписується значення кожного елемента.

// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//     const client = clients[i];
//     console.log('for', client);
// }

// for (const client of clients) {
//     // console.log("for of", client);
//     // client = client + 'N'
// }


// let x = 10;

// function foo(x) {
//     x = 25;
// }
// foo(x); //undefined
// console.log(x); //10



// var a = 10;
// var a = 50;
// var c = 70;
// if (true) {
//     a = 15;
//     var a = 20;
// };
// var a = 99;

// console.log(a);


// const phonebook = {
//     contacts: [],
//     add(contact) {
//         // const newContact = {
//         //     ...contact,
//         //     list: 'default',
//         //     id: this.generateId(),
//         //     createdAt: this.getDate(),
//         // };
//         // const newContact = Object.assign(contact)
//         // newContact.list = 'default'
//         console.log(newContact);
//         this.contacts.push(newContact);
//         return this.contacts;
//     },
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return Date.now();
//     },
// };

// console.log(
//         phonebook.add({
//             name: 'Mango',
//             email: 'mango@mail.com',
//             list: 'friends',
//         }))




// 'use strict'
// function foo(){
//     console.log('declaration',this);
// }
// const boo = () =>{
//     console.log('arrow',this);
// }
// foo()
// boo()



// Завдання: Цель состоит в том, чтобы подсчитать количество слов, символов и строк в текстовом блоке. [В значительной степени похоже на wcкоманду].
// Заполните метод синтаксического анализа, чтобы 3 счетчика (wordCount, charCount и lineCount) были правильно установлены в объекте DocumentParser.

// function DocumentParser(reader) {
//   this.reader = reader;
//   this.reset();
//   this.parse();
// }

// DocumentParser.prototype.reset = function () {
//   this.wordCount = 0;
//   this.charCount = 0;
//   this.lineCount = 0;
// };

// DocumentParser.prototype.parse = function () {};

// console.dir(DocumentParser);

// Це щось застаріле ??? Не розумію синтаксис


// const arr = [[1, 1],[1, 2],[1, 3],[1, 4],[1, 5], [1, 6]]
// const arr = []
// for(let i = 0; i < 4; i+=1){

// }

// const last = arr.length - 1
// console.log(arr);
// const response = Math.random(0,last)

// https://www.codewars.com/kata/56f78a42f749ba513b00037f/train/javascript

// Когда мы бросаем 2 классических кубика (значения на каждой стороне от 1 до 6), мы получаем 36 (6 * 6) различных результатов.
// Мы хотим знать вероятность того, что сумма результатов будет равна 11. Для этого результата у нас есть только комбинация 6и 5. Итак, у нас будет два события: {5, 6} и {6, 5}.
// Таким образом, вероятность этого результата будет:
// P(11, 2) = 2/(6*6) = 1/18    (The two is because we have 2 dice)
// Теперь мы хотим вычислить вероятность того, что сумма будет равна 8. Комбинации для этого результата будут следующими: {4,4}, {3,5}, {5,3}, {2,6}, {6,2}всего пять комбинаций.
// P(8, 2) = 5/36
// Все может быть сложнее, если у нас будет больше кубиков и значения суммы выше.
// Мы хотим знать вероятность того, что сумма равна, 8но есть 3кости.
// Теперь комбинации и соответствующие события:
// {2,3,3}, {3,2,3}, {3,3,2}
// {2,2,4}, {2,4,2}, {4,2,2}
// {1,3,4}, {1,4,3}, {3,1,4}, {4,1,3}, {3,4,1}, {4,3,1}
// {1,2,5}, {1,5,2}, {2,1,5}, {5,1,2}, {2,5,1}, {5,2,1}
// {1,1,6}, {1,6,1}, {6,1,1}
// A total amount of 21 different combinations
// So the probability is:
// P(8, 3) = 21/(6*6*6) = 0.09722222222222222
// Суммируя случаи, которые мы видели с функцией, которая получает два аргумента
// rolldice_sum_prob(11, 2) == 0.0555555555 # or 1/18
// rolldice_sum_prob(8, 2) ==  0.13888888889# or 5/36
// rolldice_sum_prob(8, 3) == 0.0972222222222  # or 7/72
// И подумайте, почему у нас такой результат:
// rolldice_sum_prob(22, 3) == 0
// Создайте функцию rolldice_sum_prob()для этого вычисления.
// Желаем приятно провести время!
// (Результаты округлять не нужно)