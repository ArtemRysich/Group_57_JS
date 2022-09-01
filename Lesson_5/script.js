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









// ----------------------------------------------------Part 2 ----------------------------------------------------//
// const ARRAY = {
// forEach : function
// }

// console.log(obj);

// const arr = [1,2,3];

// console.log(arr);


// Array.prototype.sayHello = function(name) {
//     console.log(`Hello my name ${name}`);
// }

// const str = '12323423214';
// const arr = [1,2,3,4];

// ['a','b'].sayHello('Artem');
// arr.sayHello('User');


// const obj = {
//     a: 4,
//     b: 5,
//     add() {
//         console.log(this.a + this.b);
//     },
//     sum(value) {
//         console.log(this.a + this.b + value);
//     }
// }
// obj.add()

// const obj2 = Object.create(obj);
// obj2.a=100;
// const obj3 = Object.create(obj2)

// obj3.add = function(){
//     console.log(this.a * this.b);
// }
// obj3.add()
// console.log(obj3.c);
// console.log(obj3);
// obj2.add()
// obj2.sum(99)

// const obj2 = {
//     a : 11,
//     b : 23,
//     add(){
//         console.log(this.a + this.b);
//     }
// }
// obj2.add()

// const obj ={
//     a:1,
//     b:2
// }
// const obj2 = Object.create(obj)
// obj2.a = 3

// for(const key in obj2){
//     console.log(key);
//     console.log(obj2[key]);
//     // if(obj2.hasOwnProperty(key))
// }


// class User {
//     static group = {
//         gold: 'Gold',
//         vip: 'V.I.P'
//     }
//     static arr = [1, 2, 3]
//     static counter = 0
//     static changeCounter() {
//         User.counter += 1
//     }

//     # userPassword;
//     constructor(name, password = 'qwerty', secretKey, group = 'new User') {
//         this.userName = name;
//         this.#userPassword = password;
//         this.secretKey = secretKey;
//         this.userGroup = group
//         User.changeCounter()
//     }
//     say() {
//         const result = this.#checkPassword('qwerwe');
//         console.log('say', this);
//         console.log(result);
//         console.log(`Hello my name${this.userName}`);
//     }

//     # checkPassword(password) {
//         let result = false
//         if (password.length >= 7) {
//             result = true
//         }
//         return result
//     }

//     get password() {
//         const isYou = prompt('enter secret name')
//         if (isYou === this.secretKey) {
//             console.log(this.#userPassword);
//         } else {
//             alert("Ти хацкер?")
//         }
//     }

//     set password(newPassword) {
//         if (this.#checkPassword(newPassword)) {
//             this.#userPassword = newPassword
//         } else {
//             alert("Більше символів плз...")
//         }
//     }
//     get customObj() {
//         console.log(this.obj);
//     }
//     set customObj(obj) {
//         this.obj = {
//             ...obj,
//             test: 'Hello'
//         }
//     }

// }

// class Humans extends User {
//     constructor(name, password, group, secretKey, damage, weapons, xp) {
//         super(name, password, secretKey, group)
//         this.damage = damage;
//         this.weapons = weapons;
//         this.xp = xp
//     }
//     spell() {
//         console.log('Attack');
//     }
// }

// class Orks extends User {
//     constructor(name, password, group, secretKey, damage, weapons, xp) {
//         super(name, password, secretKey, group)
//         this.damage = damage;
//         this.weapons = weapons;
//         this.xp = xp
//     }
//     berserk() {
//         console.log('Finish');
//     }
// }



// const player = new Humans('Gamer', 'qwerty', User.group.vip, '123456', 500, 'knife', 1500)
// console.log(player);
// const ork = new Orks('Ork', 'qwerty', User.group.vip, '123456', 400, 'knife', 100)
// console.log(ork);
// console.log(User.counter);




