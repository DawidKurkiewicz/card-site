
const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.button-box');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('nav--active');
})
$(document).ready(function(){
    // Activate the Carousel, but pause it from the start
                $("#myCarousel").carousel({interval: false});

    // Go to the second item
    $("#myBtn").click(function(){
        $("#myCarousel").carousel(1);
    });

    // Go to the third item
    $("#myBtn2").click(function(){
        $("#myCarousel").carousel(2);
    });
       // Go to the third item
    $("#myBtn3").click(function(){
        $("#myCarousel").carousel(0);
    });
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#myCarousel").carousel("next");
    });
});