// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://the-one-api.dev/documentation
// const BASE_URL = 'https://the-one-api.dev/v2/';
// const character = 'character';
// const bearer = 'Bearer XJlq9OFMcHAy8pAQK7xj';


//  HBS
// npm install --save-dev parcel-transformer-hbs
//  "transformers": {
//     "*.hbs": [
//         "parcel-transformer-hbs"
//       ]
//     }


// import {apiRings} from "./js/apiRings";
// import markup from './js/templates/markup.hbs';


// const list = document.querySelector('.list');
// // const loadMore = document.querySelector('.more');

// // let page = 1;

// // loadMore.addEventListener('click', onLoad)

// apiRings().then(data => {
//   list.insertAdjacentHTML('beforeend', markup(data.docs))
//   loadMore.removeAttribute('hidden')
// })

// function onLoad() {
//   page += 1;
//   apiRings(page).then(data => {
//     list.insertAdjacentHTML('beforeend', markup(data.docs))
//     if(data.page === data.pages){
//         loadMore.setAttribute('hidden', true)
//     }
//   })
// }




import {apiRings, apiRingsMovie} from "./js/apiRings";
import { apiWeather } from "./js/apiWeather";
import markup from './js/templates/markup.hbs';

const list = document.querySelector('.list');
const guard = document.querySelector('.guard');
const options = {
  root: null,
  rootMargin: '50px',
  threshold: 1
}
const observer = new IntersectionObserver(onLoad, options);
let page = 1;

apiRings().then(data => {
  list.insertAdjacentHTML('beforeend', markup(data.docs));
  observer.observe(guard);
})
// apiWeather().then(data => run(data))
// apiWeather().then(run)  

// function run(value){
//     console.log(value);
// }

// apiRingsMovie().then(console.log).catch(err => console.log(err))

function onLoad(entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) { //true
      page += 1
      apiRings(page).then(data => {
        list.insertAdjacentHTML('beforeend', markup(data.docs))
        if(data.page === data.pages){
            observer.unobserve(guard);
        }
      })
    }
  })
}