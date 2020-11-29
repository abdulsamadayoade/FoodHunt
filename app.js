// TESTIMONIAL SLIDER
const prev = document.querySelector('.carousel__control--left');
const next = document.querySelector('.carousel__control--right');
const slides = document.querySelectorAll('.carousel__item');

let index = 0;
display(index);
function display(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    display(index);
}

function nextSlide() {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    display(index);
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);