// const item = new User('User', '12345', 'strong');
// const item2 = new User('User', '12345', 'strong');
// const item3 = new User('User', '12345', 'strong');
// const item4 = new User('User', '12345', 'strong');
// const item5 = new User('User', '12345', 'strong');
// const item6 = new User('User', '12345', 'strong');
// console.log(User.group);
// console.log(User.counter);
// User.changeGroup(User.group.vip)
// console.log(item);
// item.say()

// class User {
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }

//     #email;

//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }

//   const mango = new User({ email: "mango@mail.com" });

//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));





// const item2 = new User('Olga');
// const item3 = new User('Anna');

// console.log(item.userPassword = '1');
// console.log(item);
// item.password = 'abcdefg' // сеттер
// item.#checkPassword()
// item.say() // звичайний метод
// item.password // геттер 
// item.password = 'abcdefg' // сеттер
// item.customObj
// item.customObj = {
//     privet: 'GETER'
// }
// console.log(item2);
// console.log(item3);









// const test = Object.create(obj)

// console.log(test);
// Example 1 - Блоггер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем, на яких спеціалізується блогер
// Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок: User ${пошта} is ${вік} years old and has ${у постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {}


// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
//   });

//   console.log(mango);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
//   mango.updatePostCount(5);
//   console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

//   const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
//   });
//   console.log(poly);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
//   poly.updatePostCount(4);
//   console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts





// Example 2 - Сховище
// Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

// Додай методи класу:

// getItems() – повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {}



// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.addItem('🍎');
// console.table(storage.items)
// storage.removeItem('🍎');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]



// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.

// class User {}

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });
//   mango.login = 'asvasdadasd'
// console.log(mango);

// mango.login; // Mango
// mango.login = 'Mangodoge';
// console.log(mango);
// mango.login; // Mangodoge

//   const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });

//   console.log(poly.login); // Poly
//   poly.login = 'Polycutie';
//   console.log(poly.login); // Polycutie



// Example 4 - Нотатки
// Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша нотатка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes.items);




// --------------------------------Kahoot-----------------------//

// 4

// class User {
//     static role = {
//         user: 'USER',
//         admin: "ADMIN"
//     }
//     static str = "Hello world"
//     #password
//     constructor(name, password, role) {
//         this.name = name
//         this.#password = password
//         this.userRole = role;
//     }
//     say() {
//         console.log('Hello');
//     }
//     changePass(value) {
//         this.#password = value
//     }
//     changeRole() {
//         this.userRole = User.role.user
//     }
// }
// secretPassword
// class Admin extends User {
//     constructor(name,  userRole, ) {
//         super()
//         // this.secretPassword = secretPassword
//     }
// }

// const item = new Admin('Admin', '123', User.role.admin, 'STRONG PASSWORD')
// console.log(item);
// const item = new User('Artem', '123456', User.role.admin);
// console.log(item);
// item.changeRole()
// 
// console.log(User.role.admin);
// const item2 = new User('David');

// console.log(item2);
// item.say()
// item.changePass('qwerty')

// console.log(item.name);
// console.log(item.#password);

// const obj = {
//     name : "user",
//     say(){
//         console.log(this.name);
//     }
// }

// const obj2 = {
//     name: 'NEW USER NAME',
//     say: obj.say
// }

// obj.say.call(obj2)



class User {
    constructor(email) {
        this.email = email
    }

    get userEmail() {
        console.log(this.email);
    }
    set userEmail(newMail) {
        this.email = newMail;
    }
}


const item = new User('test@gmail.com')

item.userEmail = 'aSDFGHJH'
console.log(item);

// Функція findUnique повертає єдине унікальне число із масиву.
// Всі числа в несортованому масиві знаходяться двічі, за винятком того, що вам потрібно знайти.

// function findUnique(numbers) {
//   return numbers.reduce((a, b) => a ^ b);
// }
// console.log(findUnique([4, 56, 56, 45, 87, 87, 4, 3, 5, 5, 1, 45, 78, 1, 2, 3, 2]));

// console.log(3 ^ 5);


// Об'ясніть будь ласка як працює метод reduce у даному випадку
