function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = "959d60ce7629886d5dd2e276c7b96587"; 
    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    }

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found. Please enter a valid city name.");
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

function displayWeather(data) {
    var weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
