// const local = document.querySelector('.local')
// local.addEventListener('click', onLocal);
// const FIRST = 'First'
// function onLocal(){

//     const SECOND = 'Second'
//     localStorage.setItem(FIRST, JSON.stringify([1, 2, 3, 4]));
//     localStorage.setItem(SECOND, JSON.stringify({
//   name: 'User'
// }));
// const result = JSON.parse(localStorage.getItem(FIRST))
// result.forEach(item => console.log(item))
// }

// const session = document.querySelector('.session')
// session.addEventListener('click', onSession)

// function onSession(){
//  sessionStorage.setItem(FIRST, JSON.stringify(['a','b','c']))
// }
// ПЕРЕРВА до 20.35

// localStorage.setItem(FIRST, JSON.stringify('Hello world'));
// const first = JSON.parse(localStorage.getItem(FIRST));
// console.log(first);




// localStorage.removeItem(FIRST)
// localStorage.clear()
// console.log(typeof result);


// const result1 = 1,2,3,4


import local from './js/local'
console.log(local);

const localStarage = document.querySelector('.local');
const getLocal = document.querySelector('.get');
const div = document.querySelector('.img')
const er = 'https://cdn.freehost.com.ua/error_404.jpg'
const FIRST = 'First';


localStarage.addEventListener('click', onLocal);
getLocal.addEventListener('click', getLocalStorage)

function onLocal() {
  local.save(FIRST, 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg')

}

function getLocalStorage() {
  try {
    console.log(local.load(FIRST));
    div.innerHTML = `<img src="${result}" alt="">`;
  } catch (e) {
    console.log(e);
    console.log('ВИДАЛИВ РУКАМИ');
    div.innerHTML = `<img src="${er}" alt="">`
  } finally {
    console.log('hello world');
  }

}
// console.log(getCurrentPosition());
// try {

//   console.log(a);
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log('hello world');
// }