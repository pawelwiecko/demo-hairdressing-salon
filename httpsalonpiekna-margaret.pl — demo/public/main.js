const navSlide = () => {
    const bars = document.querySelector('.bars');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');
    bars.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        bars.classList.toggle('exit');
    });
}
navSlide();

// Navigation scroll

var previousScroll;
var scrolling;
var nav = document.querySelector('nav');

function scrolled() {
    var scrollTop = window.scrollY;

    if (scrollTop > previousScroll) {
        nav.classList.add('nav--up');
    } else {
        nav.classList.remove('nav--up');
    }
    previousScroll = scrollTop;
}

document.addEventListener('scroll', function () {
    scrolling = true;
}, false);

setInterval(function () {
    if (scrolling) {
        scrolled();
        scrolling = false;
    }
}, 100);