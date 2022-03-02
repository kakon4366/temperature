const API_KEY = `5948e14284001687ac740e43631eed17`;

//get city
const getCityName = () => {
    const cityName = document.getElementById('search-city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const innerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

//display data
const displayWeather = weather => {
    innerText('city-name', weather.name);
    innerText('temperature', weather.main.temp);
    innerText('defarence', weather.weather[0].main);

    console.log(weather);
}

// http://openweathermap.org/img/wn/10d@2x.png