// const listQuery = document.querySelectorAll('.list');
// console.dir(listQuery);
// const listGet = document.getElementsById('list');
// console.dir(listGet);

const list = document.querySelector('.list');
// // querySelectorAll приклад статичної колекції
// const staticLi =  document.querySelectorAll('.item');
// console.log('staticLi',staticLi);
// // getElementsBy (будь-який) приклад динамичної колекції
// const dynamicLi = document.getElementsByClassName('item');
// console.log('dynemicLi',dynamicLi);


const li = document.createElement('li')
// li.classList.add('item')
list.append(li);


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

