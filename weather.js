// ########################Weather####################
var iconElement = document.querySelector(".w");
var tempElement = document.querySelector(".temperature");
var descElement = document.querySelector(".est");
var state = document.getElementById("estado");
var translatePT;
// App Data
const weather = {};

weather.temperature = {
  unit: "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;

//API key
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  fetch(api)
    .then(function(response) {
      let data = response.json();
      return data;
    })
    .then(function(data) {
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].id;
      weather.city = data.name;
      weather.country = data.sys.country;
      // console.log(weather.temperature.value);
      // console.log(weather.description);
      // displayWeather();
    })
    .then(function() {
      displayWeatherPT();
      displayWeather();
    });
}

// DISPLAY WEATHER TO UI
function displayWeather() {
  // iconElement.innerHTML = `<i class="wi wi-owm-${weather.iconId}"></i>`;
  state.innerHTML = `<i id="icon-desc" class="wi wi-owm-${weather.iconId}" style="width:150px;"></i>
  <p style="font-size: 17px;width:150px;display:flex;justify-content:center;align-items: center;">${translatePT}</p>`;
  tempElement.innerHTML = `${weather.temperature.value}<i class="wi wi-celsius"></i>`;
}

// translate to PT

const zoo = new Map([['clear sky' , 'Ceu limpo'],
       ['few clouds' , 'Ceu pouco nublado'],
       ['scattered clouds' , 'Ceu nublado'],
       ['broken clouds' , 'Ceu muito nublado'],
       ['shower rain' , 'Aguaceiros'],
       ['rain' , 'Chuva'],
       ['thunderstorm' , 'Trovoada'],
       ['snow' , 'Neve'],
       ['mist' , 'Nevoeiro'],

       ['thunderstorm with light rain' , 'Trovoada com chuva fraca'],
       ['thunderstorm with rain' , 'Trovoada com chuva'],
       ['thunderstorm with heavy rain' , 'Tempestade com chuva forte'],
       ['heavy thunderstorm' , 'Trovoada intensa'],
       ['light thunderstorm' , 'Trovoada leve'],
       ['ragged thunderstorm' , 'Tempestade irregular'],
       ['thunderstorm with light drizzle' , 'trovoada com chuviscos leves'],
       ['thunderstorm with drizzle' , 'Trovoada com chuvisco'],
       ['thunderstorm with heavy drizzle' , 'Trovoada com chuviscos pesados'],

       ['light intensity drizzle' , 'Chuvisco de baixa intensidade'],
       ['drizzle' , 'Chuvisco'],
       ['heavy intensity drizzle' , 'Chuvisco de alta intensidade'],
       ['light intensity drizzle rain' , 'Chuva de chuviscos de baixa intensidade'],
       ['drizzle rain' , 'Chuva de chuviscos'],
       ['heavy intensity drizzle rain' , 'Chuva de chuviscos de alta intensidade'],
       ['shower rain and drizzle' , 'Aguaceiros e chuviscos'],
       ['heavy shower rain and drizzle' , 'Aguaceiros fortes e chuviscos'],
       ['shower drizzle' , 'Aguaceiros de chuviscos'],

       ['light rain' , 'Chuva leve'],
       ['moderate rain' , 'Chuva moderada'],
       ['heavy intensity rain' , 'Chuva intensa'],
       ['very heavy rain' , 'Chuva muito intensa'],
       ['extreme rain' , 'Chuva extremamente intensa'],
       ['freezing rain' , 'Chuva congelante'],
       ['shower rain' , 'Aguaceiros'],
       ['heavy intensity shower rain' , 'Aguaceiros fortes'],
       ['ragged shower rain' , 'Aguaceiros irregulares'],

       ['light snow' , 'Neve leve'],
       ['Snow' , 'Neve'],
       ['Heavy snow' , 'Neve forte'],
       ['Sleet' , 'Granizo'],
       ['Light shower sleet' , 'Precipitação fraca de granizo'],
       ['Shower sleet' , 'Precipitação de granizo'],
       ['Light rain and snow' , 'Chuva fraca e neve'],
       ['Rain and snow' , 'Chuva e neve'],
       ['Light shower snow' , 'Precipitação leve de neve'],
       ['Shower snow' , 'Precipitação de neve'],
       ['Heavy shower snow' , 'Precipitação forte de neve'],

       ['Mist' , 'névoa'],
       ['Smoke' , 'Fumaça'],
       ['Haze' , 'Neblina'],
       ['sand/ dust whirls' , 'Remoinhos de areia/poeira'],
       ['fog' , 'Nevoeiro'],
       ['sand' , 'areia'],
       ['dust' , 'poeira'],
       ['volcanic ash' , 'Cinza vulcânica'],
       ['squalls' , 'Rajadas de vento'],
       ['tornado' , 'Tornado'],

       ['clear sky' , 'Ceu limpo'],

       ['few clouds' , 'Poucas nuvens'],
       ['scattered clouds' , 'Nuvens dispersas'],
       ['broken clouds' , 'Nuvens isoladas'],
       ['overcast clouds' , 'Nuvens nubladas']]);

function displayWeatherPT(){
translatePT =zoo.get(weather.description);
}
