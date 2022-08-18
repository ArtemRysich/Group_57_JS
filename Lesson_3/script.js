// const user = {
//     email: 'email@vvv.vv',

//     getEmail: function(){
//         console.log(this.email);
//     },
//     getEmail2(){
//         console.log(this.email);
//     }
// }
// // console.log(user.email);
// // console.log(user['email']);
// Object => являється складним типом даних (складні типи мають присвоєння по посиланню)
// const a = user;

// a.email = 'myTest@g.m'
// console.log(user);


// const obj = {
//     key : "value",
//     test : {
//         name : 'Artem',
//     }
// }

// 1 Звернутись до самого обєкту через .
// obj.key
// console.log(obj.test.name);
// 2 Звернутись до самого обєкту але ключ приходить як стрінга
// const response = prompt('enter key');
// const resp = prompt('enter key');
// console.log(response);
// console.log(resp);
// response => формат типу STRING
// console.log(obj[response]);
// console.log(obj[response][resp]);
// obj['key']
// console.log(obj.test['name']);
// console.log(obj['test'].name);


// const obj = {
//     key: "value",
//     test: {
//         name: 'Artem',
//     }
// }

// obj.name = 'David'
// console.log(obj);



// const obj = {
//     key: "value",
//     name: 'David',
//     test: {
//         name: 'Artem',
//     }
// }

// obj.name = 'Den'
// console.log(obj);
// console.log(obj.age); => undefined


// const name = 'Artem';
// const age = 27;

// const user = {
//     name: name,
//     age: age
// }


// // console.log(user);
// const user = {
//     name,
//     age,
//     updateAge() {
//         this.age += 1
//     }
// }
// user.updateAge()
// user.updateAge()
// user.updateAge()
// user.updateAge()
// user.updateAge()
// console.log(user);
// user.age += 10;
// console.log(user);
// console.log(user);
// console.log(window.name); === ''


// function calculateTotalPrice(order) {
//     let total = 0;
// i < order.length аналогічно умові в циклі
// індекси в масиві починаються з 0
// а елементи рахуються з 1
// щоб отримати останій елемент масиву order.length - 1
//     for (let i = 0; i < order.length; i += 1) {
//         console.log();
//         console.log(`індекс ${i}`,order[i]);
//         // total += order[i];
//     }
//     // console.log(total);
//     return total;
// }// індекси    //    0   1   2   3
// calculateTotalPrice([12, 85, 37, 4]);
//   довжина   //     1   2   3  4
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// const obj = {
//     key : "value",
//     test : {
//         name : 'Artem',
//     }
// }

// const test = Object.create(obj)
// const assign = Object.assign(obj)
// assign.key = 'MY TEST KEY'
// assign.test.name = 'sdfdfa'
// console.log("obj",obj);
// console.log("assign",assign);
// console.log(obj);
// const a = obj;
// test.key = 'aaaa'
// console.log(test);
// console.log(test.key);





// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// // console.log(user);
// user.mood ='happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user)
// console.log(keys);
// for(const key of keys){
//     console.log(`${key} : ${user[key]}`);
// }
//----------------------------------------//


// Example 2 - метод Object.values()
// Є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum; // undefined
// let a = 0;
// const values = Object.values(salaries)
// for (const value of values) {
//     sum += value;
//     console.log(value);
// }
// console.log(sum);


// Example 3 - Масив об'єктів
// Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [{
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Аквамарин',
//         price: 200,
//         quantity: 2
//     },
// ];

// function calcTotalPrice(stones, stoneName) {
// for (const stone of stones) {
//     if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
//         return stone.price * stone.quantity;
//     }
// }
// }

// const result = calcTotalPrice(stones, 'Діамант');
// console.log(result);

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.


/*
 * Типів транзакцій лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };


// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{
//         id: '_hwqwo557w',
//         type: 'deposit',
//         amount: 100,
//     }],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: generateId(),
//             type,
//             amount,
//         }
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його в історію транзакцій
//      */
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.transactions.push(transaction)
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * Після чого додає його в історію транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (this.balance < amount) {
//             alert("Бракує коштів =(...")
//             return
//         }
//         this.balance -= amount;
//         this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         console.log('Це ваш поточний баланс :', this.balance);
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзації по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 console.log(`Трaнзакція з id: ${id}`, transaction);
//                 return;
//             }
//         }
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let sum = 0
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount
//             }
//         }
//         console.log(`Сума транзакцій типу ${type}:`, sum);
//         return sum
//     },
// };

// account.deposit(1500);
// account.deposit(500);
// // account.withdraw(2550);
// account.withdraw(1200)

// // account.getTransactionDetails('_hwqwo557w');
// account.getTransactionTotal(Transaction.WITHDRAW);
// console.log(account);

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }
// console.log(generateId());

