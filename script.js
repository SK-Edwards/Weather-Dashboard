var apiKey = 'b5b75a8f63cdacf8b0e3ede86eab14d8';
var city = " ";
var citySearchBtn = document.querySelector(".citySearchBtn");
var citySearchInput = document.querySelector(".citySearchInput");
var previousSearches = document.querySelector(".previousSearches");
 
var requestUrl = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=" + citySearchInput.value.trim();
    
function cityForcastCall(){
    fetch(requestUrl)
      .then(function (response) {
        return response.json();

         })
     
      .then(function (data) {
        console.log(data);
        console.log(citySearchInput.value.trim());
        });
    
    }
  

