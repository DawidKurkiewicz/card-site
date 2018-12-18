
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
const key = '0b3d75e5a49f2a267f054a0a60bed6f3'

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('weather');
const url = `http://api.openweathermap.org/data/2.5/weather?q=Lublin&units=metric&APPID=${key}`;
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data)
  let currentWeather = data.weather;
  return currentWeather.map(function() {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    span.innerHTML =
    `tempretaure : ${data.main.temp}
    pressure: ${data.main.pressure}
    ${data.clouds.all}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});

