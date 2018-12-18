
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

setInterval(function () {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Lublin&units=metric&APPID=${key}`)
    .then(response => response.json())
    .then(data => console.log(data))
}, 30000);




