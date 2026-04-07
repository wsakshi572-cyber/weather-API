async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = "db5435aa0b4b484872e7dd9fd9c436a9";  // Replace this
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod == 200) {
        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temp: ${data.main.temp}°C</p>
            <p>🌥️ Weather: ${data.weather[0].main}</p>
            <p>💨 Wind: ${data.wind.speed} km/h</p>
        `;
    } else {
        document.getElementById("result").innerHTML = "City not found!";
    }
}
