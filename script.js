var APIKey = d02d8e895a3cd1e28bb8edcd5100fe8b;
var city = "";
var citySearchBtn = document.querySelector(".citySearchBtn")
var citySearchInput = document.querySelector(".citySearchInput")
var previousSearches = document.querySelector(".previousSearches")

citySearchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (citySearchInput.value == "") {
        return;
    }
console.log(citySearchInput);
    city = citySearchInput.value;
    var newPreviousSearches = document.createElement("button");
    newPreviousSearches.textContent = city.toUpperCase();
    newPreviousSearches.classList.add("btn");
    newPreviousSearches.classList.add("btn-primary");
    previousSearches.appendChild(newSearchHistory);


});