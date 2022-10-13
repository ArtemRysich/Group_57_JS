const base_url = 'http://api.weatherapi.com/v1';
const KEY = '4202b3fa59ea4adf832162138221110';
const params = new URLSearchParams({
    key: KEY,
    q: 'Lviv',
    days: 7
});

export function apiWeather(){
   return fetch(`${base_url}/forecast.json?${params}`).then(response => {
        if (!response.ok) {
            throw new Error()
        }
        return response.json();
    })
}