
const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.button-box');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('nav--active');
})
$(document).ready(function () {
    $("#myCarousel").carousel({ interval: false });

    $("#myBtn").click(function () {
        $("#myCarousel").carousel(1);
    });

    $("#myBtn2").click(function () {
        $("#myCarousel").carousel(2);
    });
    $("#myBtn3").click(function () {
        $("#myCarousel").carousel(0);
    });
});

createNode = (element) => {
    return document.createElement(element);
}

append = (parent, el) => {
    return parent.appendChild(el);
}

createStructure = () => {
    return `<div class="temp"></div>
            <div class="humidity"></div>
            <div>Aktualne warunki pogodowe:<img class="icon" src=""></div>`;
}

fetch_data = (url) => {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let currentWeather = data.weather;
        return currentWeather.map(function() {
            document.querySelector('.temp').innerHTML = `Temperatura: ${data.main.temp} C`;
            document.querySelector('.humidity').innerHTML = `Wilgotność: ${data.main.humidity} %`;
            document.querySelector(".icon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
    })
    .catch(function (error) {
        console.log(error);
    })
}

const weather_div = document.getElementById('weather');
const key = '0b3d75e5a49f2a267f054a0a60bed6f3'
const url = `https://api.openweathermap.org/data/2.5/weather?q=Lublin&units=metric&APPID=${key}`;

weather_div.innerHTML = createStructure();
fetch_data(url);

setInterval(() => {
  fetch_data(url);
}, 30000);


