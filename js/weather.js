const weather = document.querySelector('#weather-div span:first-child');
const city = document.querySelector('#weather-div span:last-child');
const API_KEY = '6bedce92f708cdeb65b084ee01b825c0';


const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main 
    });
  
  

}

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);