var searchCity = document.querySelector("#search-city");
var searchHistory = document.querySelector(`#search-history`);
var searchBtn = document.querySelector(`#search-btn`);
var fiveDayForecast = document.querySelector(`#Fiveday-forecast`);
var currentWeather= document.querySelector(`#current-weather`);

searchBtn.addEventListener(`click` , function(){
    var city = searchCity.value;
    getCurrent(city);
    getWeather(city);
});
function getWeather(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&units=imperial&appid=cf6f3b162a5bd1d23ba9950a7be05ad4`;
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        fiveDayForecast.innerHTML = '';
        var weatherData = data.list[0];
        var firstFive = data.list.slice (0, 5);
        
        firstFive.forEach(function(day) {
            var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            var div4 = document.createElement('div');
            var div5 = document.createElement('div');
            var icon = document.createElement('img');
            var temp = document.createElement('p');
            var humidity = document.createElement('p');
            var windSpeed = document.createElement('p');
            var date = document.createElement('p');
            var cityName = document.createElement('h2');

            fiveDayForecast.appendChild(div1);
            div1.classList.add('card');
            div1.classList.add('col');
            div2.classList.add('card-deck');
            div2.classList.add('text-center');
            div3.classList.add('card-title');
            div4.classList.add('card-text');

            div1.appendChild(div2);
            div2.appendChild(div3);
            div3.appendChild(date);
            div3.appendChild(cityName);
            div2.appendChild(div4);
            div4.appendChild(icon);
            div4.appendChild(temp);
            div4.appendChild(humidity);
            div4.appendChild(windSpeed);

            date.textContent = day.dt_txt;
            cityName.textContent = data.city.name;
            icon.src = `http://openweathermap.org/img/w/` + day.weather[0].icon +'.png';
            temp.textContent = 'Temp: ' + day.main.temp + '°F';
            humidity.textContent = "Humidity: " + day.main.humidity + '%';
            windSpeed.textContent = "Wind Speed " + day.wind.speed + 'MPH';
        })
    })
};
function getCurrent(city) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=cf6f3b162a5bd1d23ba9950a7be05ad4';
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        currentWeather.innerHTML = ``;
        var weatherData = data.list[0];
        var firstDay = data.list.slice(0, 1);
        var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            var div4 = document.createElement('div');
            var div5 = document.createElement('div');
            var icon = document.createElement('img');
            var temp = document.createElement('p');
            var humidity = document.createElement('p');
            var windSpeed = document.createElement('p');
            var date = document.createElement('p');
            var cityName = document.createElement('h2');

            currentWeather.appendChild(div1);
            div1.classList.add('row');
            div1.classList.add('add-container');
            div2.classList.add('col');
            div2.classList.add('text-center');
            div1.appendChild(div2);
            div2.appendChild(div3);
            div3.classList.add(`card-title`);
            div3.appendChild(date);
            div3.appendChild(cityName);
            div2.appendChild(div4);
            div4.classList.add(`card-text`);
            div4.appendChild(icon);
            div4.appendChild(temp);
            div4.appendChild(humidity);
            div4.appendChild(windSpeed);

            date.textContent = firstDay[0].dt_txt;
            cityName.textContent = firstDay[0].name;
            icon.src = `http://openweathermap.org/img/w/` + firstDay[0].weather[0].icon +'.png';
            temp.textContent = 'Temp: ' + firstDay[0].main.temp + '°F';
            humidity.textContent = "Humidity: " + firstDay[0].main.humidity + '%';
            windSpeed.textContent = "Wind Speed " + firstDay[0].wind.speed + 'MPH';


        })
};























// // api key 98cc20ce5aa0b82e2cd1d17c1146fc28
// // https://api.openweathermap.org/data/2.5/weather?q=

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
// var city = "farmington";
//   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=98cc20ce5aa0b82e2cd1d17c1146fc28`, requestOptions)
//         .then(response => response.json())
//         .then(result => {
//           city=document.getElementById(`search-city`).value    
//           // todo 
//     var lat = "";
//     var lon = "";

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=98cc20ce5aa0b82e2cd1d17c1146fc28`, requestOptions)
//         .then(response => response.json())
//         .then(result => {
          
// // todo
//     console.log(result)
//         })
//         .catch(error => console.log('error', error));
//     })
//   .catch(error => console.log('error', error));


//   var getCurrentConditions = (event) => {
//     let city = $(`#search-city`).val();
//     currentCity=
//   }