// console.log(Date.now().toString(36));








// -------------------------------Part 2-----------------------------------------//








// Розглянути rest в якості параметру замість псевдомасиву arguments

// function foo(...args) {
//     // console.log(arguments);
//     // const arr = [...arguments]
//     console.log(args);
// }
// foo(1, 2, 3, 4, 5)






// Розглянути spread для перетворення з псевдомасиву в масив

// function foo(a,b, ...qwe) {
// console.log('a',a);
// console.log('b',b);
// console.log(arguments);
// const arr = [...arguments]
// console.log(arr);
// console.log('rest', qwe);
// }
// foo(1, 2, 3, 4, 5)





//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({
//     weight,
//     height
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '68,3',
//     height: '1.65'
// }));
// console.log(calcBMI({
//     weight: '118,3',
//     height: '1.95'
// }));








//  Task 2 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({
//     names:  'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300'
// });











//  Task 3 (Глибока деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({companyName, bots : { repairBots, defenceBots}}) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots:   150,
//         defenceBots:  50,
//     }
// }));












// Task 4 (Деструктуризація)
// Напишу функцію щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({
//     companyName,
//     stock
// }) {
//     const values = Object.values(stock)
//     let total = 0; //undefined
//     for (const value of values) {
//         total += value
//     }
//     console.log(total);
//     return `${companyName} has ${total} items in stock`
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"











// Task 5 (spread)
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданою властивістю id, а також list зі значенням "default" якщо у partialContact немає такої властивості.

// function createContact(partialContact) {
//     // console.log(partialContact);
//     return {
//         id: generateId(),
//         list: "default",
//         ...partialContact,
//     }

// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }










// Task 6 (rest)
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.


// function transformUsername({firstName, lastName, ...qwe}) {
//     const {
//         firstName,
//         lastName,
//         ...qwe
//     } = user;
//     console.log("firstName", firstName);
//     console.log("lastName", lastName);
//     console.log("qwe", qwe);
//     return {
//         fullName: firstName + lastName,
//         ...qwe

//     }
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );












// const user1 = {
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
// }
// const linkCopy = user1;
// console.log(linkCopy, user1 === linkCopy);
// const copy1 = {...user1}
// console.log(copy1 === user1);

// const user2 = {
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
// }
// const arr = [user1, user2]//


// function foo(arr) {
//     for (const user of arr) {
//         const newObj = {...user}
//         newObj.fullName = newObj.firstName +" "+newObj.lastName
//         console.log("before",newObj);
//         delete newObj.firstName
//         delete newObj.lastName
//         console.log("after",newObj);
//         const keys = Object.keys(newObj)
//         console.log("keys",keys);
//     }
// }
// foo(arr)
// console.log(user2);
// function foo(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         const newUser = {
//             ...arr[i]
//         }
//         newUser.fullName = newUser.firstName + ' ' + newUser.lastName
//         arr[i] = newUser
//         // console.log(user);
//         // console.log("newUser",newUser);
//     }
//     return arr
// }


// console.log(foo(arr));
// console.log('user1',user1);
// console.log('user2',user2);

// const email = 'email@l.com'

// const user = {
//     email: 'some@gm.com',
//     age: 22
// }


// const {email : emailUser} = user
// console.log(email);


// function foo ({userName} ={}){
//     console.log(userName);
// }

// foo()



// const arr1 = [1, 2, 3, 4]
// const arr2 = [...arr1]
// const arr3 = arr1

// console.log(arr1 === arr3);




// function foo ({a,b,c, ...props}){
//     console.log(props);
// }

// foo({a:1,b:2,c:3,d:4,e:5})


// с конспекта. если было изменено имя переменной и ее значение, почему при вызове firstCoverImage получаем //images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg а не "https://via.placeholder.com/640/480"     
// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg


// function foo({
//     name,
//     age,
//     weight,
//     height
// }) {
//     console.log(`name ${name}\n age ${age}\n weight${weight}\n height${height} `);

// }
// foo({
//     name: 'Artem',
//     age: 27,
//     weight: 90,
//     height: 195
// })


// function foo(a, b) {
//     console.log(a + b);
//     return a + b
// }
// const result = foo(1, 2)


// console.log(foo(1, 2));
// console.log(result + 5);
// const currentDate = new Date()
// const date = new Date('December 17, 1995 03:24:00');
// const date1 = new Date('December 17, 1992 03:24:00');
// const date2 = new Date('December 17, 2000 03:24:00');
// const date3 = new Date('December 17, 2010 03:24:00');
// // console.log(currentDate.getHours());
// console.dir(date);
// console.dir(date1);
// console.dir(date2);
// console.dir(date3);