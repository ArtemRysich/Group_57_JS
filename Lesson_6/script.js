// const listQuery = document.querySelectorAll('.list');
// console.dir(listQuery);
// const listGet = document.getElementsById('list');
// console.dir(listGet);

// const list = document.querySelector('.list');
// // querySelectorAll приклад статичної колекції
// const staticLi =  document.querySelectorAll('.item');
// console.log('staticLi',staticLi);
// // getElementsBy (будь-який) приклад динамичної колекції
// const dynamicLi = document.getElementsByClassName('item');
// console.log('dynemicLi',dynamicLi);


// const li = document.createElement('li')
// li.classList.add('item')
// list.append(li);


// const list = document.querySelector('.list');
// console.dir(list);
// console.log(list.children);
// const children = [...list.children];

// // for(const el of list.children){
// //     console.log(el);
// // }
// const firstChild = list.firstElementChild;
// const lastChild = list.lastElementChild;
// console.log(children);
// console.log('firstChild',firstChild);
// console.log('lastChild',lastChild);
// console.dir(list);
// const sib = list.previousElementSibling.firstElementChild.nextElementSibling
// console.dir(sib);

// const list = document.querySelector('.list');
// list.classList.add('test')
// list.style.listStyle = 'none';
// list.style.width = '10px';
// list.classList.add('item')
// list.classList.toggle('test')
// list.classList.toggle('test')
// console.log(list.classList);
// const li = document.createElement('li');
// li.classList.add('item')
// // li.classList.remove('item')
// li.classList.toggle('item')
// list.append(li);
// const div = document.createElement('div');
// const p = document.createElement('p')
// p.textContent = 'Hello world append'
// https://developer.mozilla.org/ru/docs/Web/API/Element/append
// div.append(p);
// li.append(div);



// const li = '<li class="item test"> <div class="item test" ><p class="item test"> hello world from DOM </p> </div> </li>';
// list.insertAdjacentHTML("afterend", li)




// const list = document.querySelector('.list');
// console.log(list.children);

// Array.from(list.children).forEach(item => console.dir(item.textContent))

// const user = {
//     name:"user"
// }
// user.name = 'admin'
// const input = document.querySelector('input');
// console.dir();
// input.value = 'Hello from JS'


// const list = document.querySelector('.list');
// console.dir(list);


// const golden = document.querySelector('.golden')

// // golden.setAttribute('hidden', 'true')
// golden.setAttribute('data-test', "1234")
// console.log(golden.getAttribute('data-test'));
// console.dir(golden.dataset.test);

// const list = document.querySelector('.list');
// const li = '<li> tomatto </li>'
// list.innerHTML += li;



// -------------------------------PART 2 ------------------------//
// Опції для івентлістнера http://xn--80adth0aefm3i.xn--j1amh/addeventlistener
// const button = document.querySelector('.hello');
// const item = document.querySelector('.item');

// let value = 1;
// button.addEventListener('click', onClick, {
//     once: true
// });

// function onClick(evt) {
//     // console.log(evt);
//     // console.dir(evt.currentTarget);
//     // evt.currentTarget.textContent = 'world'
//     value += 1
//     console.dir(item.style.fontSize);
//     item.style.fontSize = value * 10 + 'px'
//     item.classList.toggle('invalid')
// }

// item.addEventListener('click', onClick);

// function onClick(evt){
//     console.dir(evt.currentTarget.textContent);
// }
// const input = document.querySelector('.input');
// input.addEventListener('input', handlerInput);

// function handlerInput(evt){

//     console.dir(evt.currentTarget.value);
// }
// const test = document.querySelector(".test");
// console.log(test);
// test.addEventListener("click", onClick);

// function onClick(evt) {
//     evt.preventDefault()
//     console.dir(evt.currentTarget);
// }

// const form = document.querySelector('.form');
// const input = document.querySelector('.input');
// form.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//     evt.preventDefault();
//     // const {
//     //     elements: { email, password },
//     //   } = evt.currentTarget;
//     const {
//         email,
//         password
//     } = evt.currentTarget.elements;

//     const data = {
//         id: 'id_1',
//         email: email.value,
//         password: password.value,
//         date: new Date(),
//     };

//     console.log(data);
//     alert('Thank you');
// }


// 'keydown'
// 'keyup'
// 'keypress'

// const add = document.addEventListener('click', onClick)


// function onBoard(evt) {
//     if (evt.code === "Escape") {
//         const box = document.querySelector('.box');
//         box.remove();
//         // document.removeEventListener('keyup', onBoard);
//     }
// }

// function onClick() {
//     document.body.insertAdjacentHTML('beforeend', '<div class="box"></div>');
//     document.addEventListener('keyup', onBoard, {
//         once: true
//     });
// }



// const list = document.querySelector('.list')
// const arr = ['banana', 'apple'];
// const items = arr.map(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     return li
// })

// list.append(...items)// ...items => li,li,li


// const list = document.querySelector('.list')
// const arr = ['banana', 'apple'];
// const fragment = document.createDocumentFragment();
// console.log(fragment);
// arr.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     fragment.append(li);
// })
// // console.dir(fragment);
// list.append(fragment)

// const list = document.querySelector('.list')
// const arr = ['banana', 'apple'];
// const markup = arr.reduce((acc,item) => acc + `<li>${item}</li>`,'')
// console.log(markup);
// // console.log(markup.join(','));
// list.insertAdjacentHTML('beforeend',markup)