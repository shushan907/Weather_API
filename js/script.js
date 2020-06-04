//------------------GetWeatherInfo-------------------------------------

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57';
const flagCountry = document.getElementById('CountryImg'); 
const iconTemp = document.getElementById('tempIcon');

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//----------------------BOM navigator-----------------------------------

(function () {
    window.navigator.geolocation.getCurrentPosition((position))
})

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//--------------------Search City---------------------------------------
const gettingWeather = () => {
    const inputValue = document.querySelector('.input').value;
    console.log(inputValue)
    if (inputValue) {
        fetch(`${API_URL}${inputValue}&appid=${API_KEY}&units=metric`)
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

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_