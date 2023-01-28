'use strict';

function carousel(){
    let carouselSlider = document.querySelector('.carousel-slider-certs');
    let list = document.querySelector('.carousel-list-certs');
    
    const speed = 1;

    let x = 0;
    let width = window.innerWidth;

    function move(){
        x -= speed;
        list.style.left = `${x}px`;
        if (x < -2300){
           x = width;
        } 
    } 
    function hover() {
        clearInterval(a);
    }

    function unhover() {
        a = setInterval(move, 10);
    }

    let a = setInterval(move, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);

}

carousel();