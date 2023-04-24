var apiKey = 'd02d8e895a3cd1e28bb8edcd5100fe8b';
var city = document.querySelector(".citySearchInput").value.trim() ;
var citySearchBtn = document.querySelector(".citySearchBtn");
var citySearchInput = document.querySelector(".citySearchInput");
var previousSearches = document.querySelector(".previousSearches");
 var todaysForcast = document.querySelector('.todaysForcast')
 var date = dayjs();
 var todaysIcon = document.getElementById('todaysIcon')
 var todaysIcon = document.querySelector("#todaysIcon");
 var todaysTemp = document.querySelector("#todaysTemp");
 var todaysWind = document.querySelector("#todaysWind");
 var todaysHum = document.querySelector("#todaysHum");

function cityForcastCall(){
  var city = document.querySelector(".citySearchInput").value.trim() ;
  var todaysForcast = document.querySelector('.todaysForcast')
 var date = dayjs();


  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

    fetch(requestUrl)
      .then(function (response) {  
        
        console.log(response);
        return response.json();
      

         })
     
      .then(function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.wind.speed);
        console.log(data. main.temp);
        console.log(data.main.humidity);




        todaysForcast.textContent = data.name + " " + date.format('(M/D/YYYY)');
            
        
            var icon = data.weather[0].icon;

            var todaysIcon = document.querySelector("#todaysIcon");
            var todaysTemp = document.querySelector("#todaysTemp");
            var todaysWind = document.querySelector("#todaysWind");
            var todaysHum = document.querySelector("#todaysHum");
            var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";

           todaysIcon.setAttribute("src", iconURL);
        todaysTemp.textContent = "Temp: " + data.main.temp + "°";
        todaysWind.textContent = "Wind: " + data.wind.speed + " MPH";
        todaysHum.textContent = "Humidity: " + data.main.humidity + "%";
      });    
    }
  

