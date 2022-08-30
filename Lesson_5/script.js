'use strict'

// function foo(){
// console.log(this);
// }
// foo()

// const boo = function(){
// console.log(this);
// }
// boo()

// const arrow = ()=> {
//     console.log("arrow",this);
// }
// arrow()


// const user = {
//     name: "Artem",
//     age: 27,
//     test: this,
//     say() {
//         function age() {
//             console.log(this);
//         }

//     },

// }

// const user = {
//     name: "user",
//     age: 44,
//     say(lastName, city) {
//         console.log(arguments);
//         console.log(`Hello ${this.name}, ${lastName}, from ${city}`);
//     }
// }
// const admin = {
//     name: 'Admin',
//     age: 35,
// }
// let guest = {
//     name: 'guest',
//     age: 41,
// }

// const a = 10;

// // const arr =  ["QWERTY", "Kharkiv"]
// //             //this   параметр
// // user.say.call(admin, 'USER', "Lviv");
// // user.say.call(admin, 'ADMIN', "Odessa");
// // user.say.apply(guest, arr);

// const forGuest = user.say.bind(guest,"QWERTY","Kharkiv",23,76,123);
// // forGuest("Kharkiv",23,76,123)
// forGuest()










// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю із властивості stones.

// const chopShop = {
//     stones: [{
//             name: 'Emerald',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Diamond',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Sapphire',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Ruby',
//             price: 800,
//             quantity: 2
//         },
//     ],

//     calcTotalPrice(stoneName) {
//         // const {
//         //     price,
//         //     quantity
//         // } = chopShop.stones.find(({
//         //     name
//         // }) => stoneName === name);
//         // return price * quantity
//         const  item = this.stones.find(({
//             name
//         }) => stoneName === name);
//         console.log(item);
//         // return price * quantity
//         // const response = stone.price * stone.quantity
//         // return response

//     },
// };

// const test = {
//     stones: [{
//             name: 'qwerty',
//             price: 34,
//             quantity: 2
//         },
//         {
//             name: 'asdfg',
//             price: 12,
//             quantity: 67
//         },
//     ]
// }

// const test1 = {
//     stones: [{
//             name: 'Граніт',
//             price: 555,
//             quantity: 2
//         },
//         {
//             name: 'Щебінь',
//             price: 12,
//             quantity: 67
//         },
//     ]
// }
// console.log(chopShop.calcTotalPrice.call(test,"qwerty"));
// console.log(chopShop.calcTotalPrice.call(test1,"Ruby"));

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600



// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.

// const phonebook = {
//     contacts: [],
//     add(contact) {
//       const newContact = {
//         list: 'default',
//         ...contact,
//         id: this.generateId(),
//         createdAt: this.getDate(),
//       };
//       this.contacts.push(newContact);
//       return this.contacts
//     },
//     generateId() {
//       return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };

//   console.log(
//     phonebook.add({
//       name: 'Mango',
//       email: 'mango@mail.com',
//       list: 'friends',
//     }),
//   );
//   console.log(
//     phonebook.add({
//       name: 'Poly',
//       email: 'poly@hotmail.com',
//     }),
//   )


// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
// };


// const calculator = {
//     // a : null,
//     // b : null,
//     read(a,b){
//         this.a = a;
//         this.b = b
//         return 'Hello world'
//     },
//     add(){
//       return this.a + this.b;
//     },
//     mult(){
//         return this.a * this.b;
//     }

// }

// calculator.read(5, 10)
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());


// console.log(calculator);
// const obj = {}
// const calc1 = calculator.read.bind(obj);
// const add = calculator.add.bind(obj);
// const mult = calculator.mult.bind(obj);
// console.log(calc1(10,15));
// console.log(obj);
// console.log(mult());
// console.log(add())

// console.log(calc1(15,12));
// console.log(obj);
// console.log(add())
// console.log(mult())

// console.log(calc1(11,156));
// console.log(add())
// console.log(obj);
// console.log(calc1(111,125));
// console.log(add())
// console.log(obj);






// const foo = () => {
//     console.log(this);
// }

// const obj = {
//     test: this,
//     objA: {
//         testA: this,
//     },
//     hello: 'Hello world',
//     testFoo() {
//         foo()
//     }
// }
// obj.testFoo()
// console.log();
// obj.foo()
// const obj = {
//     name: "My name"
// }


// const obj = {
//     value: 22,
//     getValue() {
//         function getPow() {
//             console.log(this.value ** 2);
//             console.log(Math.pow(this.value, 2));
//         }
//        getPow.call(this);
//     }
// }
// obj.getValue()

























// --------------------Kahoot-------------------//

// function foo(a,b) {
//     console.log(this, a,b);
// }
// foo.call({},1,2);
// foo.apply({},[1,2])






// function foo(a,b) {
//     console.log(this, a,b);
// }


// const test = foo.bind(obj)
// test()
// test(3,4)
// test(31,42)

// foo(444,555)

// function foo(a,b){
//     console.log(this);
// }

// const test = foo.bind({},1,2)

// test()


// const foo = () => {console.log(this)}
// foo()