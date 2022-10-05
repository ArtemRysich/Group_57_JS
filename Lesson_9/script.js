// // for (let i = 3; i > 0; i--) {
// //     const delay = i * 1000;
// //     setTimeout(() => console.log(`delay ${delay}`, i), delay)
// // }


// // for (let i = 1; i <= 3; i++) {
// //     const delay = i * 1000;
// //     setTimeout(() => console.log(`delay ${delay}`, i), delay)
// // }


// // https://www.jscamp.app/ru/docs/javascript25/





// // console.log('1');

// // setTimeout(()=> console.log('setTimeout'),0)
// // console.time('for');
// // for(let i = 0; i < 100000; i+=1){
// //     console.log('for 1',i);
// // }
// // for(let i = 0; i < 100000; i+=1){
// //     console.log('for 2',i);
// // }
// // for(let i = 0; i < 100000; i+=1){
// //     console.log('for 3',i);
// // }
// // console.timeEnd('for');


// // const idInterval = setInterval(() => {
// //     console.log('hello world')
// // }, 1000)

// // console.log(idInterval);
// // const idInterval1 = setInterval(() => {
// //     console.log('hello world')
// // }, 1000)

// // console.log(idInterval1);
// // const idInterval2 = setInterval(() => {
// //     console.log('hello world')
// // }, 1000)

// // console.log(idInterval2);

// // const interval = document.querySelector('.interval');
// // interval.addEventListener('click', onInterval)

// // function onInterval() {
// //     let i = 0
// //     const idInterval = setInterval(() => {
// //         i+=1
// //         console.log('hello world', i )
// //     }, 5000)

// //     console.log(idInterval);
// // }

// // setTimeout(()=>{
// //     console.log('hello world');
// // },1000)
// const dateDay = document.querySelector('.date-day');
// const date = document.querySelector('.date');
// const month = document.querySelector('.date-month');
// const year = document.querySelector('.date-year');
// const digitalClock = document.querySelector('.digital-clock');
// const arrowHours = document.querySelector('.clock-hours__arrow');
// const arrowMinutes = document.querySelector('.clock-minutes__arrow');
// const arrowSeconds = document.querySelector('.clock-seconds__arrow');

// const namesOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];



// setInterval(() => {
//     const currentDate = new Date();
//     const getDay = currentDate.getDay()
//     const getMonth = currentDate.getMonth();

//     dateDay.textContent = namesOfDay[getDay];
//     date.textContent = currentDate.getDate();
//     month.textContent = namesOfMonth[getMonth];
//     year.textContent = currentDate.getFullYear();

//     const hours = currentDate.getHours().toString().padStart(2, '0');
//     const minutes = currentDate.getMinutes().toString().padStart(2, '0');
//     const seconds = currentDate.getSeconds().toString().padStart(2, '0');

//     digitalClock.textContent = `Поточний час: ${hours} : ${minutes} : ${seconds} `;

//     // 360 / 12 = 30 години
//     // 360 / 60 = 6  хвилин
//     // 360 / 60 = 6  секунд


//     // 30/60=0.5

//     // 12 / 60
//     const forHours = currentDate.getHours() * 30 + currentDate.getMinutes() * (30 / 60);
//     const forMinutes = currentDate.getMinutes() * 6;
//     const forSeconds = currentDate.getSeconds() * 6;



//     arrowHours.style.transform = `rotate(${forHours}deg)`
//     arrowMinutes.style.transform = `rotate(${forMinutes}deg)`
//     arrowSeconds.style.transform = `rotate(${forSeconds}deg)`

// }, 1000)

const form = document.querySelector('form');
form.addEventListener('input', onForm)
const obj = JSON.parse(localStorage.getItem('obj')) ?? {};
//  false
//    undefined
form.elements.email.value = obj.email ?? '';
form.elements.message.value = obj.message ?? '';

function onForm(evt) {
    // console.log(evt.target.value);
    // console.dir(evt.target.name);
    obj[evt.target.name] = evt.target.value
    localStorage.setItem('obj', JSON.stringify(obj))
    console.log(obj);
}


setInterval(() => {
    console.log(new Date())
}, 5000)



