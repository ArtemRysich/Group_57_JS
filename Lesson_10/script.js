// https://habr.com/ru/post/483204/
// https://uk.wikipedia.org/wiki/SOAP

// https://www.postman.com/
// https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D1%96%D0%B2_%D1%81%D1%82%D0%B0%D0%BD%D1%83_HTTP

// https://www.weatherapi.com/docs/
// 4202b3fa59ea4adf832162138221110
// http://api.weatherapi.com/v1/forecast.json?key=4202b3fa59ea4adf832162138221110&q=Lviv&days=7
// while hasNext()


// https://handlebarsjs.com/guide/
// в новій збірці parsel відсутня підтримка шаблонізатора handlebars

// Шлях вирішення:

// 1. npm install --save-dev parcel-transformer-hbs

// 2. В файлі .parcelrc добавити наступне
// "transformers": {
//     "*.hbs": [
//       "parcel-transformer-hbs"
//     ]
//   }
const base_url = 'http://api.weatherapi.com/v1';
const KEY = '4202b3fa59ea4adf832162138221110';
const container = document.querySelector('.list')
const cityName = document.querySelector('.city')
const form = document.querySelector('form')

form.addEventListener('submit', searchWeather)


function searchWeather(evt) {
    evt.preventDefault()
    const {
        city,
        days
    } = evt.currentTarget.elements;

    // const resp = fetch(`${base_url}/forecast.json?key=${KEY}&q=${city.value}&days=${days.value}`);
    const params = new URLSearchParams({
        key: KEY,
        q: city.value,
        days: days.value
    });
    // params.append('days', days.value);

    const resp = fetch(`${base_url}/forecast.json?${params}`)
    resp.then(response => {
        if (!response.ok) {
            throw new Error()
        }
        return response.json();
    }).then(data => {
        const markup = createMarkup(data.forecast.forecastday);
        cityName.textContent = data.location.name;
        container.innerHTML = markup;
    }).catch(err => console.log(err))
}

    // const entries = params.entries();
    // params.forEach((key, value) => console.log(key, value))

    // for (const [key,value] of params.entries()){
    //     console.log(key,value);
    // }











function createMarkup(arr) {
    return arr.map(item => `<li class='item'>
    <h2>Дата: ${item.date}</h2> 
    <img src="${item.day.condition.icon}" alt="${item.day.condition.text}"> 
    <p>${item.day.condition.text}</p> 
    <h3>Середня температура: ${item.day.avgtemp_c} °С</h3>
    </li>`).join('')
}


