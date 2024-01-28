const apikey ="c2d5038cb52e360f4379f6787165c058";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-bar input");
const searchbtn = document.querySelector(".search-bar button");
const weathericon = document.querySelector(".weather-icon");


async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {

    var data = await response.json(); 

    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    
    if (data.weather[0].main == "Clouds"){
        weathericon.src = "./media/cloudy.png";
    }
    else if (data.weather[0].main == "Clear"){
        weathericon.src = "./media/sun.png";         
    }
    else if (data.weather[0].main == "Rain"){
        weathericon.src = "./media/raining.png";
    }
    else if (data.weather[0].main == "Snowy"){
        weathericon.src = "./media/snow.png";
    }
    else if (data.weather[0].main == "Stormy"){
        weathericon.src = "./media/storm.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

    var data = await response.json(); 

    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    
    if (data.weather[0].main == "Clouds"){
        weathericon.src = "./media/cloudy.png";
    }
    else if (data.weather[0].main == "Clear"){
        weathericon.src = "./media/sun.png";         
    }
    else if (data.weather[0].main == "Rain"){
        weathericon.src = "./media/raining.png";
    }
    else if (data.weather[0].main == "Snowy"){
        weathericon.src = "./media/snow.png";
    }
    else if (data.weather[0].main == "Stormy"){
        weathericon.src = "./media/storm.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

searchbtn.addEventListener("click",  ()=> {
    checkweather(searchbox.value);
});

