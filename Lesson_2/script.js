// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable
// const clients = ["Mango", "Poly", "Ajax"];
// const string = "script";
// console.log(string[0]);
// string[0]='a';
// console.log(string);
// console.log(clients[0])
// clients[0] = 'Kiwi';
// console.log(clients);

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами Jazz і Blues.
// Додайте "Rock'n'roll" в кінець.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

const genres = ['Jazz', 'Blues'];
// push додає елемент в кінець масиву
genres.push("Rock'n'roll");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres.length);
// console.log(genres[genres.length - 1]);
// splice він видаляє елемент з масиву та в результаті свого виконання повертає те що видалив
// const firstEl = genres.splice(0,1)
// console.log(genres);
// console.log(firstEl);
// genres.unshift('Country')
// console.log(genres);
// genres.splice(0,1,'Country','Reggae')
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються в змінній величині у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const arr = values.split(' ')
// console.log(arr);
// const value1 = Number(arr[0]);
// const value2 = Number(arr[1]);
// // console.log(typeof value1, typeof value2);
// const sum = value1 * value2;
// console.log(`Площа ${sum}`);


// Запитання з чату
// Розкажіть доступніше про "Присвоение по ссылке и по значению" почему переменная "b" то принимает значение "a"  то нет, выражение одинаковое...

// let a = 10;
// console.log('a', a);
// let b = a;

// a = 25;
// console.log('a', a);
// console.log('b', b);


// const a = [1, 2, 3]
// const b = a;
// a.splice(1, 1)

// b.splice(0,1)
// console.log('a', a);
// console.log('b', b);

// Чи викоритовується "let" для  оголошення змінних масиву
// const a = [1, 2, 3];



// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів має починатися з першого.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for(let i = 0; i < fruits.length; i+=1){
// console.log(`Елемент номер ${i+1}: `,fruits[i]);
// }
// почему объявлять не надо намбер?

// Додатковий приклад з використанням 2 параметрів ініціалізації
// for(let i = 0, number = 1; i < fruits.length; i+=1, number+=1){
//     console.log(`Елемент номер ${number}: `,fruits[i]);
//     }

// for(let i = 0 ; i < fruits.length; i+=1){
// let fruit = fruits[i]
// fruit =`🎉`;
// console.log(fruit);
// console.log(fruit);
// fruits[i] = `🎁`
// }


// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// console.log(fruits);
// for(let fruit of fruits){
//     fruit = `😂`;
//     console.log(fruit);
// }

// console.log(fruits);



// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Kate';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesToArr = names.split(',');
// const phonesToArr = phones.split(',')
// // console.log(phonesToArr);
// for (let i = 0; i < namesToArr.length; i += 1){
//     console.log(`${namesToArr[i]} номер телефону ${phonesToArr[i]}`);
// }




// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const stringToArr = string.split(' ');
// console.log(stringToArr);
// stringToArr.splice(0, 1);
// stringToArr.splice(stringToArr.length - 1, 1)
// // stringToArr.splice(-1, 1)
// // stringToArr.splice(-1)
// const response =stringToArr.join(' ')
// console.log(response);

// Приклад з чату
// const fruits = ['🍎', '🍌', '🍇', '🍍'];
// for (let i = 0,amount = fruits.length; i < fruits.length; i += 1, amount -= 1) {
//     console.log(`В корзині ${amount} одиниці.`);
//     console.log(`Ми дістали ${fruits[i]}.`);
// }

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розвертає» рядок (зворотній порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const stringToArr = string.split('');
// const StrReverse = stringToArr.reverse().join('')
// console.log(StrReverse);
// const StrReverse = string.split('').reverse().join('');
// console.log(StrReverse);

// Example 7 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код має працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
// const numbers = [101, 78, 12, 76, 5, 11, 9];
// let minValue = numbers[0];

// for (const number of numbers) {
//     if (number < minValue) {
//         minValue = number;
//         // console.log(minValue);
//     }
//     // number < minValue ? minValue = number : minValue 
// }

// console.log(minValue);


// const a = 15;
// const b = 144;