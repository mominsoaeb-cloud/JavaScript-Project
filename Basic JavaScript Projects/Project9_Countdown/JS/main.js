let slideIndex = 0;
let slideshowTimer = null;

function startSlideshow() {
    var secondsInput = document.getElementById("seconds");
    var timer = document.getElementById("timer");
    var intervalSeconds = Number(secondsInput.value);

    if (
        secondsInput.value.trim() === "" ||
        !Number.isFinite(intervalSeconds) ||
        !Number.isInteger(intervalSeconds) ||
        intervalSeconds < 1
    ) {
        timer.textContent = "Enter a whole number of seconds (at least 1).";
        return;
    }

    clearInterval(slideshowTimer);
    timer.textContent = "Slideshow running. Slides change every " + intervalSeconds + " second" +
        (intervalSeconds === 1 ? "." : "s.");
    slideshowTimer = setInterval(function () {
        plusSlides(1);
    }, intervalSeconds * 1000);
}

function pauseSlideshow() {
    clearInterval(slideshowTimer);
    slideshowTimer = null;
    document.getElementById("timer").textContent = "Slideshow paused.";
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (!slides.length) {
        return;
    }

    if (typeof n === "number") {
        slideIndex = n;
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    if (dots[slideIndex]) {
        dots[slideIndex].className += " active";
    }
}

showSlides(slideIndex);