//------------------Variabels-------------------------------------

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const FLAG_URL = 'https://countryflags.io/';
const TEMP_URL = 'http://openweathermap.org/img/w/';
const API_KEY = '40a3ab422b6c7446253471c3714edfb8';
const iconTemp = document.querySelector('.tempIcon');
const flag = document.querySelector('.flag');

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//------------------Helping functions-----------------------------------

function setQS(selector, value) {
  document.querySelector(selector).innerText = value; 
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function setCityWeather(info) {
    setQS('.cityResult', info.name);
    setQS('.countryResult', info.sys.country);
    setQS('.temperatureResult', `${Math.round(info.main.temp)}°C`);
    flag.src = `${FLAG_URL}${info.sys.country}/flat/64.png`;
    iconTemp.src = `${TEMP_URL}${info.weather[0].icon}.png`;
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//----------------------Navigator---------------------------------------

(function () {
    window.navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        (async function () {
        let response = await fetch( `${API_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        setCityWeather(data);
        })();
    });
})();

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//--------------------Search City---------------------------------------
const gettingWeather = () => {
    const inputValue = document.querySelector('.input').value;
    if (inputValue) {
        setQS('#errorMessage', '');
        (async function () {
            let response = await fetch(`${API_URL}weather?q=${inputValue}&APPID=${API_KEY}&units=metric`);
            let info = await response.json();
            setCityWeather(info);
        })();
    } else {
        setQS('#errorMessage', 'Please, enter the city name!');
    }
};

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//----------------input keyup ENTER-------------------------------------

const enterAction = (event) => {
    if(event.key === 'Enter') {
        gettingWeather()
    }
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

//---------------------------------EvevtListener------------------------

addEventListener('click', () => {
    document.querySelector('.input').style.outline = "none";
})

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-