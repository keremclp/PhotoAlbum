//Variables for the slider
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length
//Variables for Blur effect
//Blurry----------------------------------------------

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let load = 0;
let int = setInterval(blurEffect, 30);
function blurEffect(){
    load++;
    if(load > 99){
        clearInterval(int);
    }
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//Blurry ----------------------------------------------
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`; 


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){ // if activeSlideIndex is less than 0, set it to the last slide
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}

