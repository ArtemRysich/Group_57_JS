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
