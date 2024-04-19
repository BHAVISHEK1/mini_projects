
        const apiKey = '470d732f37fb016cb7a640165cd25ccc';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        async function getWeather() {
            const cityInput = document.getElementById('cityInput').value;
            if (!cityInput) {
                alert('Please enter a city');
                return;
            }

            const url = `${apiUrl}?q=${cityInput}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.cod === '404') {
                    alert('City not found');
                } else {
                    displayWeather(data);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        function displayWeather(data) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        }
  