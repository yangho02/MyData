//manu
const menu = document.querySelector(".navbar__links")
const menuButton = document.querySelector(".navbar__icons")
menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
});
document.getElementById('support-button').addEventListener('click', function() {
    var supportPanel = document.getElementById('support-panel');
    supportPanel.style.display = supportPanel.style.display === 'none' ? 'block' : 'none';
});
//weatherpaper

async function getWeatherData(location) {
    const apiKey = 'd5d50780850bf36647baf5088c9d4a14';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

async function getWeatherExplanation(weatherDescription) {
    const response = await fetch('/explain-weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: weatherDescription }),
    });
    const data = await response.json();
    return data.explanation;
}

async function displayWeather() {
    const location = 'seoul';
    try {
        const weatherData = await getWeatherData(location);

        document.getElementById('location').innerText = `Location: ${weatherData.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${weatherData.main.temp}°C`;
        document.getElementById('description').innerText = `Description: ${weatherData.weather[0].description}`;

        const explanation = await getWeatherExplanation(weatherData.weather[0].description);
        document.getElementById('explanation').innerText = `Explanation: ${explanation}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

displayWeather();
