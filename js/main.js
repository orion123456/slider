const widthSlide = document.querySelector(".slide").offsetWidth;
const leftArrow = document.querySelector(".prev");
const rightArrow = document.querySelector(".next");
const sliderTrack = document.querySelector(".slider-track");
const slideLength = document.querySelectorAll(".slide").length;
let viewSlide = 0;

leftArrow.addEventListener("click", function () {
    fnLeft();
});
rightArrow.addEventListener("click", function () {
    fnRight();
});

function fnLeft() {
    if (viewSlide > 0) {
        viewSlide--;
        sliderTrack.style.transform = "translateX(-" + viewSlide * widthSlide + "px)";
    }
}
function fnRight() {
    if (viewSlide < slideLength - 1 ) {
        viewSlide++;
        sliderTrack.style.transform = "translateX(-" + viewSlide * widthSlide + "px)";
    }
}

