//  http://api.weatherapi.com/v1/current.json?key= a27974009a8d457daea52852253001&q=London&aqi=yes
let userInput = document.body.querySelector("#inputCity");
let button = document.body.querySelector("button");

let promise;

function city(cityName){

    promise = fetch(`http://api.weatherapi.com/v1/current.json?key= a27974009a8d457daea52852253001&q=${cityName}&aqi=yes`);

    promise.then(function (cityInfo) {
        return cityInfo.json();
    })
        .then(function (finalCityInfo) {
            console.log(finalCityInfo.location);
            console.log(finalCityInfo.current);
        })

}

button.addEventListener("click", function () {
 city(userInput.value)
})
