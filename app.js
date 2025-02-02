//  http://api.weatherapi.com/v1/current.json?key= a27974009a8d457daea52852253001&q=London&aqi=yes
let userInput = document.body.querySelector("#inputCity");
let button = document.body.querySelector("button");

let resultContainer = document.body.querySelector("#resultContainer")
let currentCityName = document.body.querySelector(".cityName");
let regionName = document.body.querySelector(".regionName");
let countryName = document.body.querySelector(".countryName");
let cityDate = document.body.querySelector(".cityDate");
let cityTime = document.body.querySelector(".cityTime");

let promise;

function city(cityName) {

    promise = fetch(`http://api.weatherapi.com/v1/current.json?key= a27974009a8d457daea52852253001&q=${cityName}&aqi=yes`);

    promise.then(function (cityInfo) {
        return cityInfo.json();
    })
    .then(function (finalCityInfo) {

            let allSpan = resultContainer.getElementsByTagName("span");
            let allSpanArr =  [...allSpan];
            allSpanArr.forEach(function (spans) {
                spans.innerHTML = "";
            })

       const{ name,region,country,localtime:time} = finalCityInfo.location;
       
       currentCityName.innerHTML =  name;
       regionName.innerHTML = region;
       countryName.innerHTML = country;
       cityDate.innerHTML = time.split(" ")[0].split("-").reverse().join("/");
       cityTime.innerHTML = time.split(" ")[1];
    })
    
}


button.addEventListener("click", function () {
    city(userInput.value)
})

