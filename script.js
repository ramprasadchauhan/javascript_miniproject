const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const waether_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const wind_speed = document.getElementById('wind-speed')
const humiditty = document.getElementById('humidity');

async function checkWeather(city){
    const api_key="1ebbf5ea49f0d1f4f06749602f409a69";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(
        response=>response.json());

    if(weather_data.cod === '404'){
        console.log("error");
        return;
    }
    


       temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
       description.innerHTML=`${weather_data.weather[0].description}`;
       humiditty.innerHTML=`${(weather_data.main.humidity)}`;
       wind_speed.innerHTML = `${(weather_data.wind.speed)}Km/H`;
       console.log(weather_data);


switch(weather_data.weather[0].main){
    case 'clouds':
        waether_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/cloud.png";
        break;
    case 'clear':
        waether_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/clear.png";
        break;
    case 'Rain':
        waether_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/rain.png";
        break;
    case 'Mist':
        waether_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/mist.png";
        break;
    case 'Snow':
        waether_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/snow.png";
        break;
    
}
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});