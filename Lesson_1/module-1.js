// // Виведіть на екран загальну кількість яблук і винограду. Різницю яблук та винограда.
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff =  apples - grapes;
// console.log(diff)



// // Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// // students = students + 50;
// students += 50;

// console.log(students);




// // Розбери пріоритет операторів в інструкції надання
//  значення змінної result.
// const result = 108 + 223 - 2 * 5;
//                 // 331    -     //    10
// console.log(result);


// // Напиши скрипт, який виводить у консоль заокруглені
//  вгору/вниз і т.д. Значення змінної value.
// //  Використовуй методи Math.floor(), Math.ceil()
// та Math.round(). Перевірте, що буде в консолі при
// значеннях 27.3 і 27.9.


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
//const value = Math.floor(27.5);// Округлення в низ до цілого числа
//const value = Math.ceil(27.001) // Округлення до першого більшо числа
// const value = Math.round(27.5)// Звичайне математичне округлення
// console.log(value);


// // Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
//const message = `${companyName} has ${repairBots+ defenceBots} bots in stock`;// Новий синтаксис
//const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock';//Старий синтаксис
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. 
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

// Вага та висота зберігаються в змінних weight і height, але не як числа,
//  а у вигляді рядків (спеціально для завдання). 
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, 
// тобто як роздільник дробової частини може бути кома.

// Індекс масії тіла необхідно округлити до однієї цифри після коми;


// let weight = '88,30';
// Замінюємо кому на крапку
// Приводимо Стрінгу до числа
// let height = '1.75';
// weight = Number(weight.replace(',','.'))
// height = Number(height)
// // const bmi = (weight/ Math.pow(height,2)).toFixed(1);
// const bmi =(Number(weight.replace(',','.')) / Math.pow(Number(height),2)).toFixed(1)//
// console.log(bmi); // 28.8

// Яким буде результат виразів?

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);