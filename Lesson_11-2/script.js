// https://learn.javascript.ru/garbage-collection
// const base_url = 'http://api.weatherapi.com/v1/forecast.json';
// const KEY = '4202b3fa59ea4adf832162138221110';


// console.log('BEFORE ASYNC FUNCTION 1');
// async function fetchCapital() {
//     try {
//         const rest = await fetch('https://restcountries.com/v3.1/name/Germany');
//         const dataRest = await rest.json();
//         console.log('INSIDE ASYNC FUNCTION 2');
//         const capital = dataRest[0].capital[0];
//         fetchWeather(capital)
//     } catch (e) {
//         console.log(e);
//     }
// }
// fetchCapital()
// async function fetchWeather(city) {
//     const response = await fetch(`${base_url}?key=${KEY}&q=${city}&days=7`);
//     const data = await response.json();
//     return data;
// }


// fetchWeather().then(data => console.log('INSIDE THEN 3', data)).catch(e => console.log(e));
// console.log('AFTER ASYNC FUNCTION 4');





// const base_url = 'http://api.weatherapi.com/v1/forecast.json';
// const KEY = '4202b3fa59ea4adf832162138221110';


// const obj = {
//     base: 'http://api.weatherapi.com/v1/forecast.json',
//     key: '4202b3fa59ea4adf832162138221110',
//     capital: '',
//     async _getCapital() {
//         try {
//             const rest = await fetch('https://restcountries.com/v3.1/name/Germany');
//             const dataRest = await rest.json();
//             this.capital = dataRest[0].capital[0];
//             console.log(this.capital);
//         } catch (e) {
//             console.log(e);
//         }
//     },
//     async getResponse() {
//         await this._getCapital()
//         const response = await fetch(`${this.base}?key=${this.key}&q=${this.capital}&days=7`);
//         const data = await response.json();
//         return data
//     }
// }
// obj._getCapital();
// obj.getResponse().then(console.log);


//  function fetchWeather() {
//     const response =  fetch(`${base_url}?key=${KEY}&q=Lviv&days=7`);
//     response.then(resp=> console.log(resp))
//     // const data =  response.json();
//     // console.log(data);
// }
// fetchWeather()





const base_url = 'http://api.weatherapi.com/v1/forecast.json';
const KEY = '4202b3fa59ea4adf832162138221110';





async function fetchWeather() {
    const cities = ['warsaw', 'kabul', 'reykjavík', 'stockholm'];
    const promises = cities.map(async (city) => {
        const response = await fetch(`${base_url}?key=${KEY}&q=${city}&days=5`);
        if(!response.ok){
            throw new Error()
        }
    
        return await response
    })
    console.log(promises);
console.log(Promise);
    const data = await Promise.allSettled(promises)
    // console.log(data);
    // data.forEach(item => {
    //     if(item.status !== 'rejected'){
    //         console.log(item.value.forecast);
    //     }
    // })
    console.log(data);
}
fetchWeather()


const promise = new Promise((res,rej) => {
    res(), rej()
})
// const warsaw = await fetch(`${base_url}?key=${KEY}&q=warsaw&days=5`);
// const datawarsaw = await warsaw.json();
// const kabul = await fetch(`${base_url}?key=${KEY}&q=kabul&days=5`);
// const datakabul = await kabul.json();
// const Reykjavík = await fetch(`${base_url}?key=${KEY}&q=Reykjavík&days=5`);
// const datawarReykjavík = await Reykjavík.json();
// const stockholm = await fetch(`${base_url}?key=${KEY}&q=stockholm&days=5`);
// const datastockholm = await stockholm.json();
// console.log(datawarsaw,datakabul,datawarReykjavík,datastockholm);