const apiKey = ""; // Your OpenWeatherMap API key
const getWeatherButton = document.getElementById("getWeatherButton");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

getWeatherButton.addEventListener("click", () => {
    const city = cityInput.value.trim(); // Trim whitespace from input
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    console.log(url); // Log the URL to the console

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            weatherResult.innerHTML = `Current weather in ${city}: ${description} with a temperature of ${temperature}°C.`;
        })
        .catch(error => {
            weatherResult.innerHTML = `Error: ${error.message}`;
        });
});
