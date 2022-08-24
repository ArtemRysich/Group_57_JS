// function add(a,b){
//     return a+b
// }

// function foo(arr, qwe){
// console.log(qwe);
// const result = qwe(arr[0],arr[1])
// console.log(result);
// }

// foo([1,2],add)


// function declaration
// function add(a, b) {
//     return a + b
// }

// // arrow function з явним поверненням
// const add = (a, b) => {
//     return a + b
// }
// // // arrow function з НЕ явним поверненням
// const add = (a, b) => a + b






















// Example 1 - Коллбек функції
// Напишіть такі функції:

// createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор як id і викликає колбек передаючи йому створений об'єкт.
// logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
// logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль

function createProduct(partialProduct, callback) {
    const obj = {
        id: Date.now(),
        ...partialProduct
    }
    console.log('callback', callback);
}

function logProduct(product) {
    console.log(product);
}
console.log('logProduct', logProduct);
createProduct({
    name: '🍎',
    price: 30,
    quantity: 3
}, logProduct);


console.log('logTotalPrice', logTotalPrice);
createProduct({
    name: '🍋',
    price: 20,
    quantity: 5
}, logTotalPrice);



function logTotalPrice({
    price,
    quantity
}) {
    console.log(price * quantity);
}


















// Example 2 - Коллбек функції
// Додайте об'єкту account  методи ззаписом
// withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError) де перший параметр це сума операції, а другий і третій - колбеки.
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance та onSuccess в іншому випадку.
// Метод deposit  викликає onError якщо amount більше TRANSACTION_LIMI або меньше або дорівнює нулю, та onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 1400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balance) {
//             onError('Не достатньо коштів')
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError('Перевищено ліміт')
//         } else {
//             this.balance -= amount;
//             onSuccess('Успішно')
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError('Перевищено ліміт')
//         } else if (amount <= 0) {
//             onError(`Не можливо додати ${amount}!`)
//         } else {
//             this.balance += amount
//             onSuccess(this.balance)
//         }
//     }
// };
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(1100, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);

// account.deposit(600, handleSuccess, handleError);






// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.

// function each(array, callback) {
//     const newArr = [];
//     for(const number of array){
//        const result = callback(number)
//        newArr.push(result)
//     }
//     return newArr
// }

// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return value * 2;
//     }),
// );
// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return value - 10;
//     }),
// );
// console.log(
//     each([64, 49, 36, 25, 16], function (value) {
//         return Math.sqrt(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.ceil(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.floor(value);
//     }),
// );


// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.
// const createProduct = (partialProduct, callback) => {
//     const obj = {
//         id: Date.now(),
//         ...partialProduct
//     }
//     callback(obj)
// }

// const logProduct = product => console.log(product)
// const result = logProduct('PRODUCT!!!!')
// console.log(result);

// const logTotalPrice = product =>  {return product.price * product.quantity};
// const result = logTotalPrice({
//     price: 2000,
//     quantity: 3
// })
// console.log(result);

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);








// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.


// const each = (...args) => {
//     console.log(args);
// const newArr = [];
// for (const el of array) {
//     newArr.push(callback(el));
// }
// return newArr;
// }
// each(1,2,3,4,5,6)
// each(1,2,3,4,5,6,343,3)
// console.log( each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16],  (value) => value - 10));
// console.log(
//     each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.ceil(value);
//     }),
// );
// console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//         return Math.floor(value);
//     }),
// );





// Example 6 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

// const logItems = items => items.forEach(item => console.log(item))
const items = ['Mango', 'Poly', 'Ajax']
for(const el of items){

}


     items.forEach(function (item, idx, arr) {
    console.log(item, idx,arr); arr[idx]
})

// function forEach2(arr, callback) {
//     for (let i = 0; i < arr.length; i += 1) {
//         callback(arr[i], i, arr)
//     }
// }

// forEach2(['Mango', 'Poly', 'Ajax'], function (item, idx, arr) {
//     console.log(item, idx,arr);
// })




// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);








// Example 7 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
// const printContactsInfo = ({names,phones}) => {
//     const nameList = names.split(',');
//     console.log(nameList);
//     const phoneList = phones.split(',');
//     console.log(phoneList);
// nameList.forEach((name, qwerty,arr)=>{})
//         console.log(qwerty);
//  console.log(       arr[qwerty], phoneList[qwerty]);

// console.log(name, phoneList[idx]);
//     })
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });


// const arr =[1,23,5,6,32]
// arr.forEach(item =>  item * 1000)
// console.log(result);

// Example 8 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
// (function(a,b){
// console.log(a+b);
// })(3,4)
// const calсulateAverage = (arr) => {

//     let total = 0;
//     for (const item of arr) {

//     }
arr.forEach(function (item, idx, newArr) {
    newArr[idx] = 2
});

//     // return total / args.length;
// }
// const arr = [1, 2, 3, 4]
// console.log(calсulateAverage(arr)); // 2.5
// console.log(arr);
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


// function outside() {
//     const x = 5;
//     function inside() {
//         console.log(x);
//         return x * 2;
//     }
//     return inside;
//   }
// console.log(outside()());