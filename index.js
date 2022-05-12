let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];
dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;

function callBack(event) {
  event.preventDefault();
  let apiKey = "41f72ff51d13d3c3cca85108ed52e1d8";
  let location = document.querySelector("#search-location").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(fetchTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", callBack);

function fetchTemperature(response) {
  let temperature = response.data.main.temp;
  let temperatureElement = document.querySelector("#city");

  temperatureElement.innerHTML = `${temperature}℃`;
}
