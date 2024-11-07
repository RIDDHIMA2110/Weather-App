const apiKey = "4d0c7a733a065b013036d333d54c9dd5"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert(data.message);
      return;
    }

    document.getElementById(
      "location"
    ).innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById(
      "temp"
    ).innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "description"
    ).innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    alert("Error fetching data");
  }
}
