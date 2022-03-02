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
    //icon show
    const imgURL = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const tempImg = document.getElementById('temp-img');
    tempImg.setAttribute('src', imgURL);

    innerText('city-name', weather.name);
    innerText('temperature', weather.main.temp);
    innerText('defarence', weather.weather[0].main);
}
