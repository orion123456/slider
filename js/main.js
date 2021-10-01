let widthSlide = document.querySelector(".slide").offsetWidth;
let leftArrow = document.querySelector(".prev");
let rightArrow = document.querySelector(".next");
let sliderTrack = document.querySelector(".slider-track");
let slideLength = document.querySelectorAll(".slide").length;
let viewSlide = 0;

leftArrow.addEventListener("click", function () {
    fnLeft();
});
rightArrow.addEventListener("click", function () {
    fnRight();
});

function fnLeft() {
    if (viewSlide < 1) {
        viewSlide = 0;
    } else {
        viewSlide--;
    }
    sliderTrack.style.transform = "translateX(-" + viewSlide * widthSlide + "px)";
}
function fnRight() {
    if (viewSlide === slideLength - 1) {
        viewSlide = slideLength - 1;
    } else {
        viewSlide++;
    }
    sliderTrack.style.transform = "translateX(-" + viewSlide * widthSlide + "px)";
}

