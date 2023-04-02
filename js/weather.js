const API_KEY = config.apikey;

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const wheather = document.querySelector(".wheather");
            const location = document.querySelector(".location");
            location.innerText = `🇰🇷 ${data.name}`
            wheather.innerText = `🌤 ${data.weather[0].main}`
        })
}

const onGeoErr = () => {
    alert("Cant find you !")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);