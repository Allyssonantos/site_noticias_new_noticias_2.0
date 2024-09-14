let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    document.querySelector('.carousel-inner').style.transform = `translateX(${-currentIndex * 100}%)`;
}
