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

// function createProduct(partialProduct, callback) {
//     const obj = {
//         id: Date.now(),
//         ...partialProduct
//     }
//     console.log('callback', callback);
// }

// function logProduct(product) {
//     console.log(product);
// }
// console.log('logProduct', logProduct);
// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);


// console.log('logTotalPrice', logTotalPrice);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);

// function logTotalPrice({
//     price,
//     quantity
// }) {
//     console.log(price * quantity);
// }

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
// const items = ['Mango', 'Poly', 'Ajax']
// for(const el of items){

// }


//      items.forEach(function (item, idx, arr) {
//     console.log(item, idx,arr); arr[idx]
// })

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
// arr.forEach(function (item, idx, newArr) {
//     newArr[idx] = 2
// });

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








// --------------------------------------------------PART 2 ---------------------------------------------//



// const arr = [1, 5, 9, 7, 2, 3]
// const response = arr.map((item) => item > 3)
// console.log(response);
// const sorted = arr.sort((a, b) => b - a)
// console.log(sorted);
// console.log("arr", arr);
// const filArr = arr.find(item => typeof item === 'object')
// console.log(filArr);

// const result = arr.reduce((acc, item, index, array) =>{},{})


// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [{
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true
    },
    {
        make: 'Honda',
        model: 'accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false
    }
];

//   Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getModels = arr => {
// // const models = arr.map((item) => item.model)
// const models = arr.map(({model}) => model)
// return models
// };
// console.log('cars',cars);
const getModels = arr => arr.map(({
    model
}) => model)

// console.log(getModels(cars));




// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним значенням властивості price залежно від переданої знижки (%).
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const makeCarsWithDiscount = (cars, discount) => {
//     const response = cars.map((car) => {
//         car.price = car.price - (car.price / 100 * discount)
//         return car
//     })
//     return response
// };
// console.log(makeCarsWithDiscount(cars, 6));
// console.table(makeCarsWithDiscount(cars, 11));





// const response = arr.filter((item, index, array))
// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const filterByPrice = (cars, threshold) => {
//     const response = cars.filter(({price}) => price <= threshold)
//     return response
// };
// console.log(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));






// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },


// const getCarsWithDiscount = cars => {
//     const response = cars.filter(({
//         onSale
//     }) => onSale === true)
//     return response
// }
// const value = 0;//false
// if(value ){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

// const value = '';//false
// if(value ){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

// const value = ' ';//true
// if(value ){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

// const getCarsWithDiscount = cars => {
//     const response = cars.filter(({onSale}) => onSale)
//     return response
// }

// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale)



// console.log(getCarsWithDiscount(cars));





// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getCarsWithType = (cars, type) => {
//     const response = cars.filter(({type : carType}) => carType === type)
//     return response
// }

// const getCarsWithType = (cars, type) => cars.filter(({type : carType}) => carType === type)


// console.log(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));






// // Example 6 - Метод find
// Функція getCarByModel знаходить та повертає об'єкт даної моделі авто та повертає його
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model)
// }

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));








// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const sortByAscendingAmount = cars => {
//     const response = cars.sort((current,next) => current.amount - next.amount)
//     console.log('response', response);
//     console.log('cars', cars);
// };

// console.table(sortByAscendingAmount(cars));




// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення властивості price.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const sortByDescendingPrice = cars => {};
// console.table(sortByDescendingPrice(cars));





// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному  порядку.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },
// https://unicode-table.com/en/
// const arr = ['F', 'a', 'G', 'f', 'A', 't', 'T']
// const arr = [5,2,7,0,367]
// arr.sort((current, next) => current.localeCompare(next))
// console.log(arr);
// const sortByModel = ((cars) => {
//     const arr = [...cars]
//     const response = arr.sort((current, next) => current.model.localeCompare(next.model))
// console.log(cars);
// console.log('response',response);
// });

// console.table(sortByModel(cars));
// console.table(sortByModel(cars));







// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getModelsOnSale = cars => {
//    return cars.reduce((acc,{amount}) => acc + amount,0);
// }
// console.log(getModelsOnSale(cars));




// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getModelsOnSale = cars => cars.filter(({onSale}) => onSale).map(({model}) => model)

// console.log(getModelsOnSale(cars));





// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає список (Марка, Модель кількість та Ціна) автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.
// Кількість автомобілів ХХ:
// 1...Марка Модель кількість Ціна
// 2...
// Якщо не знайдено жодного автомобіля повертається стрінга
// "За вашим запитом не знайдено жодного автомобіля"
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getSortedCarsOnSale = cars => {
// Мутує похідний масив
// const response = [...cars].sort((current, next) => current.price - next.price)
// .filter(({onSale}) => onSale)

// Не мутує похідний масив
// const response = cars.filter(({
//         onSale
//     }) => onSale)
//     .sort((current, next) => current.price - next.price);
//     const response = [];
//     const total = ''
//     const str = response.reduce((acc, car, idx) => {

//         return acc + `${idx + 1} ${car.make} ${car.model} кількість ${car.amount}
//          цінa за одиницю ${car.price}$ \n`
//     }, response.length 
//     ? `Кількість автомобілів ${response.length}:\n`
//     : "За вашим запитом не знайдено жодного автомобіля")

//     return str

// };

// console.log(getSortedCarsOnSale(cars));



// const students = [{
//         name: "Манго",
//         courses: ["математика", "фізика"]
//     },
//     {
//         name: "Полі",
//         courses: ["інформатика", "математика"]
//     },
//     {
//         name: "Ківі",
//         courses: ["фізика", "біологія"]
//     },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index)

// for(const number of arr){

// }


// const arr = [1, 2, 3, 4, 5]
// arr.forEach((number, idx, array) => {
//     // array[idx] = number * 10;
//     // array[idx] = array[idx] * 10;
//     array[idx] *= 10;
// })
// console.log(arr);

console.log([...Array(7)].map((__, i) => i + 1));


const numbers = [1, 2, 3, 4, 5]
numbers.map((item, idx) => {
    return item * 2
})
numbers.map(function (item) {
    return item * 2
})