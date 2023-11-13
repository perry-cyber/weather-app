// storing all the apiKey and Url in a variable
const apiKey = "";
const apiUrl = "";
const searchBtn = document.querySelector(".search input");
const search = document.querySelector(".search button");
const image = document.querySelector(".weather-icon")

// creating the function for the fetch api

async function checkWeather(){
    // appending the data for  url and city
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    
//bringing all the elements from html
    var city = document.querySelector(".city");
    var temperature = document.querySelector(".temp");
    var humidity = document.querySelector(".humidity");
    var windSpeed = document.querySelector(".wind");

//adding the data into the element

    city.innerHTML = data.name
    temperature.innerHTML = Math.round(data.main.temp) + "c"
    humidity.innerHTML = data.main.humidity + "%"
    windSpeed.innerHTML = data.wind.speed + "km/hr"

    if(data.weather[0].main === "Clouds"){
        image.setAttribute("src", "images/cloud.png");
    }else if(data.weather[0].main === "Clear"){
        image.setAttribute("src", "images/clear.png");
    }else if(data.weather[0].main === "Rain"){
        image.setAttribute("src", "images/rain.png");
    }else if(data.weather[0].main === "Drizzle"){
        image.setAttribute("src", "images/drizzle.png");
    }else if(data.weather[0].main === "Mist"){
        image.setAttribute("src", "images/mist.png");
    }else if(data.weather[0].main === "Snow"){
        image.setAttribute("src", "images/snow.png");
    }else if(data.weather[0].main === "Wind"){
        image.setAttribute("src", "images/wind.png");
    }

    document.querySelector(".weather").style.display = "block";

}

// setting the search button for eventlistener 

searchBtn.addEventListener("click", ()=>{
    checkWeather(search.value);
})

