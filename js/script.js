//------------------GetWeatherInfo-------------------------------------

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '40a3ab422b6c7446253471c3714edfb8';
const flagCountry = document.getElementById('CountryImg'); 
const iconTemp = document.getElementById('tempIcon');

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//----------------------BOM navigator-----------------------------------

(function () {
    window.navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
    })
})()

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//--------------------Search City---------------------------------------
const gettingWeather = () => {
    const inputValue = document.querySelector('.input').value;
    if (inputValue) {
        async function getCountry() {
            let response = await fetch(`${API_URL}${inputValue}&APPID=${API_KEY}&units=metric`);
            let info = await response.json();
            console.log(info);
            document.querySelector('.cityResult').innerText = inputValue;
            document.querySelector('.countryResult').innerText = info['sys']['country'];
            document.querySelector('.temperatureResult').innerText = `${info['main']['temp']}°C`;
        }
        getCountry();

        
        document.getElementById('errorMessage').innerText = '';
    } else {
        document.getElementById('errorMessage').innerText = 'Please, enter the city name!';
    }
};

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//---------------------------------EvevtListener------------------------

addEventListener('click', () => {
    document.querySelector('.input').style.outline = "none";
})

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-